import ParaGraphText from "@/components/CommonComponents/HeadingComponents/ParaGraphText";
import SloganHeadingComponent from "@/components/CommonComponents/HeadingComponents/SloganHeadingComponent";
import CounterSectionComponent from "@/components/ClientSideComponents/HomePageComponents/CounterSectionComponent";
import { CounteSectionApi } from "@/apis/HomePageApis";
import MainHeadingComponent from "@/components/CommonComponents/HeadingComponents/MainHeadingComponent";

const CounterComponent: React.FC = async () => {
  const response = await CounteSectionApi();
  const counterData = response?.result;
  return (
    <>
      {counterData?.Active === true ? (
        <>
          <div className="w-full py-12 px-8 lg:px-16 bg-bullt-quinary/[0.02]">
            <div className="flex flex-col items-center justify-center mx-auto gap-6">
              <div className="sm:w-1/2 text-center">
                {counterData?.data?.label ? (
                  <>
                    <SloganHeadingComponent>
                      {counterData?.data?.label}
                    </SloganHeadingComponent>
                  </>
                ) : null}
                {counterData?.data?.heading ? (
                  <MainHeadingComponent alignmentType={2} paddingTop={1}>
                    {counterData?.data?.heading}
                  </MainHeadingComponent>
                ) : null}
                {counterData?.data?.description ? (
                  <>
                    <ParaGraphText alignmentType={2} paddingTop={3}>
                      {counterData?.data?.description}
                    </ParaGraphText>
                  </>
                ) : null}
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
