import Image from "next/image";

const PAGE_BG = "#0d151d";
const BRIDGERTON_BLUE = "#95c1ee";
const CONTACT_BLUE = "#5B8DB8";

export default function Hero() {
  return (
    <>
      <div
        className="fixed inset-0 -z-20"
        style={{ backgroundColor: PAGE_BG }}
        aria-hidden="true"
      />

      <section
        id="home"
        className="relative mx-auto flex min-h-[calc(100dvh-88px)] max-w-7xl items-center px-4 py-6 sm:px-6 sm:py-6 md:px-10 lg:px-16 xl:max-w-[90rem] xl:px-20 2xl:max-w-[110rem] 2xl:px-28"
      >
        <div className="grid w-full items-center gap-6 sm:gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 xl:grid-cols-[1fr_1fr] xl:gap-16 2xl:gap-24">
         
          <div className="order-2 lg:order-1">
            <p
              className="font-mono text-[10px] uppercase tracking-[0.18em] xs:text-xs sm:text-sm xl:text-base 2xl:text-lg"
              style={{ color: BRIDGERTON_BLUE }}
            >
              Hi there,
            </p>

            <h1 className="mt-1.5 font-display text-[1.75rem] font-semibold leading-[1.08] text-white xs:text-[2rem] sm:mt-3 sm:text-[2.6rem] md:text-5xl lg:text-[3.7rem] xl:text-[4.5rem] 2xl:text-[5.5rem]">
              I am a{" "}
              <span
                className="relative inline-block whitespace-nowrap"
                style={{ color: BRIDGERTON_BLUE }}
              >
                Software Engineer
              </span>
            </h1>

            <p className="mt-2 max-w-[280px] font-body text-[13px] leading-relaxed text-gray-400 sm:mt-4 sm:max-w-md sm:text-base md:text-lg xl:max-w-lg xl:text-xl 2xl:max-w-xl 2xl:text-2xl">
              I make the complex simple.
            </p>

            
            <div className="mt-4 flex flex-wrap gap-2.5 sm:mt-7 sm:gap-3 xl:mt-10">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-full px-4 py-2 font-body text-xs font-medium text-black transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-[0_10px_30px_-8px_rgba(168,189,210,0.55)] xs:px-5 xs:py-2.5 xs:text-sm sm:gap-3 sm:px-7 sm:py-3.5 xl:px-9 xl:py-4 xl:text-base 2xl:px-10 2xl:py-5 2xl:text-lg"
                style={{ backgroundColor: CONTACT_BLUE }}
              >
                Explore Projects
                <span className="transition-transform duration-200 group-hover:translate-x-1">
                  →
                </span>
              </a>
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-full px-4 py-2 font-body text-xs font-medium text-black transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-[0_10px_30px_-8px_rgba(168,189,210,0.55)] xs:px-5 xs:py-2.5 xs:text-sm sm:gap-3 sm:px-7 sm:py-3.5 xl:px-9 xl:py-4 xl:text-base 2xl:px-10 2xl:py-5 2xl:text-lg"
                style={{ backgroundColor: BRIDGERTON_BLUE }}
              >
                Contact me
                <span className="transition-transform duration-200 group-hover:translate-x-1">
                  →
                </span>
              </a>
            </div>

          
            
          </div>

         
          <div className="order-1 flex justify-center lg:order-2 lg:justify-end">
            <div className="relative aspect-[4/5] w-full max-w-[220px] xs:max-w-[260px] sm:max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg 2xl:max-w-2xl">
              
              <div
                className="absolute -inset-3 -z-10 rounded-[1.5rem] blur-2xl xs:-inset-4 xs:rounded-[2rem] sm:-inset-6 sm:rounded-[3rem] sm:blur-3xl xl:-inset-10 2xl:-inset-14"
                style={{
                  backgroundColor: BRIDGERTON_BLUE,
                  opacity: 0.1,
                }}
                aria-hidden="true"
              />

              <div className="relative h-full w-full overflow-hidden rounded-[1.25rem] xs:rounded-[1.5rem] sm:rounded-[2rem] xl:rounded-[2.5rem]">
                <Image
                  src="/par.jpg"
                  alt="Portrait photo of Queen Carine"
                  fill
                  priority
                  sizes="(max-width: 375px) 220px, (max-width: 480px) 260px, (max-width: 640px) 320px, (max-width: 768px) 384px, (max-width: 1024px) 384px, (max-width: 1280px) 448px, (max-width: 1536px) 576px, 672px"
                  className="object-cover object-top grayscale-[5%]"
                />
              
                <div
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}