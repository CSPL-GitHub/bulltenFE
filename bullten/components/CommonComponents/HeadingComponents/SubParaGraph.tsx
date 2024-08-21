import React from "react";

type Props = {
  children: any;
};

const SubParaGraph = ({ children }: Props) => {
  return (
    <div>
      <h6 className="flex items-center justify-center sm:text-[2.2rem] text-[1.5rem] font-bold py-3">
        {children}
      </h6>
    </div>
  );
};

export default SubParaGraph;
