import Image from "next/image";
import React from "react";

type Props = {
  content: {
    heading: string;
    description: string;
    img: string;
  };
};

const OverViewPageBanner = ({ content }: Props) => {
  return (
    <section className=" w-full bg-[url('https://pagedone.io/asset/uploads/1691055810.png')] bg-center bg-cover">
      <div className=" sm:min-h-[450px] min-h-[450px]  lg:h-[500px] container max-w-7xl mx-auto grid lg:grid-cols-2 grid-cols-1 justify-center items-center  lg:p-6 p-4">
        <div>
          {" "}
          {content?.heading ? (
            <>
              <div
                className="w-full items-start font-semibold sm:text-4xl text-2xl tailwind-unreset"
                dangerouslySetInnerHTML={{ __html: content?.heading }}
              ></div>
            </>
          ) : null}
          {content?.description ? (
            <>
              <div
                className="items-start tailwind-unrested py-3 sm:text-xl text-bullt-primary/[0.8]"
                dangerouslySetInnerHTML={{
                  __html: content?.description,
                }}
              ></div>
            </>
          ) : null}
        </div>

        <div className="w-full">
          <img
            src={`${process.env.NEXT_PUBLIC_BASE_URL}${content?.img}`}
            alt={content?.heading}
            className="w-full h-[300px] lg:h-[350px] object-contain rounded-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default OverViewPageBanner;
