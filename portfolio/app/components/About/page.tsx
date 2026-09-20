const PAGE_BG = "#0d151d";
const BRIDGERTON_BLUE = "#95c1ee";
const CONTACT_BLUE = "#5B8DB8";

export default function About() {
  return (
    <>
      <div
        className="w-full"
        style={{
          backgroundColor: "whitesmoke",
          height: "clamp(1.5rem, 2vw, 3.5rem)",
        }}
      />

      <section
        id="about"
        className="relative mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:px-16 xl:max-w-[90rem] xl:px-20 xl:py-24 2xl:max-w-[110rem] 2xl:px-28"
        style={{ backgroundColor: PAGE_BG }}
      >
        <div className="mb-10 mt-9 flex items-center justify-between xl:mb-14">
          <h2
            className="font-display text-3xl font-bold sm:text-4xl xl:text-5xl 2xl:text-6xl"
            style={{ color: "whitesmoke" }}
          >
            About Me
          </h2>
        </div>

        <div
          className="rounded-2xl border p-6 sm:p-8 xl:rounded-3xl xl:p-10"
          style={{
            backgroundColor: "rgba(149, 193, 238, 0.05)",
            borderColor: "rgba(149, 193, 238, 0.15)",
          }}
        >
          <p
            className="font-mono text-xs font-bold uppercase tracking-[0.2em] xl:text-sm"
            style={{ color: CONTACT_BLUE }}
          >
            Who I Am
          </p>

          <p className="mt-5 max-w-3xl font-body text-base leading-relaxed text-gray-400 sm:text-lg xl:mt-6 xl:text-xl xl:leading-relaxed">
            I'm Queen Carine, an entry-level software engineer interested in how
            technology can make everyday systems more accessible to the
            people who need them most. I'm excited by this field that is
            defined by possibility, where new ideas keep opening paths that
            didn't exist before. That curiosity is what drives me to keep
            learning and building, wherever the problem takes me.
          </p>
        </div>
      </section>
    </>
  );
}