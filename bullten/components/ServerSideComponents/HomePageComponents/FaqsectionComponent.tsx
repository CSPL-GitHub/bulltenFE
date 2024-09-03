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
          <section className="w-full sm:py-12 py-4 sm:my-6 my-2 sm:px-6 px-2 bg-bullt-quaternary/[0.03] rounded-md">
            <div className="flex flex-col justify-left py-4">
              {FaqSectionApiResponse?.data?.slogen ? (
                <SloganHeadingComponent alignmentType={2} paddingTop={1}>
                  {FaqSectionApiResponse?.data?.slogen}
                </SloganHeadingComponent>
              ) : null}
              {FaqSectionApiResponse?.data?.heading ? (
                <MainHeadingComponent
                  alignmentType={2}
                  paddingTop={1}
                  hoverEffect="text-bullt-primary"
                >
                  {FaqSectionApiResponse?.data?.heading}
                </MainHeadingComponent>
              ) : null}
            </div>
            <div className="lg:flex gap-5 ">
              <div
                className="lg:w-[45%] w-full rounded-sm h-full bg-cover bg-fixed bg-center bg-opacity-30 bg-bullt-primary/[0.4] border-t-4 border-bullt-tertiary relative my-4"
                style={{
                  backgroundImage:
                    "url('https://img.freepik.com/free-vector/background-design-with-lines-blue-background_1308-4823.jpg?t=st=1724841272~exp=1724844872~hmac=6fbae88717fed9a0c1e99469cd5e7ee6ce7af54b58021f59f166d0b0aa260ac0&w=740')",
                }}
              >
                <div className="bg-white/20 shadow-lg ring-1 ring-black/5 h-full w-full px-4 py-4">
                  <ContactForm />
                </div>
              </div>
              <FaqQuestionComponent
                FaqSectionApiResponse={FaqSectionApiResponse?.data?.questions}
                FaqAllData={FaqSectionApiResponse}
              />
            </div>
          </section>
        </>
      ) : null}
    </>
  );
};

export default FaqSection;
