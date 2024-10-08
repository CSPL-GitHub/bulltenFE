import React, { Suspense } from "react";
import BannerComponentAPlus from "./BannerComponentAPlus";
import ImageTextAPlusComponent from "./ImageTextAPlusComponent";
import ImageTextTwoAPlusComponent from "./ImageTextTwoAPlusComponent";
import VideoAPlusComponent from "./VideoAPlusComponent";
import ColumnSectionAPlusComponent from "./ColumnSectionAPlusComponent";
import CarouselComponentAPlus from "./CarouselComponentAPlus";
import VideoTextAPlusComponent from "./VideoTextAPlusComponent";
import CarouselTwoAPlusComponent from "./CarouselTwoAPlusComponent";
import CountryLocationsCarouselComponentAPlus from "./CountryLocationsCarouselComponentAPlus";
import WhyChooseusColumnComponent from "./WhyChooseusColumnComponent";
import AccordianAPlusComponent from "./AccordianAPlusComponent";
import SupportSection from "@/components/ServerSideComponents/HomePageComponents/SupportComponent";
import OperatingComponent from "@/components/ServerSideComponents/HomePageComponents/OperatingComponent";
import TestimonialsComponent from "@/components/ServerSideComponents/HomePageComponents/TestimonialsSection";
import ChatService from "@/components/ServerSideComponents/HomePageComponents/ChatService";
import AlternatingSections from "./AdvantagesComponent";
import AdvantagesAPLusComponent from "./AdvantagesComponent";
import FilterComponent from "./FilterProductsComponents/FilterComponet";
import PricingTable from "./FilterProductsComponents/ServerProductComponent";
import MainFilterProducts from "./FilterProductsComponents/MainFilterProducts";
import Skeleton from "react-loading-skeleton";
import MultipleFeatureTabsAplusComponent from "./MultipleFeatureTabsAplusComponent";

interface Props {
  aPlusResponse: any;
  decodedSlug: any;
}

const APlusThemeOneComponentsJunction: React.FC<Props> = ({
  aPlusResponse,
  decodedSlug,
}) => {
  return (
    <div
      className={
        " bg-bullt-quaternary/[0.02] sm:overflow-hidden overflow-x-hidden md:mt-[125px] mt-[105px]"
      }
    >
      {aPlusResponse?.data?.components?.map((item: any, index: number) => {
        switch (item?.component) {
          case "banner":
            return (
              <div key={index}>
                <BannerComponentAPlus bannerData={item} />
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
                <ImageTextTwoAPlusComponent imageTextData={item} />
              </div>
            );
          case "video_text":
            return (
              <div>
                <VideoTextAPlusComponent videoTextData={item} />
              </div>
            );
          case "video":
            return (
              <div key={index}>
                <VideoAPlusComponent videoData={item} />
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
                <WhyChooseusColumnComponent columnData={item} />
              </div>
            );
          case "accordion":
            return (
              <div key={index}>
                <AccordianAPlusComponent AccordionData={item} />
              </div>
            );
          case "location_data":
            return (
              <div>
                <CountryLocationsCarouselComponentAPlus carouselData={item} />
              </div>
            );
          case "advantage":
            return (
              <div key={index}>
                <AdvantagesAPLusComponent AdvantagesData={item} />
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
                {" "}
                {item?.testimonials_is_active?.Active ? (
                  <div className="container mx-auto">
                    <Suspense
                      fallback={<Skeleton height={"50%"} width={"100%"} />}
                    >
                      <TestimonialsComponent color={undefined} />
                    </Suspense>
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
                    <ChatService color={undefined} />
                  </div>
                ) : null}
              </>
            );
          case "products":
            return (
              <>
                {item?.is_active_product ? (
                  <div key={index}>
                    <MainFilterProducts decodedSlug={decodedSlug} />
                  </div>
                ) : null}
              </>
            );

          case "tab":
            return (
              <div key={index}>
                <MultipleFeatureTabsAplusComponent TabData={item} />
              </div>
            );

          default:
            return null;
        }
      })}

      {/* <div>
        <AlternatingSections />
      </div> */}
    </div>
  );
};

export default APlusThemeOneComponentsJunction;
