"use client";
import SliderFrame from "@/components/ClientSideComponents/SliderComponents/SliderFrame";
import HomePageButtonOne from "@/components/CommonComponents/ButtonsComponent/HomePageButton";
import DOMPurify from "dompurify";
import Image from "next/image";
import Link from "next/link";
import {
  AiOutlineArrowRight,
  AiOutlineLeft,
  AiOutlineRight,
} from "react-icons/ai";

interface Props {
  carouselData: any;
}

const CountryLocationsCarouselComponentAPlus: React.FC<Props> = ({
  carouselData,
}) => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    arrows: true,
    speed: 500,
    slidesToShow: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
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
          className="container mx-auto w-full h-auto py-4 lg:py-8 px-2 lg:px-8 "
          style={{
            marginTop: `${carouselData?.gap_top / 4}rem`,
            marginBottom: `${carouselData?.gap_bottom / 4}rem`,
          }}
        >
          {carouselData?.heading || carouselData?.description ? (
            <div className="bg-black/06">
              <div
                className="col-span-8 w-full m-auto flex flex-col justify-center sm:text-4xl text-2xl text-center leading-3 mb-5 tailwind-unreset"
                dangerouslySetInnerHTML={{
                  __html: carouselData?.heading,
                }}
              />
              <div
                className="col-span-4 w-full m-auto flex flex-col justify-center items-center sm:text-xl text-lg text-start leading-3 mb-5 tailwind-unreset"
                dangerouslySetInnerHTML={{
                  __html: carouselData?.description,
                }}
              />
            </div>
          ) : null}

          {carouselData?.content?.length > 4 ? (
            <SliderFrame settings={settings} selector={undefined}>
              {carouselData?.content?.map((item: any, index: any) => (
                <div
                  key={index}
                  className="w-full h-auto flex flex-col items-center justify-center relative mb-4 border-t border-bullt-secondary/[0.4] "
                >
                  <div className="mx-3 bg-white rounded-lg shadow-sm hover:shadow-md p-6 flex flex-col gap-4 mt-6 border border-gray-200 transition-all duration-300  hover:bg-bullt-quaternary/2">
                    <div className="w-full h-[200px] relative rounded overflow-hidden">
                      <Image
                        src={`${process.env.NEXT_PUBLIC_BASE_URL}${item?.image}`}
                        alt={item?.image_alternate_text}
                        style={{
                          position: "absolute",
                          objectFit: "cover",
                          inset: 0,
                        }}
                        fill={true}
                        className="max-w-full w-full h-full rounded-md transition-transform duration-500 hover:scale-110"
                      />
                    </div>
                    <div className="w-full flex flex-col justify-center items-start gap-4">
                      <div className="w-full flex justify-start items-center gap-4">
                        <div className="h-[40px] w-[40px] rounded-full overflow-hidden ">
                          <img
                            src={`${process.env.NEXT_PUBLIC_BASE_URL}${item.icon}`}
                            alt={item.CountryName}
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div className="flex flex-col justify-center items-start">
                          <div
                            className="text-lg font-semibold"
                            dangerouslySetInnerHTML={{
                              __html: item?.countryname,
                            }}
                          />
                          <div
                            className="text-sm text-gray-500"
                            dangerouslySetInnerHTML={{
                              __html: item?.countrystate,
                            }}
                          />
                        </div>
                      </div>
                      <div className="w-full flex flex-col gap-1">
                        <div
                          className="text-[.875em] text-black font-semibold"
                          dangerouslySetInnerHTML={{
                            __html: item?.country_flag,
                          }}
                        />
                        <div className="flex flex-wrap gap-1 w-full">
                          {item?.loctions.map((product: any, pIndex: any) => (
                            <div
                              key={pIndex}
                              className="text-xs border rounded-full py-2 px-3 text-center bg-gray-50 "
                              dangerouslySetInnerHTML={{
                                __html: product?.title,
                              }}
                            />
                          ))}
                        </div>
                      </div>

                      {item?.button_text ? (
                        <div className="mt-2">
                          <Link
                            href={item?.button_link}
                            className="flex justify-start items-center gap-2 font-normal bg-bullt-tertiary hover:bg-white text-white hover:text-bullt-tertiary py-1 px-4 border border-bullt-tertiary rounded transition-all duration-300"
                          >
                            <p className="text-semibold transition-transform duration-500">
                              {item?.button_text}
                            </p>
                            {/* <AiOutlineArrowRight size={20} /> */}
                          </Link>
                        </div>
                      ) : null}
                      <div className="w-full flex items-center gap-1 mt-3 text-sm text-gray-600">
                        <div
                          dangerouslySetInnerHTML={{
                            __html: item?.ip_name,
                          }}
                        />
                        <div
                          className="font-semibold text-gray-800"
                          dangerouslySetInnerHTML={{
                            __html: item?.ip_address,
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </SliderFrame>
          ) : (
            <>
              <div className="grid sm:grid-cols-2 md:grid-cols-4 grid-cols-1 gap-6">
                {carouselData?.content?.map((item: any, index: any) => (
                  <div
                    key={index}
                    className="w-full h-auto flex flex-col items-center justify-center relative mb-4 border-t border-bullt-secondary/[0.4]"
                  >
                    <div className="mx-3 bg-white rounded-lg shadow-md hover:shadow-lg p-6 flex flex-col gap-4 mt-6 border border-gray-200 transition-all duration-300  hover:bg-bullt-tertiary/5">
                      <div className="w-full h-[200px] relative rounded overflow-hidden">
                        <Image
                          src={`${process.env.NEXT_PUBLIC_BASE_URL}${item?.image}`}
                          alt={item?.image_alternate_text}
                          style={{
                            position: "absolute",
                            objectFit: "cover",
                            inset: 0,
                          }}
                          fill={true}
                          className="max-w-full w-full h-full rounded-md transition-transform duration-500 hover:scale-110"
                        />
                      </div>
                      <div className="w-full flex flex-col justify-center items-start gap-4">
                        <div className="w-full flex justify-start items-center gap-4">
                          <div className="h-[40px] w-[40px] rounded-full overflow-hidden shadow-md">
                            <img
                              src={`${process.env.NEXT_PUBLIC_BASE_URL}${item.icon}`}
                              alt={item.CountryName}
                              className="h-full w-full object-cover"
                            />
                          </div>
                          <div className="flex flex-col justify-center items-start">
                            <div
                              className="text-lg font-semibold"
                              dangerouslySetInnerHTML={{
                                __html: item?.countryname,
                              }}
                            />
                            <div
                              className="text-sm text-gray-500"
                              dangerouslySetInnerHTML={{
                                __html: item?.countrystate,
                              }}
                            />
                          </div>
                        </div>
                        <div className="w-full flex flex-col gap-1">
                          <div
                            className="text-[.875em] text-black font-semibold"
                            dangerouslySetInnerHTML={{
                              __html: item?.country_flag,
                            }}
                          />
                          <div className="flex flex-wrap gap-1 w-full">
                            {item?.loctions.map((product: any, pIndex: any) => (
                              <div
                                key={pIndex}
                                className="text-xs border rounded-full py-2 px-3 text-center bg-gray-100 hover:bg-bullt-tertiary hover:text-white transition-all duration-300"
                                dangerouslySetInnerHTML={{
                                  __html: product?.title,
                                }}
                              />
                            ))}
                          </div>
                        </div>

                        {item?.button_text ? (
                          <div className="mt-2">
                            <Link
                              href={item?.button_link}
                              className="flex justify-start items-center gap-2 font-normal bg-bullt-tertiary hover:bg-white text-white hover:text-bullt-tertiary py-1 px-4 border border-bullt-tertiary rounded transition-all duration-300"
                            >
                              <p className="text-semibold transition-transform duration-500">
                                {item?.button_text}
                              </p>
                              {/* <AiOutlineArrowRight size={20} /> */}
                            </Link>
                          </div>
                        ) : null}
                        <div className="w-full flex items-center gap-1 mt-3 text-sm text-gray-600">
                          <div
                            dangerouslySetInnerHTML={{
                              __html: item?.ip_name,
                            }}
                          />
                          <div
                            className="font-semibold text-gray-800"
                            dangerouslySetInnerHTML={{
                              __html: item?.ip_address,
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      ) : null}
    </>
  );
};

export default CountryLocationsCarouselComponentAPlus;
