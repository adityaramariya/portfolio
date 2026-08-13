"use client";

const WhyWorkWithMe = () => {
  const reasons = [
    {
      number: "01",
      title: "8+ Years Experience",
      description:
        "Years of hands-on experience building production-ready web applications and solving real-world frontend challenges.",
    },
    {
      number: "02",
      title: "Product Mindset",
      description:
        "I think beyond the UI—focusing on usability, performance and the business goals behind every product.",
    },
    {
      number: "03",
      title: "Clean & Scalable",
      description:
        "Reusable components, thoughtful architecture and maintainable code designed to grow with the product.",
    },
    {
      number: "04",
      title: "Pixel-Perfect UI",
      description:
        "Strong attention to visual details, responsive layouts and consistent experiences across devices.",
    },
  ];

  return (
    <section
      id="why-me"
      className="relative overflow-hidden bg-white py-24 text-gray-950 sm:py-32"
    >
      {/* Background Glow */}
      <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-indigo-100/60 blur-[120px]" />
      <div className="absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-purple-100/50 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 max-w-3xl">
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-10 bg-indigo-600" />

            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-600">
              Why Work With Me
            </span>
          </div>

          <h2 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
            More than just{" "}
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
              writing code.
            </span>
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-500">
            I bring engineering experience, product thinking and attention to
            detail to every project I work on.
          </p>
        </div>

        {/* Reasons */}
        <div className="grid gap-5 md:grid-cols-2">
          {reasons.map((reason) => (
            <article
              key={reason.number}
              className="group relative overflow-hidden rounded-3xl border border-gray-200 bg-white p-7 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-xl sm:p-9"
            >
              {/* Background Number */}
              <span className="pointer-events-none absolute -right-4 -top-8 text-[120px] font-black leading-none text-gray-50 transition-colors duration-500 group-hover:text-indigo-50">
                {reason.number}
              </span>

              <div className="relative">
                {/* Number */}
                <span className="text-sm font-bold tracking-widest text-indigo-600">
                  {reason.number}
                </span>

                {/* Title */}
                <h3 className="mt-10 text-2xl font-bold tracking-tight text-gray-950 sm:text-3xl">
                  {reason.title}
                </h3>

                {/* Description */}
                <p className="mt-4 max-w-xl text-base leading-7 text-gray-500">
                  {reason.description}
                </p>

                {/* Bottom Line */}
                <div className="mt-8 h-px w-12 bg-gray-200 transition-all duration-500 group-hover:w-24 group-hover:bg-indigo-500" />
              </div>
            </article>
          ))}
        </div>

        {/* Bottom Highlight */}
        <div className="mt-20 overflow-hidden rounded-3xl bg-gray-950 p-8 text-white sm:p-12">
          <div className="relative">
            {/* Glow */}
            <div className="absolute -right-20 -top-32 h-80 w-80 rounded-full bg-indigo-600/20 blur-[100px]" />
            <div className="absolute -bottom-40 left-1/3 h-80 w-80 rounded-full bg-purple-600/20 blur-[100px]" />

            <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-400">
                  My approach
                </p>

                <h3 className="mt-4 max-w-3xl text-2xl font-bold leading-tight sm:text-3xl lg:text-4xl">
                  Build it right. Keep it simple. Make it scale.
                </h3>

                <p className="mt-5 max-w-2xl text-base leading-7 text-gray-400">
                  I believe good frontend engineering is about finding the right
                  balance between great design, clean architecture, performance
                  and a seamless user experience.
                </p>
              </div>

              <a
                href="#contact"
                className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-gray-950 transition-all duration-300 hover:-translate-y-1 hover:bg-gray-100"
              >
                Let's Talk
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyWorkWithMe;
