type ButtonProps = {
  type?: "button" | "submit" | "reset";
  variant?: "light" | "dark";
  label?: string;
  isIcon?: boolean;
  children?: React.ReactNode;
};

const variants = {
  light: "border-white bg-white text-gray-950 hover:bg-gray-100",
  dark: "border-white/25 bg-white/10 text-white hover:border-white/40 hover:bg-white/20",
};

const Button = ({
  type = "button",
  variant = "light",
  label = "button",
  isIcon,
  children,
  ...rest
}: ButtonProps) => {
  return (
    <button
      type={type}
      className={`group border inline-flex min-w-[160px]  items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-sm font-semibold shadow-lg shadow-white/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl backdrop-blur-md ${variants[variant]}`}
    >
      {label}
      {isIcon ? <>{children}</> : null}
    </button>
  );
};

export default Button;
