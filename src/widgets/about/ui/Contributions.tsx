import Container from "./SectionWrapper";
import Title from "./Title";

interface Contribution {
  id: number;
  title: string;
  description: string;
}

interface ContributionsProps {
  items: Contribution[];
  title: string;
}

const Contributions = ({ items, title }: ContributionsProps) => {
  return (
    // <Container>

    // </Container>
    <div className="pt-12">
      <Title title={title} />
      <div className="grid gap-6 grid-cols-1 md:grid-cols-3 mt-8">
        {items.map(({ id, title, description }) => (
          <div key={id}>
            <h3 className="font-semibold text-gray-950">{title}</h3>
            <p className="mt-2 text-sm leading-6 text-gray-500">
              {description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contributions;
