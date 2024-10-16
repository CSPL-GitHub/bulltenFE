"use client";
import React from "react";
import APlusBannerComponent from "./BannerComponentAPlus";
import ImageTextAPlusComponent from "./ImageTextAPlusComponent";
import CarouselTwoAPlusComponent from "./CarouselTwoAPlusComponent";
import OperatingComponent from "@/components/ServerSideComponents/HomePageComponents/OperatingComponent";
import TestimonialsComponent from "@/components/ServerSideComponents/HomePageComponents/TestimonialsSection";
import ChatService from "@/components/ServerSideComponents/HomePageComponents/ChatService";
import ColumnSectionAPlusComponent from "./ColumnSectionAPlusComponent";
import CarouselComponentAPlus from "./CarouselComponentAPlus";
import AccordianAPlusComponent from "./AccordianAPlusComponent";
import WhyChooseUsManagedVPSComponent from "./WhyChooseUsManagedVPSComponent";
import WindowsVpsHostingAPlusComponent from "./WindowsVpsHostingAPlusComponent";
import ImageTextTwoManagedVpsAPlusComponent from "./ImageTextTwoManagedVpsAPlusComponent";
import StickyScrollRevealDemo from "./test";
import ProductCompairComponent from "./ProductCompairComponent";
import ManageVpsAdvantagesComponent from "./ManageVpsAdvantagesComponent";

interface Props {
  aPlusResponse: any;
  decodedSlug: any;
}

const APlusThemeManagedVpsJunction: React.FC<Props> = ({
  aPlusResponse,
  decodedSlug,
}) => {
  return (
    <div
      className={
        "sm:overflow-hidden overflow-x-hidden md:mt-[125px] mt-[105px]"
      }
    >
      {aPlusResponse?.data?.components?.map((item: any, index: number) => {
        switch (item?.component) {
          case "banner":
            return (
              <div key={index}>
                <APlusBannerComponent bannerData={item} />
              </div>
            );
          case "image_text":
            return (
              <div key={index}>
                <ImageTextAPlusComponent imageTextData={item} />
              </div>
            );
          case "image_text_2":
            return (
              <div key={index}>
                <ImageTextTwoManagedVpsAPlusComponent imageTextData={item} />
              </div>
            );
          case "column":
            return (
              <div key={index}>
                <ColumnSectionAPlusComponent columnData={item} />
              </div>
            );
          case "carousel":
            return (
              <div key={index}>
                <CarouselComponentAPlus carouselData={item} />
              </div>
            );
          case "carousel_2":
            return (
              <div>
                <CarouselTwoAPlusComponent carouselData={item} />
              </div>
            );
          case "why_choose_column":
            return (
              <div className="">
                <WhyChooseUsManagedVPSComponent columnData={item} />
              </div>
            );
          case "accordion":
            return (
              <div key={index} className="">
                <AccordianAPlusComponent AccordionData={item} />
              </div>
            );

          case "advantage":
            return (
              <div key={index}>
                <ManageVpsAdvantagesComponent AdvantagesData={item} />
              </div>
            );
          case "operating_systems":
            return (
              <>
                {item?.operating_systems_is_active ? (
                  <div key={index} className="py-4 lg:py-8 px-2 lg:px-8">
                    <OperatingComponent color={undefined} />
                  </div>
                ) : null}
              </>
            );

          case "window_vps":
            return (
              <>
                <div key={index}>
                  <WindowsVpsHostingAPlusComponent
                    LinuxVpsAccordionData={item}
                  />
                </div>
              </>
            );
          case "vps_plan":
            return (
              <>
                <div key={index}>
                  <ProductCompairComponent Data={item} />
                </div>
              </>
            );
          default:
            return null;
        }
      })}
      {/* <StickyScrollRevealDemo /> */}
    </div>
  );
};

export default APlusThemeManagedVpsJunction;
