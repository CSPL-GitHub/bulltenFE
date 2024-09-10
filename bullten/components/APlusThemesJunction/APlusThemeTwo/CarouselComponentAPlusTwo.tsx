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

const CarouselComponentAPlusTwo: React.FC<Props> = ({ carouselData }) => {
  const [infinite, setInfinite] = useState<boolean>(true);

  useEffect(() => {
    if (carouselData?.content?.length === 1) {
      setInfinite(false);
    } else {
      setInfinite(true);
    }
  }, [carouselData]);

  const settings = {
    dots: true,
    infinite,
    autoplay: true,
    arrows: true,
    speed: 500,
    slidesToShow:
      carouselData?.content?.length >= carouselData?.element_count
        ? carouselData?.element_count || 1
        : carouselData?.content?.length,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow:
            carouselData?.content?.length >= carouselData?.element_count
              ? carouselData?.element_count < 2
                ? carouselData?.element_count || 1
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
      {carouselData?.content?.length > 0 && (
        <div
          className="container py-4 mx-auto w-full h-auto px-2 lg:px-8"
          style={{
            marginTop: `${carouselData?.gap_top / 4}rem`,
            marginBottom: `${carouselData?.gap_bottom / 4}rem`,
          }}
        >
          {/* Heading and Description */}
          <div className="flex flex-col gap-2 px-4">
            <div
              className="text-center text-2xl mt-2 text-bullt-secondary lg:text-4xl font-bold tailwind-unreset"
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(carouselData?.heading),
              }}
            />
            <div
              className="text-center text-lg text-bullt-secondary py-2 tailwind-unreset"
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(carouselData?.description),
              }}
            />
          </div>

          {/* Product Cards */}
          <div className="container mx-auto py-6">
            <div className="grid sm:grid-cols-2 md:grid-cols-4 grid-cols-1 gap-5 px-4">
              {carouselData?.content?.map((plan: any, index: any) => (
                <div
                  key={index}
                  className="relative bg-[#1c1c28] border-[#323233] border-[2px] rounded-lg shadow-lg duration-300 rounded-br-lg mb-10 p-4"
                >
                  <div className="px-4">
                   
                    <div className="relative w-full z-10 -mt-10 h-70 bg-gray-900 rounded-t-lg overflow-hidden shadow-md">
                      <img
                        src={`${process.env.NEXT_PUBLIC_BASE_URL}${plan?.image}`}
                        alt={plan?.name}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                      />
                      {plan?.heading || plan?.description ? (
                        <div className="h-auto bg-opacity-60 py-4 flex flex-col justify-center items-start">
                          <div
                            className="w-full flex flex-col items-start text-bullt-secondary tailwind-unreset text-xl font-semibold"
                            dangerouslySetInnerHTML={{
                              __html: DOMPurify.sanitize(plan?.heading),
                            }}
                          />
                          <div
                            className="w-full text-justify tailwind-unreset text-lg text-bullt-secondary sm:h-[110px] line-clamp-4"
                            dangerouslySetInnerHTML={{
                              __html: DOMPurify.sanitize(plan?.description),
                            }}
                          />
                          {plan?.button_text && plan?.button_link && (
                            <div className="mt-3 rounded font-normal">
                              <Link href={plan?.button_link}>
                                <input
                                  className="cursor-pointer text-xl border-[1px] inline-block w-full px-5 py-2 bg-bullt-tertiary text-bullt-secondary hover:bg-bullt-secondary hover:text-bullt-tertiary rounded-md transition-colors duration-300"
                                  type="button"
                                  value={plan?.button_text}
                                />
                              </Link>
                            </div>
                          )}
                        </div>
                      ) : null}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CarouselComponentAPlusTwo;
