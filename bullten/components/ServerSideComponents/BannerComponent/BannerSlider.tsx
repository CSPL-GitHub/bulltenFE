"use client";
import SliderFrame from "@/components/ClientSideComponents/SliderComponents/SliderFrame";
import { Banner } from "@/types/BannerTypes";
import React, { useEffect, useRef, useState } from "react";
import HomePageBannerCard from "./HomePageBannerCard";
import BannerWithImage from "./BannerWithImage";

type Props = {
  banners: Banner[];
};

const BannerSlider = ({ banners }: Props) => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [infinite, setInfinite] = useState<boolean>();

  useEffect(() => {
    if (banners?.length === 1) {
      setInfinite(false);
    } else {
      setInfinite(true);
    }
  }, []);

  const settings = {
    dots: infinite,
    infinite: infinite,
    autoplay: true,
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
        return <BannerWithImage banner={banner} key={banner?.id} />;
      })}
    </SliderFrame>
  );
};

export default BannerSlider;
