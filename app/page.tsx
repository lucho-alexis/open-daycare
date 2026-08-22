type MockPost = {
  type: "achievement" | "activity" | "announcement";
  author: string;
  time: string;
  audience: string;
  body: string;
  reactions: number;
  comments: number;
  mediaLabel?: string;
};

type IconName =
  | "bell"
  | "camera"
  | "heart"
  | "home"
  | "image"
  | "log-out"
  | "megaphone"
  | "message"
  | "menu"
  | "plus"
  | "sun"
  | "user"
  | "users";

const mockPosts: MockPost[] = [
  {
    type: "achievement",
    author: "Mateo",
    time: "14:20 · publicado por vos",
    audience: "familia de Mateo",
    body: "¡Usó el orinal solito por primera vez! Estaba feliz de contárselo a todos. Un gran paso.",
    reactions: 3,
    comments: 1,
  },
  {
    type: "activity",
    author: "Mateo",
    time: "09:40 · publicado por vos",
    audience: "familia de Mateo",
    body: "Pintamos con témperas esta mañana. Mateo eligió el azul para todo y se concentró un montón mezclando colores.",
    reactions: 5,
    comments: 2,
    mediaLabel: "Foto · pintando con témperas",
  },
  {
    type: "announcement",
    author: "Anuncio general",
    time: "07:50 · publicado por vos",
    audience: "toda la sala",
    body: "El viernes salimos al parque por la mañana. Recuerden mandar gorra y una botellita de agua.",
    reactions: 8,
    comments: 0,
  },
];

const postTypeLabels: Record<MockPost["type"], string> = {
  achievement: "LOGRO",
  activity: "ACTIVIDAD",
  announcement: "ANUNCIO",
};

const postTypeStyles: Record<
  MockPost["type"],
  { avatar: string; avatarText: string; badge: string; dot: string }
> = {
  achievement: {
    avatar: "bg-[#a9d9e8]",
    avatarText: "text-[#1f7a93]",
    badge: "bg-[#cfebd8] text-[#3e9b6c]",
    dot: "bg-[#3e9b6c]",
  },
  activity: {
    avatar: "bg-[#a9d9e8]",
    avatarText: "text-[#1f7a93]",
    badge: "bg-[#c7e7f1] text-[#2e89a6]",
    dot: "bg-[#2e89a6]",
  },
  announcement: {
    avatar: "bg-[#ccd8f4]",
    avatarText: "text-[#4e72c8]",
    badge: "bg-[#ccd8f4] text-[#4e72c8]",
    dot: "bg-[#4e72c8]",
  },
};

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
    case "camera":
      return (
        <svg {...props}>
          <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
          <circle cx="12" cy="13" r="4" />
        </svg>
      );
    case "heart":
      return (
        <svg {...props} fill="currentColor">
          <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21.2l7.8-7.8 1-1a5.5 5.5 0 0 0 0-7.8z" />
        </svg>
      );
    case "message":
      return (
        <svg {...props}>
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8z" />
        </svg>
      );
    case "menu":
      return (
        <svg {...props}>
          <path d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      );
    case "image":
      return (
        <svg {...props}>
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <circle cx="9" cy="9" r="2" />
          <path d="m21 15-3.6-3.6a2 2 0 0 0-2.8 0L6 21" />
        </svg>
      );
    case "megaphone":
      return (
        <svg {...props}>
          <path d="m3 11 18-5v12L3 14v-3zM11.6 16.8a3 3 0 1 1-5.8-1.6" />
        </svg>
      );
  }
}

