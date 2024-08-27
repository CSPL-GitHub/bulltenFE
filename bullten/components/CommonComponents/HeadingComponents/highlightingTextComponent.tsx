import React from "react";

type Props = {
  children: any;
};

const HighlightingTextComponent = ({ children }: Props) => {
  return (
    <div>
      <h3 className="flex items-center justify-center text-[1rem] lg:text-[1.5rem] font-bold text-bullt-tertiary">
        {children}
      </h3>
    </div>
  );
};

export default HighlightingTextComponent;
