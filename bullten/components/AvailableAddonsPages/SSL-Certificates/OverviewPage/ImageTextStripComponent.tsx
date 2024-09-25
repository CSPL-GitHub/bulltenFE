import React from "react";
type Props = { DataContent: any };
const ImageTextStripComponent = ({ DataContent }: Props) => {
 
  return (
    <div className="w-full container mx-auto relative overflow-hidden  md:py-10 py-4 md:px-6 px-4">
      <div className="max-w-7xl grid md:grid-cols-2 grid-cols-1 mx-auto relative justify-center items-center bg-bullt-quaternary/[0.05] shadow-sm rounded-lg px-6 py-10">
        <div className="">
          {" "}
          {DataContent?.engine_rank[0]?.browsers_heading && (
            <div
              className="w-full lg:text-left text-center text-bullt-primary lg:text-xl text-2xl font-semibold"
              dangerouslySetInnerHTML={{
                __html: DataContent?.engine_rank[0]?.browsers_heading,
              }}
            />
          )}
          <div className="rounded-lg md:hidden block">
            <img
              src="https://aboutssl.org/wp-content/uploads/2021/03/https-not-secure.svg"
              alt="Background Image"
              className="object-cover rounded-md object-center w-full h-full"
            />
          </div>
          {DataContent?.engine_rank[0]?.browsers_description && (
            <div
              className="w-full md:text-left text-justify text-bullt-primary text-lg py-4"
              dangerouslySetInnerHTML={{
                __html: DataContent?.engine_rank[0]?.browsers_description,
              }}
            />
          )}
        </div>
        <div className="rounded-lg md:block hidden">
          <img
            src="https://aboutssl.org/wp-content/uploads/2021/03/https-not-secure.svg"
            alt="Background Image"
            className="object-cover rounded-md object-center w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default ImageTextStripComponent;
