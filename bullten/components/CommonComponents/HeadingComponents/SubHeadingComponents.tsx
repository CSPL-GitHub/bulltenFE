import React from "react";

type Props = {
  children: any;
};

const SubHeadingComponents = ({ children }: Props) => {
  return (
    <div>
      <h2 className="flex items-center justify-center sm:text-[2.2rem] text-[1.5rem] font-bold py-3">
        {children}
      </h2>
    </div>
  );
};

export default SubHeadingComponents;
