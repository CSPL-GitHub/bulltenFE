import ParaGraphText from "@/components/CommonComponents/HeadingComponents/ParaGraphText";
import SloganHeadingComponent from "@/components/CommonComponents/HeadingComponents/SloganHeadingComponent";
import CounterSectionComponent from "@/components/ClientSideComponents/HomePageComponents/CounterSectionComponent";
import { CounteSectionApi, footerMapApi } from "@/apis/HomePageApis";
import MainHeadingComponent from "@/components/CommonComponents/HeadingComponents/MainHeadingComponent";
import Image from "next/image";
import FooterMap from "../FooterComponent/FooterMap";

const CounterComponent: React.FC = async () => {
  const response = await CounteSectionApi();
  const counterData = response?.result;
  const footerMapResponse = await footerMapApi();
  return (
    <>
      {counterData?.Active === true ? (
        <>
          <div className="container w-full pt-10 mx-auto ">
            <div className="flex flex-col items-center justify-center gap-2">
              <div className="flex flex-col sm:flex-row items-start sm:items-start ">
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

                  <CounterSectionComponent counterData={counterData?.data} />
                </div>

                <div className="sm:w-1/2 flex justify-center sm:justify-end mt-4 sm:mt-0 relative">
                  <FooterMap
                    footerMapResponse={footerMapResponse?.result?.map_data}
                  />
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default CounterComponent;
