"use client";
import SliderFrame from "@/components/ClientSideComponents/SliderComponents/SliderFrame";
import * as DOMPurify from "dompurify";
import Image from "next/image";
import { useState, useEffect } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

interface Props {
  carouselData: any;
}

const CarouselTwoAPlusComponent: React.FC<Props> = ({ carouselData }) => {
  const [infinite, setInfinite] = useState<boolean>();

  useEffect(() => {
    if (carouselData?.content?.length === 1) {
      setInfinite(false);
    } else {
      setInfinite(true);
    }
  }, []);

  const settings = {
    dots: true,
    infinite: infinite,
    autoplay: false,
    arrows: true,
    speed: 500,
    slidesToShow:
      carouselData?.content?.length >= carouselData?.element_count
        ? carouselData?.element_count
          ? carouselData?.element_count
          : 1
        : carouselData?.content?.length,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow:
            carouselData?.content?.length >= carouselData?.element_count
              ? carouselData?.element_count < 2
                ? carouselData?.element_count
                  ? carouselData?.element_count
                  : 1
                : 2
              : carouselData?.content?.length < 2
              ? carouselData?.element_count
              : 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div
      className="container mx-auto w-full  px-2 lg:px-8"
      style={{
        marginTop: `${carouselData?.gap_top / 4}rem`,
        marginBottom: `${carouselData?.gap_bottom / 4}rem`,
      }}
    >
      <div
        className="w-full px-4 py-4 text-center text-[2rem] lg:text-[2.3rem] font-bold tailwind-unreset"
        dangerouslySetInnerHTML={{
          __html: carouselData?.heading,
        }}
      />
      <div className="h-full">
        <SliderFrame settings={settings} selector={undefined}>
          {carouselData?.content?.map((item: any, index: number) => (
            <div className="px-2 h-auto" key={index}>
              <div
                key={index}
                className=" h-auto bg-white hover:border-b-bullt-quaternary hover:border-b-4 hover:shadow-lg shadow-sm mb-3 border-[1px] border-b-4 border-b-white rounded-md overflow-hidden"
              >
                {item?.heading || item?.description ? (
                  <div
                    className="p-4 flex flex-col justify-start items-start gap-3"
                    style={{
                      insetInlineStart: `${item?.banner_horizontal_position_value}%`,
                      top: `${item?.banner_vertical_position_value}%`,
                    }}
                  >
                    <div className="flex flex-row justify-center items-center w-full gap-2">
                      <div className=" flex items-start justify-center transition-transform duration-300 ease-in-out hover:scale-x-[-1]">
                        <img
                          src={`${process.env.NEXT_PUBLIC_BASE_URL}${item?.image}`}
                          alt={item?.heading}
                          style={{
                            objectFit: "contain",
                          }}
                          className="w-[80px] h-[80px] "
                        />
                      </div>

                      <div
                        className="w-full flex flex-col text-xl items-start font-semibold tailwind-unreset"
                        dangerouslySetInnerHTML={{
                          __html: item?.heading,
                        }}
                      />
                    </div>

                    <div
                      className="w-full tailwind-unreset  line-clamp-2"
                      dangerouslySetInnerHTML={{
                        __html: item?.description,
                      }}
                    />
                  </div>
                ) : null}
              </div>
            </div>
          ))}
        </SliderFrame>
      </div>
    </div>
  );
};

export default CarouselTwoAPlusComponent;
