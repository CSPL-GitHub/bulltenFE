"use client";
import SliderFrame from "@/components/ClientSideComponents/SliderComponents/SliderFrame";
import HomePageButtonOne from "@/components/CommonComponents/ButtonsComponent/HomePageButton";
import DOMPurify from "dompurify";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

interface Props {
  carouselData: any;
}

const CarouselComponentAPlus: React.FC<Props> = ({ carouselData }) => {
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
          className="container mx-auto w-full h-auto py-4 lg:py-8 px-2 lg:px-8"
          style={{
            marginTop: `${carouselData?.gap_top / 4}rem`,
            marginBottom: `${carouselData?.gap_bottom / 4}rem`,
          }}
        >
          <div className="grid grid-cols-12 pb-8">
            <div
              className="col-span-8 w-full m-auto flex flex-col justify-center items-start sm:text-4xl text-2xl font-semibold text-center leading-3 mb-5 tailwind-unreset"
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(carouselData?.heading),
              }}
            />
            <div
              className="col-span-4 w-full m-auto flex flex-col justify-center items-center  text-start  mb-5 tailwind-unreset text-lg  text-bullt-primary/[0.7]"
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
                <div className="mx-3 rounded-md shadow-md shadow-white hover:scale-[1.01] transform transition-transform duration-300  before:transition-all before:duration-500">
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
                    <div className="h-auto bg-opacity-60 p-4 flex flex-col justify-center items-start">
                      <div
                        className="w-full flex flex-col items-start tailwind-unreset lg:text-xl md:text-base font-semibold min-h-[80px] "
                        dangerouslySetInnerHTML={{
                          __html: DOMPurify.sanitize(item?.heading),
                        }}
                      />
                      <p
                        className="w-full text-justify tailwind-unreset h-[190px] overflow-y-auto scroll mb-4"
                        dangerouslySetInnerHTML={{
                          __html: DOMPurify.sanitize(item?.description),
                        }}
                      />

                      {/* {item?.button_text && item?.button_link ? (
                        <HomePageButtonOne
                          alignmentType={1}
                          buttonText={item?.button_text}
                          route={item?.button_link}
                        />
                      ) : null} */}

                      {item?.button_text && item?.button_link ? (
                        <div className="mt-3 rounded font-normal">
                          <Link href={item?.button_link}>
                            <input
                              className="cursor-pointer text-normal inline-block px-4 py-2 bg-bullt-tertiary text-bullt-secondary hover:bg-bullt-secondary hover:text-bullt-tertiary  text-sm rounded-md  transition-colors duration-300"
                              type="button"
                              value={item?.button_text}
                            />
                          </Link>
                        </div>
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
