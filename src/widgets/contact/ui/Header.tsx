const Header = () => (
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
      Interested in my experience or considering me for a frontend engineering
      opportunity? I'd be happy to connect.
    </p>
  </div>
);

export default Header;
