import Image from "next/image";
import React from "react";
type Props = { AboutData: any };

const AboutWebsiteBackupComponent = ({ AboutData }: Props) => {
  return (
    <div className="container mx-auto py-6 px-4">
      {" "}
      <section className="max-w-7xl mx-auto   lg:px-4 px-2 flex lg:flex-row flex-col gap-8 items-start justify-between">
        <div className=" lg:w-[40%] w-full flex flex-col items-center justify-center text-center text-2xl sm:text-4xl font-bold py-2">
          {AboutData[0]?.heading ? (
            <div
              className="sm:text-4xl text-2xl font-bold text-gray-800 lg:hidden block pb-4"
              dangerouslySetInnerHTML={{
                __html: AboutData[0]?.heading,
              }}
            />
          ) : null}
          {/* <div className="absolute ">
            <img
              src="/hero-1-circle-right.png"
              alt="Heading Image"
              width={400}
              height={400}
              className="custom-bounce "
            />
          </div> */}
          {AboutData[0]?.image && (
            <div className="relative w-[400px] h-[250px] lg:w-full lg:h-[400px] rounded-sm overflow-hidden z-0 shadow-md">
              <Image
                src={`${process.env.NEXT_PUBLIC_BASE_URL}${AboutData[0]?.image}`}
                alt="Team Meeting"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="rounded-lg w-full h-full object-cover shadow-md"
              />
            </div>
          )}
        </div>

        <div className="relative lg:w-[60%] w-full text-center lg:text-left mt-0 py-4 lg:mt-0">
          {AboutData[0]?.heading ? (
            <div
              className="sm:text-4xl text-2xl font-bold text-gray-800 lg:block hidden pb-4"
              dangerouslySetInnerHTML={{
                __html: AboutData[0]?.heading,
              }}
            />
          ) : null}
          {AboutData[0]?.description ? (
            <p
              className="text-lg text-gray-600 mt-2 lg:text-left text-justify"
              dangerouslySetInnerHTML={{
                __html: AboutData[0]?.description,
              }}
            />
          ) : null}
        </div>
      </section>
    </div>
  );
};

export default AboutWebsiteBackupComponent;
