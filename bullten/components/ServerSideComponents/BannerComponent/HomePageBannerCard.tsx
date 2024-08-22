"use client";
import HomePageButtonOne from "@/components/CommonComponents/ButtonsComponent/HomePageButton";
import SloganHeadingComponent from "@/components/CommonComponents/HeadingComponents/SloganHeadingComponent";
import { Banner } from "@/types/BannerTypes";
import Image from "next/image";
import React from "react";

type Props = {
  banner: Banner;
};

const HomePageBannerCard = ({ banner }: Props) => {
  return (
    <section className="relative bg-[url('https://img.freepik.com/free-vector/abstract-purple-background_698452-1613.jpg?w=826&t=st=1724331358~exp=1724331958~hmac=a0912fc3cdd2f36cd67cf5f675a2dfaba73154dae995176905cea4f094eb076d')] bg-cover bg-no-repeat bg-center min-h-[95vh] h-full flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black opacity-30 z-[-1]"
        aria-hidden="true"
      />
      <div className="container mx-auto px-4 sm:px-8 flex flex-col lg:flex-row items-center justify-between relative z-10">
        <div className="flex flex-col items-start justify-start w-[50%]">
          {banner?.label && (
            <SloganHeadingComponent>{banner?.label}</SloganHeadingComponent>
          )}
          {banner?.title && (
            <h2 className="text-white font-extrabold text-3xl sm:text-5xl mb-1">
              {banner?.title}
            </h2>
          )}
          {banner?.link && (
            <h3 className="text-white  text-lg mb-4">{banner?.link}</h3>
          )}
          <div className="shadow-xl">
            <HomePageButtonOne
              alignmentType={1}
              buttonText={banner?.button_text}
              route={banner?.button_link}
            />
          </div>
        </div>

        {banner?.image_url && (
          <div className="flex-1 lg:flex lg:justify-center mt-8 lg:mt-0">
            <Image
              src={`${process.env.NEXT_PUBLIC_BASE_URL}${banner?.image_url}`}
              alt={banner?.alt_text || "Banner Image"}
              layout="responsive"
              width={500}
              height={300}
              className="object-cover rounded-lg shadow-lg"
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default HomePageBannerCard;
