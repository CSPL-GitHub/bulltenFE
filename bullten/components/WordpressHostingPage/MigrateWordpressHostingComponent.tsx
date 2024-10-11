import Image from "next/image";
import React from "react";
type Props = { AboutData: any };

const MigrateWordpressHostingComponent = ({ AboutData }: Props) => {
  return (
    <section className="container mx-auto lg:py-16 py-6 px-4">
      <div className="max-w-7xl mx-auto relative lg:px-4 px-2 lg:gap-8 gap-4 flex flex-col justify-center items-center">
        <div className="max-w-4xl"></div>
        <div className=" flex lg:flex-row flex-col lg:gap-4 gap-2 items-start justify-between">
          <div className="relative lg:w-[50%] w-full flex flex-col items-center justify-center text-center text-2xl sm:text-4xl font-bold py-2">
            <div className="absolute ">
              <img
                src="/icon-lines-6.81833a8f.png"
                alt="Heading Image"
                width={400}
                height={400}
                className="custom-bounce "
              />
            </div>
            {AboutData?.image ? (
              <div className="relative w-[400px] h-[250px] lg:w-full lg:h-full rounded-sm overflow-hidden lg:px-4 px-0">
                <img
                  src={`${process.env.NEXT_PUBLIC_BASE_URL}${AboutData?.image}`}
                  alt={AboutData?.heading}
                  className="rounded-lg w-full h-full object-contain"
                />
              </div>
            ) : null}
          </div>

          <div className="lg:w-[50%] w-full  mt-2 py-4 lg:mt-0">
            {AboutData?.heading ? (
              <div
                className="sm:text-4xl text-2xl font-bold text-gray-800 block pb-2 text-left"
                dangerouslySetInnerHTML={{
                  __html: AboutData?.heading,
                }}
              />
            ) : null}
            {AboutData?.description ? (
              <div
                className="text-lg text-gray-600 mt-2 lg:text-left text-justify"
                dangerouslySetInnerHTML={{
                  __html: AboutData?.description,
                }}
              />
            ) : null}
            <section className="w-full grid md:grid-cols-2 grid-cols-1 gap-2 mt-4">
              {AboutData?.wp_wibsite_migarte.map((item: any, index: number) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-start gap-2"
                >
                  {item.image ? (
                    <div className="lg:w-20 lg:h-20 w-16 h-16 relative">
                      <Image
                        src={`${process.env.NEXT_PUBLIC_BASE_URL}${item.image}`}
                        alt={item.heading}
                        layout="fill"
                        objectFit="contain"
                      />
                    </div>
                  ) : null}

                  <div className="flex flex-col gap-1 justify-center items-start">
                    {item.heading ? (
                      <h3 className="text-xl font-semibold text-left">
                        {item.heading}
                      </h3>
                    ) : null}
                    {item.description ? (
                      <p className="text-gray-600 text-left">
                        {item.description}
                      </p>
                    ) : null}
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

export default MigrateWordpressHostingComponent;
