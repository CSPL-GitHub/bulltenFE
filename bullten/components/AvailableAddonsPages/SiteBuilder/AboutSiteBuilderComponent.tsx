import React from "react";
type Props = { AboutData: any };

const AboutSiteBuilderComponent = ({ AboutData }: Props) => {
  return (
    <div className="container mx-auto lg:py-16 py-6 px-4">
      <section className="max-w-7xl mx-auto relative  lg:px-4 px-2 flex lg:flex-row flex-col lg:gap-8 gap-2 items-start justify-between">
        <div className="relative lg:w-[40%] w-full flex flex-col items-center justify-centertext-center text-2xl sm:text-4xl font-bold py-2">
          {AboutData?.online_journey[0]?.heading ? (
            <div
              className="sm:text-4xl text-2xl font-bold text-gray-800 lg:hidden block pb-4"
              dangerouslySetInnerHTML={{
                __html: AboutData?.online_journey[0]?.heading,
              }}
            />
          ) : null}
          <div className="absolute ">
            <img
              src="/icon-lines-6.81833a8f.png"
              alt="Heading Image"
              width={400}
              height={400}
              className="custom-bounce "
            />
          </div>
          <div className="relative w-[400px] h-[250px] lg:w-full lg:h-[400px] rounded-sm overflow-hidden px-4">
            <img
              src={`${process.env.NEXT_PUBLIC_BASE_URL}${AboutData?.online_journey[0]?.image}`}
              alt={AboutData?.online_journey[0]?.heading}
              className="rounded-lg w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="lg:w-[60%] w-full text-center lg:text-left :mt-2 py-4 lg:mt-0">
          {AboutData?.online_journey[0]?.heading ? (
            <div
              className="sm:text-4xl text-2xl font-bold text-gray-800 lg:block hidden pb-4"
              dangerouslySetInnerHTML={{
                __html: AboutData?.online_journey[0]?.heading,
              }}
            />
          ) : null}
          {AboutData?.online_journey[0]?.description ? (
            <p
              className="text-lg text-gray-600 mt-2 lg:text-left text-justify"
              dangerouslySetInnerHTML={{
                __html: AboutData?.online_journey[0]?.description,
              }}
            />
          ) : null}
        </div>
      </section>
    </div>
  );
};

export default AboutSiteBuilderComponent;
