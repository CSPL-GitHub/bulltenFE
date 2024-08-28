"use client";
import ParaGraphText from "@/components/CommonComponents/HeadingComponents/ParaGraphText";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import CountUp from "react-countup";


type Counter = {
  description: string;
  count: number;
  countname: string;
  image: string;

};

type Props = {
  counterData: {
    counters: Counter[];
  };
};

const CounterSectionComponent: React.FC<Props> = ({ counterData }) => {
  const [startCount, setStartCount] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setStartCount(true);
          observer?.disconnect();
        }
      },
      {
        threshold: 0.5,
      }
    );

    if (ref?.current) {
      observer?.observe(ref?.current);
    }

    return () => {
      if (ref?.current) {
        observer?.unobserve(ref?.current);
      }
    };
  }, []);

  const formatNumber = (value: number) => {
    if (value >= 1000000) {
      return (value / 1000000).toFixed(1) + "m";
    } else if (value >= 1000) {
      return (value / 1000).toFixed(1) + "k";
    } else {
      return value.toString();
    }
  };

  return (
    <>
      {counterData?.counters?.length > 0 && (
        <div
          className="w-full sm:mx-auto mx-0 text-center sm:px-4 rounded-lg"
          ref={ref}

        >
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-12">
            {counterData?.counters?.map((counter, index) => (
              <div
                key={index}
                className="p-3"
              >
                <div className="flex flex-col items-center justify-center gap-2">
                  <div className="h-[80px] lg:w-[100px] w-[100px] relative mx-autotransition-transform duration-500 transform hover:rotate-y-180">
                    <Image
                      src={`${process.env.NEXT_PUBLIC_BASE_URL}${counter?.image}`}
                      alt="all"
                      className=""
                      style={{
                        position: "absolute",
                        objectFit: "contain",
                        inset: 0,
                      }}
                      fill={true}
                    />
                  </div>
                  <div className="text-3xl sm:text-6xl ">
                    {startCount ? (
                      <CountUp
                        end={counter?.count}
                        duration={2}
                        formattingFn={formatNumber}
                      />
                    ) : (
                      0
                    )}
                  </div>
                  {/* <HighlightingTextComponent>
                    {counter?.countname}
                  </HighlightingTextComponent> */}
                  <ParaGraphText
                    alignmentType={2}
                    paddingTop={1}
                  >
                    {" "}
                    {counter?.description}
                  </ParaGraphText>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default CounterSectionComponent;
