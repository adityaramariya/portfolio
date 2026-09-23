import { scrollToSection } from "@/shared/lib/utilities";
import Button from "@/shared/ui/button/button";

const Actions = () => {
  return (
    <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
      <Button label="View my work" isIcon>
        <span className="transition-transform duration-300 group-hover:translate-x-1">
          →
        </span>
      </Button>

      <Button
        label="Let's talk"
        variant="dark"
        onClick={() => scrollToSection("projects")}
      />
    </div>
  );
};

export default Actions;
