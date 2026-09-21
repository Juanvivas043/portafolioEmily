"use client";

import { useEffect, useRef, useState } from "react";
import { Check, ChevronDown } from "lucide-react";

type CustomSelectProps = {
  id?: string;
  name: string;
  value: string;
  options: string[];
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
  error?: boolean;
};

export function CustomSelect({
  id,
  name,
  value,
  options,
  onChange,
  placeholder = "Selecciona una opción",
  className = "",
  error = false,
}: CustomSelectProps) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
      }
    }

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  return (
    <div ref={containerRef} className="relative w-full">
      {/* Campo oculto para mantener compatibilidad con envíos estándar */}
      <input type="hidden" name={name} value={value} />

      {/* Disparador personalizado */}
      <button
        id={id}
        type="button"
        role="combobox"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={`${id || name}-listbox`}
        onClick={() => setOpen((prev) => !prev)}
        className={`flex w-full items-center justify-between rounded-2xl border bg-[#0F0C14] px-4 py-3.5 text-left text-sm text-bone transition-all outline-none ${
          open
            ? "border-magenta/60 ring-2 ring-magenta/25"
            : error
              ? "border-magenta"
              : "border-bone/12 hover:border-bone/25"
        } ${className}`}
      >
        <span className={value ? "text-bone font-medium" : "text-muted"}>
          {value || placeholder}
        </span>
        <ChevronDown
          size={18}
          strokeWidth={2.4}
          className={`text-mist transition-transform duration-200 ${
            open ? "rotate-180 text-magenta" : ""
          }`}
        />
      </button>

      {/* Menú de opciones basado en divs con valores personalizados */}
      {open && (
        <div
          id={`${id || name}-listbox`}
          role="listbox"
          tabIndex={-1}
          className="grain absolute top-full right-0 left-0 z-50 mt-2 max-h-60 overflow-y-auto rounded-2xl border border-bone/15 bg-[#14101A] p-1.5 shadow-[0_20px_48px_rgba(0,0,0,0.88)] backdrop-blur-md"
        >
          {options.map((option) => {
            const isSelected = option === value;

            return (
              <div
                key={option}
                role="option"
                data-value={option}
                aria-selected={isSelected}
                onClick={() => {
                  onChange(option);
                  setOpen(false);
                }}
                className={`flex cursor-pointer items-center justify-between rounded-xl px-3.5 py-2.5 text-sm transition-colors select-none ${
                  isSelected
                    ? "bg-magenta/20 font-bold text-bone"
                    : "text-mist hover:bg-surface hover:text-bone"
                }`}
              >
                <span>{option}</span>
                {isSelected && (
                  <Check size={16} strokeWidth={2.6} className="text-magenta" />
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
