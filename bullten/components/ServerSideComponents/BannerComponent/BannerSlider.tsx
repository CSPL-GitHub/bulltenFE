"use client";
import React, { useEffect, useRef, useState } from "react";
import SliderFrame from "@/components/ClientSideComponents/SliderComponents/SliderFrame";
import HomePageBannerCard from "./HomePageBannerCard";
import { Banner, Banners } from "@/types/BannerTypes";

type Props = {
  banners: Banner[];
};

const BannerSlider = ({ banners }: Props) => {

  const [infinite , setInfinite] = useState<boolean>()

  useEffect(() => {
    if(banners?.length === 1 ){
      setInfinite(false);
    }
    else{
      setInfinite(true);
    }
  }, [])

  const sliderRef = useRef<HTMLDivElement>(null);

  const settings = {
    dots: infinite,
    infinite: infinite,
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
