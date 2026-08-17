type SectionHeaderProps = {
  title: string;
  description: React.ReactNode;
  variant?: "light" | "dark";
};

const variants = {
  light: "text-sm font-semibold uppercase tracking-[0.2em] text-indigo-600",
  dark: "text-sm font-semibold uppercase tracking-[0.2em] text-indigo-400",
};

const SectionHeader = ({
  title,
  description,
  variant = "light",
}: SectionHeaderProps) => (
  <div>
    <div className="mb-4 flex items-center gap-3">
      <span className="h-px w-10 bg-indigo-600" />
      <span className={variants[variant]}>{title}</span>
    </div>

    <h2 className="max-w-4xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
      {description}
    </h2>
  </div>
);

export default SectionHeader;
