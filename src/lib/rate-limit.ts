type Bucket = { count: number; resetAt: number };

const buckets = new Map<string, Bucket>();

/**
 * Límite de peticiones en memoria.
 *
 * Suficiente para un formulario de contacto en una sola instancia. Si el sitio
 * acaba escalando a varias, esto deja de ser fiable y habría que moverlo a un
 * almacén compartido: es una defensa contra el envío repetido, no contra un
 * ataque coordinado.
 */
export function rateLimit(
  key: string,
  { limit = 5, windowMs = 10 * 60 * 1000 } = {},
) {
  const now = Date.now();
  const bucket = buckets.get(key);

  if (!bucket || now > bucket.resetAt) {
    buckets.set(key, { count: 1, resetAt: now + windowMs });
    return { allowed: true, retryAfterSeconds: 0 };
  }

  // Purga perezosa: sin esto el mapa crece sin descanso en un proceso largo.
  if (buckets.size > 5000) {
    for (const [existingKey, existing] of buckets) {
      if (now > existing.resetAt) buckets.delete(existingKey);
    }
  }

  if (bucket.count >= limit) {
    return {
      allowed: false,
      retryAfterSeconds: Math.ceil((bucket.resetAt - now) / 1000),
    };
  }

  bucket.count += 1;
  return { allowed: true, retryAfterSeconds: 0 };
}
