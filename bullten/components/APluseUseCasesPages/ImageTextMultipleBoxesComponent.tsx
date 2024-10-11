import Image from "next/image";
import React from "react";

type Props = { ImageTextBoxesData: any };

const ImageTextMultipleBoxesComponent = ({ ImageTextBoxesData }: Props) => {
  return (
    <div className="w-full h-auto gap-8 lg:py-14 py-6 border-[1px] bg-white rounded-md">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 justify-start items-start lg:px-0 px-4">
          <div>
            <div className={`flex gap-2 flex-col items-start justify-center `}>
              {ImageTextBoxesData?.heading ? (
                <div
                  className="w-full text-bullt-text-primary font-semibold text-start sm:text-4xl text-2xl"
                  dangerouslySetInnerHTML={{
                    __html: ImageTextBoxesData?.heading,
                  }}
                />
              ) : null}
              {ImageTextBoxesData?.description ? (
                <div
                  className="text-justify text-bullt-primary tailwind-unreset "
                  dangerouslySetInnerHTML={{
                    __html: ImageTextBoxesData?.description,
                  }}
                />
              ) : null}
            </div>
          </div>
          {ImageTextBoxesData?.image ? (
            <div className="relative h-[400px]">
              <Image
                src={`${process.env.NEXT_PUBLIC_BASE_URL}${ImageTextBoxesData?.image}`}
                alt={ImageTextBoxesData?.heading}
                fill={true}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="rounded-md object-contain h-[400px]"
              />
            </div>
          ) : null}
        </div>
        <div className="grid lg:grid-cols-4 grid-cols-1 gap-4 lg:px-0 px-4">
          {ImageTextBoxesData?.content.map((data: any, index: number) => {
            return (
              <div
                key={index}
                className="flex flex-col gap-1 rounded-lg border border-gray-50  bg-gray-50 p-3 shadow-solid-3 transition-all"
              >
                {data?.image ? (
                  <div className="relative flex h-20 w-20 items-center justify-center rounded-[4px] bg-primary">
                    <Image
                      src={`${process.env.NEXT_PUBLIC_BASE_URL}${data?.image}`}
                      width={50}
                      height={50}
                      alt={data?.heading}
                    />
                  </div>
                ) : null}

                {data?.heading ? (
                  <div
                    className="w-full text-bullt-text-primary font-semibold text-start sm:text-xl text-lg"
                    dangerouslySetInnerHTML={{
                      __html: data?.heading,
                    }}
                  />
                ) : null}

                {data?.description ? (
                  <div
                    className="text-justify text-bullt-primary tailwind-unreset text-base"
                    dangerouslySetInnerHTML={{
                      __html: data?.description,
                    }}
                  />
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ImageTextMultipleBoxesComponent;
