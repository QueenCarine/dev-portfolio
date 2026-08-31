const PAGE_BG = "#0d151d";
const CONTACT_BLUE = "#5B8DB8";

type ProjectLink = {
  label: string;
  url: string;
};

type ProjectEntry = {
  name: string;
  year: string;
  gradientFrom: string;
  gradientTo: string;
  watermark: string;
  icons: string[];
  description: string;
  bullets: string[];
  stack: string[];
  links?: ProjectLink[];
};

const PROJECTS: ProjectEntry[] = [
  {
    name: "CoopConnect",
    year: "2025",
    gradientFrom: "#1c3a52",
    gradientTo: "#5B8DB8",
    watermark: "C",
    icons: ["Dj", "Rx", "Fg", "Mp", "CI"],
    description:
      "CoopConnect is a platform designed to empower agricultural cooperatives by enabling cooperative administrators to schedule and manage farmer training.",
    bullets: [
      "Used Jira to plan, assign, and keep track of team tasks.",
      "Created visual designs, including the brand guidelines, logo, wireframes, and mockups using Figma and Adobe Illustrator.",
      "Developed an informational website using HTML, CSS, and JavaScript and deployed it to Netlify.",
      "Created a system architecture diagram detailing the structure, components, and system interactions.",
      "Designed and implemented an Entity Relationship Diagram (ERD) in PostgreSQL using DBeaver, identifying relationships between entities.",
      "Developed RESTful APIs using Django and integrated the Daraja API for seamless C2B payment processing, using Ngrok for secure, local HTTP listener testing of M-Pesa responses.",
      "Built an interactive dashboard with React to simplify task management and monitoring.",
      "Implemented test cases and performed unit tests to ensure product quality and reliability.",
      "Developed and maintained the CI/CD pipeline to automate build, test, and deployment processes, ensuring faster and more reliable software delivery.",
    ],
    stack: ["Django", "React", "Figma", "M-Pesa Daraja", "CI/CD"],
    links: [
      { label: "Research Report", url: "https://docs.google.com/document/d/1SD8E8bJrlGL43MU5sJaaE9T16-RiZ7XbZAbSOC6taQU/edit?tab=t.0#heading=h.n0bsic4e954q" },
      { label: "Product Requirements Document (PRD)", url: "https://docs.google.com/document/d/1i6tcLvUiye9RBSFbsiQd0ErHldG45yZ9JmUD8a9hj8I/edit?tab=t.0" },
      { label: "Visual Design", url: "https://www.figma.com/design/C3ystGdTSVF7NpwT7Ss3RF/CoopConnect?node-id=0-1" },
      { label: "System Architecture Diagram", url: "https://lucid.app/lucidspark/cc391efe-d68a-431c-96ec-afb86062149a/edit?invitationId=inv_cf89697f-12b1-4e45-b545-d5e870c93b9a&page=0_0#" },
      { label: "Informational Website", url: "https://coopconnectinformational.netlify.app/" },
      { label: "API", url: "https://mind-maps-backend-1s8o.onrender.com/api/" },
      { label: "Dashboard", url: "https://coopconnect-react-app.vercel.app/" },
    ],
  },
  {
    name: "KukuKonnect",
    year: "2025",
    gradientFrom: "#0d151d",
    gradientTo: "#95c1ee",
    watermark: "K",
    icons: ["Dj", "ESP", "MQ", "Nx", "Ve"],
    description:
      "A three-in-one IoT device that automatically regulates temperature and humidity in chicken coops to prevent thermal stress, helping farmers reduce losses, boost operational efficiency, and increase overall profitability.",
    bullets: [
      "Utilized ClickUp for planning, task assignment, and tracking of team tasks.",
      "Created a system architecture diagram detailing the structure, components, and system interactions.",
      "Designed and implemented an Entity Relationship Diagram (ERD) in PostgreSQL using DBeaver to identify entity relationships.",
      "Built RESTful APIs with Django and integrated ESP32 microcontrollers for real-time temperature and humidity data collection from sensors.",
      "Deployed the backend RESTful APIs to Heroku for scalable and reliable hosting.",
      "Implemented the MQTT protocol via a HiveMQ broker for low-latency sensor data transmission, with WebSocket server integration to enable continuous, real-time streaming of sensor data to the frontend.",
      "Developed an informational website using TypeScript.",
      "Developed a system that collects and stores temperature and humidity data in PostgreSQL, and built a dashboard using Next.js for data visualization with server-side rendering, deployed to Vercel.",
      "Programmed a temperature-monitoring device to detect temperature threshold breaches and automatically activate a fan or an infrared heater respectively.",
      "Implemented automated testing within the CI/CD pipeline using Postman for API automation to enhance code quality and accelerate release cycles.",
      "Developed a Progressive Web Application (PWA) using Next.js, incorporating service workers and web app manifests to provide fast, reliable user experiences across devices.",
    ],
    stack: [
      "Django",
      "ESP32",
      "MQTT / HiveMQ",
      "Next.js",
      "Vercel",
    ],
    links: [
      { label: "Research Report", url: "https://docs.google.com/document/d/1mquhBptNwzMetF2R2kf2PakB2BhdZRiDgR_USCzQq2w/edit?usp=sharing" },
      { label: "Product Requirements Document (PRD)", url: "https://docs.google.com/document/d/1NAr6T8CpOmH4TWVVuOZVnX9hfHuFtmxZGaH0R3DEBRM/edit?usp=sharing" },
      { label: "System Architecture Diagram", url: "https://lucid.app/lucidchart/30b214f6-3746-4f68-aa93-aea1541c9bfd/edit?invitationId=inv_0ddf482a-24c4-49cf-b837-24a4af40c911&page=0_0#" },
      { label: "UI Designs", url: "https://www.figma.com/design/9tiNumBd2wetgTVOKC5Ztv/KukuKonect-Design?node-id=0-1&p=f" },
      { label: "IoT Designs", url: "https://cad.onshape.com/documents/c0f3d1315cc317395ea1f5a3/w/6184ec13a7d0aacd7a796e12/e/2ffa87fdb8f3d5ead9ccae8c" },
      { label: "Informational Website", url: "https://kuku-konnect.vercel.app/" },
      { label: "API", url: "https://kukukonnect-backend.onrender.com/api/" },
      { label: "Dashboard", url: "https://kukukonnect-frontend.vercel.app/" },
    ],
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative mx-auto max-w-7xl bg-[#0d151d] px-6 py-16 sm:px-10 lg:px-16 xl:max-w-[90rem] xl:px-20 xl:py-24 2xl:max-w-[110rem] 2xl:px-28"
    >
      <div className="mb-10 flex items-center justify-between xl:mb-14">
        <h2 className="font-display text-3xl font-bold text-white sm:text-4xl xl:text-5xl 2xl:text-6xl">
          Projects
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 xl:gap-8">
        {PROJECTS.map((project) => (
          <div
            key={project.name}
            className="overflow-hidden rounded-2xl border border-[#e5e5e5] bg-white xl:rounded-3xl"
          >
          
            <div
              className="relative flex min-h-[200px] flex-col justify-end overflow-hidden px-6 py-8 sm:px-8 sm:py-10 xl:px-10 xl:py-12"
              style={{
                background: `linear-gradient(135deg, ${project.gradientFrom}, ${project.gradientTo})`,
              }}
            >
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -right-4 -top-6 select-none font-display text-[9rem] font-bold leading-none text-white/10 xl:text-[11rem]"
              >
                {project.watermark}
              </span>

              <h3 className="relative font-display text-2xl font-bold text-white sm:text-3xl xl:text-4xl">
                {project.name}
              </h3>

              <div className="relative mt-4 flex flex-wrap gap-2">
                {project.icons.map((icon, i) => (
                  <span
                    key={`${project.name}-icon-${i}`}
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-[10px] font-semibold text-white xl:h-9 xl:w-9"
                  >
                    {icon}
                  </span>
                ))}
              </div>
            </div>

            
            <div className="px-6 py-6 sm:px-8 sm:py-8 xl:px-10 xl:py-10">
              <h4 className="font-display text-lg font-semibold text-[#0d151d] sm:text-xl xl:text-2xl">
                {project.name}
              </h4>

              <p className="mt-1 font-mono text-xs text-gray-500 xl:text-sm">
                {project.year}
              </p>

            
              <p className="mt-4 font-body text-sm italic leading-relaxed text-gray-600 xl:text-base">
                {project.description}
              </p>

            
              <p className="mt-5 font-body text-sm font-semibold text-[#0d151d] xl:text-base">
                Approach and Key Insights
              </p>

              <ul className="mt-3 flex flex-col gap-3 xl:mt-4 xl:gap-4">
                {project.bullets.map((bullet, i) => (
                  <li
                    key={`${project.name}-bullet-${i}`}
                    className="flex items-start gap-3 font-body text-sm leading-relaxed text-gray-600 xl:text-base"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#5B8DB8]"
                    />

                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 border-t border-[#e5e5e5] pt-5 xl:mt-8 xl:pt-6">
                <p className="font-body text-sm font-semibold text-[#0d151d] xl:text-base">
                  $ Stack
                </p>

                <div className="mt-3 flex flex-wrap gap-2.5 xl:mt-4 xl:gap-3">
                  {project.stack.map((tech) => (
                    <span
                      key={`${project.name}-${tech}`}
                      className="rounded-full border border-[#95c1ee]/35 bg-[#95c1ee]/10 px-3.5 py-1.5 font-body text-xs text-[#0d151d] xl:px-4 xl:py-2 xl:text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {project.links && project.links.length > 0 && (
                <div className="mt-6 border-t border-[#e5e5e5] pt-5 xl:mt-8 xl:pt-6">
                  <p className="rounded-md bg-[#0d151d] px-3 py-2 font-body text-xs font-semibold uppercase tracking-[0.15em] text-white xl:text-sm">
                    Project Links
                  </p>

                  <ul className="mt-4 grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2">
                    {project.links.map((link) => (
                      <li key={`${project.name}-${link.label}`}>
                        <a
                          href={link.url || "#"}
                          target={link.url ? "_blank" : undefined}
                          rel={
                            link.url
                              ? "noopener noreferrer"
                              : undefined
                          }
                          className="font-body text-sm font-medium text-[#52525b] underline decoration-1 underline-offset-2 transition-opacity hover:opacity-70 xl:text-base"
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}