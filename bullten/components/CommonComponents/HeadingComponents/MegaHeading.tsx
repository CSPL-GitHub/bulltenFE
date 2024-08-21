import React from "react";

type Props = {
  children: any;
};

const MegaHeading = ({ children }: Props) => {
  return (
    <div>
      <h1 className="flex items-center justify-center sm:text-[2.2rem] text-[1.5rem] font-bold py-3">
        {children}
      </h1>
    </div>
  );
};

export default MegaHeading;
