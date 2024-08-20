import HomePageButtonOne from "@/components/CommonComponents/ButtonsComponent/HomePageButton";
import { Banner } from "@/types/BannerTypes";
import React from "react";

type Props = {
  banner: Banner;
};

const HomePageBannerCard = ({ banner }: Props) => {
  return (
    <>
      <div className="isolate  bg-[radial-gradient(ellipse_at_left,_var(--tw-gradient-stops))] from-indigo-500 via-indigo-300 to-indigo-100">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              {banner?.link}
              <a href="#" className="font-semibold text-indigo-600">
                <span aria-hidden="true" className="absolute inset-0" />
                Read more <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              {banner?.label}
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              {banner?.title}
            </p>
            <div className="mt-10 flex items-center justify-center">
              <HomePageButtonOne
                alignmentType={2}
                buttonText={banner?.button_text}
                route={`/order-online`}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePageBannerCard;
