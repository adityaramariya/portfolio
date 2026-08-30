"use client";

import { useTheme } from "../context/themeContext";
import Button from "./ui/button/button";

const ThemeButton = () => {
  const { theme, setTheme } = useTheme();
  return (
    <Button
      variant="dark"
      label={theme}
      onClick={() => {
        setTheme(theme === "light" ? "dark" : "light");
      }}
    ></Button>
  );
};

export default ThemeButton;
