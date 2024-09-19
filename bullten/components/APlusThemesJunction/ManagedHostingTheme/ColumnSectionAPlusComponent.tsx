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
    <div className="container mx-auto py-4 md:py-6 lg:py-8 px-2 lg:px-8 bg-[#F1F5F9]">
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

      {columnData?.content?.length > 0 ? (
        <div
          className="w-full h-auto  gap-6 py-3 "
          style={{
            marginTop: `${columnData?.gap_top / 4}rem`,
            marginBottom: `${columnData?.gap_bottom / 4}rem`,
            display: "grid",
            gridTemplateColumns: `${
              windowWidth < 640
                ? "repeat(1, minmax(0, 1fr))"
                : windowWidth < 750
                ? "repeat(2, minmax(0, 1fr))"
                : `repeat(${columnData?.element_count || 1}, minmax(0, 1fr))`}`,}}>
          {columnData?.content?.map((item: any, index: number) => (
            <div
              key={index}
              className="relative border-[1px] p-3 rounded-lg overflow-hidden transition-transform flex flex-col transform bg-bullt-secondary"
            >
              {item?.image ? (
                <div className="sm:h-[80px] h-[130px]  relative">
                  <Image
                    src={`${process.env.NEXT_PUBLIC_BASE_URL}${item?.image}`}
                    alt={item?.heading}
                    style={{
                      position: "absolute",
                      objectFit: "contain",
                      inset: 0,
                    }}
                    fill={true}
                    className=""/>
                </div>
              ) : null}
              {item?.heading || item?.description ? (
                <div className="p-2">
                  <div className="flex flex-col justify-center">
                    {item?.heading ? (
                      <div
                        className="w-full flex text-center text-xl flex-col  tailwind-unreset font-semibold  "
                        dangerouslySetInnerHTML={{
                          __html: item?.heading,
                        }}
                      />
                    ) : null}
                    {item?.description ? (
                      <div
                        className="w-full text-lg text-bullt-primary/[0.8]  line-clamp-3 flex-1"
                        dangerouslySetInnerHTML={{
                          __html: item?.description,
                        }}
                      />
                    ) : null}
                  </div>
                  {item?.button_text ? (
                    <div className="mt-3 rounded flex justify-center">
                      <Link href={item?.button_link}>
                        <input
                          className="cursor-pointer border-[1px] px-6 py-2 bg-bullt-tertiary hover:bg-white text-white hover:text-bullt-tertiary text-xl rounded-md"
                          type="button"
                          value={item?.button_text}
                        />
                      </Link>
                    </div>
                  ) : null}
                </div>
              ) : null}
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default ColumnSectionAPlusComponent;
