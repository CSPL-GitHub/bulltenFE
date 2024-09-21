"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface Props {
  columnData: any;
}
const ColumnSectionAPlusComponent: React.FC<Props> = ({ columnData }) => {
  const [windowWidth, setWindowWidth] = useState<number>(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth);

      const handleResize = () => setWindowWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);

      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);
  return (
    <div className="container mx-auto py-0 md:py-6 lg:py-2 px-2 lg:px-8">
      <div className="flex flex-col gap-3 py-6">
        {columnData?.heading ? (
          <>
            <div
              className="text-center text-2xl lg:text-4xl sm:mt-0 mt-5 font-semibold tailwind-unreset"
              dangerouslySetInnerHTML={{
                __html: columnData?.heading,
              }}
            />
          </>
        ) : null}

        {columnData?.description ? (
          <div
            className="text-center text-lg lg:text-lg text-bullt-primary/[0.8] tailwind-unreset py-3 "
            dangerouslySetInnerHTML={{
              __html: columnData?.description,
            }}
          ></div>
        ) : null}
      </div>

      {columnData?.content?.length > 0 ? (
        <div
          className="w-full h-auto gap-6 py-3 px-4"
          style={{
            marginTop: `${columnData?.gap_top / 4}rem`,
            marginBottom: `${columnData?.gap_bottom / 4}rem`,
            display: "grid",
            gridTemplateColumns: `${
              windowWidth < 640
                ? "repeat(1, minmax(0, 1fr))"
                : windowWidth < 750
                ? "repeat(2, minmax(0, 1fr))"
                : `repeat(${columnData?.element_count || 1}, minmax(0, 1fr))`
            }`,
          }}
        >
          {columnData?.content?.map((item: any, index: number) => (
            <>
              <div className="card-inner relative p-3 rounded-lg overflow-hidden justify-start items-start flex flex-col bg-bullt-quaternary/[0.04] group hover:shadow-sm  hover:-translate-y-2 duration-300">
                <div className="">
                  <div className="w-[70%] ml-auto py-6 ">
                    {item?.heading ? (
                      <div
                        className="w-full text-left text-lg text-bullt-tertiary tailwind-unreset font-semibold"
                        dangerouslySetInnerHTML={{
                          __html: item?.heading,
                        }}
                      />
                    ) : null}
                    {item?.description ? (
                      <div
                        className="w-full text-md text-bullt-primary text-left line-clamp-4 flex-1"
                        dangerouslySetInnerHTML={{
                          __html: item?.description,
                        }}
                      />
                    ) : null}
                  </div>
                </div>

                {/* Icon adjusted to be in the center of the curve */}
                <div className="icon absolute -top-[0.5rem] -left-[0.5rem] w-[6rem] h-[6rem] flex justify-center items-center">
                  {item?.image ? (
                    <div className="bg-gray-50 shadow-md  relative rounded-full flex items-center justify-center w-16 h-16 overflow-hidden transition-transform duration-100 ease-in-out group-hover:scale-x-[-1]">
                      <Image
                        src={`${process.env.NEXT_PUBLIC_BASE_URL}${item?.image}`}
                        alt={item?.heading}
                        style={{
                          position: "absolute",
                          objectFit: "cover",
                          inset: 0,
                        }}
                        fill={true}
                        className="w-full h-full p-2"
                      />
                    </div>
                  ) : null}
                </div>
              </div>
            </>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default ColumnSectionAPlusComponent;
