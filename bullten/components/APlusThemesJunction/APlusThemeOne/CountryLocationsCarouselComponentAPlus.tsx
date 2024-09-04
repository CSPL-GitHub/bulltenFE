"use client";
import SliderFrame from "@/components/ClientSideComponents/SliderComponents/SliderFrame";
import HomePageButtonOne from "@/components/CommonComponents/ButtonsComponent/HomePageButton";
import * as DOMPurify from "dompurify";
import Image from "next/image";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
interface Props {

  carouselData: any
}


const CountryLocationsCarouselComponentAPlus: React.FC<Props> = ({ carouselData }) => {
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
          className="w-full h-auto"
          style={{
            marginTop: `${carouselData?.gap_top / 4}rem`,
            marginBottom: `${carouselData?.gap_bottom / 4}rem`,
          }}
        >
          <div className="bg-black/06">
            <div
              className="col-span-8 w-full m-auto flex flex-col justify-center sm:text-4xl text-2xl text-center leading-3 mb-5 tailwind-unreset"
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
          
          {carouselData?.content?.length > 4 ?
            <SliderFrame settings={settings} selector={undefined}>
              {carouselData?.content?.map((item: any, index: any) => (
                <div
                  key={index}
                  className="w-full h-auto flex flex-col item-center justify-center relative mb-4 border-t border-bullt-secondary/[0.4]"
                >
                  <div className="mx-3 bg-bullt-secondary rounded-md  shadow-white p-4 flex flex-col gap-4 mt-6 border shadow-sm">
                    <div className="w-full h-[200px] relative">
                      <Image
                        src={`${process.env.NEXT_PUBLIC_BASE_URL}${item?.image}`}
                        alt={item?.image_alternate_text}
                        style={{
                          position: "absolute",
                          objectFit: "cover",
                          inset: 0,
                        }}
                        fill={true}
                        className="max-w-[100%] w-full h-full rounded-md"
                      />
                    </div>
                    <div className="w-full bg-opacity-60 flex flex-col justify-center items-start gap-4">
                      <div className="w-full flex justify-start gap-2">
                        <div className="h-[60px] ">
                          <img
                            src={`${process.env.NEXT_PUBLIC_BASE_URL}${item.icon}`}
                            alt={item.CountryName}
                            style={{
                              objectFit: "contain",
                              position: "relative",
                              inset: 0,
                            }}
                            className="h-full w-full" />
                        </div>
                        <div className="w-full flex flex-col justify-center items-center">
                          <h3 className="w-full text-lg font-semibold">
                            {item?.countryname}
                          </h3>
                          <p className="w-full text-sm"
                          >{item?.countrystate}</p>
                        </div>
                      </div>
                      <div className="w-full flex flex-col gap-1">
                        <p className="w-full text-[.875em] text-gray-600 font-semibold">
                          {item?.ProductsHeading}
                        </p>
                        <div className="flex flex-wrap gap-1 w-full">
                          {item?.loctions.map((product: any, pIndex: any) => (
                            <div
                              key={pIndex}
                              className="text-xs border rounded-full py-2 px-3 text-center"
                              dangerouslySetInnerHTML={{
                                __html: DOMPurify.sanitize(product?.title),
                              }}>

                            </div>
                          ))}
                        </div>
                      </div>
                      <button className="font-normal bg-bullt-tertiary hover:bg-white text-bullt-secondary  hover:text-bullt-tertiary py-1 px-4 border border-bullt-tertiary hover:border-bullt-tertiary rounded">
                        {item?.button_text}
                      </button>
                      <div className="w-full flex items-center gap-1">
                        <p className="text-sm ">{item?.ip_name}</p>
                        <p className="font-semibold">{item?.ip_address}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </SliderFrame> :
            <>
              <div className="grid sm:grid-cols-2 md:grid-cols-4 grid-cols-1">
                 {carouselData?.content?.map((item: any, index: any) => (
                  <div
                    key={index}
                    className="w-full h-auto flex flex-col item-center justify-center relative mb-4 border-t border-bullt-secondary/[0.4]"
                  >
                    <div className="mx-3 bg-bullt-secondary rounded-md  shadow-white p-4 flex flex-col gap-4 mt-6 border shadow-sm">
                      <div className="w-full h-[200px] relative">
                        <Image
                          src={`${process.env.NEXT_PUBLIC_BASE_URL}${item?.image}`}
                          alt={item?.image_alternate_text}
                          style={{
                            position: "absolute",
                            objectFit: "cover",
                            inset: 0,
                          }}
                          fill={true}
                          className="max-w-[100%] w-full h-full rounded-md"
                        />
                      </div>
                      <div className="w-full bg-opacity-60 flex flex-col justify-center items-start gap-4">
                        <div className="w-full flex justify-start gap-2">
                          <div className="h-[60px] ">
                            <img
                              src={`${process.env.NEXT_PUBLIC_BASE_URL}${item.icon}`}
                              alt={item.CountryName}
                              style={{
                                objectFit: "contain",
                                position: "relative",
                                inset: 0,
                              }}
                              className="h-full w-full" />
                          </div>
                          <div className="w-full flex flex-col justify-center items-center">
                            <h3 className="w-full text-lg font-semibold">
                              {item?.countryname}
                            </h3>
                            <p className="w-full text-sm"
                            >{item?.countrystate}</p>
                          </div>
                        </div>
                        <div className="w-full flex flex-col gap-1">
                          <p className="w-full text-[.875em] text-gray-600 font-semibold">
                            {item?.ProductsHeading}
                          </p>
                          <div className="grid grid-cols-2">
                            {item?.loctions.map((product: any, pIndex: any) => (
                              <div
                                key={pIndex}
                                className="text-xs border  grid grid-col-1 rounded-full py-2 px-2 text-center"
                                dangerouslySetInnerHTML={{
                                  __html: DOMPurify.sanitize(product?.title),
                                }}>

                              </div>
                            ))}
                          </div>
                        </div>
                        <button className="font-normal bg-bullt-tertiary hover:bg-white text-bullt-secondary  hover:text-bullt-tertiary py-1 px-4 border border-bullt-tertiary hover:border-bullt-tertiary rounded">
                          {item?.button_text}
                        </button>
                        <div className="w-full flex items-center gap-1">
                          <p className="text-sm ">{item?.ip_name}</p>
                          <p className="font-semibold">{item?.ip_address}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>}
        </div>
      ) : null}
    </>
  );
};

export default CountryLocationsCarouselComponentAPlus;
