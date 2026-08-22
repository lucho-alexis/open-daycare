import Link from "next/link";

function BrandMark() {
  return (
    <div className="flex size-[46px] items-center justify-center rounded-[14px] bg-white/20">
      <svg
        aria-hidden="true"
        className="size-[26px]"
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

function LoginForm() {
  return (
    <div className="w-full max-w-[392px]">
      <h1 className="text-[30px] font-semibold leading-tight text-foreground">
        Iniciar sesión
      </h1>
      <p className="mt-1.5 text-[15px] text-text-muted">Ingresá para ver el día de hoy.</p>

      <div className="mt-7 space-y-[18px]">
        <div>
          <label className="mb-2 block text-xs font-bold tracking-[0.7px] text-text-muted" htmlFor="email">
            EMAIL
          </label>
          <input
            className="box-border h-[51px] min-w-0 w-full rounded-[14px] border-[1.5px] border-surface-border bg-white px-4 text-[15px] text-foreground outline-none transition focus:border-accent"
            defaultValue="caro@opendaycare.com"
            id="email"
            name="email"
            type="email"
          />
        </div>
        <div>
          <label className="mb-2 block text-xs font-bold tracking-[0.7px] text-text-muted" htmlFor="password">
            CONTRASEÑA
          </label>
          <input
            className="box-border h-[51px] min-w-0 w-full rounded-[14px] border-[1.5px] border-surface-border bg-white px-4 text-[15px] text-foreground outline-none transition focus:border-accent"
            id="password"
            name="password"
            placeholder="••••••••"
            type="password"
          />
        </div>
      </div>

      <div className="mb-5 mt-2 text-right text-[13.5px] font-bold text-accent-strong">
        ¿Olvidaste tu contraseña?
      </div>

      <Link
        className="block w-full rounded-[15px] bg-[linear-gradient(180deg,#f4977e,#ee8164)] px-4 py-[15px] text-center text-base font-extrabold text-white shadow-[0_10px_22px_-8px_rgba(238,129,100,0.7)] transition hover:brightness-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-strong"
        href="/"
      >
        Iniciar sesión
      </Link>

      <p className="mt-6 text-center text-[14.5px] text-text-muted">
        ¿Te invitó la guardería?{" "}
        <Link className="font-extrabold text-accent-strong focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-strong" href="/activate-account">
          Activá tu cuenta
        </Link>
      </p>
    </div>
  );
}

export default function LoginPage() {
  return (
    <main className="grid min-h-screen min-w-0 grid-cols-1 overflow-x-hidden bg-[#fbf4ec] lg:grid-cols-[1.05fr_1fr]">
      <section className="relative flex min-w-0 min-h-[390px] flex-col justify-between overflow-hidden bg-[linear-gradient(155deg,#f6a98e_0%,#f2937a_45%,#ec7e62_100%)] px-8 py-10 text-white sm:px-12 sm:py-12 lg:min-h-screen lg:px-[60px] lg:py-14">
        <div className="absolute -right-[120px] -top-[140px] size-[420px] rounded-full bg-white/[0.12]" />
        <div className="absolute -bottom-[110px] -left-[80px] size-[300px] rounded-full bg-white/[0.10]" />

        <div className="relative flex items-center gap-[13px]">
          <BrandMark />
          <span className="text-[21px] font-semibold tracking-[0.5px]">OpenDayCare</span>
        </div>

        <div className="relative my-12 max-w-[430px] lg:my-0">
          <h2 className="text-[36px] font-semibold leading-[1.12] sm:text-[42px]">
            El día de cada niño,
            <br />
            compartido con su familia.
          </h2>
          <p className="mt-[18px] text-[17px] leading-[1.6] text-white/[0.92]">
            Publicá momentos, gestioná las salas y mantené a las familias cerca, desde un
            solo lugar.
          </p>
        </div>

        <div className="relative text-sm text-white/[0.9]">Guardería Sala Soles</div>
      </section>

      <section className="flex min-w-0 items-center justify-center px-6 py-12 sm:px-10 lg:px-10">
        <LoginForm />
      </section>
    </main>
  );
}
