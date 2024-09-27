import React from "react";
type Props = { ImageTextData: any };
const ImageTextDetailsSectionComponent = ({ ImageTextData }: Props) => {
  return (
    <div className="w-full container mx-auto relative overflow-hidden md:py-10 py-4 md:px-6 px-4">
      <div className="max-w-7xl grid md:grid-cols-2 grid-cols-1 mx-auto relative justify-center items-center bg-bullt-quaternary/[0.05] shadow-sm rounded-lg px-6 ">
        <div className="">
          {ImageTextData?.details[0]?.heading && (
            <div
              className="w-full lg:text-left text-center text-bullt-primary lg:text-4xl text-2xl font-semibold"
              dangerouslySetInnerHTML={{
                __html: ImageTextData?.details[0]?.heading,
              }}
            />
          )}
          <div className="rounded-lg md:hidden block">
            <img
              src={`${process.env.NEXT_PUBLIC_BASE_URL}${ImageTextData?.details[0]?.image}`}
              alt="Background Image"
              className="object-cover rounded-md object-center w-full h-full"
            />
          </div>
          {ImageTextData?.details[0]?.description && (
            <div
              className="w-full md:text-left text-justify text-bullt-primary text-lg py-4"
              dangerouslySetInnerHTML={{
                __html: ImageTextData?.details[0]?.description,
              }}
            />
          )}
        </div>
        <div className="rounded-lg md:block hidden">
          <img
            src={`${process.env.NEXT_PUBLIC_BASE_URL}${ImageTextData?.details[0]?.image}`}
            alt="Background Image"
            className="object-contain rounded-md object-center w-full h-[400px]"
          />
        </div>
      </div>
    </div>
  );
};

export default ImageTextDetailsSectionComponent;
