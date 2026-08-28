interface LoaderProps {
  size?: "sm" | "md" | "lg";
  text?: string;
}

const Loader = ({ size = "md", text }: LoaderProps) => {
  const sizes = {
    sm: "h-4 w-4 border-2",
    md: "h-8 w-8 border-4",
    lg: "h-12 w-12 border-4",
  };

  return (
    <div className="flex items-center justify-center p-4">
      <div
        className={`animate-spin rounded-full border-gray-300 border-t-blue-600 ${sizes[size]}`}
      />{" "}
      <span className="ml-2 font-bold">{text}</span>
    </div>
  );
};

export default Loader;
