"use client";

import { basePath } from "@/constant";

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-gray-950 py-24 text-white sm:py-32"
    >
      {/* Background Glows */}
      <div className="absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-indigo-600/15 blur-[140px]" />
      <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-purple-600/10 blur-[120px]" />
      <div className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-cyan-600/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Main CTA */}
        <div className="mx-auto max-w-5xl text-center">
          {/* Label */}
          <div className="mb-6 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-indigo-500" />

            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-400">
              Get In Touch
            </span>

            <span className="h-px w-10 bg-indigo-500" />
          </div>

          {/* Heading */}

          <h2 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl ">
            Let's {""}
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Connect.
            </span>
          </h2>

          {/* Description */}
          <p className="mx-auto mt-8 max-w-2xl text-base leading-8 text-gray-400 sm:text-lg">
            Interested in my experience or considering me for a frontend
            engineering opportunity? I'd be happy to connect.
          </p>
        </div>

        {/* Contact Details */}
        <div className="mx-auto mt-14 grid max-w-4xl gap-4 sm:grid-cols-4">
          {/* Email */}

          <a
            href={`${basePath}/aditya_ramariya_front_end_developer.pdf`}
            target="_blank"
            className="group border border-indigo-600/10 bg-white/[0.03] p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-indigo-400/30 hover:bg-white/[0.06]"
          >
            <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-400">
              ↓
            </div>
            <p className="mt-4 text-xs font-medium uppercase tracking-widest text-gray-500">
              Download Resume
            </p>
          </a>

          <a
            href="mailto:aditya.ramariya@gmail.com"
            className="group border border-indigo-600/10 bg-white/[0.03] p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-indigo-400/30 hover:bg-white/[0.06]"
          >
            <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-400">
              @
            </div>

            <p className="mt-4 text-xs font-medium uppercase tracking-widest text-gray-500">
              Email
            </p>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/adityaramariya"
            target="_blank"
            rel="noopener noreferrer"
            className="group border border-indigo-600/10 bg-white/[0.03] p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-indigo-400/30 hover:bg-white/[0.06]"
          >
            <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/10 text-sm font-bold text-blue-400">
              in
            </div>

            <p className="mt-4 text-xs font-medium uppercase tracking-widest text-gray-500">
              LinkedIn
            </p>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/adityaramariya"
            target="_blank"
            rel="noopener noreferrer"
            className="group border border-indigo-600/10 bg-white/[0.03] p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-indigo-400/30 hover:bg-white/[0.06]"
          >
            <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-sm font-bold text-white">
              GH
            </div>

            <p className="mt-4 text-xs font-medium uppercase tracking-widest text-gray-500">
              GitHub
            </p>

            {/* <p className="mt-2 text-sm font-medium text-gray-300 transition-colors group-hover:text-white">
              Aditya Ramariya
            </p> */}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
