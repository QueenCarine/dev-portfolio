"use client";

import Image from "next/image";
import { useState } from "react";

const CONTACT_BLUE = "#5B8DB8";
const ACCENT = "#95c1ee";

type ProjectLink = {
  label: string;
  url: string;
};

type ProjectEntry = {
  name: string;
  year: string;
  tagline: string;
  impact: string;
  gradientFrom: string;
  gradientTo: string;
  watermark: string;
  image?: string;
  icons: string[];
  liveLabel: string;
  liveUrl: string;
  designLabel: string;
  designUrl: string;
  description: string;
  bullets: string[];
  stack: string[];
  links?: ProjectLink[];
};

const TABS = ["Tech-Stack", "Approach","Resources"] as const;
type Tab = (typeof TABS)[number];

const PROJECTS: ProjectEntry[] = [
  {
    name: "CoopConnect",
    year: "2025",
    tagline: "Training management for agricultural cooperatives",
    impact:
      "Helping cooperative administrators schedule and manage farmer training with ease.",
    gradientFrom: "#1c3a52",
    gradientTo: "#5B8DB8",
    watermark: "C",
    icons: ["Dj", "Rx", "Fg", "Mp", "CI"],
    liveLabel: "View live project",
    liveUrl: "https://coopconnect-react-app.vercel.app/",
    designLabel: "API",
    designUrl: "https://mind-maps-backend-1s8o.onrender.com/api/",
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
    tagline: "Smart climate control for chicken coops",
    impact:
      "Helping farmers reduce losses and increase profitability by preventing thermal stress.",
    gradientFrom: "#0d151d",
    gradientTo: "#95c1ee",
    watermark: "K",
    icons: ["Dj", "ESP", "MQ", "Nx", "Ve"],
    liveLabel: "View live project",
    liveUrl: "https://kukukonnect-frontend.vercel.app/",
    designLabel: "API",
    designUrl: "https://kukukonnect-backend.onrender.com/api/",
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
    stack: ["Django", "ESP32", "MQTT / HiveMQ", "Next.js", "Vercel"],
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

function ProjectCard({ project }: { project: ProjectEntry }) {
  const [tab, setTab] = useState<Tab>("Tech-Stack");

  return (
    <article
      className="overflow-hidden rounded-[1.5rem] border p-4 sm:rounded-[2rem] sm:p-6 xl:p-8"
      style={{
        borderColor: "#243342",
        backgroundColor: "rgba(255, 255, 255, 0.03)",
      }}
    >
      <div className="grid gap-6 lg:grid-cols-[1fr_1.1fr] lg:gap-10 xl:gap-14">
        
        <div
          className="relative flex min-h-[240px] flex-col justify-end overflow-hidden rounded-2xl p-6 sm:min-h-[320px] sm:p-8 lg:min-h-full xl:rounded-3xl xl:p-10"
          style={{
            background: `linear-gradient(135deg, ${project.gradientFrom}, ${project.gradientTo})`,
          }}
        >
          {project.image ? (
            <Image
              src={project.image}
              alt={`${project.name} screenshots`}
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-contain p-6"
            />
          ) : (
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -right-4 -top-8 select-none font-display text-[10rem] font-bold leading-none text-white/10 xl:text-[14rem]"
            >
              {project.watermark}
            </span>
          )}

          <div className="relative flex flex-wrap gap-2">
            {project.icons.map((icon, i) => (
              <span
                key={`${project.name}-icon-${i}`}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20 text-[10px] font-semibold text-white xl:h-10 xl:w-10"
              >
                {icon}
              </span>
            ))}
          </div>
        </div>

      
        <div className="flex min-w-0 flex-col">
          <h3 className="font-display text-3xl font-bold text-white xl:text-5xl">
            {project.name}
          </h3>
          <p className="mt-2 font-body text-base text-gray-200 xl:text-xl">
            {project.tagline}
          </p>

          <p className="mt-4 font-body text-sm leading-relaxed text-gray-400 xl:text-base">
            {project.description}
          </p>

         
          <div
            className="mt-5 border-l-4 px-4 py-4 font-body text-sm leading-relaxed text-gray-200 xl:text-base"
            style={{
              borderColor: ACCENT,
              backgroundColor: "rgba(149, 193, 238, 0.1)",
            }}
          >
            <span className="font-semibold text-white">Impact: </span>
            {project.impact}
          </div>

        
          <div
            role="tablist"
            className="mt-6 flex flex-wrap gap-x-6 gap-y-1 border-b"
            style={{ borderColor: "#243342" }}
          >
            {TABS.map((t) => {
              const isActive = tab === t;
              return (
                <button
                  key={t}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setTab(t)}
                  className="-mb-px border-b-2 pb-3 font-body text-sm font-medium transition-colors xl:text-base"
                  style={{
                    color: isActive ? ACCENT : "#9ca3af",
                    borderColor: isActive ? ACCENT : "transparent",
                  }}
                >
                  {t}
                </button>
              );
            })}
          </div>

          
          <div className="mt-6 min-h-[150px]">
            {tab === "Tech-Stack" && (
              <div>
                <div className="flex flex-wrap gap-2.5">
                  {project.stack.map((tech) => (
                    <span
                      key={`${project.name}-stack-${tech}`}
                      className="border px-3.5 py-1.5 font-body text-xs text-white xl:text-sm"
                      style={{ borderColor: "rgba(255, 255, 255, 0.7)" }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center rounded-full px-6 py-3 font-body text-sm font-semibold text-black transition-transform duration-200 hover:-translate-y-0.5 xl:text-base"
                    style={{ backgroundColor: ACCENT }}
                  >
                    {project.liveLabel}
                  </a>
                  <a
                    href={project.designUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center rounded-full border px-6 py-3 font-body text-sm font-medium text-white transition-colors duration-200 hover:bg-white/10 xl:text-base"
                    style={{ borderColor: "rgba(255, 255, 255, 0.45)" }}
                  >
                    {project.designLabel} ↗
                  </a>
                </div>
              </div>
            )}

            {tab === "Approach" && (
              <ul className="flex max-h-[280px] flex-col gap-3 overflow-y-auto pr-2">
                {project.bullets.map((bullet, i) => (
                  <li
                    key={`${project.name}-bullet-${i}`}
                    className="flex items-start gap-3 font-body text-sm leading-relaxed text-gray-400 xl:text-base"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full"
                      style={{ backgroundColor: CONTACT_BLUE }}
                    />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            )}
        

            {tab === "Resources" &&
              (project.links && project.links.length > 0 ? (
                <ul className="grid grid-cols-1 gap-x-8 sm:grid-cols-2">
                  {project.links.map((link) => (
                    <li key={`${project.name}-${link.label}`}>
                      <a
                        href={link.url || "#"}
                        target={link.url ? "_blank" : undefined}
                        rel={link.url ? "noopener noreferrer" : undefined}
                        className="group flex items-center justify-between gap-3 border-b py-3 font-body text-sm text-gray-300 transition-colors hover:text-white xl:text-base"
                        style={{ borderColor: "#243342" }}
                      >
                        <span>{link.label}</span>
                        <span
                          aria-hidden="true"
                          className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                          style={{ color: ACCENT }}
                        >
                          ↗
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="font-body text-sm text-gray-500">
                  No resources yet.
                </p>
              ))}
          </div>
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative mx-auto max-w-7xl scroll-mt-24 px-4 py-16 sm:px-6 lg:px-10 xl:max-w-[90rem] xl:px-14 xl:py-24 2xl:max-w-[110rem]"
    >
      <div className="mb-10 xl:mb-14">
        <h2 className="mt-2 font-display text-3xl font-bold text-white sm:text-4xl xl:text-5xl 2xl:text-6xl">
          Projects
        </h2>
      </div>

      <div className="flex flex-col gap-8 xl:gap-12">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </section>
  );
}