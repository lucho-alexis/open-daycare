import type { ReactNode } from "react";

export type DaycareSection = "feed" | "kids" | "notices" | "account";

type IconName =
  | "bell"
  | "home"
  | "log-out"
  | "menu"
  | "plus"
  | "sun"
  | "user"
  | "users";

const navigationItems: { id: DaycareSection; label: string; icon: IconName }[] = [
  { id: "feed", label: "Feed", icon: "home" },
  { id: "kids", label: "Niños", icon: "users" },
  { id: "notices", label: "Avisos", icon: "bell" },
  { id: "account", label: "Mi cuenta", icon: "user" },
];

function Icon({ name, className = "size-5" }: { name: IconName; className?: string }) {
  const props = {
    className,
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    strokeWidth: 2,
    viewBox: "0 0 24 24",
    "aria-hidden": true,
  };

  switch (name) {
    case "sun":
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
        </svg>
      );
    case "plus":
      return (
        <svg {...props}>
          <path d="M12 5v14M5 12h14" />
        </svg>
      );
    case "home":
      return (
        <svg {...props}>
          <path d="m3 9.5 9-6.5 9 6.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z" />
        </svg>
      );
    case "users":
      return (
        <svg {...props}>
          <circle cx="9" cy="7" r="3" />
          <circle cx="17" cy="9" r="2.4" />
          <path d="M2.5 20a6.5 6.5 0 0 1 13 0M16 20a5 5 0 0 1 5.5-4.9" />
        </svg>
      );
    case "bell":
      return (
        <svg {...props}>
          <path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9M13.7 21a2 2 0 0 1-3.4 0" />
        </svg>
      );
    case "user":
      return (
        <svg {...props}>
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </svg>
      );
    case "log-out":
      return (
        <svg {...props}>
          <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9" />
        </svg>
      );
    case "menu":
      return (
        <svg {...props}>
          <path d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      );
  }
}

function Sidebar({ activeSection }: { activeSection: DaycareSection }) {
  return (
    <aside className="hidden w-[248px] shrink-0 flex-col border-r border-surface-border bg-surface px-4 py-6 md:flex md:sticky md:top-0 md:h-screen">
      <div className="flex items-center gap-3 px-2 pb-5">
        <div className="flex size-[38px] shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#f8c3a8] to-accent text-white">
          <Icon name="sun" className="size-[21px]" />
        </div>
        <div>
          <div className="font-semibold leading-none text-foreground">OpenDayCare</div>
          <div className="mt-0.5 text-[11.5px] text-text-soft">Sala Soles</div>
        </div>
      </div>

      <div aria-disabled="true" className="mb-[18px] flex items-center justify-center gap-2 rounded-[14px] bg-gradient-to-b from-[#f4977e] to-[#ee8164] px-3 py-3 text-sm font-extrabold text-white shadow-[0_8px_18px_-8px_rgba(238,129,100,0.75)]">
        <Icon name="plus" className="size-[17px]" />
        Nueva publicación
      </div>

      <nav className="flex flex-1 flex-col gap-1" aria-label="Navegación principal">
        {navigationItems.map((item) => (
          <div
            key={item.id}
            aria-disabled="true"
            className={`flex items-center gap-3 rounded-xl px-3 py-[11px] text-sm ${
              item.id === activeSection
                ? "bg-accent-soft font-extrabold text-accent-strong"
                : "font-semibold text-[#6e6359]"
            }`}
          >
            <Icon name={item.icon} className="size-[19px]" />
            {item.label}
          </div>
        ))}
      </nav>

      <div className="mt-2 border-t border-surface-border pt-3.5">
        <div className="flex items-center gap-3 px-2 py-1.5">
          <div className="flex size-[38px] shrink-0 items-center justify-center rounded-full bg-accent text-base font-semibold text-white">
            C
          </div>
          <div className="min-w-0 flex-1">
            <div className="truncate text-sm font-extrabold text-foreground">Caro Giménez</div>
            <div className="text-xs text-text-soft">Maestra · Soles</div>
          </div>
          <div aria-disabled="true" className="flex size-8 shrink-0 items-center justify-center rounded-[10px] bg-background text-[#94887b]">
            <Icon name="log-out" className="size-4" />
          </div>
        </div>
      </div>
    </aside>
  );
}

function MobileHeader() {
  return (
    <div className="flex items-center justify-between border-b border-surface-border bg-surface px-5 py-4 md:hidden">
      <div className="flex items-center gap-2.5">
        <div className="flex size-9 items-center justify-center rounded-xl bg-gradient-to-br from-[#f8c3a8] to-accent text-white">
          <Icon name="sun" className="size-5" />
        </div>
        <div>
          <div className="font-semibold leading-none text-foreground">OpenDayCare</div>
          <div className="mt-0.5 text-[11px] text-text-soft">Sala Soles</div>
        </div>
      </div>
      <button
        type="button"
        aria-label="Abrir menú"
        aria-disabled="true"
        className="flex size-10 items-center justify-center rounded-xl bg-background text-text-muted"
      >
        <Icon name="menu" className="size-5" />
      </button>
    </div>
  );
}

export function DaycareShell({
  activeSection = "feed",
  children,
}: {
  activeSection?: DaycareSection;
  children: ReactNode;
}) {
  return (
    <div className="flex min-h-screen w-full overflow-x-hidden bg-background">
      <Sidebar activeSection={activeSection} />

      <main className="min-w-0 flex-1 overflow-x-hidden overflow-y-auto">
        <MobileHeader />
        {children}
      </main>
    </div>
  );
}
