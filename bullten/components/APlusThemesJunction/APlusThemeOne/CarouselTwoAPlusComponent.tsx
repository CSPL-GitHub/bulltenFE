"use client";
import SliderFrame from "@/components/ClientSideComponents/SliderComponents/SliderFrame";
import * as DOMPurify from "dompurify";
import { useState, useEffect } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

interface Props {
  carouselData: any;
}

const CarouselTwoAPlusComponent: React.FC<Props> = ({ carouselData }) => {
  const [infinite , setInfinite] = useState<boolean>()

  useEffect(() => {
    if(carouselData?.content?.length === 1 ){
      setInfinite(false);
    }
    else{
      setInfinite(true);
    }
  }, [])

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
      className="w-full h-auto"
      style={{
        marginTop: `${carouselData?.gap_top / 4}rem`,
        marginBottom: `${carouselData?.gap_bottom / 4}rem`,
      }}
    >
      <div
        className="w-full m-auto  flex flex-col justify-center items-center sm:text-4xl text-2xl text-center leading-3 mb-5 tailwind-unreset"
        dangerouslySetInnerHTML={{
          __html: DOMPurify.sanitize(carouselData?.heading),
        }}
      />
      <div className="h-full">
        <SliderFrame settings={settings} selector={undefined}>
          {carouselData?.content?.map((item: any, index: number) => (
            <div className="px-2 h-auto" key={index}>
              <div
                key={index}
                className=" slidergap h-[350px] mb-3 border-[1px] rounded-xl overflow-hidden"
              >
                <div className="w-full h-[120px] px-1 flex items-center justify-center">
                  <img
                    src={`${process.env.NEXT_PUBLIC_BASE_URL}${item?.image}`}
                    alt={item?.heading}
                    style={{
                      objectFit: "cover",
                    }}
                  />
                </div>
                {item?.heading || item?.description ? (
                  <div
                    className="h-auto p-4 flex flex-col justify-center items-start"
                    style={{
                      insetInlineStart: `${item?.banner_horizontal_position_value}%`,
                      top: `${item?.banner_vertical_position_value}%`,
                    }}
                  >
                    <div
                      className="w-full flex flex-col  text-xl items-center font-semibold tailwind-unreset"
                      dangerouslySetInnerHTML={{
                        __html: DOMPurify.sanitize(item?.heading),
                      }}
                    />
                    <div
                      className="w-full flex flex-col tailwind-unreset text-justify"
                      dangerouslySetInnerHTML={{
                        __html: DOMPurify.sanitize(item?.description),
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
