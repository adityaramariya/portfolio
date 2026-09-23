interface FooterProps {}

const Footer = ({}: FooterProps) => {
  return (
    <div className="mt-16 border-t border-white/10 pt-10">
      <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-gray-500">
            Always learning
          </p>

          <p className="mt-2 text-lg font-medium text-gray-300">
            Exploring better ways to build, scale and ship great products.
          </p>
        </div>

        <a
          href="#contact"
          className="group inline-flex items-center gap-2 text-sm font-semibold text-white transition-colors hover:text-indigo-400"
        >
          Hire Me
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </a>
      </div>
    </div>
  );
};

export default Footer;
