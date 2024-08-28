import { chatSupportApiData, SupportSectionAPI } from "@/apis/HomePageApis";
import HomePageButtonOne from "@/components/CommonComponents/ButtonsComponent/HomePageButton";
import MainHeadingComponent from "@/components/CommonComponents/HeadingComponents/MainHeadingComponent";
import ParaGraphText from "@/components/CommonComponents/HeadingComponents/ParaGraphText";
import Image from "next/image";
import SupportSection from "./SupportComponent";

export default async function ChatService() {
  let chatSupportApiDataResponse = await chatSupportApiData();
  chatSupportApiDataResponse = chatSupportApiDataResponse?.result;
  const SupportSectionContent = await SupportSectionAPI();

  return (
    <>
      {chatSupportApiDataResponse?.Active === true ? (
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
          <div className="relative py-20 md:pb-40 bg-fixed bg-cover bg-center bg-no-repeat bg-[url('/01.jpg')]">
            <div className="absolute inset-0 bg-black opacity-70"></div>
            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 md:flex lg:px-8">
              <div className="relative mx-auto my-auto flex flex-col items-center">
                <div className="flex max-w-5xl justify-center items-center flex-col md:flex-col">
                  <h2 className="text-center text-3xl text-white leading-tight sm:text-5xl lg:text-5xl font-bold">
                    {chatSupportApiDataResponse?.Chat_Support?.heading}
                  </h2>
                  <div className="">
                    <p className="mt-4 text-center font-medium text-white md:text-lg">
                      {chatSupportApiDataResponse?.Chat_Support?.description}
                    </p>
                    <div className="py-5">
                      <HomePageButtonOne
                        alignmentType={2}
                        buttonText={
                          chatSupportApiDataResponse?.Chat_Support?.button_text
                        }
                        route={"#"}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="group relative mx-auto -mt-36 mb-20 hidden w-full max-w-6xl overflow-hidden rounded-md bg-bullt-secondary shadow-md md:block">
            <SupportSection supportContent={SupportSectionContent?.result} />
          </div>
        </section>
      ) : null}
    </>
  );
}
