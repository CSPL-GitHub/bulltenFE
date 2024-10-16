import Image from "next/image";
import React from "react";
type Props = { AboutData: any };

const SiteAndServerAboutComponent = ({ AboutData }: Props) => {
  return (
    <section className="container mx-auto lg:py-16 py-6 px-4">
      <div className="max-w-7xl mx-auto relative lg:px-4 px-2 lg:gap-8 gap-4 flex flex-col justify-center items-center">
        <div className="max-w-4xl">
          {AboutData?.about[0]?.heading ? (
            <div
              className="sm:text-4xl text-2xl font-bold text-gray-800 block pb-2 text-center"
              dangerouslySetInnerHTML={{
                __html: AboutData?.about[0]?.heading,
              }}
            />
          ) : null}
          {AboutData?.about[0]?.description ? (
            <div
              className="text-lg text-gray-600 mt-2 lg:text-center text-justify"
              dangerouslySetInnerHTML={{
                __html: AboutData?.about[0]?.description,
              }}
            />
          ) : null}
        </div>
        <div className=" flex lg:flex-row flex-col lg:gap-4 gap-2 items-start justify-between">
          <div className="relative lg:w-[60%] w-full flex flex-col items-center justify-center text-center text-2xl sm:text-4xl font-bold py-2">
            <div className="absolute ">
              <Image
                src="/icon-lines-6.81833a8f.png"
                alt="Heading Image"
                width={400}
                height={400}
                className="custom-bounce "
              />
            </div>

            {AboutData?.about[0]?.image && (
              <div className="relative w-[400px] h-[250px] lg:w-full lg:h-[400px] rounded-sm overflow-hidden lg:px-4 px-0">
                <Image
                  src={`${process.env.NEXT_PUBLIC_BASE_URL}${AboutData?.about[0]?.image}`}
                  alt={AboutData?.about[0]?.heading}
                  className="rounded-lg w-full h-full object-cover"
                  width={400}
                  height={400}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            )}
          </div>

          <div className="lg:w-[40%] w-full text-center lg:text-left mt-2 py-4 lg:mt-0">
            <section className="w-full grid grid-cols-1 gap-2">
              {AboutData.about[0].about_data.map((item: any, index: number) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-md p-6 flex lg:flex-row flex-col items-start gap-2"
                >
                  <div className="lg:w-24 lg:h-24 w-16 h-16 relative">
                    <Image
                      src={`${process.env.NEXT_PUBLIC_BASE_URL}${item.image}`}
                      alt={item.headings}
                      layout="fill"
                      objectFit="contain"
                    />
                  </div>
                  <div className="flex flex-col gap-1 justify-center items-start">
                    <h3 className="text-xl font-semibold text-left">
                      {item.headings}
                    </h3>
                    <p className="text-gray-600 text-left">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </section>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SiteAndServerAboutComponent;
