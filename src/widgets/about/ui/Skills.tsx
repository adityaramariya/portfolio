import Pills from "@/shared/ui/Pills";
import { skills } from "../model/about-data";

interface SkillsProps {}

const Skills = ({}: SkillsProps) => {
  return <Pills data={skills} className="mt-10 gap-2" />;
};

export default Skills;
