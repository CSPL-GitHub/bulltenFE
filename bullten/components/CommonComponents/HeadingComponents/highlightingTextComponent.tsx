import React from "react";

type Props = {
  children: any;
};

const highlightingTextComponent = ({ children }: Props) => {
  return (
    <div>
      <h3 className="flex items-center justify-center sm:text-[2.2rem] text-[1.5rem] font-bold py-3">
        {children}
      </h3>
    </div>
  );
};

export default highlightingTextComponent;
