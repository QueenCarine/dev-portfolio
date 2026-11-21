const PAGE_BG = "#0d151d";
const GREY = "#171b21"; 
const HERO_BLUE = "#95c1ee"; 

const VALUES = [
  {
    title: "Accessible technology",
    text: "Building tools around the people systems usually leave out.",
  },
  {
    title: "Financial inclusion",
    text: "Making financial services easier, more accessible and more affordable for everyone.",
  },
  {
    title: "Learning by building",
    text: "Following the problem wherever it leads, and growing with every project.",
  },
];


export default function About() {
  return (
    <div
      id="about"
      className="relative w-full scroll-mt-24"
      style={{ backgroundColor: GREY }}
    >
      <section className="relative mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:px-16 xl:max-w-[90rem] xl:px-20 xl:py-28 2xl:max-w-[110rem] 2xl:px-28">
        <div className="grid items-start gap-10 lg:grid-cols-[1.3fr_0.7fr] lg:gap-14 xl:gap-20">
          <div>
            <h2 className="font-display text-3xl font-bold leading-[1.15] text-white sm:text-4xl xl:text-5xl 2xl:text-6xl">
              Technology that reaches the people who{" "}
              <span style={{ color: HERO_BLUE }}>need it most.</span>
            </h2>

            <div className="mt-6 max-w-2xl space-y-5 font-body text-base leading-relaxed text-white/80 sm:text-lg xl:mt-8 xl:text-xl xl:leading-relaxed">
              <p>
                I'm Queen Carine, an entry-level software engineer interested in
                how technology can make everyday systems more accessible to the
                people who need them most. I'm excited by this field that is
                defined by possibility, where new ideas keep opening paths that
                didn't exist before. That curiosity is what drives me to keep
                learning and building, wherever the problem takes me.
              </p>
              <p>
                So far my work spans web, backend and IoT: from a platform that
                helps agricultural cooperatives manage farmer training, to a
                device that protects chicken coops from heat stress. I'm
                especially motivated to make financial services easier, more
                accessible and more affordable for everyone.
              </p>
            </div>
          </div>

          <div
            className="rounded-[1.5rem] border p-6 shadow-2xl shadow-black/25 sm:p-8 xl:rounded-[2rem] xl:p-10"
            style={{
              borderColor: "rgba(255, 255, 255, 0.1)",
              backgroundColor: PAGE_BG,
            }}
          >
            <p
              className="font-mono text-xs font-bold uppercase tracking-[0.2em] xl:text-sm"
              style={{ color: HERO_BLUE }}
            >
              What I care about
            </p>

            <ul className="mt-6 space-y-5 xl:mt-8 xl:space-y-6">
              {VALUES.map((item, i) => (
                <li
                  key={item.title}
                  className={i > 0 ? "border-t pt-5 xl:pt-6" : ""}
                  style={{ borderColor: "#243342" }}
                >
                  <p className="font-body text-sm font-semibold text-white sm:text-base xl:text-lg">
                    {item.title}
                  </p>
                  <p className="mt-1 font-body text-sm leading-relaxed text-gray-400 xl:text-base">
                    {item.text}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}