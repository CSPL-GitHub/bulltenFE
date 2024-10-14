import React from "react";
import AboutUsBannerSection from "./AboutUsBannerSection";
import AboutUsSection from "./AboutUsComponent";
import CallToActionComponent from "./CallToActionComponent";
import AboutUsCounterComponent from "./AboutUsCounterComponent";
import ClientsReviewComponent from "./ClientsReviewComponent";

type Props = { ContentData: any };

const AboutUsAllComponent = ({ ContentData }: Props) => {
  return (
    <div>
      <AboutUsBannerSection BannerData={ContentData} />
      <AboutUsSection AboutData={ContentData?.our_story_info} />
      <AboutUsCounterComponent CounterData={ContentData?.counter_info} />
      <CallToActionComponent CtaData={ContentData?.chat_to_action} />
      {/* <ClientsReviewComponent
        TestimonialsData={ContentData?.testimonials_info}
      /> */}
    </div>
  );
};

export default AboutUsAllComponent;
