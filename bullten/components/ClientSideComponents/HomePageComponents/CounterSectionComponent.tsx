"use client";
import ParaGraphText from "@/components/CommonComponents/HeadingComponents/ParaGraphText";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import CountUp from "react-countup";
import img from "../../../public/logo-bullten.png"

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
          className="w-full  text-center sm:px-4 rounded-lg"
          ref={ref}

        >
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-12 justify-start">
            {counterData?.counters?.map((counter, index) => (
              <div
                key={index}
                className="p-3"
              >
                <div className="flex flex-col gap-2">
                  <div className="flip-container sm:h-[80px] h-[60px] lg:w-[100px] w-[80px] relative mx-auto perspective-500">
                    <div className="flipper relative h-full w-full transition-transform duration-2000 transform-style-3d">
                      <Image
                        src={`${process.env.NEXT_PUBLIC_BASE_URL}${counter?.image}`}
                        alt="Flipping Image"
                        className="flip-image backface-hidden"
                        style={{
                          position: "absolute",
                          objectFit: "contain",
                          inset: 0,
                        }}
                        fill={true}
                      />
                    </div>
                  </div>

                  <div className="text-3xl sm:text-5xl font-[600]">
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
                    paddingTop={1}>

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
