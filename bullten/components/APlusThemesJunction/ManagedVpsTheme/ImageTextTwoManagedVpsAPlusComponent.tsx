import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
interface Props {
  imageTextData: any;
}

const ImageTextTwoManagedVpsAPlusComponent: React.FC<Props> = ({ imageTextData }) => {
  return (
    <section className="container mx-auto py-4 lg:py-8 px-2 lg:px-8  bg-contain bg-no-repeat">
      <div
        className="items-center "
        style={{
          marginTop: `${imageTextData?.gap_top / 4}rem`,
          marginBottom: `${imageTextData?.gap_bottom / 4}rem`,
        }}>


        {imageTextData?.align_element === "left" && imageTextData?.image ? (
          <>
            <div className="w-full flex flex-col lg:flex-row items-start justify-center relative gap-4 px-4 ">
              {imageTextData?.heading || imageTextData?.description ? (
                <div className="w-full lg:w-2/4 flex flex-col gap-2 items-start justify-center ">
                  {imageTextData?.heading ? (
                    <div
                      className="w-full text-bullt-primary font-semibold text-start sm:text-4xl text-2xl"
                      dangerouslySetInnerHTML={{
                        __html: imageTextData?.heading, 
                      }}
                    />
                  ) : null}
                  {imageTextData?.description ? (
                    <div
                      className="text-justify text-bullt-primary/[0.8] text-lg py-2 font-400  "
                      dangerouslySetInnerHTML={{
                        __html: imageTextData?.description,
                      }}
                    />
                  ) : null}
                  <div className="list-disc sm:grid sm:grid-cols-2 gap-3 text-lg list-inside space-y-1">
                    {imageTextData?.list_name.map((item: any, index: any) => (
                      <div className="flex gap-2 ">
                        <span className="text-bullt-tertiary text-xl">✔</span>
                        <div
                          className="text-bullt-primary/[0.8] col-span-1"
                          dangerouslySetInnerHTML={{
                            __html: item?.title,
                          }}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              ) : null}
              <div className="relative w-full lg:w-2/4 h-[450px]">
                <Image
                  src={`${process.env.NEXT_PUBLIC_BASE_URL}${imageTextData?.image}`}
                  alt={imageTextData?.heading}
                  style={{
                    position: "absolute",
                    objectFit: "contain",
                    inset: 0,
                  }}
                  fill={true}
                  className=""
                />
              </div>
            </div>
          </>
        ) : null}

        {imageTextData?.align_element === "right" && imageTextData?.image ? (
          <>
            <div className="W-full flex flex-col lg:flex-row items-start justify-center relative px-4">
              <div className="relative w-full lg:w-2/4 h-[450px]">
                <Image
                  src={`${process.env.NEXT_PUBLIC_BASE_URL}${imageTextData?.image}`}
                  alt={imageTextData?.heading}
                  style={{
                    position: "absolute",
                    objectFit: "contain",
                    inset: 0,
                  }}
                  fill={true}
                  className=""
                />
              </div>
              {imageTextData?.heading || imageTextData?.description ? (
                <div className="lg:w-2/4 w-full flex gap-2 flex-col items-start justify-center sm:mt-0 mt-4">
                  {imageTextData?.heading ? (
                    <div
                      className="w-full text-bullt-primary font-semibold text-start sm:text-4xl text-2xl"
                      dangerouslySetInnerHTML={{
                        __html: imageTextData?.heading,
                      }}
                    />
                  ) : null}

                  {imageTextData?.description ? (
                    <div
                      className="text-justify text-bullt-primary/[0.8] text-lg py-2 font-400  "
                      dangerouslySetInnerHTML={{
                        __html: imageTextData?.description,
                      }}
                    />
                  ) : null}
                  <div className="list-disc sm:grid sm:grid-cols-2 gap-3 text-lg list-inside space-y-1">
                    {imageTextData?.list_name.map((item: any, index: any) => (
                      <div className="flex gap-2 ">
                        <span className="text-bullt-tertiary text-xl">✔</span>
                        <div
                          className="text-bullt-tertiary font-semibold col-span-1"
                          dangerouslySetInnerHTML={{
                            __html: item?.title,
                          }}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>
          </>
        ) : null}
      </div>

    </section>
  );
};

export default ImageTextTwoManagedVpsAPlusComponent;
