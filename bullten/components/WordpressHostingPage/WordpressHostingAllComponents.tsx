import React from "react";
import WordpressHostingBanner from "./WordpressHostingBanner";
import WordpressHostingFaqComponent from "./WordpressHostingFaqComponent";
import WordpressHostingTestimonialComponent from "./WordpressHostingTestimonialComponent";
import WordPressHostingFeature from "./WordpressHostingFeatures";
import WhyChooseWordpressHostingTabs from "./WhyChooseWordpressHostingTabs";
import MigrateWordpressHostingComponent from "./MigrateWordpressHostingComponent";
import CustomerLogosComponent from "./CustomerLogosComponent";
import WordPressHostingProducts from "./WordPressHostingProducts";
import FeatureSection from "./Features";

type Props = { Data: any };

const WordpressHostingAllComponents = ({ Data }: Props) => {
  return (
    <div className="">
      <WordpressHostingBanner BannerData={Data} />
      <WordPressHostingFeature FeaturesData={Data?.features_info} />
      <CustomerLogosComponent Logos={Data?.customers_info} />
      <WordPressHostingProducts decodedSlug={Data?.slug} />
      <WhyChooseWordpressHostingTabs WhyChooseData={Data?.why_choose_info} />
      {/* <FeatureSection /> */}
      <MigrateWordpressHostingComponent
        AboutData={Data?.wp_wibsite_migarte_info}
      />
      <WordpressHostingTestimonialComponent />
      <WordpressHostingFaqComponent FaqData={Data?.faq_info} />
    </div>
  );
};

export default WordpressHostingAllComponents;
