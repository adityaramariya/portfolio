"use client";

const Banner = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-gray-950">
      {/* =========================
          DESKTOP BACKGROUND VIDEO
      ========================== */}
      <div className="absolute inset-0 hidden overflow-hidden md:block">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 h-full w-full object-cover"
        >
          {/* <source src="/videos/banner-video.mp4" type="video/mp4" /> */}
          <source
            src={`${process.env.NEXT_PUBLIC_BASE_PATH}/videos/banner-video.mp4`}
            type="video/mp4"
          />
        </video>
      </div>
      {/* =========================
          MOBILE BACKGROUND
      ========================== */}
      <div
        className="absolute inset-0 block bg-cover bg-center bg-no-repeat md:hidden"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80')",
        }}
      />

      {/* =========================
          DARK OVERLAY
      ========================== */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/50 to-black/90" />

      {/* =========================
          GLOW
      ========================== */}
      <div className="absolute left-1/2 top-1/2 h-[350px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/20 blur-[140px]" />

      {/* =========================
          CONTENT
      ========================== */}
      <div className="relative z-10 flex min-h-screen items-center px-5 pt-20">
        <div className="mx-auto w-full max-w-4xl py-16 text-center text-white sm:py-20">
          {/* Heading */}
          <h1 className="text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            I build{" "}
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              fast, scalable
            </span>{" "}
            and beautiful web experiences.
          </h1>

          {/* Description */}
          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-gray-300 sm:text-lg md:text-xl">
            I turn complex product requirements into intuitive, responsive, and
            maintainable digital experiences.
          </p>

          {/* Tech Stack */}
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            {["React", "Next.js", "TypeScript", "Tailwind CSS"].map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs text-gray-300 backdrop-blur-sm sm:text-sm"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Buttons */}
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#projects"
              className="group inline-flex min-w-[160px] items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-gray-950 shadow-lg shadow-white/10 transition-all duration-300 hover:-translate-y-1 hover:bg-gray-100 hover:shadow-xl"
            >
              View My Work
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>

            <a
              href="#contact"
              className="inline-flex min-w-[160px] items-center justify-center rounded-xl border border-white/25 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-white/40 hover:bg-white/20"
            >
              Let's Talk
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="mt-12 hidden flex-col items-center gap-2 text-xs text-gray-400 sm:flex">
            <span>Scroll to explore</span>

            <div className="h-8 w-px bg-gradient-to-b from-gray-400 to-transparent" />
          </div>
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-950 to-transparent" />
    </section>
  );
};

export default Banner;
