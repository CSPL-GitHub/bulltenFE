import React from "react";
import SectionHeading from "./SectionHeading";
import SectionDescription from "./SectionDescription";

type Props = {
  heading: string;
  description: string;
  alignmentType: number;
};

export default function SectionHeadingMain({
  heading,
  description,
  alignmentType,
}: Props) {
  return (
    <div
      className={`w-full mx-auto flex flex-col justify-center gap-3 px-4 ${
        alignmentType == 1
          ? `sm:items-start`
          : alignmentType == 2
          ? `sm:items-end`
          : `sm:items-center`
      } items-start`}
    >
      {heading ? (
        <SectionHeading heading={heading} alignmentType={alignmentType} />
      ) : null}
      {description ? (
        <SectionDescription
          description={description}
          alignmentType={alignmentType}
        />
      ) : null}
    </div>
  );
}
