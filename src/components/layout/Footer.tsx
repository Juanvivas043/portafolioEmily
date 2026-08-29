import { navItems } from "@/content/nav";
import { site, socials } from "@/content/site";

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-bone/10 bg-void/60">
      <div className="flex flex-col gap-6 px-6 py-8 sm:px-10 lg:flex-row lg:items-center lg:justify-between lg:px-[72px]">
        <div className="flex items-center gap-3">
          <span className="grid size-[30px] place-items-center rounded-[10px] bg-[image:var(--gradient-signature)] font-display text-sm text-void">
            {site.name.charAt(0)}
          </span>
          <span className="text-[13px] text-mist">
            © {new Date().getFullYear()} {site.name} · {site.role}
          </span>
        </div>

        <nav>
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-[13px] font-semibold text-mist transition-colors hover:text-bone"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <ul className="flex flex-wrap items-center gap-x-5 gap-y-2">
          {socials.map((social) => (
            <li key={social.id}>
              <a
                href={social.href}
                target="_blank"
                rel="noreferrer noopener"
                className="text-[13px] font-semibold text-mist transition-colors hover:text-bone"
              >
                {social.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
