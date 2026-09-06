"use client";

import { useState } from "react";

import { AddKidModal, type AddKidFormData } from "./add-kid-modal";
import type { Kid } from "./kids-data";
import { KidCard } from "./kid-card";

const monthLabels = ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"];

function parseBirthDate(value: string) {
  const match = value.trim().match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/);

  if (!match) {
    return null;
  }

  const [, dayValue, monthValue, yearValue] = match;
  const day = Number(dayValue);
  const month = Number(monthValue);
  const year = Number(yearValue);
  const date = new Date(0);
  date.setHours(0, 0, 0, 0);
  date.setFullYear(year, month - 1, day);

  return date.getFullYear() === year && date.getMonth() === month - 1 && date.getDate() === day ? date : null;
}

function formatBirthDate(date: Date) {
  return `${date.getDate()} ${monthLabels[date.getMonth()]} ${date.getFullYear()}`;
}

function calculateAge(birthDate: Date, today: Date) {
  let years = today.getFullYear() - birthDate.getFullYear();

  if (
    today.getMonth() < birthDate.getMonth() ||
    (today.getMonth() === birthDate.getMonth() && today.getDate() < birthDate.getDate())
  ) {
    years -= 1;
  }

  return `${years} ${years === 1 ? "año" : "años"}`;
}

function formatEnrollmentDate(date: Date) {
  return `${monthLabels[date.getMonth()]} ${date.getFullYear()}`;
}

export function KidsList({ kids }: { kids: Kid[] }) {
  const [currentKids, setCurrentKids] = useState(kids);
  const [newKidIds, setNewKidIds] = useState<Set<number>>(new Set());
  const [isAddKidModalOpen, setIsAddKidModalOpen] = useState(false);

  const handleAddKid = (formData: AddKidFormData) => {
    const birthDate = parseBirthDate(formData.birthDate);

    if (!birthDate) {
      return;
    }

    const enrollmentDate = new Date();
    const name = formData.name.trim();
    const allergies = formData.allergies.trim();
    const medicalNotes = formData.medicalNotes.trim();
    const notes = [allergies ? `Alergias: ${allergies}.` : "", medicalNotes].filter(Boolean).join(" ") || "Sin notas registradas.";
    const badge = allergies.split(",")[0]?.trim().toUpperCase();
    const nextId = currentKids.reduce((maxId, kid) => Math.max(maxId, kid.id), 0) + 1;
    const newKid: Kid = {
      id: nextId,
      name,
      initial: name.charAt(0).toUpperCase(),
      age: calculateAge(birthDate, enrollmentDate),
      room: formData.room,
      linkedParentsLabel: "sin padres vinculados",
      ...(badge ? { badge, badgeTone: "allergy" as const } : {}),
      birthDate: formatBirthDate(birthDate),
      enrollmentDate: formatEnrollmentDate(enrollmentDate),
      notes,
      parents: [],
    };

    setCurrentKids((existingKids) => [...existingKids, newKid]);
    setNewKidIds((existingIds) => new Set(existingIds).add(newKid.id));
    setIsAddKidModalOpen(false);
  };

  return (
    <div className="mx-auto w-full max-w-[880px] px-5 pb-16 pt-6 md:px-10 md:pb-20 md:pt-[34px]">
      <header className="mb-[22px] flex items-end justify-between gap-4">
        <div>
          <p className="mb-1 text-xs font-extrabold tracking-[0.8px] text-accent-strong">GESTIÓN</p>
          <h1 className="text-3xl font-semibold text-foreground">Niños</h1>
        </div>
        <button
          type="button"
          aria-expanded={isAddKidModalOpen}
          aria-haspopup="dialog"
          aria-controls="add-kid-modal"
          onClick={() => setIsAddKidModalOpen(true)}
          className="flex shrink-0 items-center gap-2 rounded-[14px] bg-gradient-to-b from-[#f4977e] to-[#ee8164] px-[18px] py-[11px] text-sm font-extrabold text-white shadow-[0_8px_18px_-8px_rgba(238,129,100,0.7)] outline-none transition hover:brightness-[1.02] focus-visible:ring-2 focus-visible:ring-accent-strong focus-visible:ring-offset-2 focus-visible:ring-offset-background"
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
        <span className="text-[13px] text-text-soft">{currentKids.length} niños</span>
        <span className="h-px flex-1 bg-divider" />
      </div>

      <section aria-label="Listado de niños" className="grid grid-cols-1 gap-3.5 md:grid-cols-2">
        {currentKids.map((kid) => (
          <KidCard key={kid.id} kid={kid} isNew={newKidIds.has(kid.id)} />
        ))}
      </section>

      <AddKidModal
        isOpen={isAddKidModalOpen}
        onClose={() => setIsAddKidModalOpen(false)}
        onSubmit={handleAddKid}
      />
    </div>
  );
}
