"use client";
import { Banner } from "@/types/BannerTypes";
import Image from "next/image";
import React from "react";
// import * as DOMPurify from "dompurify";

type Props = {
  banner: Banner;
};

const HomePageBannerCard = ({ banner }: Props) => {
  return (
    <section className="relative bg-primary-gradient min-h-[550px] h-full flex items-center justify-center mt-[70px] ">
      <div className="absolute inset-0 opacity-30 z-[-1]" />
      <div className="container mx-auto px-4 sm:px-8 flex flex-col lg:flex-row items-center justify-between relative z-10">
        {banner?.image_url && (
          <div
            className="flex-1 flex sm:hidden w-full lg:justify-center mt-8 lg:mt-0 max-h-[200px] relative"
            style={{ backgroundImage: `url('/blog-sub-card.png')` }}
          >
            <Image
              src={`${process.env.NEXT_PUBLIC_BASE_URL}${banner?.image_url}`}
              alt={banner?.alt_text || "Banner Image"}
              layout="responsive"
              width={300}
              height={200}
              className="object-contain rounded-lg"
            />
          </div>
        )}
        <div className="flex flex-col sm:gap-7 gap-2 mt-5 sm:mt-0 items-start justify-center sm:w-[60%] w-full">
          {banner?.label ? (
            <h2 className="text-white font-bold text-sm sm:text-xl mb-1 uppercase">
              {banner?.label}
            </h2>
          ) : null}
          {banner?.title && (
            <h2 className="text-white font-extrabold text-3xl sm:text-5xl mb-1">
              {banner?.title}
            </h2>
          )}
          {banner?.link && (
            <h3 className="text-white  text-lg mb-4">{banner?.link}</h3>
          )}

          <div className="flex sm:flex-row flex-col gap-3 text-bullt-secondary">
            <div className="flex gap-2 items-center space-x-2">
              <Image
                src={`${process.env.NEXT_PUBLIC_BASE_URL}${banner?.icon_1}`}
                alt={banner?.icon_1_alt_txt}
                width={30}
                height={30}
              />
              <div>
                <h3 className="text-xl font-semibold">
                  {banner?.icon_1_header}
                </h3>
                {/* <p dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(banner?.icon_1_decsription) }}/> */}
              </div>
            </div>
            <div className="flex gap-2 items-center space-x-2">
              <Image
                src={`${process.env.NEXT_PUBLIC_BASE_URL}${banner?.icon_2}`}
                alt={banner?.icon_2_alt_txt}
                width={30}
                height={30}
              />
              <div>
                <h3 className="text-xl font-semibold">
                  {banner?.icon_2_header}
                </h3>
                {/* <p dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(banner?.icon_2_decsription) }}/> */}
              </div>
            </div>
          </div>

          <div className=" sm:mt-0 mt-4 flex sm:justify-start justify-center w-full sm:pb-0 pb-8">
            <button
              onClick={() => (window.location.href = banner?.button_link)}
              className="text-xl text-bold border-2 border-bullt-text-quinary bg-bullt-text-quinary hover:bg-bullt-secondary text-bullt-secondary hover:text-bullt-tertiary rounded-md px-10 py-3"
            >
              {banner?.button_text}
            </button>
          </div>
        </div>

        {banner?.image_url && (
          <div
            className="flex-1 hidden sm:flex lg:justify-center mt-8 lg:mt-0 h-[350px] relative"
            style={{ backgroundImage: `url('/blog-sub-card.png')` }}
          >
            <Image
              src={`${process.env.NEXT_PUBLIC_BASE_URL}${banner?.image_url}`}
              alt={banner?.alt_text || "Banner Image"}
              layout="responsive"
              width={500}
              height={300}
              className="object-contain rounded-lg"
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default HomePageBannerCard;
