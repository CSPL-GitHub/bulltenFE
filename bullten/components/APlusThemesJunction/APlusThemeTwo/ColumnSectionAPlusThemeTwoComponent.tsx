"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import img1 from "../../../public/whyus.png";

interface Props {
  columnData: any;
}

const ColumnSectionAPlusThemeTwoComponent: React.FC<Props> = ({
  columnData,
}) => {
  const [windowWidth, setWindowWidth] = useState<number>(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth);

      const handleResize = () => setWindowWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);

      // Clean up the event listener on component unmount
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  return (
    <div className="container mx-auto py-4 lg:py-8 px-2 lg:px-8">
      {columnData?.heading || columnData?.description ? (
        <>
          <div
            className="text-center text-2xl sm:text-4xl sm:mt-0 mt-5 font-semibold text-bullt-secondary tailwind-unreset"
            dangerouslySetInnerHTML={{
              __html: columnData?.heading,
            }}
          ></div>
          <div
            className="text-center text-lg lg:text-lg text-bullt-secondary tailwind-unreset py-3"
            dangerouslySetInnerHTML={{
              __html: columnData?.description,
            }}
          ></div>
        </>
      ) : null}

      {columnData?.content?.length > 0 ? (
        <div
          className="w-full h-auto items-start lg:gap-6 gap-0 py-3 px-4 "
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
            <div
              key={index}
              className="group relative  p-3 rounded-lg overflow-hidden transition-transform transform bg-bullt-quaternary/[0.05]"
            >
              {/* {item?.image ? (
                <div className="sm:h-[300px] h-[280px] w-full relative p-4">
                  <Image
                    src={`${process.env.NEXT_PUBLIC_BASE_URL}${item?.image}`}
                    alt={item?.heading}
                    style={{
                      position: "absolute",
                      objectFit: "cover",
                      inset: 0,
                    }}
                    fill={true}
                    className="p-2 rounded-t-2xl"
                  />
                </div>
              ) : null} */}
              {item?.heading || item?.description ? (
                <div className="p-2">
                  <div className="flex flex-col justify-center items-start">
                    {item?.heading ? (
                      <div
                        className="w-full flex text-start border-r-4 border-bullt-secondary/[0.4] text-xl flex-col items-start text-bullt-secondary tailwind-unreset font-semibold sm:h-12"
                        dangerouslySetInnerHTML={{
                          __html: item?.heading,
                        }}
                      />
                    ) : null}
                    {item?.description ? (
                      <div
                        className="w-full text-left text-lg text-bullt-secondary py-1 line-clamp-3 pr-6"
                        dangerouslySetInnerHTML={{
                          __html: item?.description,
                        }}
                      />
                    ) : null}
                  </div>

                  {/* {item?.button_text ? (
                    <div className="mt-3 rounded flex justify-center">
                      <Link href={item?.button_link}>
                        <input
                          className="cursor-pointer border-[1px] px-6 py-2 bg-bullt-tertiary hover:bg-white text-white hover:text-bullt-tertiary text-xl rounded-md"
                          type="button"
                          value={item?.button_text}
                        />
                      </Link>
                    </div>
                  ) : null} */}
                </div>
              ) : null}
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default ColumnSectionAPlusThemeTwoComponent;
