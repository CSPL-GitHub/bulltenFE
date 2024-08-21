import React from "react";

type Props = {
  children: any;
};

const BulletPointTextComponent = ({ children }: Props) => {
  return (
    <div>
      <h5 className="flex text-red-700 items-center justify-center sm:text-[2.2rem] text-[1.5rem] font-bold py-3">
        {children}
      </h5>
    </div>
  );
};

export default BulletPointTextComponent;
