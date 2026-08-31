import Image from "next/image";

const CONTACT = [
  { label: "Email", value: "queencarineh@gmail.com" },
  { label: "Phone", value: "+250 798 797 558" },
  { label: "Location", value: "Kigali, Rwanda" },
];

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
        className="relative mx-auto flex min-h-[calc(100dvh-88px)] max-w-7xl items-center px-6 pb-8 pt-2 sm:px-10 lg:px-16 xl:max-w-[90rem] xl:px-20 2xl:max-w-[110rem] 2xl:px-28"
      >
        <div className="grid w-full items-center gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 xl:grid-cols-[1fr_1fr] xl:gap-16 2xl:gap-24">
          <div className="order-2 lg:order-1">
           
            <p
              className="font-mono text-sm uppercase tracking-[0.25em] xl:text-base 2xl:text-lg"
              style={{ color: BRIDGERTON_BLUE }}
            >
              Hi there,
            </p>

            
            <h1 className="mt-3 font-display text-[2.6rem] font-semibold leading-[1.05] text-white sm:text-6xl lg:text-[3.7rem] xl:text-[4.5rem] 2xl:text-[5.5rem]">
              I am a{" "}
              <span
                className="relative whitespace-nowrap"
                style={{ color: BRIDGERTON_BLUE }}
              >
                Software Engineer
              </span>
            </h1>

            
            <p className="mt-4 max-w-md font-body text-base text-gray-400 sm:text-lg xl:max-w-lg xl:text-xl 2xl:max-w-xl 2xl:text-2xl">
              I make the complex simple.
            </p>

           
            <a
              href="#projects"
              className="group mt-7 inline-flex items-center gap-3 rounded-full px-7 py-3.5 font-body text-sm font-medium text-black transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-[0_10px_30px_-8px_rgba(168,189,210,0.55)] xl:mt-10 xl:px-9 xl:py-4 xl:text-base 2xl:px-10 2xl:py-5 2xl:text-lg"
              style={{ backgroundColor: CONTACT_BLUE }}
            >
              Explore Projects
              <span className="transition-transform duration-200 group-hover:translate-x-1">
                →
              </span>
            </a>
             <a
              href="#contact"
              className="group mt-7 inline-flex items-center gap-3 rounded-full px-7 py-3.5 font-body text-sm font-medium ml-5 text-black transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-[0_10px_30px_-8px_rgba(168,189,210,0.55)] xl:mt-10 xl:px-9 xl:py-4 xl:text-base 2xl:px-10 2xl:py-5 2xl:text-lg"
              style={{ backgroundColor: BRIDGERTON_BLUE }}
            >
              Contact me
              <span className="transition-transform duration-200 group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>

          
          <div className="order-1 lg:order-2">
            <div className="relative mx-auto aspect-[4/5] w-full max-w-sm lg:max-w-md xl:max-w-lg 2xl:max-w-2xl">
        
              <div
                className="absolute -inset-6 -z-10 rounded-[3rem] blur-3xl xl:-inset-10 2xl:-inset-14"
                style={{
                  backgroundColor: BRIDGERTON_BLUE,
                  opacity: 0.1,
                }}
                aria-hidden="true"
              />
           
              <div className="relative h-full w-full overflow-hidden rounded-[2rem] xl:rounded-[2.5rem]">
                <Image
                  src="/par.jpg"
                  alt="Portrait photo of Queen Carine"
                  fill
                  priority
                  sizes="(max-width: 640px) 384px, (max-width: 1280px) 448px, (max-width: 1536px) 576px, 672px"
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