import type { Kid } from "./kids-data";
import { KidCard } from "./kid-card";

export function KidsList({ kids }: { kids: Kid[] }) {
  return (
    <div className="mx-auto w-full max-w-[880px] px-5 pb-16 pt-6 md:px-10 md:pb-20 md:pt-[34px]">
      <header className="mb-[22px] flex items-end justify-between gap-4">
        <div>
          <p className="mb-1 text-xs font-extrabold tracking-[0.8px] text-accent-strong">GESTIÓN</p>
          <h1 className="text-3xl font-semibold text-foreground">Niños</h1>
        </div>
        <button
          type="button"
          aria-disabled="true"
          className="flex shrink-0 items-center gap-2 rounded-[14px] bg-gradient-to-b from-[#f4977e] to-[#ee8164] px-[18px] py-[11px] text-sm font-extrabold text-white shadow-[0_8px_18px_-8px_rgba(238,129,100,0.7)]"
        >
          <svg
            className="size-[17px]"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.4"
            aria-hidden="true"
          >
            <path d="M12 5v14M5 12h14" />
          </svg>
          Agregar niño
        </button>
      </header>

      <div className="mb-[22px] flex items-center gap-[11px] rounded-[14px] border border-surface-border bg-surface px-4 py-3">
        <svg
          className="size-[18px] shrink-0 text-[#b0a290]"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          aria-hidden="true"
        >
          <circle cx="11" cy="11" r="7" />
          <path d="m21 21-4.3-4.3" />
        </svg>
        <input
          type="text"
          readOnly
          aria-label="Buscar niño"
          placeholder="Buscar niño…"
          className="min-w-0 flex-1 bg-transparent text-[15px] text-foreground outline-none placeholder:text-[#b6a99b]"
        />
      </div>

      <div className="mb-3.5 flex items-center gap-3">
        <span className="text-xs font-extrabold tracking-[0.8px] text-foreground">SALA SOLES</span>
        <span className="text-[13px] text-text-soft">8 niños</span>
        <span className="h-px flex-1 bg-divider" />
      </div>

      <section aria-label="Listado de niños" className="grid grid-cols-1 gap-3.5 md:grid-cols-2">
        {kids.map((kid) => (
          <KidCard key={kid.id} kid={kid} />
        ))}
      </section>
    </div>
  );
}
