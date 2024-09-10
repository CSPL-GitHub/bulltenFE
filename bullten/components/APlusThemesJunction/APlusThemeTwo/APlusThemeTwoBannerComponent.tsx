"use client";
import SliderFrame from "@/components/ClientSideComponents/SliderComponents/SliderFrame";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { useEffect, useState } from "react";

type Props = {
  GamebannerData: GameBannerData;
};

type GameBannerData = {
  content: any;
  heading: string;
  slogan: string;
  description: string;
  button_text: string;
  button_link: string;
  images: { src: string; alt: string }[];
};

const CustomPrevArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`bg-white p-2 rounded-full absolute top-1/2 transform -translate-y-1/4 lg:left-[120px] left-[0px] z-10`}
      style={{ ...style, display: "block", cursor: "pointer" }}
      onClick={onClick}
    >
      <AiOutlineLeft className="text-bullt-primary text-lg" />
    </div>
  );
};

const CustomNextArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`bg-white p-2 rounded-full absolute top-1/2 transform -translate-y-1/4 lg:right-[120px] right-[0px] z-10`}
      style={{ ...style, display: "block", cursor: "pointer" }}
      onClick={onClick}
    >
      <AiOutlineRight className="text-bullt-primary text-lg" />
    </div>
  );
};

const APlusThemeTwoBannerComponent: React.FC<Props> = ({ GamebannerData }) => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    vertical: true,
    verticalSwiping: true,
    slidesToScroll: 1,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          vertical: true,
          verticalSwiping: true,
          dots: false,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          vertical: true,
          verticalSwiping: true,
          dots: false,
        },
      },
    ],
  };

  return (
    <div className="relative lg:h-[550px] md:h-[300px] bg-contain bg-center bg-no-repeat  mx-auto lg:py-14 py-8 bg-[url('/bg-shape-8.png')]">
      <div className="container m-auto relative grid lg:grid-cols-2 grid-cols-1 gap-6 justify-between items-center w-full h-full p-6">
        <div className="flex flex-col justify-center lg:px-8 px-0">
          {GamebannerData?.slogan && (
            <div className="flex items-center mb-4">
              <div
                className="px-3 py-2 border border-blue-600 text-blue-600 rounded-md text-sm font-semibold"
                dangerouslySetInnerHTML={{ __html: GamebannerData?.slogan }}
              />
              <div className="mb-4 absolute top-30 left-[50%]">
                <Image
                  src="/img-63.png"
                  alt="Heading Image"
                  width={150}
                  height={150}
                />
              </div>
            </div>
          )}
          {GamebannerData?.heading && (
            <div
              className="text-white text-4xl lg:text-5xl font-semibold mb-4"
              dangerouslySetInnerHTML={{ __html: GamebannerData?.heading }}
            />
          )}
          {GamebannerData?.description && (
            <div
              className="text-white text-base lg:text-xl mb-6 "
              dangerouslySetInnerHTML={{ __html: GamebannerData?.description }}
            />
          )}
          {GamebannerData?.button_text && (
            <Link href={GamebannerData?.button_link}>
              <input
                className="pointer-curser px-6 py-2 bg-bullt-tertiary hover:bg-bullt-secondary hover:text-bullt-primary text-lg text-white rounded-md"
                type="button"
                value={GamebannerData?.button_text}
              />
            </Link>
          )}
        </div>

        <SliderFrame settings={settings} selector={undefined}>
          {GamebannerData?.content?.map((item: any, index: number) => (
            <div className="px-2" key={index}>
              <div className="lg:h-[500px] h-[400px] flex justify-center items-center rounded-md overflow-hidden">
                <img
                  src={`${process.env.NEXT_PUBLIC_BASE_URL}${item?.game_image}`}
                  alt={item.alt}
                  style={{ objectFit: "contain" }}
                  className="w-full h-full"
                />
              </div>
            </div>
          ))}
        </SliderFrame>
      </div>
    </div>
  );
};

export default APlusThemeTwoBannerComponent;
