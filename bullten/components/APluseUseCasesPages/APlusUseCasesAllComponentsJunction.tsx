"use client";
import React from "react";
import UseCasesBannerComponent from "./UseCasesBannerComponent";
import ImageTextMultipleBoxesComponent from "./ImageTextMultipleBoxesComponent";
import UseCasesFaqComponent from "./UseCasesFaqComponent";
import HeadingAndDescrptionComponent from "./HeadingAndDescrptionComponent";
import AdvantagesLeftRightImageTextComponent from "./AdvantagesLeftRightImageTextComponent";
import WhyChooseBoxesComponent from "./WhyChooseBoxesComponent";
import ImageTextUseCasesComponent from "./ImageTextUseCasesComponent";
interface Props {
  aPlusResponse: any;
  decodedSlug: any;
}

const APlusUseCasesAllComponentsJunction: React.FC<Props> = ({
  aPlusResponse,
  decodedSlug,
}) => {
  return (
    <div className={"sm:overflow-hidden overflow-x-hidden"}>
      {aPlusResponse?.data?.components?.map((item: any, index: number) => {
        switch (item?.component) {
          case "banner":
            return (
              <div key={index}>
                <UseCasesBannerComponent bannerData={item} />
              </div>
            );
          case "image_text_box":
            return (
              <div key={index}>
                <ImageTextMultipleBoxesComponent ImageTextBoxesData={item} />
              </div>
            );
          case "FAQ":
            return (
              <div key={index}>
                <UseCasesFaqComponent FaqData={item} />
              </div>
            );
          case "text":
            return (
              <div key={index}>
                <HeadingAndDescrptionComponent TextData={item} />
              </div>
            );
          case "advantage":
            return (
              <div key={index}>
                <AdvantagesLeftRightImageTextComponent AdvantagesData={item} />
              </div>
            );
          case "why_choose_column":
            return (
              <div key={index}>
                <WhyChooseBoxesComponent BoxesData={item} />
              </div>
            );
          case "image_text":
            return (
              <div key={index}>
                <ImageTextUseCasesComponent imageTextData={item} />
              </div>
            );
          default:
            return null;
        }
      })}
      {/* <StickyScrollRevealDemo /> */}
    </div>
  );
};

export default APlusUseCasesAllComponentsJunction;
