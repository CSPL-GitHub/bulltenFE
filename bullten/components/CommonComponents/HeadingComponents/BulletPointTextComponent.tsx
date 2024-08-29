import React from "react";
import classNames from "classnames";

type Props = {
  children: any;
  paddingTop?: number; // Accepts padding as a Tailwind class or custom string
  hoverEffect?: string; // Accepts hover effect classes
  alignmentType?: number;
};

const BulletPointTextComponent = ({
  children,
  paddingTop,
  hoverEffect = "",
  alignmentType,
}: Props) => {
  return (
    <div>
      <h5
        className={classNames(
          `flex items-center text-[1.1rem] lg:text-[1rem] font-normal text-bullt-primary/[0.6] ${
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
      </h5>
    </div>
  );
};

export default BulletPointTextComponent;
