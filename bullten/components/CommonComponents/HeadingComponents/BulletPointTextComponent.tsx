import React from "react";

type Props = {
  children: any;
};

const BulletPointTextComponent = ({ children }: Props) => {
  return (
    <div>
      <h5 className="flex items-center justify-center text-[2.2rem] lg:text-[1.1rem] font-normal ">
        {children}
      </h5>
    </div>
  );
};

export default BulletPointTextComponent;
