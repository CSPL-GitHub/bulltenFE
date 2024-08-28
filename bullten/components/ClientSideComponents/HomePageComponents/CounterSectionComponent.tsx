"use client";
import HighlightingTextComponent from "@/components/CommonComponents/HeadingComponents/highlightingTextComponent";
import MainHeadingComponent from "@/components/CommonComponents/HeadingComponents/MainHeadingComponent";
import ParaGraphText from "@/components/CommonComponents/HeadingComponents/ParaGraphText";
import SloganHeadingComponent from "@/components/CommonComponents/HeadingComponents/SloganHeadingComponent";
import { useEffect, useState, useRef } from "react";
import CountUp from "react-countup";

type Counter = {
  description: string;
  count: number;
  countname: string;
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
          <div className="grid grid-cols-2 sm:grid-cols-2 gap-2 sm:gap-12">
            {counterData?.counters?.map((counter, index) => (
              <div
                key={index}
                className="bg-white/0 shadow-lg p-3 rounded-md transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl border-[0.2px] border-white/70 hover:border-primary"
              >
                <div className="flex flex-col items-center justify-center gap-1">
                  <div className="text-2xl sm:text-3xl font-bold text-white">
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
                  <HighlightingTextComponent>
                    {counter?.countname}
                  </HighlightingTextComponent>
                  <ParaGraphText
                    alignmentType={2}
                    paddingTop={1}
                    hoverEffect="text-bullt-secondary"
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
