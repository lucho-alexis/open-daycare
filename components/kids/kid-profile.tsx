import Link from "next/link";

import type { Kid, Parent } from "./kids-data";

const avatarStyles: Record<number, { background: string; text: string }> = {
  1: { background: "bg-[#a9d9e8]", text: "text-[#1f7a93]" },
  2: { background: "bg-[#f4b8cc]", text: "text-[#c44a7a]" },
  3: { background: "bg-[#b9dec4]", text: "text-[#3e8b62]" },
  4: { background: "bg-[#f4dc8e]", text: "text-[#9a7b1e]" },
  5: { background: "bg-[#c9b6e8]", text: "text-[#7b5fc0]" },
  6: { background: "bg-[#f4b8cc]", text: "text-[#c44a7a]" },
  7: { background: "bg-[#a9d9e8]", text: "text-[#1f7a93]" },
};

const parentAvatarStyles = [
  "bg-[#c9b6e8] text-white",
  "bg-[#a9c7e8] text-white",
];

function WarningIcon() {
  return (
    <svg
      className="size-[22px]"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2.2"
      aria-hidden="true"
    >
      <path d="m10.3 3.9-8.5 14a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3l-8.5-14a2 2 0 0 0-3.4 0z" />
      <path d="M12 9v4M12 17h.01" />
    </svg>
  );
}

function SunIcon() {
  return (
    <svg
      className="size-[18px]"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
    </svg>
  );
}

function PlusIcon() {
  return (
    <svg
      className="size-[18px]"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2.2"
      aria-hidden="true"
    >
      <path d="M12 5v14M5 12h14" />
    </svg>
  );
}

function ParentRow({ parent, index }: { parent: Parent; index: number }) {
  const statusLabel = parent.status === "active" ? "activa" : "invitación enviada";
  const statusClassName =
    parent.status === "active"
      ? "bg-[#cfebd8] text-[#3e9b6c]"
      : "bg-[#f7e7a6] text-[#9a7b1e]";

  return (
    <div className="flex min-w-0 items-center gap-3">
      <div className={`flex size-10 shrink-0 items-center justify-center rounded-full text-base font-semibold ${parentAvatarStyles[index % parentAvatarStyles.length]}`}>
        {parent.initial}
      </div>
      <div className="min-w-0 flex-1">
        <div className="truncate text-[14.5px] font-extrabold text-foreground">{parent.name}</div>
        <div className="truncate text-xs text-text-soft">
          {parent.relationship} · {statusLabel}
        </div>
      </div>
      <span className={`shrink-0 rounded-full px-2.5 py-1 text-[10.5px] font-extrabold ${statusClassName}`}>
        {parent.status === "active" ? "ACTIVA" : "PENDIENTE"}
      </span>
    </div>
  );
}

export function KidProfile({ kid }: { kid: Kid }) {
  const avatar = avatarStyles[kid.id];

  return (
    <div className="mx-auto w-full max-w-[820px] px-5 pb-16 pt-6 md:px-10 md:pb-20 md:pt-[34px]">
      <Link href="/kids" className="mb-5 flex items-center gap-2 text-sm font-bold text-text-muted">
        <svg
          className="size-[18px]"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2.2"
          aria-hidden="true"
        >
          <path d="m15 18-6-6 6-6" />
        </svg>
        Volver a Niños
      </Link>

      <div className="flex flex-col gap-6 md:flex-row md:flex-wrap md:gap-[26px]">
        <div className="flex min-w-0 flex-1 flex-col gap-[18px] md:min-w-[300px]">
          <div className="flex min-w-0 flex-wrap items-center gap-[18px]">
            <div className={`flex size-[84px] shrink-0 items-center justify-center rounded-full text-[34px] font-semibold ${avatar.background} ${avatar.text}`}>
              {kid.initial}
            </div>
            <div className="min-w-0 flex-1">
              <h1 className="truncate text-[28px] font-semibold text-foreground">{kid.name}</h1>
              <p className="mt-[3px] text-[15px] text-text-muted">{kid.age} · Sala {kid.room}</p>
            </div>
            <button
              type="button"
              aria-disabled="true"
              className="rounded-xl border-[1.5px] border-surface-border bg-surface px-4 py-[9px] text-sm font-bold text-[#6e6359]"
            >
              Editar
            </button>
          </div>

          <div className="flex gap-3.5 rounded-2xl bg-[#fbdad6] p-4 px-[18px]">
            <div className="flex size-10 shrink-0 items-center justify-center rounded-[11px] bg-[#f4a8a0] text-white">
              <WarningIcon />
            </div>
            <div className="min-w-0">
              <div className="mb-0.5 text-[15px] font-extrabold text-[#c5413a]">Alergias y notas</div>
              <div className="text-[14.5px] leading-[1.5] text-[#b25249]">{kid.notes}</div>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-surface-border bg-surface">
            <div className="flex items-center justify-between gap-4 border-b border-[#f0e6d8] px-[18px] py-[15px] text-[14.5px]">
              <span className="text-text-muted">Fecha de nacimiento</span>
              <span className="font-extrabold text-foreground">{kid.birthDate}</span>
            </div>
            <div className="flex items-center justify-between gap-4 border-b border-[#f0e6d8] px-[18px] py-[15px] text-[14.5px]">
              <span className="text-text-muted">Sala</span>
              <span className="font-extrabold text-foreground">{kid.room}</span>
            </div>
            <div className="flex items-center justify-between gap-4 px-[18px] py-[15px] text-[14.5px]">
              <span className="text-text-muted">Ingreso</span>
              <span className="font-extrabold text-foreground">{kid.enrollmentDate}</span>
            </div>
          </div>
        </div>

        <div className="flex w-full shrink-0 flex-col gap-3.5 md:w-[300px]">
          <button
            type="button"
            aria-disabled="true"
            className="flex w-full items-center justify-center gap-2 rounded-[14px] bg-foreground px-3 py-[13px] text-[15px] font-extrabold text-white"
          >
            <SunIcon />
            Resumen del día
          </button>

          <div className="rounded-2xl border border-surface-border bg-surface p-4 px-[18px]">
            <div className="mb-3.5 text-xs font-extrabold tracking-[0.8px] text-[#8a7c6d]">PADRES VINCULADOS</div>
            <div className="flex flex-col gap-3.5">
              {kid.parents.map((parent, index) => (
                <ParentRow key={`${parent.name}-${parent.relationship}`} parent={parent} index={index} />
              ))}
              <div className="flex items-center gap-3 pt-2">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-full border-[1.5px] border-dashed border-[#d8cbba] text-[#b0a290]">
                  <PlusIcon />
                </div>
                <span className="text-[14.5px] font-extrabold text-[#c5503a]">Vincular otro padre</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
