const PAGE_BG = "#0d151d";
const BRIDGERTON_BLUE = "#95c1ee";
const CONTACT_BLUE = "#5B8DB8";
type EducationEntry = {
  school: string;
  program: string;
  dateRange: string;
  honors?: string;
  activities?: string;
  description?: string;
  tags: string[];
};

const EDUCATION: EducationEntry[] = [
  {
    school: "African Leadership University",
    program: "B.Sc. in Software Engineering",
    dateRange: "[May 2026] – [May 2029]",
    tags: [
      "Data Structures & Algorithms",
      "Software Design",
      "Database Systems",
      "Web Development"
    ],
  },
  {
    school: "AkiraChix, codeHive",
    program: "Diploma in Information Technology",
    dateRange: "[February 2025] – [November 2025]",
    description:
      "A program for young women in tech. codeHive is built around human-centered design, students identify real community challenges and build tech solutions grounded in local context, moving through a full cycle from ideation to implementation.",
    tags: [
      "Product Management",
      "UI/UX Design ",
      "UX Research",
      "Data Structures & Algorithmns",
      "Quality Assurance",
      "Back-end Development",
      "Mobile Development",
      "Internet of Things"
    ],
  },
];

export default function Education() {
  return (
    <section
      id="educate"
      className="relative mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:px-16 xl:max-w-[90rem] xl:px-20 xl:py-24 2xl:max-w-[110rem] 2xl:px-28"
      style={{ backgroundColor: "whitesmoke" }}
    >
      
<div className="mb-10 flex items-center justify-between xl:mb-14">
  <h2
    className="font-display text-3xl font-bold sm:text-4xl xl:text-5xl 2xl:text-6xl"
    style={{ color: PAGE_BG }}
  >
    Education
  </h2>
</div>


      <div className="flex flex-col gap-6 xl:gap-8">
        {EDUCATION.map((entry) => (
          <div
            key={entry.school}
            className="rounded-2xl border p-6 sm:p-8 xl:rounded-3xl xl:p-10"
            style={{ backgroundColor: PAGE_BG, borderColor: PAGE_BG }}
          >
            <h3 className="font-body text-lg font-semibold text-white sm:text-xl xl:text-2xl">
              {entry.school}
              <span
                className="font-normal"
                style={{ color: BRIDGERTON_BLUE }}
              >
                {" "}
                · {entry.program}
              </span>
            </h3>

            <p
              className="mt-2 font-mono text-xs uppercase tracking-[0.2em] xl:text-sm"
              style={{ color: CONTACT_BLUE }}
            >
              {entry.dateRange}
            </p>

            {entry.description && (
              <p className="mt-5 max-w-3xl font-body text-sm leading-relaxed text-gray-300 sm:text-base xl:mt-6 xl:text-base">
                {entry.description}
              </p>
            )}

        
            <div className="mt-6 flex flex-wrap gap-2.5 xl:mt-8 xl:gap-3">
              {entry.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full px-3.5 py-1.5 font-body text-xs xl:px-4 xl:py-2 xl:text-sm"
                  style={{
                    backgroundColor: "rgba(149, 193, 238, 0.12)",
                    color: BRIDGERTON_BLUE,
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}