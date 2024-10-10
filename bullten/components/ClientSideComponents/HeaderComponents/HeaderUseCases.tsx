"use client";
import React from "react";

type Props = {
  insideSubMenu: any;
};

const HeaderUseCases: React.FC<Props> = ({ insideSubMenu }) => {
  return (
    <div className="col-span-2">
      {insideSubMenu?.usecases?.length > 0 ? (
        <div className=" bg-bullt-quaternary/[0.02] p-4 rounded-md scroll sm:min-h-[400px] h-auto overflow-y-auto">
          <h6 className="font-semibold text-lg text-bullt-quinary mb-2">
            {insideSubMenu?.usecases_heading}
          </h6>
          <ul className="flex flex-col gap-2">
            {insideSubMenu?.usecases?.map((useCase: any, index: number) => {
              return (
                <a
                  href={`use-cases/${useCase?.link_url}`}
                  key={index}
                  className="text-bullt-quaternary hover:bg-bullt-quaternary/[0.05] text-sm hover:underline underline-offset-2 px-1.5 py-1 rounded-sm"
                >
                  {useCase?.link_text}
                </a>
              );
            })}
          </ul>
        </div>
      ) : null}
    </div>
  );
};

export default HeaderUseCases;
