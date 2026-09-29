import { scrollToSection } from "@/shared/lib/utilities";
import Button from "@/shared/ui/button/button";

const Actions = () => {
  return (
    <div className="mt-9 flex flex-row items-center justify-center gap-3">
      <Button
        label="View my work"
        isIcon
        onClick={() => scrollToSection("projects")}
      >
        <span className="transition-transform duration-300 group-hover:translate-x-1">
          →
        </span>
      </Button>

      <Button
        label="Let's talk"
        variant="dark"
        onClick={() => scrollToSection("contact")}
      />
    </div>
  );
};

export default Actions;
