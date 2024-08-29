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
        // <div className="flex flex-row items-center justify-center bg-blue-900 w-full px-6 py-12  mx-auto ">
        //   <div className="flex flex-col lg:flex-row items-center justify-center">
        //     <div className="relative flex-shrink-0 mb-6 lg:mb-0 lg:mr-10">
        //       <div className="rounded-full border-4 border-darkblue-800 p-2">
        //         <Image
        //           src={`${process.env.NEXT_PUBLIC_BASE_URL}${chatSupportApiDataResponse?.Chat_Support?.image}`}
        //           alt={chatSupportApiDataResponse?.Chat_Support?.alt_text}
        //           width={150}
        //           height={150}
        //           className="rounded-full w-[200px] h-[200px] object-cover"
        //         />
        //       </div>

        //       <div className="absolute top-4 -left-1 bg-bullt-tertiary/50 bg-opacity-60 text-white px-1 py-2 text-[10px] font-bold rounded-lg backdrop-blur-md shadow-md">
        //         {chatSupportApiDataResponse?.Chat_Support?.bubble_text_1}
        //       </div>
        //       <div className="absolute bottom-4 right-4 bg-bullt-tertiary/50 bg-opacity-60 text-white px-1 py-2 text-[10px] font-bold rounded-lg backdrop-blur-md shadow-md">
        //         {chatSupportApiDataResponse?.Chat_Support?.bubble_text_2}
        //       </div>
        //     </div>

        //     <div className="lg:w-7/12 text-center lg:text-left">
        //       <MainHeadingComponent
        //         alignmentType={1}
        //         paddingTop={1}
        //         hoverEffect="text-bullt-secondary"
        //       >
        //         {chatSupportApiDataResponse?.Chat_Support?.heading}
        //       </MainHeadingComponent>
        //       <ParaGraphText
        //         alignmentType={1}
        //         paddingTop={1}
        //         hoverEffect="text-bullt-secondary"
        //       >
        //         {chatSupportApiDataResponse?.Chat_Support?.description}
        //       </ParaGraphText>
        //       {/* <Image
        //           src={`${process.env.NEXT_PUBLIC_BASE_URL}${chatSupportApiDataResponse?.Chat_Support?.icon}`}
        //           alt={chatSupportApiDataResponse?.Chat_Support?.icon_alt_text}
        //           width={20}
        //           height={20}
        //           className="rounded-full mr-2"
        //         /> */}
        //       <div className="py-3">
        //         <HomePageButtonOne
        //           alignmentType={1}
        //           buttonText={
        //             chatSupportApiDataResponse?.Chat_Support?.button_text
        //           }
        //           route={"#"}
        //         />
        //       </div>
        //     </div>
        //   </div>
        // </div>
        <section className="">
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