function PostCard({ post }: { post: MockPost }) {
  const styles = postTypeStyles[post.type];

  return (
    <article className="min-w-0 rounded-3xl border border-surface-border bg-surface p-5 shadow-[0_4px_16px_-12px_rgba(120,90,60,0.5)]">
      <header className="mb-3 flex min-w-0 flex-wrap items-center gap-3">
        <div
          className={`flex size-11 shrink-0 items-center justify-center rounded-full text-lg font-semibold ${styles.avatar} ${styles.avatarText}`}
        >
          {post.type === "announcement" ? (
            <Icon name="megaphone" className="size-5" />
          ) : (
            post.author.charAt(0)
          )}
        </div>
        <div className="min-w-0 flex-1">
          <h2 className="font-semibold text-foreground">{post.author}</h2>
          <p className="text-xs text-text-soft">{post.time}</p>
        </div>
        <div className={`flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-extrabold tracking-wide ${styles.badge}`}>
          <span className={`size-2 rounded-full ${styles.dot}`} />
          <span>{postTypeLabels[post.type]}</span>
        </div>
      </header>

      <p className="mb-2 text-xs text-text-soft">Para: {post.audience}</p>
      <p className="text-[15.5px] leading-relaxed text-[#4a4038]">{post.body}</p>

      {post.mediaLabel ? (
        <div className="mt-3 flex h-48 flex-col items-center justify-center gap-2 rounded-2xl border-[1.5px] border-dashed border-[#dbcdba] bg-[#f4ece1] text-sm text-text-soft">
          <Icon name="image" className="size-7" />
          <span>{post.mediaLabel}</span>
        </div>
      ) : null}

      <footer className="mt-4 flex items-center gap-5 border-t border-[#f0e6d8] pt-3 text-sm font-bold text-text-muted">
        <span className="flex items-center gap-1.5 text-accent-strong">
          <Icon name="heart" className="size-[19px]" />
          {post.reactions}
        </span>
        <span className="flex items-center gap-1.5">
          <Icon name="message" className="size-[18px]" />
          {post.comments}
        </span>
        <span className="flex-1" />
        <span aria-disabled="true" className="font-extrabold text-[#c5503a]">Editar</span>
      </footer>
    </article>
  );
}

const navigationItems: { label: string; icon: IconName; active?: boolean }[] = [
  { label: "Feed", icon: "home", active: true },
  { label: "Niños", icon: "users" },
  { label: "Avisos", icon: "bell" },
  { label: "Mi cuenta", icon: "user" },
];

function Sidebar() {
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
            key={item.label}
            aria-disabled="true"
            className={`flex items-center gap-3 rounded-xl px-3 py-[11px] text-sm ${
              item.active
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

export default function Home() {
  return (
    <div className="flex min-h-screen w-full overflow-x-hidden bg-background">
      <Sidebar />

      <main className="min-w-0 flex-1 overflow-x-hidden overflow-y-auto">
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

        <div className="mx-auto w-full max-w-[760px] px-5 pb-16 pt-6 md:px-10 md:pb-20 md:pt-[34px]">
          <header className="mb-6">
            <p className="mb-1 text-xs font-extrabold tracking-[0.8px] text-accent-strong">
              GUARDERÍA · SALA SOLES
            </p>
            <h1 className="text-3xl font-semibold text-foreground">Buenas, Caro</h1>
            <p className="mt-1 text-sm text-text-muted">12 niños · martes 17 jun</p>
          </header>

          <div aria-disabled="true" className="mb-6 flex items-center gap-3 rounded-[18px] border border-surface-border bg-surface px-[18px] py-3.5 shadow-[0_4px_14px_-10px_rgba(120,90,60,0.4)]">
            <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-accent text-base font-semibold text-white">
              C
            </div>
            <span className="min-w-0 flex-1 text-[15px] text-text-soft">Compartí un momento…</span>
            <span className="flex size-[38px] shrink-0 items-center justify-center rounded-xl bg-accent-soft text-[#e0654a]">
              <Icon name="camera" className="size-[19px]" />
            </span>
          </div>

          <div className="mb-3.5 flex items-center gap-3.5">
            <span className="text-xs font-extrabold tracking-[0.8px] text-[#8a7c6d]">PUBLICADO HOY</span>
            <span className="h-px flex-1 bg-divider" />
          </div>

          <section aria-label="Publicaciones" className="flex flex-col gap-4">
            {mockPosts.map((post) => (
              <PostCard key={`${post.type}-${post.time}`} post={post} />
            ))}
          </section>
        </div>
      </main>
    </div>
  );
}
