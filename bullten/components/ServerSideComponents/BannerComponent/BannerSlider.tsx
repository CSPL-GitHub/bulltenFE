"use client";
import SliderFrame from "@/components/ClientSideComponents/SliderComponents/SliderFrame";
import { Banner } from "@/types/BannerTypes";
import React, { useEffect, useRef, useState } from "react";
import FinalBannerComponent from "./FinalBannerComponent";
import BannerWithImage from "./BannerWithImage";

type Props = {
  banners: Banner[];
};

const BannerSlider = ({ banners }: Props) => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [infinite, setInfinite] = useState<boolean>(true);
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  useEffect(() => {
    if (banners?.length === 1) {
      setInfinite(false);
    }
  }, [banners]);

  const settings = {
    dots: infinite,
    infinite: infinite,
    autoplay: true,
    arrows: false,
    speed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (oldIndex: number, newIndex: number) => {
      setCurrentSlide(newIndex);
    },
    // prevArrow: <AiOutlineLeft />,
    // nextArrow: <AiOutlineRight />,
  };

  return (
    <SliderFrame settings={settings} selector={sliderRef}>
      {banners?.map((banner: Banner, index: number) => (
        <section className="sm:pt-[130px] pt-[110px] bg-gray-100">
          {banner?.image_position === "Background" ?
            <BannerWithImage
              banner={banner}
              key={banner?.id}
            />
            :
            <FinalBannerComponent
              banner={banner}
              key={banner?.id}
            />
          }
        </section>
      ))}
    </SliderFrame>
  );
};

export default BannerSlider;
