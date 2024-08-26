import { chatSupportApiData } from "@/apis/HomePageApis";
import HomePageButtonOne from "@/components/CommonComponents/ButtonsComponent/HomePageButton";
import Image from "next/image";

export default async function ChatService() {
  let chatSupportApiDataResponse = await chatSupportApiData();
  chatSupportApiDataResponse = chatSupportApiDataResponse?.result;
  console.log("chatSupportApiDataResponse", chatSupportApiDataResponse);

  return (
    <>
      {chatSupportApiDataResponse?.Active === true ? (
        <div className="flex flex-row items-center justify-center bg-blue-900 w-full px-6 py-12  mx-auto  bg-image-curve-lines">
          <div className="flex flex-col lg:flex-row items-center justify-center">
            <div className="relative flex-shrink-0 mb-6 lg:mb-0 lg:mr-10">
              <div className="rounded-full border-4 border-darkblue-800 p-2">
                <Image
                  src={`${process.env.NEXT_PUBLIC_BASE_URL}${chatSupportApiDataResponse?.Chat_Support?.image}`}
                  alt={chatSupportApiDataResponse?.Chat_Support?.alt_text}
                  width={150}
                  height={150}
                  className="rounded-full w-[200px] h-[200px] object-cover"
                />
              </div>

              <div className="absolute top-4 -left-1 bg-bullt-tertiary/50 bg-opacity-60 text-white px-1 py-2 text-[10px] font-bold rounded-lg backdrop-blur-md shadow-md">
                {chatSupportApiDataResponse?.Chat_Support?.bubble_text_1}
              </div>
              <div className="absolute bottom-4 right-4 bg-bullt-tertiary/50 bg-opacity-60 text-white px-1 py-2 text-[10px] font-bold rounded-lg backdrop-blur-md shadow-md">
                {chatSupportApiDataResponse?.Chat_Support?.bubble_text_2}
              </div>
            </div>

            <div className="lg:w-7/12 text-center lg:text-left">
              <h2 className="flex items-center text-[2rem] lg:text-[2.3rem] font-bold leading-[45px] text-white">
                {chatSupportApiDataResponse?.Chat_Support?.heading}
              </h2>
              <p className="text-gray-200 mb-6 text-base lg:text-[20px]">
                {chatSupportApiDataResponse?.Chat_Support?.description}
              </p>
              <button className="w-full sm:w-fit bg-bullt-tertiary hover:bg-white text-white hover:text-bullt-tertiary px-4 py-2 lg:px-6 lg:py-3 rounded-lg font-semibold flex items-center justify-center lg:justify-start">
                <Image
                  src={`${process.env.NEXT_PUBLIC_BASE_URL}${chatSupportApiDataResponse?.Chat_Support?.icon}`}
                  alt={chatSupportApiDataResponse?.Chat_Support?.icon_alt_text}
                  width={20}
                  height={20}
                  className="rounded-full mr-2"
                />
                {chatSupportApiDataResponse?.Chat_Support?.button_text}
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
