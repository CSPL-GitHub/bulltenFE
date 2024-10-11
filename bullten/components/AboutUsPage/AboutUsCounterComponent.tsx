"use client";
import { useEffect, useState, useRef } from "react";
import CountUp from "react-countup";
import Image from "next/image";
import ParaGraphText from "../CommonComponents/HeadingComponents/ParaGraphText";

type Props = {
  CounterData: any;
};
const AboutUsCounterComponent = ({ CounterData }: Props) => {
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

  // TO Show the Suffix + % K M

  // const formatNumber = (value: number) => {
  //   if (value >= 1000000) {
  //     return (value / 1000000).toFixed(1) + "m";
  //   } else if (value >= 1000) {
  //     return (value / 1000).toFixed(1) + "k";
  //   } else {
  //     return value.toString();
  //   }
  // };
  return (
    <>
      <div className="sm:py-4 py-2 ">
        <div className="relative lg:h-[350px] md:h-[300px] h-[380px] sm:py-12 py-6 bg-fixed bg-cover bg-top bg-no-repeat bg-[url('/01.jpg')]">
          <div className="absolute inset-0 bg-black/60"></div>
          <div className="relative flex justify-center items-center px-6 ">
            <div className="sm:flex justify-center items-center">
              <div className="max-w-5xl mx-auto w-full">
                {CounterData?.heading ? (
                  <div className="lg:text-4xl text-2xl font-bold text-center text-white">
                    {CounterData?.heading}
                  </div>
                ) : null}
                {CounterData?.description ? (
                  <p className="lg:text-lg text-lg font-medium text-center text-white">
                    {CounterData?.description}
                  </p>
                ) : null}
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl relative mx-auto py-6 -mt-[130px] bg-bullt-quaternary rounded-lg">
          {CounterData?.counter?.length > 0 && (
            <div className="w-full  text-center sm:px-4 rounded-lg" ref={ref}>
              <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-12 justify-start">
                {CounterData?.counter?.map((counter: any, index: number) => (
                  <div key={index} className="p-1">
                    <div className="flex flex-col gap-2 lg:border-r-2 sm:border-b-2 border-gray-600">
                      <div className="lg:text-6xl md:text-[30px] text-[40px] font-[600] py-1 text-white">
                        {startCount ? (
                          <CountUp
                            end={counter?.number}
                            duration={2}
                            // formattingFn={formatNumber}
                            suffix={counter?.suffix}
                          />
                        ) : (
                          0
                        )}
                      </div>
                      {counter?.heading ? (
                        <h4 className="text-xl font-semibold text-white ">
                          {counter?.heading}
                        </h4>
                      ) : null}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default AboutUsCounterComponent;
