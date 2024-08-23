"use client";
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
  console.log("counterData", counterData);
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
          className="w-full mx-auto text-center px-0 sm:px-10 py-6 bg-bullt-background"
          ref={ref}
        >
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
            {counterData?.counters?.map((counter, index) => (
              <div
                key={index}
                className="bg-white shadow-md sm:shadow-lg p-3 sm:p-6 rounded-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
              >
                <div className="flex flex-col items-start justify-start">
                  <div className="flex flex-row gap-2 items-center justify-center text-xl sm:text-4xl font-extrabold text-black h-[40px] sm:h-[60px]">
                    <span>
                      {startCount ? (
                        <CountUp
                          end={counter?.count}
                          duration={2}
                          formattingFn={formatNumber}
                        />
                      ) : (
                        0
                      )}
                    </span>
                    <span className="text-black text-center text-[10px] leading-[10px] sm:text-sm">
                      {counter?.countname}
                    </span>
                  </div>
                  <p className="text-bullt-tertiary font-semibold text-[10px] sm:text-sm mt-2 sm:mt-3  transition-colors duration-300">
                    {counter?.description}
                  </p>
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
