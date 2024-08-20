"use client";
import React, { useRef } from "react";
import SliderFrame from "@/components/ClientSideComponents/SliderComponents/SliderFrame";
import HomePageBannerCard from "./HomePageBannerCard";
import { Banner, Banners } from "@/types/BannerTypes";

type Props = {
  banners: Banner[];
};

const BannerSlider = ({ banners }: Props) => {
  const sliderRef = useRef<HTMLDivElement>(null);

  const settings = {
    dots: true,
    infinite: false,
    autoplay: false,
    arrows: false,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    // prevArrow: <AiOutlineLeft />,
    // nextArrow: <AiOutlineRight />,
  };

  return (
    <SliderFrame settings={settings} selector={sliderRef}>
      {banners?.map((banner: Banner) => {
        return <HomePageBannerCard banner={banner} key={banner?.id} />;
      })}
    </SliderFrame>
  );
};

export default BannerSlider;
