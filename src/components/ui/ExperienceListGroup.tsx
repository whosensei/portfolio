import { useState } from "react";
import { ExperienceItem } from "./ExperienceItem";

interface Experience {
  heading: string;
  subheading: string;
  points: string[];
}

interface Props {
  experiences: Experience[];
}

export const ExperienceListGroup = ({ experiences }: Props) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setExpandedIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="space-y-4">
      {experiences.map((exp, index) => (
        <ExperienceItem
          key={index}
          {...exp}
          isExpanded={expandedIndex === index}
          onToggle={() => handleToggle(index)}
        />
      ))}
    </div>
  );
};
