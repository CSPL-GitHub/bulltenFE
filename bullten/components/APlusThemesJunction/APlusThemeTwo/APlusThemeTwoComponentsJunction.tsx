import React from "react";
import APlusThemeTwoBannerComponent from "./APlusThemeTwoBannerComponent";
import AccordianAPlusThemeTwoComponent from "./AccordianAPlusThemeTwoComponent";
import OperatingComponent from "@/components/ServerSideComponents/HomePageComponents/OperatingComponent";
import TestimonialsComponent from "@/components/ServerSideComponents/HomePageComponents/TestimonialsSection";
import ChatService from "@/components/ServerSideComponents/HomePageComponents/ChatService";
import WhyChooseusColumnAplusThemeTwoComponent from "./WhyChooseusColumnAplusThemeTwoComponent";
import ImageTextTwoAPlusThemeTwoComponent from "./ImageTextTwoAPlusThemeTwoComponent";
import CarouselTwoAPlusComponent from "./CarouselTwoAPlusThemeTwoComponent";
import CarouselComponentAPlusTwo from "./CarouselComponentAPlusTwo";
import ColumnSectionAPlusThemeTwoComponent from "./ColumnSectionAPlusThemeTwoComponent";
import ThemeTwoMainProducts from "./AplusThemeTwoFilterComponent/ThemeTwoMainProducts";
import AdvantagesAplusThemeTwoComponent from "./AdvantagesAplusThemeTwoComponent";

interface Props {
  aPlusResponse: any;
  decodedSlug: any;
}

const APlusThemeTwoComponentsJunction: React.FC<Props> = ({
  aPlusResponse,
  decodedSlug,
}) => {
  return (
    <div
      className={
        " bg-bullt-primary sm:overflow-hidden overflow-x-hidden md:mt-[125px] mt-[105px]"
      }
    >
      {aPlusResponse?.data?.components?.map((item: any, index: number) => {
        switch (item?.component) {
          case "game_banner":
            return (
              <div key={index}>
                <APlusThemeTwoBannerComponent GamebannerData={item} />
              </div>
            );

          case "image_text":
            return (
              <></>
              //   <div key={index}>
              //     <ImageTextAPlusComponent imageTextData={item} />
              //   </div>
            );
          case "image_text_2":
            return (
              <div key={index}>
                <ImageTextTwoAPlusThemeTwoComponent imageTextData={item} />
              </div>
            );
          case "video_text":
            return (
              //   <div>
              //     <VideoTextAPlusComponent videoTextData={item} />
              //   </div>
              <></>
            );
          case "video":
            return (
              //   <div key={index}>
              //     <VideoAPlusComponent videoData={item} />
              //   </div>
              <></>
            );
          case "column":
            return (
              <div key={index}>
                <ColumnSectionAPlusThemeTwoComponent columnData={item} />
              </div>
            );
          case "carousel":
            return (
              <div key={index}>
                <CarouselComponentAPlusTwo carouselData={item} />
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
                <WhyChooseusColumnAplusThemeTwoComponent columnData={item} />
              </div>
            );
          case "accordion":
            return (
              <div key={index} className="">
                <AccordianAPlusThemeTwoComponent AccordionData={item} />
              </div>
            );
          case "location_data":
            return (
              //   <div>
              //     <CountryLocationsCarouselComponentAPlus carouselData={item} />
              //   </div>
              <></>
            );
          case "advantage":
            return (
              <div
                key={index}
                className="bg-gradient-to-b from-black/20 via-[#6031a7] to-black/40"
              >
                <AdvantagesAplusThemeTwoComponent AdvantagesData={item} />
              </div>
            );
          case "operating_systems":
            return (
              <>
                {item?.operating_systems_is_active ? (
                  <div key={index} className="py-4 lg:py-8 px-2 lg:px-8">
                    <OperatingComponent color={item?.is_os_color} />
                  </div>
                ) : null}
              </>
            );
          case "testimonials":
            return (
              <>
                {" "}
                {item?.testimonials_is_active?.Active ? (
                  <div key={index} className="container mx-auto">
                    <TestimonialsComponent
                      color={item?.is_testimonials_color}
                    />{" "}
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

          default:
            return null;
        }
      })}
    </div>
  );
};

export default APlusThemeTwoComponentsJunction;
