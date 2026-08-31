const PAGE_BG = "#0d151d";
const CONTACT_BLUE = "#5B8DB8";

type ContactMethod = {
  label: string;
  value: string;
  url: string;
  icon: "email" | "phone" | "github" | "linkedin";
};

const CONTACT_METHODS: ContactMethod[] = [
  {
    label: "Personal email",
    value: "queencarineh@gmail.com",
    url: "mailto:queencarineh@gmail.com",
    icon: "email",
  },
  {
    label: "Phone",
    value: "+250 798 797 558",
    url: "tel:+250798797558",
    icon: "phone",
  },
  {
    label: "GitHub",
    value: "github.com/QueenCarine",
    url: "https://github.com/QueenCarine",
    icon: "github",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/queen-carine",
    url: "https://www.linkedin.com/in/queen-carine/",
    icon: "linkedin",
  },
];

function Icon({ type }: { type: ContactMethod["icon"] }) {
  if (type === "email") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="h-5 w-5 xl:h-6 xl:w-6"
      >
        <rect
          x="3"
          y="5"
          width="18"
          height="14"
          rx="2"
          stroke={PAGE_BG}
          strokeWidth="1.6"
        />
        <path
          d="M3.5 6.5L12 13L20.5 6.5"
          stroke={PAGE_BG}
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (type === "phone") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="h-5 w-5 xl:h-6 xl:w-6"
      >
        <path
          d="M6.6 2.8L9.2 2.2C9.8 2.1 10.4 2.4 10.7 3L12 6.1C12.2 6.6 12.1 7.2 11.7 7.6L10.2 9.1C11.3 11.5 13.2 13.4 15.6 14.5L17.1 13C17.5 12.6 18.1 12.5 18.6 12.7L21.7 14C22.3 14.3 22.6 14.9 22.5 15.5L21.9 18.1C21.7 19 20.9 19.6 20 19.6C10.9 19.2 4.8 13.1 4.4 4C4.4 3.1 5 2.3 5.9 2.1L6.6 2.8Z"
          stroke={PAGE_BG}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (type === "github") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill={PAGE_BG}
        className="h-5 w-5 xl:h-6 xl:w-6"
      >
        <path d="M12 0.5C5.4 0.5 0 5.9 0 12.5c0 5.3 3.4 9.8 8.2 11.4.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.6-4-1.6-.5-1.4-1.3-1.8-1.3-1.8-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.7-1.6-2.6-.3-5.4-1.3-5.4-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.7.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6 4.8-1.6 8.2-6.1 8.2-11.4C24 5.9 18.6.5 12 .5Z" />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 24 24"
      fill={PAGE_BG}
      className="h-5 w-5 xl:h-6 xl:w-6"
    >
      <path d="M20.4 20.4h-3.6v-5.6c0-1.3 0-3-1.9-3s-2.1 1.4-2.1 2.9v5.7H9.2V9h3.5v1.6h.1c.5-.9 1.7-1.9 3.4-1.9 3.6 0 4.3 2.4 4.3 5.5v6.2ZM5.3 7.4a2.1 2.1 0 1 1 0-4.2 2.1 2.1 0 0 1 0 4.2ZM7.1 20.4H3.6V9h3.5v11.4Z" />
    </svg>
  );
}

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:px-16 xl:max-w-[90rem] xl:px-20 xl:py-24 2xl:max-w-[110rem] 2xl:px-28"
      style={{ backgroundColor: PAGE_BG }}
    >

      <h2
        className="mt-2 font-display text-3xl font-bold sm:text-4xl xl:text-5xl 2xl:text-6xl"
        style={{ color: "whitesmoke" }}
      >
        Contact
      </h2>

      <p className="mt-3 max-w-xl font-body text-sm text-gray-500 sm:text-base xl:mt-4 xl:text-lg">
        Reach out to connect, collaborate, or learn more about my background.
      </p>

      <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:mt-14 xl:gap-6">
        {CONTACT_METHODS.map((method) => (
          <a
            key={method.label}
            href={method.url}
            target={method.icon !== "email" && method.icon !== "phone" ? "_blank" : undefined}
            rel={
              method.icon !== "email" && method.icon !== "phone"
                ? "noopener noreferrer"
                : undefined
            }
            className="flex items-center gap-4 rounded-2xl border p-5 transition-transform duration-200 hover:-translate-y-0.5 sm:p-6 xl:gap-5 xl:rounded-3xl xl:p-7"
            style={{
              borderColor: "#e5e5e5",
              backgroundColor: "white",
            }}
          >
            <span
              className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl xl:h-14 xl:w-14"
              style={{ backgroundColor: "rgba(149, 193, 238, 0.15)" }}
            >
              <Icon type={method.icon} />
            </span>

            <span>
              <span
                className="block font-body text-sm font-semibold sm:text-base xl:text-lg"
                style={{ color: PAGE_BG }}
              >
                {method.value}
              </span>

              <span className="mt-0.5 block font-body text-xs text-gray-500 xl:text-sm">
                {method.label}
              </span>
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
