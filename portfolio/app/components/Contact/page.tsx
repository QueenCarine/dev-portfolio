const PAGE_BG = "#0d151d";
const ACCENT = "#95c1ee";
const BORDER = "#243342";
const CALENDLY_URL = "https://calendly.com/queencarineh/30min";

type ContactMethod = {
  label: string;
  value: string;
  url: string;
  icon: "email" | "github" | "linkedin";
};

const CONTACT_METHODS: ContactMethod[] = [
  {
    label: "Email",
    value: "queencarineh@gmail.com",
    url: "https://mail.google.com/mail/?view=cm&fs=1&to=queencarineh@gmail.com",
    icon: "email",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/queen-carine",
    url: "https://www.linkedin.com/in/queen-carine/",
    icon: "linkedin",
  },
  {
    label: "GitHub",
    value: "github.com/QueenCarine",
    url: "https://github.com/QueenCarine",
    icon: "github",
  },
];

function Icon({ type }: { type: ContactMethod["icon"] }) {
  const common = "h-5 w-5 xl:h-6 xl:w-6";

  if (type === "email") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={common} aria-hidden="true">
        <rect
          x="3"
          y="5"
          width="18"
          height="14"
          rx="2"
          stroke="currentColor"
          strokeWidth="1.6"
        />
        <path
          d="M3.5 6.5L12 13L20.5 6.5"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (type === "github") {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" className={common} aria-hidden="true">
        <path d="M12 0.5C5.4 0.5 0 5.9 0 12.5c0 5.3 3.4 9.8 8.2 11.4.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.6-4-1.6-.5-1.4-1.3-1.8-1.3-1.8-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.7-1.6-2.6-.3-5.4-1.3-5.4-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.7.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6 4.8-1.6 8.2-6.1 8.2-11.4C24 5.9 18.6.5 12 .5Z" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={common} aria-hidden="true">
      <path d="M20.4 20.4h-3.6v-5.6c0-1.3 0-3-1.9-3s-2.1 1.4-2.1 2.9v5.7H9.2V9h3.5v1.6h.1c.5-.9 1.7-1.9 3.4-1.9 3.6 0 4.3 2.4 4.3 5.5v6.2ZM5.3 7.4a2.1 2.1 0 1 1 0-4.2 2.1 2.1 0 0 1 0 4.2ZM7.1 20.4H3.6V9h3.5v11.4Z" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-5 w-5 xl:h-6 xl:w-6"
      aria-hidden="true"
    >
      <rect
        x="3"
        y="5"
        width="18"
        height="16"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="M3 10h18M8 3v4M16 3v4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative mx-auto max-w-7xl scroll-mt-24 px-4 py-16 sm:px-6 lg:px-10 xl:max-w-[90rem] xl:px-14 xl:py-24 2xl:max-w-[110rem]"
      style={{ backgroundColor: PAGE_BG }}
    >
      <div className="mb-10 xl:mb-14">
        <h2 className="mt-2 font-display text-3xl font-bold text-white sm:text-4xl xl:text-5xl 2xl:text-6xl">
          Contact
        </h2>
        <p className="mt-3 max-w-xl font-body text-sm text-gray-400 sm:text-base xl:mt-4 xl:text-lg">
          Open to new opportunities and collaborations. Reach out, or book a
          time that suits you.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] xl:gap-8">
        <div
          className="relative flex flex-col justify-between overflow-hidden rounded-[1.5rem] border p-6 sm:rounded-[2rem] sm:p-10 xl:p-12"
          style={{
            borderColor: BORDER,
            backgroundColor: "rgba(255, 255, 255, 0.03)",
          }}
        >
          <div
            className="pointer-events-none absolute -right-16 -top-16 h-72 w-72 rounded-full blur-3xl"
            style={{ backgroundColor: ACCENT, opacity: 0.12 }}
            aria-hidden="true"
          />

          <div className="relative">
            <span
              className="flex h-12 w-12 items-center justify-center rounded-2xl xl:h-14 xl:w-14"
              style={{
                backgroundColor: "rgba(149, 193, 238, 0.15)",
                color: ACCENT,
              }}
            >
              <CalendarIcon />
            </span>

            <h3 className="mt-6 font-display text-2xl font-bold text-white sm:text-3xl xl:text-4xl">
              Book a 30-minute meeting
            </h3>
            <p className="mt-3 max-w-md font-body text-sm leading-relaxed text-gray-400 sm:text-base xl:text-lg">
              Have a project, role or idea in mind? Pick a time on my calendar
              and let’s talk.
            </p>
          </div>

          <div className="relative mt-8">
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 rounded-full px-7 py-3.5 font-body text-sm font-semibold text-black transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-[0_10px_30px_-8px_rgba(168,189,210,0.55)] xl:px-9 xl:py-4 xl:text-base"
              style={{ backgroundColor: ACCENT }}
            >
              Schedule a call
              <span className="transition-transform duration-200 group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-4 xl:gap-5">
          {CONTACT_METHODS.map((method) => (
            <a
              key={method.label}
              href={method.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-1 items-center gap-4 rounded-2xl border p-5 transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/5 sm:p-6 xl:gap-5 xl:rounded-3xl xl:p-7"
              style={{
                borderColor: BORDER,
                backgroundColor: "rgba(255, 255, 255, 0.03)",
              }}
            >
              <span
                className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl xl:h-14 xl:w-14"
                style={{
                  backgroundColor: "rgba(149, 193, 238, 0.15)",
                  color: ACCENT,
                }}
              >
                <Icon type={method.icon} />
              </span>

              <span className="min-w-0 flex-1">
                <span className="block font-body text-xs uppercase tracking-wider text-gray-500 xl:text-sm">
                  {method.label}
                </span>
                <span className="mt-0.5 block truncate font-body text-sm font-semibold text-white sm:text-base xl:text-lg">
                  {method.value}
                </span>
              </span>

              <span
                aria-hidden="true"
                className="text-lg transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                style={{ color: ACCENT }}
              >
                ↗
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}