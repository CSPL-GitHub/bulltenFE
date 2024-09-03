"use client";
import SliderFrame from "@/components/ClientSideComponents/SliderComponents/SliderFrame";
import HomePageButtonOne from "@/components/CommonComponents/ButtonsComponent/HomePageButton";
import * as DOMPurify from "dompurify";
import { useEffect, useState } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

interface Props {
  carouselData: any;
}

const CarouselComponentAPlus: React.FC<Props> = ({ carouselData }) => {
  const [infinite, setInfinite] = useState<boolean>()

  useEffect(() => {
    if (carouselData?.content?.length === 1) {
      setInfinite(false);
    }
    else {
      setInfinite(true);
    }
  }, [])

  const settings = {
    dots: true,
    infinite: infinite,
    autoplay: true,
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
    slidesToScroll: 1,
    prevArrow: <AiOutlineLeft />,
    nextArrow: <AiOutlineRight />,
  };
  return (
    <>
      {carouselData?.content?.length > 0 ? (
        <div
          className="w-full h-auto bg-bullt-primary/[0.1] py-10 px-8"
          style={{
            marginTop: `${carouselData?.gap_top / 4}rem`,
            marginBottom: `${carouselData?.gap_bottom / 4}rem`,
          }}
        >
          <div className="grid grid-cols-12 pb-8">
            <div
              className="col-span-8 w-full m-auto flex flex-col justify-center items-start sm:text-4xl text-2xl text-center leading-3 mb-5 tailwind-unreset"
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(carouselData?.heading),
              }}
            />
            <div
              className="col-span-4 w-full m-auto flex flex-col justify-center items-center sm:text-xl text-lg text-start leading-3 mb-5 tailwind-unreset"
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(carouselData?.description),
              }}
            />
          </div>

          <SliderFrame settings={settings} selector={undefined}>
            {carouselData?.content?.map((item: any, index: number) => (
              <div
                key={index}
                className="w-full h-auto flex flex-col item-center justify-center relative mb-4 "
              >
                <div className="mx-3 bg-bullt-secondary rounded-md shadow-md shadow-white hover:scale-[1.01] transform transition-transform duration-300 hover:before:h-full before:absolute before:bottom-0 before:w-[4px] before:h-0 before:bg-bullt-tertiary before:transition-all before:duration-500">
                  <div className="w-full h-[100px] px-2 flex items-center ">
                    <img
                      src={`${process.env.NEXT_PUBLIC_BASE_URL}${item?.image}`}
                      alt={item?.heading}
                      style={{
                        objectFit: "contain",
                      }}
                      className="max-w-[100%] max-h-[100%] h-[250px] rounded-md"
                    />
                  </div>
                  {item?.heading || item?.description ? (
                    <div
                      className="h-auto bg-opacity-60 p-4 flex flex-col justify-center items-start">
                      <div
                        className="w-full flex flex-col items-start tailwind-unreset lg:text-xl md:text-base font-semibold h-[80px] "
                        dangerouslySetInnerHTML={{
                          __html: DOMPurify.sanitize(item?.heading),
                        }}
                      />
                      <p
                        className="w-full flex flex-col items-start tailwind-unreset h-[190px] overflow-y-auto scroll mb-4"
                        dangerouslySetInnerHTML={{
                          __html: DOMPurify.sanitize(item?.description),
                        }}
                      />

                      {item?.button_text && item?.button_link ? (
                        <HomePageButtonOne alignmentType={2} buttonText={item?.button_text} route={item?.button_link} />
                      ) : null}

                    </div>
                  ) : null}
                </div>
              </div>
            ))}
          </SliderFrame>
        </div>
      ) : null}
    </>
  );
};

export default CarouselComponentAPlus;
