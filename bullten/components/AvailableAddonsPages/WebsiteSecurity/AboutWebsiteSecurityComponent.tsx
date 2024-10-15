import Image from "next/image";
import React from "react";
type Props = { AboutData: any };

const AboutWebsiteSecurityComponent = ({ AboutData }: Props) => {
  return (
    <div className="container mx-auto lg:py-0 py-6 px-4">
      {" "}
      <section className="max-w-7xl mx-auto relative  lg:px-4 px-2 flex lg:flex-row flex-col gap-8 items-center justify-between">
        <div className="relative lg:w-[40%] w-full flex flex-col items-center justify-centertext-center text-2xl sm:text-4xl font-bold py-2">
          {AboutData?.plan_pricing[0]?.heading ? (
            <div
              className="sm:text-4xl text-2xl font-bold text-gray-800 lg:hidden block pb-4 text-center"
              dangerouslySetInnerHTML={{
                __html: AboutData?.plan_pricing[0]?.heading,
              }}
            />
          ) : null}
          <div className="absolute ">
            <Image
              src="/icon-lines-6.81833a8f.png"
              alt="Heading Image"
              width={400}
              height={400}
              className="custom-bounce "
            />
          </div>

          {AboutData?.plan_pricing[0]?.image && (
            <div className="relative w-[400px] h-[350px] lg:w-full lg:h-[400px] rounded-sm overflow-hidden">
              <Image
                src={`${process.env.NEXT_PUBLIC_BASE_URL}${AboutData?.plan_pricing[0]?.image}`}
                alt={AboutData?.plan_pricing[0]?.heading}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="rounded-lg w-full h-full object-contain"
              />
            </div>
          )}
        </div>

        <div className="lg:w-[60%] w-full text-center lg:text-left mt-0 py-4 lg:mt-0">
          {AboutData?.plan_pricing[0]?.heading ? (
            <div
              className="sm:text-4xl text-2xl font-bold text-gray-800 lg:block hidden pb-4"
              dangerouslySetInnerHTML={{
                __html: AboutData?.plan_pricing[0]?.heading,
              }}
            />
          ) : null}
          {AboutData?.plan_pricing[0]?.description ? (
            <p
              className="text-lg text-gray-600 mt-2 lg:text-left text-justify"
              dangerouslySetInnerHTML={{
                __html: AboutData?.plan_pricing[0]?.description,
              }}
            />
          ) : null}
        </div>
      </section>
    </div>
  );
};

export default AboutWebsiteSecurityComponent;
