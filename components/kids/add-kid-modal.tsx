"use client";

import { useEffect, useState } from "react";

export type AddKidFormData = {
  name: string;
  birthDate: string;
  room: string;
  allergies: string;
  medicalNotes: string;
};

type AddKidModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onSubmit?: (formData: AddKidFormData) => void;
};

type FormErrors = Partial<Record<keyof AddKidFormData, string>>;

const initialFormData: AddKidFormData = {
  name: "",
  birthDate: "",
  room: "Soles",
  allergies: "",
  medicalNotes: "",
};

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

  if (date.getFullYear() !== year || date.getMonth() !== month - 1 || date.getDate() !== day) {
    return null;
  }

  return date;
}

function validateForm(formData: AddKidFormData): FormErrors {
  const errors: FormErrors = {};

  if (!formData.name.trim()) {
    errors.name = "Ingresa el nombre completo.";
  }

  if (!formData.birthDate.trim()) {
    errors.birthDate = "Ingresa la fecha de nacimiento.";
  } else {
    const birthDate = parseBirthDate(formData.birthDate);

    if (!birthDate) {
      errors.birthDate = "Ingresa una fecha válida.";
    } else {
      const today = new Date();
      today.setHours(0, 0, 0, 0);

      if (birthDate > today) {
        errors.birthDate = "La fecha no puede ser futura.";
      }
    }
  }

  if (!formData.room) {
    errors.room = "Selecciona una sala.";
  }

  return errors;
}

