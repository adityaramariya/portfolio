type CardProps = {
  variant?: "light" | "dark";
  children: React.ReactNode;
  className?: string;
};

const variants = {
  light: "border-gray-200 bg-white hover:border-indigo-200",
  dark: "border-white/10 bg-white/[0.03] hover:border-indigo-400/30 hover:bg-white/[0.06]",
};

const Card = ({ variant = "light", children, className }: CardProps) => {
  return (
    <div
      className={`group relative overflow-hidden rounded-3xl border p-7 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl  sm:p-9 ${variants[variant]} ${className}`}
    >
      {children}
    </div>
  );
};
export default Card;
