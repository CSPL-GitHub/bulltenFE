import React from "react";

type Props = {
  children: any;
};

const ParaGraphText = ({ children }: Props) => {
  return (
    <div>
      <h3 className="flex items-center justify-center text-[1.5rem] lg:text-[1.1rem] font-normal py-3 ">
        {children}
      </h3>
    </div>
  );
};

export default ParaGraphText;
