import React from "react";

type Props = {
  description: string;
  alignmentType: number;
};

const SectionDescription = ({ description, alignmentType }: Props) => {
  return (
    <p
      className={`w-full ${
        alignmentType === 1
          ? `sm:text-start`
          : alignmentType === 2
          ? `sm:text-end`
          : `sm:text-center`
      }  text-tgh-text-primary text-start sm:text-4xl text-3xl font-400`}
    >
      {description}
    </p>
  );
};

export default SectionDescription;
