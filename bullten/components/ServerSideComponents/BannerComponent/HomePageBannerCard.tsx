import HomePageButtonOne from "@/components/CommonComponents/ButtonsComponent/HomePageButton";
import { Banner } from "@/types/BannerTypes";
import React from "react";

type Props = {
  banner: Banner;
};

const HomePageBannerCard = ({ banner }: Props) => {
  return (
   <div>
     <section className="isolate bg-custom-gradient h-screen ">
      <div className="container mx-auto pt-40 ">
        <div className="w-[50%] text-bullt-secondary flex flex-col gap-9">
          <h4 className="">
            {banner?.label}
          </h4>
          <h2 className="text-bullt-secondary font-extrabold text-5xl">
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
    </section>
   
   </div>

    
  );
};

export default HomePageBannerCard;
