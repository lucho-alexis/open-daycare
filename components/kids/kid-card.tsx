import Link from "next/link";

import type { Kid } from "./kids-data";

const avatarStyles: Record<number, { background: string; text: string }> = {
  1: { background: "bg-[#a9d9e8]", text: "text-[#1f7a93]" },
  2: { background: "bg-[#f4b8cc]", text: "text-[#c44a7a]" },
  3: { background: "bg-[#b9dec4]", text: "text-[#3e8b62]" },
  4: { background: "bg-[#f4dc8e]", text: "text-[#9a7b1e]" },
  5: { background: "bg-[#c9b6e8]", text: "text-[#7b5fc0]" },
  6: { background: "bg-[#f4b8cc]", text: "text-[#c44a7a]" },
  7: { background: "bg-[#a9d9e8]", text: "text-[#1f7a93]" },
};

export function KidCard({ kid, isNew = false }: { kid: Kid; isNew?: boolean }) {
  const avatar = avatarStyles[kid.id] ?? avatarStyles[((kid.id - 1) % Object.keys(avatarStyles).length) + 1];
  const badgeClassName =
    kid.badgeTone === "link"
      ? "bg-[#f9d2de] text-[#c56486]"
      : "bg-[#fbd8cc] text-[#d9684a]";
  const cardClassName = `group flex min-w-0 items-center gap-3.5 rounded-[18px] border border-surface-border bg-surface p-4 shadow-[0_4px_14px_-12px_rgba(120,90,60,0.5)]${
    isNew ? "" : " transition duration-150 hover:-translate-y-0.5 hover:border-[#f2a78e]"
  }`;

  const cardContent = (
    <>
      <div className={`flex size-12 shrink-0 items-center justify-center rounded-full text-[19px] font-semibold ${avatar.background} ${avatar.text}`}>
        {kid.initial}
      </div>
      <div className="min-w-0 flex-1">
        <div className="truncate text-base font-semibold text-foreground">{kid.name}</div>
        <div className="truncate text-[13px] text-text-soft">
          {kid.age} · {kid.linkedParentsLabel}
        </div>
      </div>
      {kid.badge ? (
        <span className={`shrink-0 rounded-full px-2.5 py-1 text-[11px] font-extrabold ${badgeClassName}`}>
          {kid.badge}
        </span>
      ) : !isNew ? (
        <svg
          className="size-[18px] shrink-0 text-[#cbb89f]"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2.2"
          aria-hidden="true"
        >
          <path d="m9 18 6-6-6-6" />
        </svg>
      ) : null}
    </>
  );

  if (isNew) {
    return <div className={cardClassName}>{cardContent}</div>;
  }

  return (
    <Link href={`/kids/${kid.id}`} aria-label={`Ver perfil de ${kid.name}`} className={cardClassName}>
      {cardContent}
    </Link>
  );
}
