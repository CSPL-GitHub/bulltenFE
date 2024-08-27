import React from "react";
import Image from "next/image";
import { GoArrowUpRight } from "react-icons/go";
import { Banner } from "@/types/BannerTypes";

type Props = {
  banner: Banner;
};

const BannerWithImage = ({ banner }: Props) => {
  return (
    <section
      className="relative container mx-auto"
      style={{ backgroundImage: `url('/slider-bg2.jpg')` }}
    >
      <div className="bg-bullt-primary/[0.4] min-h-[600px] flex items-center justify-center pt-[70px] rounded-lg">
        {/* {/ <div className="absolute top-0 left-0 bg-white w-1/2 h-[180px] transform -translate-y-1/2 -translate-x-1/2 rounded-tl-[200px] z-0 rounded-br-[3.5rem]"></div> /} */}
        <div className="container mx-auto px-4 sm:px-8 flex flex-col lg:flex-row items-center justify-between relative z-10">
          <div className="relative sm:hidden flex items-center justify-center w-40 h-40 rounded-full bg-transparent border border-dashed border-bullt-tertiary">
            {/* {/ Central Logo /} */}
            <div className="absolute flex items-center justify-center w-16 h-16 bg-bullt-tertiary rounded-full">
              <GoArrowUpRight size={25} />
            </div>

            {/* {/ Text around the circle /} */}
            <svg className="absolute inset-0 w-full h-full">
              <defs>
                <path
                  id="circlePath"
                  d="
          M 80, 80
          m -60, 0
          a 60,60 0 1,1 120,0
          a 60,60 0 1,1 -120,0"
                />
              </defs>
              <text
                className="text-bullt-tertiary"
                fontSize="15"
                fill="white"
                fontWeight="bold"
              >
                <textPath href="#circlePath" startOffset="0%" textLength="350">
                  Best Hosting Providers
                </textPath>
              </text>
            </svg>
          </div>

          <div className="flex flex-col sm:gap-7 gap-2 mt-5 sm:mt-0 items-start justify-center sm:w-[60%] w-full">
            <h2 className="text-white font-bold text-sm sm:text-xl mb-1 uppercase">
              {banner?.label}
            </h2>

            <h2 className="text-white font-extrabold text-3xl sm:text-5xl mb-1">
              {banner?.title}
            </h2>

            <h3 className="text-white text-xl font-semibold mb-4">
              {banner?.link}
            </h3>

            <div className="flex sm:flex-row flex-col gap-3 text-bullt-secondary">
              <div className="flex gap-2 items-center space-x-2">
                <Image
                  src={`${process.env.NEXT_PUBLIC_BASE_URL}${banner?.icon_1}`}
                  alt={banner?.icon_1_alt_txt}
                  width={30}
                  height={30}
                />
                <div>
                  <h3 className="text-xl font-semibold">High Performance</h3>
                  <p>
                    Experience unmatched speed with our cutting-edge cloud
                    technology.
                  </p>
                </div>
              </div>

              <div className="flex gap-2 items-center space-x-2">
                <Image
                  src={`${process.env.NEXT_PUBLIC_BASE_URL}${banner?.icon_2}`}
                  alt={banner?.icon_2_alt_txt}
                  width={30}
                  height={30}
                />
                <div>
                  <h3 className="text-xl font-semibold">
                    {banner?.icon_2_header}
                  </h3>
                  <p>
                    Our team is always here to help, no matter the time of day.
                  </p>
                </div>
              </div>
            </div>

            <div className="sm:mt-0 mt-4 flex sm:justify-start justify-center w-full sm:pb-0 pb-8">
              <button
                onClick={() => (window.location.href = banner?.button_link)}
                className="text-xl text-bold border-2 border-bullt-text-quinary bg-bullt-text-quinary hover:bg-bullt-secondary text-bullt-secondary hover:text-bullt-tertiary rounded-md px-10 py-3"
              >
                {banner?.button_text}
              </button>
            </div>
          </div>

          <div className="relative sm:flex hidden items-center justify-center w-40 h-40 rounded-full bg-transparent border border-dashed border-bullt-tertiary">
            {/* {/ Central Logo /} */}
            <div className="absolute flex items-center justify-center w-16 h-16 bg-bullt-tertiary rounded-full">
              <GoArrowUpRight size={25} />
            </div>

            {/* {/ Text around the circle /} */}
            <svg className="absolute inset-0 w-full h-full">
              <defs>
                <path
                  id="circlePath"
                  d="
          M 80, 80
          m -60, 0
          a 60,60 0 1,1 120,0
          a 60,60 0 1,1 -120,0"
                />
              </defs>
              <text
                className="text-bullt-tertiary"
                fontSize="15"
                fill="white"
                fontWeight="bold"
              >
                <textPath href="#circlePath" startOffset="0%" textLength="350">
                  Best Hosting Providers
                </textPath>
              </text>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerWithImage;
