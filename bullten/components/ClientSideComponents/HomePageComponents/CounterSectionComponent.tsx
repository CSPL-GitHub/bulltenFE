"use client";
import { useEffect, useState, useRef } from "react";
import CountUp from "react-countup";

type Counter = {
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
        if (entries[0].isIntersecting) {
          setStartCount(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.5,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
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
    <div className="w-full mx-auto text-center sm:px-12 mb-5" ref={ref}>
      <div className="grid grid-cols-2 sm:grid-cols-4 sm:gap-12 gap-6">
        {counterData?.counters?.map((counter, index) => (
          <div
            key={index}
            className="bg-white shadow-xl p-4 rounded-xl transform transition-transform hover:scale-105"
          >
            <div className="sm:text-3xl text-2xl font-extrabold text-gray-800 flex flex-row items-center justify-center gap-2">
              <span>
                {startCount ? (
                  <CountUp
                    end={counter.count}
                    duration={2}
                    formattingFn={formatNumber}
                  />
                ) : (
                  0
                )}
              </span>
              <span className="text-3xl">+</span>
            </div>
            <p className="sm:text-lg text-md text-gray-500 mt-2">
              {counter.countname}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CounterSectionComponent;
