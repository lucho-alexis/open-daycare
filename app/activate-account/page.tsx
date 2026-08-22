import Link from "next/link";

function BrandMark() {
  return (
    <div className="flex size-[58px] items-center justify-center rounded-[18px] bg-[linear-gradient(155deg,#f8c3a8,#f2937a)] shadow-[0_12px_26px_-10px_rgba(238,129,100,0.65)]">
      <svg
        aria-hidden="true"
        className="size-[30px] text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.2"
      >
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
      </svg>
    </div>
  );
}

function Field({
  label,
  id,
  type = "text",
  defaultValue,
  className = "",
}: {
  label: string;
  id: string;
  type?: string;
  defaultValue?: string;
  className?: string;
}) {
  return (
    <div>
      <label className="mb-2 block text-xs font-bold tracking-[0.7px] text-text-muted" htmlFor={id}>
        {label}
      </label>
      <input
        className={`box-border h-[51px] min-w-0 w-full rounded-[14px] border-[1.5px] border-surface-border bg-white px-4 text-[15px] text-foreground outline-none transition focus:border-accent ${className}`}
        defaultValue={defaultValue}
        id={id}
        name={id}
        type={type}
      />
    </div>
  );
}

export default function ActivateAccountPage() {
  return (
    <main className="flex min-h-screen min-w-0 items-center justify-center overflow-x-hidden bg-[#fbf4ec] px-6 py-10 sm:px-10">
      <div className="w-full min-w-0 max-w-[440px]">
        <BrandMark />

        <h1 className="mt-[22px] text-[32px] font-semibold leading-[1.15] text-foreground">
          Bienvenida a OpenDayCare
        </h1>
        <p className="mt-2 text-[15.5px] leading-[1.55] text-text-muted">
          Te invitaron a seguir el día de tu hijo. Creá tu contraseña para activar la cuenta.
        </p>

        <div className="mt-[22px] flex min-w-0 items-center gap-[14px] rounded-2xl border-[1.5px] border-surface-border bg-white px-4 py-[14px]">
          <div className="flex size-11 shrink-0 items-center justify-center rounded-full bg-[#a9d9e8] text-[19px] font-semibold text-[#1f7a93]">
            M
          </div>
          <div className="min-w-0">
            <div className="text-[13px] text-text-muted">Te invitaron a seguir a</div>
            <div className="text-[17px] font-semibold text-foreground">Mateo · Sala Soles</div>
          </div>
        </div>

        <div className="mt-[22px] space-y-[18px]">
          <Field defaultValue="7K4P9" id="invitation-code" label="CÓDIGO DE INVITACIÓN" className="border-accent text-[18px] font-bold tracking-[3px]" />
          <Field defaultValue="lucia.fernandez@gmail.com" id="email" label="EMAIL" type="email" />
          <Field defaultValue="contraseña" id="password" label="CREAR CONTRASEÑA" type="password" className="border-[#f2a78e]" />
        </div>

        <label className="mt-[18px] flex cursor-pointer items-start gap-3 rounded-[14px] bg-[#fbf1d6] px-4 py-[14px]">
          <input
            className="peer sr-only"
            defaultChecked
            id="photo-authorization"
            name="photo-authorization"
            type="checkbox"
          />
          <span className="mt-px flex size-6 shrink-0 items-center justify-center rounded-lg border border-[#d8c68d] bg-white text-transparent peer-checked:border-[#5fb97e] peer-checked:bg-[#5fb97e] peer-checked:text-white peer-focus-visible:ring-2 peer-focus-visible:ring-accent">
            <svg
              aria-hidden="true"
              className="size-[15px]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="3"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </span>
          <span className="text-sm leading-[1.45] text-[#8a7234]">
            Autorizo a la guardería a tomar y compartir fotos de mi hijo dentro de la app.
          </span>
        </label>

        <Link
          className="mt-6 block w-full rounded-[15px] bg-[linear-gradient(180deg,#f4977e,#ee8164)] px-4 py-[15px] text-center text-base font-extrabold text-white shadow-[0_10px_22px_-8px_rgba(238,129,100,0.7)] transition hover:brightness-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-strong"
          href="/"
        >
          Activar mi cuenta
        </Link>

        <p className="mt-[22px] text-center text-[14.5px] text-text-muted">
          ¿Ya tenés cuenta?{" "}
          <Link className="font-extrabold text-accent-strong focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-strong" href="/login">
            Iniciar sesión
          </Link>
        </p>
      </div>
    </main>
  );
}
