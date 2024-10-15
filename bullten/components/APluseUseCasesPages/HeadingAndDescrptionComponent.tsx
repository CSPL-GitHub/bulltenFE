import React from "react";
import { FaLock } from "react-icons/fa";

type Props = { TextData: any };

const HeadingAndDescrptionComponent = ({ TextData }: Props) => {
  return (
    <section className="max-w-7xl mx-auto lg:py-16 py-6 lg:px-0 px-4">
      {TextData?.heading ? (
        <div className="lg:w-full w-[90%] mx-auto flex gap-1 justify-center items-center pb-4 ">
          <FaLock className="text-bullt-quaternary lg:text-4xl text-4xl " />

          <div
            className="lg:text-4xl text-2xl font-semibold text-gray-900 "
            dangerouslySetInnerHTML={{
              __html: TextData?.heading,
            }}
          />
        </div>
      ) : null}

      <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-lg">
        {TextData?.description ? (
          <div
            className="text-lg text-gray-900 mt-2 lg:text-left text-justify"
            dangerouslySetInnerHTML={{
              __html: TextData?.description,
            }}
          />
        ) : null}
      </div>
    </section>
  );
};

export default HeadingAndDescrptionComponent;
