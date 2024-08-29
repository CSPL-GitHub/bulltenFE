import { FaqSectionApi } from "@/apis/HomePageApis";
import FaqQuestionComponent from "@/components/ClientSideComponents/HomePageComponents/FaqQuestionComponent";
import MainHeadingComponent from "@/components/CommonComponents/HeadingComponents/MainHeadingComponent";
import ParaGraphText from "@/components/CommonComponents/HeadingComponents/ParaGraphText";
import SloganHeadingComponent from "@/components/CommonComponents/HeadingComponents/SloganHeadingComponent";
import Image from "next/image";
import React, { useState } from "react";
import ContactForm from "./ContactForm";

const FaqSection = async () => {
  const FaqSection = await FaqSectionApi();
  const FaqSectionApiResponse = FaqSection?.result;
  return (
    <>
      {FaqSection?.result?.Active === true ? (
        <>
          <section className="w-full sm:py-12 py-4 my-3 sm:px-6 px-2 bg-bullt-quaternary/[0.03] rounded-md">
            <div className="flex flex-col items-center justify-center py-4">
              {FaqSectionApiResponse?.data?.slogen ? (
                <SloganHeadingComponent alignmentType={1} paddingTop={1}>
                  {FaqSectionApiResponse?.data?.slogen}
                </SloganHeadingComponent>
              ) : null}
              {FaqSectionApiResponse?.data?.heading ? (
                <MainHeadingComponent
                  alignmentType={1}
                  paddingTop={1}
                  hoverEffect="text-bullt-primary"
                >
                  {FaqSectionApiResponse?.data?.heading}
                </MainHeadingComponent>
              ) : null}
            </div>
            <div className="sm:flex gap-5 px-24">
              <div
                className="sm:w-[50%] sm:px-14 h-full px-4 bg-cover bg-fixed bg-center bg-opacity-30 py-10"
                style={{
                  backgroundImage:
                    "url('https://img.freepik.com/premium-photo/data-center-with-multiple-rows-fully-operational-server-racks-modern-telecommunications-cloud-computing-artificial-intelligence-database-supercomputer-technology-concept_982144-98.jpg?uid=R138009000&ga=GA1.1.57192057.1700485831&semt=ais_hybrid')",
                }}
              >
                <ContactForm />
              </div>
              <FaqQuestionComponent
                FaqSectionApiResponse={FaqSectionApiResponse?.data?.questions}
              />
            </div>
          </section>
        </>
      ) : null}
    </>
  );
};

export default FaqSection;
