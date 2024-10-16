"use client";
import SliderFrame from "@/components/ClientSideComponents/SliderComponents/SliderFrame";
import HomePageButtonOne from "@/components/CommonComponents/ButtonsComponent/HomePageButton";
import DOMPurify from "dompurify";
import Image from "next/image";
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
          className="container mx-auto w-full h-auto lg:py-8 pb-16 px-2 lg:px-8"
          style={{
            marginTop: `${carouselData?.gap_top / 4}rem`,
            marginBottom: `${carouselData?.gap_bottom / 4}rem`,
          }}
        >
          <div className="flex flex-col gap-2 px-4 pb-6">
            {carouselData?.heading ? (
              <div
                className="text-center text-2xl mt-2 lg:text-4xl font-bold tailwind-unreset"
                dangerouslySetInnerHTML={{
                  __html: carouselData?.heading,
                }}
              />
            ) : null}

            {carouselData?.description ? (
              <div
                className="text-center text-lg text-bullt-primary/[0.8]  tailwind-unreset "
                dangerouslySetInnerHTML={{
                  __html: carouselData?.description,
                }}
              />
            ) : null}
          </div>
          <SliderFrame settings={settings} selector={undefined}>
            {carouselData?.content?.map((item: any, index: number) => (
              <div
                key={index}
                className="w-full h-auto flex flex-col item-center justify-center relative mb-4"
              >
                <div className="mx-3 rounded-md hover:scale-[1.01] transform transition-transform duration-300  before:transition-all before:duration-500 bg-gray-50 p-4 border-[1px]">
                  {item?.image && (
                    <div className="relative w-1/4 h-[100px]">
                      <Image
                        src={`${process.env.NEXT_PUBLIC_BASE_URL}${item?.image}`}
                        alt={item?.heading}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="h-full w-full rounded-md object-contain"
                      />
                    </div>
                  )}

                  <div className="h-auto bg-opacity-60 py-4 flex gap-1 flex-col justify-center items-start">
                    {item?.heading ? (
                      <div
                        className="w-full flex flex-col items-start tailwind-unreset text-xl h-12 sm:h-auto mb-2 sm:mb-0 font-semibold"
                        dangerouslySetInnerHTML={{
                          __html: DOMPurify.sanitize(item?.heading),
                        }}
                      />
                    ) : null}

                    {item?.description ? (
                      <div
                        className="w-full text-left tailwind-unreset text-lg text-bullt-primary/[0.8] h-[110px] line-clamp-3 mt-2 sm:mt-0"
                        dangerouslySetInnerHTML={{
                          __html: DOMPurify.sanitize(item?.description),
                        }}
                      />
                    ) : null}

                    {item?.button_text && item?.button_link ? (
                      <div className="mt-3 rounded font-normal">
                        <Link href={item?.button_link}>
                          <input
                            className="cursor-pointer text-xl border-[1px] hover:border-bullt inline-block w-full px-5 py-2 bg-bullt-tertiary text-bullt-secondary hover:bg-bullt-secondary hover:text-bullt-tertiary rounded-md  transition-colors duration-300"
                            type="button"
                            value={item?.button_text}
                          />
                        </Link>
                      </div>
                    ) : null}
                  </div>
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
