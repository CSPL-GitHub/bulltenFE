import React from "react";
import classNames from "classnames";
type Props = {
  children: any;
  paddingTop?: number; // Accepts padding as a Tailwind class or custom string
  hoverEffect?: string; // Accepts hover effect classes
  alignmentType?: number;
};

const SubParaGraph = ({
  children,
  paddingTop,
  hoverEffect = "",
  alignmentType,
}: Props) => {
  return (
    <div>
      <h6
        className={classNames(
          `flex items-center  text-[1.1rem] lg:text-[0.90rem] font-nomral  ${
            paddingTop === 1
              ? "py-1"
              : paddingTop === 2
              ? "py-2"
              : paddingTop === 3
              ? "py-3"
              : "py-4"
          }
           ${
             alignmentType === 1
               ? "justify-start"
               : alignmentType === 2
               ? "justify-center"
               : "justify-end"
           }`,
          hoverEffect
        )}
      >
        {children}
      </h6>
    </div>
  );
};

export default SubParaGraph;
