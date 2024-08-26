import ParaGraphText from "@/components/CommonComponents/HeadingComponents/ParaGraphText";
import SloganHeadingComponent from "@/components/CommonComponents/HeadingComponents/SloganHeadingComponent";
import CounterSectionComponent from "@/components/ClientSideComponents/HomePageComponents/CounterSectionComponent";
import { CounteSectionApi } from "@/apis/HomePageApis";
import MainHeadingComponent from "@/components/CommonComponents/HeadingComponents/MainHeadingComponent";
import Image from "next/image";

const CounterComponent: React.FC = async () => {
  const response = await CounteSectionApi();
  const counterData = response?.result;
  return (
    <>
      {counterData?.Active === true ? (
        <>
          <div className="w-full py-12 px-6 bg-white">
            <div className="flex flex-col items-center justify-center mx-auto gap-2">
              <div className="flex flex-col sm:flex-row items-start sm:items-center ">
                <div className="sm:w-[50%] w-full flex flex-col items-start justify-start">
                  {counterData?.data?.label && (
                    <h2 className="text-bullt-text-quinary font-semibold">
                      {counterData?.data?.label}
                    </h2>
                  )}
                  {counterData?.data?.heading && (
                    <MainHeadingComponent alignmentType={2} paddingTop={1}>
                      {counterData?.data?.heading}
                    </MainHeadingComponent>
                  )}
                  {counterData?.data?.description && (
                    <ParaGraphText alignmentType={2} paddingTop={1}>
                      {counterData?.data?.description}
                    </ParaGraphText>
                  )}
                </div>

                <div className="sm:w-1/2 flex justify-center sm:justify-end mt-4 sm:mt-0 relative">
                  <img
                    className="w-full  bg-transparent object-cover"
                    src={`${process.env.NEXT_PUBLIC_BASE_URL}${counterData?.data?.img}`}
                    alt={counterData?.data?.image_alt_text}
                  />
                </div>
              </div>

              <CounterSectionComponent counterData={counterData?.data} />
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default CounterComponent;
