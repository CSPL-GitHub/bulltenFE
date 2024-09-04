import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
interface Props {
  imageTextData: any;
}

const ImageTextTwoAPlusComponent: React.FC<Props> = ({ imageTextData }) => {
  return (
    <section className=" py-16 px-4">
      <div
        className="container mx-auto items-center"
        style={{
          marginTop: `${imageTextData?.gap_top / 4}rem`,
          marginBottom: `${imageTextData?.gap_bottom / 4}rem`,
        }}
      >
        {imageTextData?.align_element === "left" && imageTextData?.image ? (
          <>
            <div className="w-full flex flex-col lg:flex-row items-start justify-center relative gap-4">
              {imageTextData?.heading || imageTextData?.description ? (
                <div className="w-full lg:w-2/4 flex flex-col gap-2 items-start justify-center">
                  <span className="text-sm text-blue-600 font-medium">
                    • Global Network
                  </span>

                  {imageTextData?.heading ? (
                    <div
                      className="w-full text-bullt-primary text-start font-semibold sm:text-4xl text-2xl"
                      dangerouslySetInnerHTML={{
                        __html: imageTextData?.heading,
                      }}
                    />
                  ) : null}

                  {imageTextData?.description ? (
                    <div
                      className="text-justify text-tgh-secondary tailwind-unreset"
                      dangerouslySetInnerHTML={{
                        __html: imageTextData?.description,
                      }}
                    />
                  ) : null}

                  <ul className="list-disc list-inside text-[#000E47] space-y-1">
                    <li>DDoS protected network</li>
                    <li>Unmetered bandwidth</li>
                    <li>Bandwidth pooling available</li>
                  </ul>

                  {imageTextData?.button_text ? (
                    <div>
                      {imageTextData?.button_text &&
                      imageTextData?.is_downloadable ? (
                        <div></div>
                      ) : (
                        <Link
                          href={imageTextData?.button_link}
                          className="inline-flex items-center gap-1 mt-4 text-blue-600 font-medium"
                        >
                          <div
                            className="text-semibold transition-transform duration-500"
                            dangerouslySetInnerHTML={{
                              __html: imageTextData?.button_text,
                            }}
                          />
                          <div className="sm:opacity-0 opacity-100 sm:group-hover:opacity-100 transform transition-opacity duration-500">
                            <div className="sm:hidden sm:group-hover:block block">
                              <AiOutlineArrowRight size={20} />
                            </div>
                          </div>
                        </Link>
                      )}
                    </div>
                  ) : null}
                </div>
              ) : null}

              <div className="w-full lg:w-2/4 relative h-[400px] flex px-0 lg:px-14">
                <img
                  src={`${process.env.NEXT_PUBLIC_BASE_URL}${imageTextData?.image}`}
                  alt={imageTextData?.heading}
                  className="rounded-md w-full object-cover"
                  style={{ height: "100%" }}
                />

                {/* Annotations */}
                <div className="absolute top-1/4 left-1/4 p-2 bg-white shadow-md rounded-md flex items-center gap-2">
                  <img
                    src="/path/to/your-icon1.png"
                    alt="150+ Tbps Location"
                    className="w-5 h-5"
                  />
                  <span className="text-sm font-semibold">
                    150+ Tbps Location
                  </span>
                </div>

                <div className="absolute bottom-1/4 right-1/4 p-2 bg-white shadow-md rounded-md flex items-center gap-2">
                  <img
                    src="/path/to/your-icon2.png"
                    alt="Location Icon"
                    className="w-5 h-5"
                  />
                  <span className="text-sm font-semibold">
                    Protected Location
                  </span>
                </div>
              </div>
            </div>
          </>
        ) : null}

        {imageTextData?.align_element === "right" && imageTextData?.image ? (
          <>
            <div className="W-full flex items-start justify-center relative ">
              <div className="w-2/4  flex justify-center items-center h-full relative">
                <div className="w-full h-[400px] relative">
                  <img
                    src={`${process.env.NEXT_PUBLIC_BASE_URL}${imageTextData?.image}`}
                    alt={imageTextData?.heading}
                    className="rounded-md w-full h-full"
                  />
                </div>
                <div className="absolute top-1/4 left-1/4 p-2 bg-white shadow-md rounded-md flex items-center gap-2">
                  <img
                    src="/path/to/your-icon1.png" // replace with the icon path
                    alt="150+ Tbps Location"
                    className="w-5 h-5"
                  />
                  <span className="text-sm font-semibold">
                    150+ Tbps Location
                  </span>
                </div>

                <div className="absolute bottom-1/4 right-1/4 p-2 bg-white shadow-md rounded-md flex items-center gap-2">
                  <img
                    src="/path/to/your-icon2.png" // replace with the icon path
                    alt="Location Icon"
                    className="w-5 h-5"
                  />
                  <span className="text-sm font-semibold">
                    Protected Location
                  </span>
                </div>
              </div>
              {imageTextData?.heading || imageTextData?.description ? (
                <div className="w-2/4 flex gap-2 flex-col items-start justify-center sm:mt-0 mt-4 ">
                  <span className="text-sm text-blue-600 font-medium">
                    • Global Network
                  </span>

                  {imageTextData?.heading ? (
                    <div
                      className="w-full text-bullt-primary text-start sm:text-4xl text-2xl"
                      dangerouslySetInnerHTML={{
                        __html: imageTextData?.heading,
                      }}
                    />
                  ) : null}

                  {imageTextData?.description ? (
                    <div
                      className="text-justify text-tgh-secondary tailwind-unreset "
                      dangerouslySetInnerHTML={{
                        __html: imageTextData?.description,
                      }}
                    />
                  ) : null}

                  <ul className="list-disc list-inside text-[#000E47] space-y-1">
                    <li>DDoS protected network</li>
                    <li>Unmetered bandwidth</li>
                    <li>Bandwidth pooling available</li>
                  </ul>

                  {imageTextData?.button_text ? (
                    <div>
                      {imageTextData?.button_text &&
                      imageTextData?.is_downloadable ? (
                        <div></div>
                      ) : (
                        <Link
                          href={imageTextData?.button_link}
                          className="inline-flex items-center gap-1 mt-4 text-blue-600 font-medium"
                        >
                          <div
                            className="text-semibold transition-transform duration-500"
                            dangerouslySetInnerHTML={{
                              __html: imageTextData?.button_text,
                            }}
                          />
                          <div className="sm:opacity-0 opacity-100 sm:group-hover:opacity-100 transform transition-opacity duration-500">
                            <div className="sm:hidden sm:group-hover:block block">
                              <AiOutlineArrowRight size={20} />
                            </div>
                          </div>
                        </Link>
                      )}
                    </div>
                  ) : null}
                </div>
              ) : null}
            </div>
          </>
        ) : null}
      </div>
    </section>
  );
};

export default ImageTextTwoAPlusComponent;
