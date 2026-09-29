import Highlight from "@/shared/ui/Highlight";
import SectionHeader from "@/shared/ui/SectionHeader";

const Header = () => {
  return (
    <div className="mb-16 max-w-3xl">
      <SectionHeader
        variant="dark"
        title="Experience"
        description={
          <>
            Designed{" "}
            <Highlight variant="dark">reusable component patterns</Highlight>{" "}
            that improved consistency across multiple products.
          </>
        }
      />

      <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-400">
        A journey focused on building thoughtful interfaces, solving complex
        frontend problems and continuously improving the way I build digital
        products.
      </p>
    </div>
  );
};

export default Header;
