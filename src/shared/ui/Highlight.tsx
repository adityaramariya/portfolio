type HightlightProps = {
  children: React.ReactNode;
  variant?: "light" | "dark";
};

const Highlight = ({ variant = "light", children }: HightlightProps) => {
  const variants = {
    light:
      "bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent",
    dark: "bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent",
  };

  return <span className={variants[variant]}>{children}</span>;
};
export default Highlight;
