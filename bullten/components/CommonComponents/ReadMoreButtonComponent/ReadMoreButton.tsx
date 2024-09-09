"use client";
import { useParams } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";

type Props = {
  readMoreText: string;
  textSize: number;
  linesToShow: number;
};

const ReadMoreComponent = ({
  readMoreText,
  textSize = 2,
  linesToShow = 2,
}: Props) => {
  const textRef = useRef<HTMLParagraphElement>(null);
  const [showAll, setShowAll] = useState<Boolean>(false);
  const [isOverflowing, setIsOverflowing] = useState(false);

  useEffect(() => {
    const element = textRef.current;
    if (element) {
      const clampHeight =
        parseInt(window.getComputedStyle(element).lineHeight) * linesToShow;
      setIsOverflowing(element?.scrollHeight > clampHeight);
    }
  }, [linesToShow, readMoreText]);

  return (
    <>
      {readMoreText ? (
        <div className="w-full h-auto relative sm:sm:cursor-pointer">
          <p
            ref={textRef}
            className={`w-full sm:cursor-pointer ${
              textSize == 3
                ? "text-base"
                : textSize == 2
                ? "text-sm"
                : "text-xs"
            } ${
              showAll
                ? "line-clamp-0"
                : linesToShow == 4
                ? "line-clamp-4"
                : linesToShow == 3
                ? "line-clamp-3"
                : "line-clamp-2"
            }`}
            onClick={() => setShowAll(!showAll)}
          >
            {readMoreText}
          </p>
          {isOverflowing && !showAll ? (
            <button
              onClick={() => setShowAll(!showAll)}
              className={`${
                textSize == 3
                  ? "text-lg"
                  : textSize == 2
                  ? "text-base"
                  : "text-sm"
              } -mb-0.5 text-gray-700 font-semibold hover:underline flex justify-end items-center absolute bottom-0 end-0`}
            >
              <p
                className=""
                // style={{
                //   background:
                //     dir(lngString) == "ltr"
                //       ? "linear-gradient( to left, rgba(255, 255, 255, 1)50%, rgba(255, 255, 255, 0)100% )"
                //       : "linear-gradient( to right, rgba(255, 255, 255, 1)50%, rgba(255, 255, 255, 0)100% )",
                // }}
                style={{
                  background:
                    "linear-gradient( to left, rgba(255, 255, 255, 1)50%, rgba(255, 255, 255, 0)100% )",
                }}
              >
                {showAll ? "" : <span className="ps-2">{"..."}</span>}
              </p>
              <p className="bg-tertiary">{showAll ? "" : "read_more"}</p>
            </button>
          ) : null}
        </div>
      ) : null}
    </>
  );
};

export default ReadMoreComponent;
