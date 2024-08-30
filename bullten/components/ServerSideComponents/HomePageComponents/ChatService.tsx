import { chatSupportApiData, SupportSectionAPI } from "@/apis/HomePageApis";
import HomePageButtonOne from "@/components/CommonComponents/ButtonsComponent/HomePageButton";
import MainHeadingComponent from "@/components/CommonComponents/HeadingComponents/MainHeadingComponent";
import ParaGraphText from "@/components/CommonComponents/HeadingComponents/ParaGraphText";
import Image from "next/image";
import SupportSection from "./SupportComponent";
import SloganHeadingComponent from "@/components/CommonComponents/HeadingComponents/SloganHeadingComponent";

export default async function ChatService() {

  const SupportSectionContent = await SupportSectionAPI();

  return (
    <>
      {SupportSectionContent?.result?.Active === true ? (
        <section className="sm:py-4 py-2">
          <div className="relative sm:h-[350px] h-[380px] sm:py-12 py-6 md:pb-40 bg-fixed bg-cover bg-top bg-no-repeat bg-[url('/01.jpg')]">
            <div className="absolute inset-0 bg-black/60"></div>
            <div className="relative flex justify-center items-center px-6 ">
              <div className="sm:flex justify-center items-center">
                <div className="sm:w-[70%] w-full">
                  <SloganHeadingComponent alignmentType={1} paddingTop={1} hoverEffect="text-bullt-secondary">
                    {SupportSectionContent?.result?.data?.slogan}
                  </SloganHeadingComponent>
                  <MainHeadingComponent alignmentType={1} hoverEffect="text-bullt-secondary">
                    {SupportSectionContent?.result?.data?.heading}
                  </MainHeadingComponent>
                </div>
                <div className="py-5 sm:w-[30%]">
                  <HomePageButtonOne
                    alignmentType={2}
                    buttonText={SupportSectionContent?.result?.data?.buttontext}
                    route={"#"} />

                </div>
              </div>
            </div>
          </div>

          <div className="group sm:h-[200px] relative mx-auto sm:-mt-20  -mt-12 rounded-md bg-bullt-secondary shadow-md md:block sm:w-[83%] w-[95%]">
            <SupportSection supportContent={SupportSectionContent?.result} />
          </div>
        </section>
      ) : null}
    </>
  );
}
