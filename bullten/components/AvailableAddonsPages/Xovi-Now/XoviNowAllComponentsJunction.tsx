"use client";
import React from "react";
import XoviNowBannerComponent from "./XoviNowBannerComponent";
import ImageSliderComponent from "./ImageSliderComponent";
import XoviNowTabsSectionComponent from "./XoviNowTabsSectionComponent";
import XoviNowuseCasesBoxes from "./XoviNowuseCasesBoxes";
import XoviNowFaqComponent from "./XoviNowFaqComponent";
import XoviNowServiceProductsComponent from "./XoviNowServiceProductsComponent";

type Props = { DataContent: any };

const XoviNowAllComponentsJunction = ({ DataContent }: Props) => {
  return (
    <div className="">
      <XoviNowBannerComponent BannerContent={DataContent} />
      <ImageSliderComponent SliderContent={DataContent} />
      <XoviNowTabsSectionComponent TabsContent={DataContent} />
      <XoviNowuseCasesBoxes useCasesContent={DataContent} />
      <XoviNowServiceProductsComponent />
      <XoviNowFaqComponent FaqContent={DataContent} />
    </div>
  );
};

export default XoviNowAllComponentsJunction;
