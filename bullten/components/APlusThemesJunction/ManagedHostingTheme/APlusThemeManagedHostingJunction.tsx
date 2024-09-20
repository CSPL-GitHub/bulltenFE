"use client";
import React from "react";
import APlusBannerComponent from "./BannerComponentAPlus";
import ImageTextAPlusComponent from "./ImageTextAPlusComponent";
import CarouselTwoAPlusComponent from "./CarouselTwoAPlusComponent";
import OperatingComponent from "@/components/ServerSideComponents/HomePageComponents/OperatingComponent";
import TestimonialsComponent from "@/components/ServerSideComponents/HomePageComponents/TestimonialsSection";
import ChatService from "@/components/ServerSideComponents/HomePageComponents/ChatService";
import ThemeTwoMainProducts from "../APlusThemeTwo/AplusThemeTwoFilterComponent/ThemeTwoMainProducts";
import ColumnSectionAPlusComponent from "./ColumnSectionAPlusComponent";
import AccordianAPlusComponent from "./AccordianAPlusComponent";
import WindowsVpsHostingAPlusComponent from "./WindowsVpsHostingAPlusComponent";
import ManageVpsAdvantagesComponent from "./ManageVpsAdvantagesComponent";
import ImageTextTwoManagedHostingAPlusComponent from "./ImageTextTwoManagedHostingAPlusComponent";
import HostingCarouselComponentAPlus from "./HostingCarouselComponentAPlus";
import WhyChooseUsManagedHoistingComponent from "./WhyChooseUsManagedHoistingComponent";
import ServerProductsComparisionManageHostingAplusComponent from "./ServerProductsComponent/ServerProductsComparisionManageHostingAplusComponent";

interface Props {
  aPlusResponse: any;
  decodedSlug: any;
}

const APlusThemeManagedHostingJunction: React.FC<Props> = ({
  aPlusResponse,
  decodedSlug,
}) => {
  return (
    <div
      className={
        "sm:overflow-hidden overflow-x-hidden md:mt-[125px] mt-[105px]"
      }
    >
      {/* <ServerProductsComparisionManageHostingAplusComponent
        decodedSlug={decodedSlug}
      /> */}
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
                <ImageTextTwoManagedHostingAPlusComponent
                  imageTextData={item}
                />
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
                <HostingCarouselComponentAPlus carouselData={item} />
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
                <WhyChooseUsManagedHoistingComponent columnData={item} />
              </div>
            );
          case "accordion":
            return (
              <div key={index} className="">
                <AccordianAPlusComponent AccordionData={item} />
              </div>
            );
          case "location_data":
            return (
              <div>
                {/* <CountryLocationsCarouselComponentAPlus carouselData={item} /> */}
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
          case "testimonials":
            return (
              <>
                {item?.testimonials_is_active?.Active ? (
                  <div className="container mx-auto">
                    <TestimonialsComponent color={undefined} />
                  </div>
                ) : null}
              </>
            );
          case "support":
            return (
              <>
                {item?.support_is_active ? (
                  <div
                    key={index}
                    className="container mx-auto py-4 lg:py-8 px-2 lg:px-8"
                  >
                    <ChatService color={item?.is_support_color} />{" "}
                  </div>
                ) : null}
              </>
            );
          case "products":
            return (
              <>
                {item?.is_active_product ? (
                  <div key={index}>
                    <ThemeTwoMainProducts decodedSlug={decodedSlug} />
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
          // case "vps_plan":
          //   return (
          //     <>
          //       <div key={index}>
          //         <ServerProductsComparisionManageHostingAplusComponent
          //           Data={item}
          //         />
          //       </div>
          //     </>
          //   );
          default:
            return null;
        }
      })}
      {/* <StickyScrollRevealDemo /> */}
    </div>
  );
};

export default APlusThemeManagedHostingJunction;
