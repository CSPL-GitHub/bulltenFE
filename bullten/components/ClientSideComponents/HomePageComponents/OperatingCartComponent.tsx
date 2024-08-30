"use client"
import Image from "next/image";
import React, { useState } from "react";

type Props = {
  data: any;
};

const OperatingCartComponent: React.FC<Props> = ({ data }) => {
  const [visibleItems, setVisibleItems] = useState(4);
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleVisibility = () => {
    if (isExpanded) {
      setVisibleItems(4);
    } else {
      setVisibleItems(data.list_titles.length);
    }
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="sm:px-4">
      <div className="">
        <div className="py-2 grid sm:grid-cols-4 grid-cols-2 justify-center items-center">
          {data?.list_titles?.slice(0, visibleItems).map((item: any, index: any) => (
            <div
              key={index}
              className="text-center hover:bg-[#F4F5F8] w-[160px] lg:w-[310px] mx-auto grayscale hover:grayscale-0 transition-all duration-100 ease-in-out py-2"
            >
              {item.img ? (
                <div className="h-[100px] lg:w-[300px] w-[150px] relative mx-auto">
                  <Image
                    src={`${process.env.NEXT_PUBLIC_BASE_URL}${item.img}`}
                    alt="all"
                    className="sm:p-4 p-2"
                    style={{
                      position: "absolute",
                      objectFit: "contain",
                      inset: 0,
                    }}
                    fill={true}
                  />
                </div>
              ) : null}
              <h3 className="text-lg font-semibold text-gray-800">
                {item.heading}
              </h3>
            </div>
          ))}
        </div>
        <div className="text-center mt-2 mb-5">
          <button
            onClick={toggleVisibility}
            className="bg-bullt-tertiary text-white px-4 py-2 rounded-md hover:bg-bullt-secondary hover:text-black border-[1px] transition-all"
          >
            {isExpanded ? "See Less" : "See More"}
          </button>

        </div>
      </div>
    </div>
  );
};

export default OperatingCartComponent;
