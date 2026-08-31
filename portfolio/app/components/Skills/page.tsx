const PAGE_BG = "#0d151d";
const CONTACT_BLUE = "#5B8DB8";

type SkillCategory = {
  title: string;
  skills: string[];
};

const SKILLS: SkillCategory[] = [
  {
    title: "Languages",
    skills: ["Python", "JavaScript", "TypeScript", "SQL", "Kotlin"],
  },
  {
    title: "Frameworks",
    skills: ["React", "Next.js","Django", "REST APIs", "Node.js", "WebSockets"],
  },
  {
    title: "Databases & Data",
    skills: ["PostgreSQL", "MongoDB", "DBeaver", "Entity Relationship Design"],
  },
  {
    title: "DevOps & Cloud",
    skills: [
      "CI/CD",
      "GitHub Actions",
      "Heroku",
      "Vercel",
      "Netlify"
    ],
  },
  {
    title: "Tools & Design",
    skills: [
      "Figma",
      "Adobe Illustrator",
      "Onshape CAD",
      "Postman",
      "Jira",
      "ClickUp",
    ],
  },
  {
    title: "IoT & Hardware",
    skills: ["ESP32", "MQTT / HiveMQ", "Sensor Integration"],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:px-16 xl:max-w-[90rem] xl:px-20 xl:py-24 2xl:max-w-[110rem] 2xl:px-28"
      style={{ backgroundColor: "whitesmoke" }}
    >
      <div className="mb-10 flex items-center justify-between xl:mb-14">
        <h2
          className="font-display text-3xl font-bold sm:text-4xl xl:text-5xl 2xl:text-6xl"
          style={{ color: PAGE_BG }}
        >
          Skills
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 xl:gap-8">
        {SKILLS.map((category) => (
          <div
            key={category.title}
            className="rounded-2xl border p-6 sm:p-8 xl:rounded-3xl xl:p-10"
            style={{ backgroundColor: "white", borderColor: "#e5e5e5" }}
          >
            <p
              className="font-mono text-xs font-bold uppercase tracking-[0.2em] xl:text-sm"
              style={{ color: CONTACT_BLUE }}
            >
              {category.title}
            </p>

            <div className="mt-4 flex flex-wrap gap-2.5 xl:mt-5 xl:gap-3">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border px-3.5 py-1.5 font-body text-xs xl:px-4 xl:py-2 xl:text-sm"
                  style={{
                    backgroundColor: "rgba(149, 193, 238, 0.10)",
                    borderColor: "rgba(149, 193, 238, 0.35)",
                    color: PAGE_BG,
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}