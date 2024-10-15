import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
interface Props {
  imageTextData: any;
}

const ImageTextTwoManagedHostingAPlusComponent: React.FC<Props> = ({
  imageTextData,
}) => {
  return (
    <>
      <section className="container relative mx-auto py-4 md:py-6 lg:py-8 px-2 lg:px-8 bg-[url('/services-one-bg.png')] bg-no-repeat bg-cover bg-top">
        <div className="bg-gray-50 inset-0 opacity-80 absolute" />
        <div
          className="items-center  relative"
          style={{
            marginTop: `${imageTextData?.gap_top / 4}rem`,
            marginBottom: `${imageTextData?.gap_bottom / 4}rem`,
          }}
        >
          {imageTextData?.align_element === "left" && imageTextData?.image ? (
            <>
              <div className="w-full flex flex-col lg:flex-row items-start justify-center relative gap-6 px-4 ">
                <div className="w-full lg:w-2/4 flex flex-col gap-2 items-start justify-center ">
                  {imageTextData?.heading ? (
                    <div
                      className="w-full  text-bullt-primary font-semibold md:text-start text-center sm:text-4xl text-2xl"
                      dangerouslySetInnerHTML={{
                        __html: imageTextData?.heading,
                      }}
                    />
                  ) : null}
                  <div className="relative h-[300px] w-full lg:hidden block">
                    {" "}
                    <Image
                      src={`${process.env.NEXT_PUBLIC_BASE_URL}${imageTextData?.image}`}
                      alt={imageTextData?.heading}
                      style={{
                        position: "absolute",
                        objectFit: "contain",
                        inset: 0,
                      }}
                      fill={true}
                      className="rounded-xl h-[300px] "
                    />
                  </div>
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
                      <div className="flex gap-2 bg-bullt-quaternary/[0.06] rounded-md p-2">
                        <span className="text-bullt-tertiary text-xl">✔</span>
                        <div
                          className="text-bullt-primary text-base font-normal col-span-1"
                          dangerouslySetInnerHTML={{
                            __html: item?.title,
                          }}
                        />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="relative w-full lg:w-2/4 lg:h-[400px] lg:block hidden">
                  <Image
                    src={`${process.env.NEXT_PUBLIC_BASE_URL}${imageTextData?.image}`}
                    alt={imageTextData?.heading}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="rounded-md w-full h-full object-contain"
                  />
                </div>
              </div>
            </>
          ) : null}

          {imageTextData?.align_element === "right" && imageTextData?.image ? (
            <>
              <div className="W-full flex flex-col lg:flex-row items-start gap-6 justify-center relative px-4 ">
                <div className="relative w-full lg:w-2/4 lg:h-[500px] h-[300px] lg:block hidden">
                  {" "}
                  <Image
                    src={`${process.env.NEXT_PUBLIC_BASE_URL}${imageTextData?.image}`}
                    alt={imageTextData?.heading}
                    style={{
                      position: "absolute",
                      objectFit: "cover",
                      inset: 0,
                    }}
                    fill={true}
                    className="rounded-xl h-full "
                  />
                </div>
                {imageTextData?.heading || imageTextData?.description ? (
                  <div className="relative lg:w-2/4 w-full h-auto flex gap-2 flex-col items-start justify-center sm:mt-0 mt-4">
                    <div className="absolute right-0 top-0">
                      <Image
                        src="/testi-bg-1.png"
                        alt="Heading Image"
                        width={400}
                        height={400}
                      />
                    </div>
                    {imageTextData?.heading ? (
                      <div
                        className="relative text-bullt-primary font-semibold text-start sm:text-4xl text-2xl"
                        dangerouslySetInnerHTML={{
                          __html: imageTextData?.heading,
                        }}
                      />
                    ) : null}

                    <div className="relative h-[300px] w-full lg:hidden block">
                      {" "}
                      <Image
                        src={`${process.env.NEXT_PUBLIC_BASE_URL}${imageTextData?.image}`}
                        alt={imageTextData?.heading}
                        style={{
                          position: "absolute",
                          objectFit: "cover",
                          inset: 0,
                        }}
                        fill={true}
                        className="rounded-xl h-[300px] "
                      />
                    </div>

                    {imageTextData?.description ? (
                      <div
                        className="relative text-justify text-bullt-primary/[0.8] text-lg py-2 font-400  "
                        dangerouslySetInnerHTML={{
                          __html: imageTextData?.description,
                        }}
                      />
                    ) : null}
                    <div className="list-disc sm:grid sm:grid-cols-2 gap-3 text-lg list-inside space-y-1">
                      {imageTextData?.list_name.map((item: any, index: any) => (
                        <div className="flex gap-2 bg-bullt-quaternary/[0.06] rounded-md p-2">
                          <span className="text-bullt-tertiary text-xl">✔</span>
                          <div
                            className="text-bullt-primary text-base font-normal col-span-1"
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
    </>
  );
};

export default ImageTextTwoManagedHostingAPlusComponent;
