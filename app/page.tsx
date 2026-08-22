import { DaycareShell } from "@/components/layout/daycare-shell";

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
  | "camera"
  | "heart"
  | "image"
  | "megaphone"
  | "message";

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

export default function Home() {
  return (
    <DaycareShell>
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
    </DaycareShell>
  );
}
