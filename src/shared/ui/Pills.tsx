type PillsProps = {
  data: string[];
  variant?: "light" | "dark";
  className?: string;
};

const variants: any = {
  light:
    "border-gray-200 bg-gray-50 text-gray-700 backdrop-blur-sm   hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-600",
  dark: "border-white/15 bg-white/5 text-gray-300 backdrop-blur-sm   hover:border-indigo-200 hover:bg-white/[0.03] hover:text-indigo-600",
};

const Pills = ({ data, variant = "light", className, ...rest }: PillsProps) => {
  return (
    <div className={`flex flex-wrap ${className}`} {...rest}>
      {data.map((tech) => (
        <span
          key={tech}
          className={`rounded-full border px-4 py-2 text-sm font-medium transition sm:text-sm ${variants[variant]}`}
        >
          {tech}
        </span>
      ))}
    </div>
  );
};
export default Pills;