export function AddKidModal({ isOpen, onClose, onSubmit }: AddKidModalProps) {
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState<FormErrors>({});
  const handleClose = () => {
    setFormData(initialFormData);
    setErrors({});
    onClose();
  };

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setFormData(initialFormData);
        setErrors({});
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  const updateField = (field: keyof AddKidFormData, value: string) => {
    setFormData((currentFormData) => ({ ...currentFormData, [field]: value }));
    setErrors((currentErrors) => {
      if (!currentErrors[field]) {
        return currentErrors;
      }

      const nextErrors = { ...currentErrors };
      delete nextErrors[field];
      return nextErrors;
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validateForm(formData);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length === 0) {
      onSubmit?.(formData);
      handleClose();
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-[rgba(63,54,46,0.28)] px-4 py-4 md:px-6 md:py-10"
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          handleClose();
        }
      }}
    >
      <div
        id="add-kid-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="add-kid-modal-title"
        className="w-full max-w-[520px] overflow-hidden rounded-[24px] border border-surface-border bg-[#fbf4ec] shadow-[0_20px_50px_-24px_rgba(63,54,46,0.35)]"
      >
        <form noValidate onSubmit={handleSubmit}>
          <header className="flex items-center justify-between gap-3 border-b border-surface-border px-5 py-5 md:px-[26px]">
            <button
              type="button"
              onClick={handleClose}
              className="shrink-0 rounded-md text-[15px] font-bold text-text-muted outline-none focus-visible:ring-2 focus-visible:ring-accent-strong focus-visible:ring-offset-2 focus-visible:ring-offset-[#fbf4ec]"
            >
              Cancelar
            </button>
            <h2 id="add-kid-modal-title" className="min-w-0 text-center text-lg font-semibold text-foreground">
              Agregar niño
            </h2>
            <div className="flex shrink-0 items-center gap-2.5">
              <button
                type="submit"
                className="rounded-md text-[15px] font-extrabold text-accent-strong outline-none focus-visible:ring-2 focus-visible:ring-accent-strong focus-visible:ring-offset-2 focus-visible:ring-offset-[#fbf4ec]"
              >
                Guardar
              </button>
              <button
                type="button"
                aria-label="Cerrar modal"
                onClick={handleClose}
                className="flex size-8 items-center justify-center rounded-full text-text-muted outline-none transition hover:bg-background hover:text-foreground focus-visible:ring-2 focus-visible:ring-accent-strong focus-visible:ring-offset-2 focus-visible:ring-offset-[#fbf4ec]"
              >
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
                  <path d="m6 6 12 12M18 6 6 18" />
                </svg>
              </button>
            </div>
          </header>

          <div className="px-5 py-6 md:px-[26px]">
            <div className="mb-[18px]">
              <label htmlFor="kid-name" className="mb-2 block text-xs font-extrabold tracking-[0.7px] text-text-muted">
                NOMBRE COMPLETO
              </label>
              <input
                id="kid-name"
                name="name"
                required
                aria-invalid={Boolean(errors.name)}
                aria-describedby={errors.name ? "kid-name-error" : undefined}
                value={formData.name}
                onChange={(event) => updateField("name", event.target.value)}
                placeholder="Ej. Martina López"
                className={`w-full rounded-[14px] border-[1.5px] bg-white px-4 py-[13px] text-[15px] text-foreground outline-none placeholder:text-[#b6a99b] focus:border-accent focus-visible:ring-2 focus-visible:ring-accent/25 ${
                  errors.name ? "border-accent-strong" : "border-[#eadfd0]"
                }`}
              />
              {errors.name ? (
                <p id="kid-name-error" role="alert" className="mt-1.5 text-xs font-semibold text-accent-strong">
                  {errors.name}
                </p>
              ) : null}
            </div>

            <div className="mb-[18px] grid grid-cols-1 gap-[14px] sm:grid-cols-2">
              <div>
                <label htmlFor="kid-birth-date" className="mb-2 block text-xs font-extrabold tracking-[0.7px] text-text-muted">
                  FECHA DE NACIMIENTO
                </label>
                <input
                  id="kid-birth-date"
                  name="birthDate"
                  type="text"
                  required
                  aria-invalid={Boolean(errors.birthDate)}
                  aria-describedby={errors.birthDate ? "kid-birth-date-error" : undefined}
                  value={formData.birthDate}
                  onChange={(event) => updateField("birthDate", event.target.value)}
                  placeholder="dd/mm/aaaa"
                  className={`w-full rounded-[14px] border-[1.5px] bg-white px-4 py-[13px] text-[15px] text-foreground outline-none placeholder:text-[#b6a99b] focus:border-accent focus-visible:ring-2 focus-visible:ring-accent/25 ${
                    errors.birthDate ? "border-accent-strong" : "border-[#eadfd0]"
                  }`}
                />
                {errors.birthDate ? (
                  <p id="kid-birth-date-error" role="alert" className="mt-1.5 text-xs font-semibold text-accent-strong">
                    {errors.birthDate}
                  </p>
                ) : null}
              </div>
              <div>
                <label htmlFor="kid-room" className="mb-2 block text-xs font-extrabold tracking-[0.7px] text-text-muted">
                  SALA
                </label>
                <div className="relative">
                  <select
                    id="kid-room"
                    name="room"
                    required
                    aria-invalid={Boolean(errors.room)}
                    aria-describedby={errors.room ? "kid-room-error" : undefined}
                    value={formData.room}
                    onChange={(event) => updateField("room", event.target.value)}
                    className={`w-full appearance-none rounded-[14px] border-[1.5px] bg-white px-4 py-[13px] pr-10 text-[15px] font-bold text-foreground outline-none focus:border-accent focus-visible:ring-2 focus-visible:ring-accent/25 ${
                      errors.room ? "border-accent-strong" : "border-[#eadfd0]"
                    }`}
                  >
                    <option value="Soles">Soles</option>
                  </select>
                  <svg
                    className="pointer-events-none absolute right-4 top-1/2 size-4 -translate-y-1/2 text-[#b0a290]"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.2"
                    aria-hidden="true"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </div>
                {errors.room ? (
                  <p id="kid-room-error" role="alert" className="mt-1.5 text-xs font-semibold text-accent-strong">
                    {errors.room}
                  </p>
                ) : null}
              </div>
            </div>

            <div className="mb-[18px]">
              <label htmlFor="kid-allergies" className="mb-2 block text-xs font-extrabold tracking-[0.7px] text-text-muted">
                ALERGIAS (ETIQUETAS)
              </label>
              <input
                id="kid-allergies"
                name="allergies"
                value={formData.allergies}
                onChange={(event) => updateField("allergies", event.target.value)}
                placeholder="Ej. Maní, Lactosa"
                className="w-full rounded-[14px] border-[1.5px] border-[#eadfd0] bg-white px-4 py-[13px] text-[15px] text-foreground outline-none placeholder:text-[#b6a99b] focus:border-accent"
              />
            </div>

            <div>
              <label htmlFor="kid-medical-notes" className="mb-2 block text-xs font-extrabold tracking-[0.7px] text-text-muted">
                NOTAS MÉDICAS
              </label>
              <textarea
                id="kid-medical-notes"
                name="medicalNotes"
                value={formData.medicalNotes}
                onChange={(event) => updateField("medicalNotes", event.target.value)}
                placeholder="Indicaciones, medicación, contactos…"
                className="min-h-[90px] w-full resize-y rounded-[14px] border-[1.5px] border-[#eadfd0] bg-white px-4 py-[13px] text-[15px] leading-[1.5] text-foreground outline-none placeholder:text-[#b6a99b] focus:border-accent"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
