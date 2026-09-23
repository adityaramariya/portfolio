"use client";

import { useTheme } from "../model/themeContext";
import Button from "@/src/shared/ui/button/button";

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
