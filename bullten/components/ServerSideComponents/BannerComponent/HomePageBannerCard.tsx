import HomePageButtonOne from "@/components/CommonComponents/ButtonsComponent/HomePageButton";
import { Banner } from "@/types/BannerTypes";
import Image from "next/image";
import React from "react";

type Props = {
  banner: Banner;
};

const HomePageBannerCard = ({ banner }: Props) => {
  return (
    <section className="isolate bg-custom-gradient sm:h-[90vh] h-full">
      <div className=" grid grid-cols-12 items-center container sm:px-8 px-4 mx-auto ">
        
      <div className="sm:col-span-6 col-span-12 h-[200px] relative mt-32 sm:hidden flex">
          <Image
            src={`${process.env.NEXT_PUBLIC_BASE_URL}${banner?.image_url}`} 
            alt={banner?.alt_text} 
            fill={true}
            />
        </div>
        
        <div className="sm:col-span-6 col-span-12 sm:pt-40 sm:py-0 py-5">
          <div className=" text-bullt-secondary flex flex-col gap-9">
            <h4 className="">
              {banner?.label}
            </h4>
            <h2 className="text-bullt-secondary font-extrabold sm:text-5xl text-2xl">
              {banner?.title}
            </h2>
            <h3>
              {banner?.link}
            </h3>
            <HomePageButtonOne
              alignmentType={1}
              buttonText={banner?.button_text}
              route={banner?.button_link}
            />
          </div>
        </div>

        <div className="sm:col-span-6 col-span-12 h-[400px] relative mt-40 mx-20 sm:flex hidden">
          <Image
            src={`${process.env.NEXT_PUBLIC_BASE_URL}${banner?.image_url}`} 
            alt={banner?.alt_text} 
            fill={true}
            />
        </div>
      </div>

    </section>


  );
};

export default HomePageBannerCard;
