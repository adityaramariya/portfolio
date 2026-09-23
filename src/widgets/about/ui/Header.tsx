import Highlight from "@/shared/ui/Highlight";
import SectionHeader from "@/shared/ui/SectionHeader";

interface HeaderProps {}

const Header = ({}: HeaderProps) => {
  return (
    <SectionHeader
      title="About Me"
      description={
        <>
          I don't just build interfaces. <br />I build{" "}
          <Highlight>frontend experiences</Highlight> <br />
          that scale
        </>
      }
      classes="text-primary"
    />
  );
};

export default Header;
