"use client";
import React from "react";
import ProfessionalEMailBannerComponent from "./ProfessionalEMailBannerComponent";
import EmailAdvantagesBoxesComponents from "./EmailAdvantagesBoxesComponents";
import EmailFeaturesSectionComponent from "./EmailFeaturesComponent";
import EmailFaqComponent from "./EmailFaqComponent";
import EmailProductsComponent from "./EmailProductsComponent";

type Props = { professionalEmailPageContent: any; decodedSlug: string };

const ProfessionalEmailsAllComponents = ({
  professionalEmailPageContent,
  decodedSlug,
}: Props) => {
  return (
    <div>
      <ProfessionalEMailBannerComponent
        BannerContent={professionalEmailPageContent?.result?.data[0]}
      />
      <EmailAdvantagesBoxesComponents
        AdvantagesContent={professionalEmailPageContent?.result?.data[0]}
      />
      <EmailFeaturesSectionComponent
        FeaturesContent={professionalEmailPageContent?.result?.data[0]}
      />
      <EmailProductsComponent decodedSlug={decodedSlug} />
      <EmailFaqComponent
        FaqContent={professionalEmailPageContent?.result?.data[0]}
      />
    </div>
  );
};

export default ProfessionalEmailsAllComponents;
