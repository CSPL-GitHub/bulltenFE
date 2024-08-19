import React from "react";

type Props = {
  heading: string;
  alignmentType: number;
};

const SectionHeading = ({ heading, alignmentType }: Props) => {
  return (
    // <div className="relative">
    //   <div className="sm:text-5xl text-4xl font-semibold outlined-text">
    //     {heading}
    //   </div>
    //   <h2
    //     className={`w-full h-full absolute top-2/3 start-2 transform -translate-y-1/2 sm:text-3xl text-2xl font-base font-semibold rounded-3xl ${
    //       alignmentType === 1
    //         ? `text-tgh-text-quinary`
    //         : alignmentType == 2
    //         ? `text-tgh-text-quinary`
    //         : `text-tgh-text-quinary`
    //     }`}
    //   >
    //     {heading}
    //   </h2>
    // </div>
    <h2
      className={`capitalize text-start text-2xl font-semibold px-4 pt-3 pb-2 rounded-3xl ${
        alignmentType === 1
          ? `text-tgh-text-quinary`
          : alignmentType == 2
          ? `text-tgh-text-quinary`
          : `text-tgh-text-quinary`
      }`}
    >
      {heading}
    </h2>
  );
};

export default SectionHeading;
