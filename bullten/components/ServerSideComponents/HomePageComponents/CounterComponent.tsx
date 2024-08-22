import ParaGraphText from "@/components/CommonComponents/HeadingComponents/ParaGraphText";
import SloganHeadingComponent from "@/components/CommonComponents/HeadingComponents/SloganHeadingComponent";
import CounterSectionComponent from "@/components/ClientSideComponents/HomePageComponents/CounterSectionComponent";
import { CounteSectionApi } from "@/apis/HomePageApis";

const CounterComponent: React.FC = async () => {
  const response = await CounteSectionApi();
  const counterData = response?.result;
  console.log("counterData", counterData?.data?.counters);
  return (
    <>
      {counterData?.Active === true ? (
        <>
          <div className="w-full sm:p-0 p-4 sm:py-12 bg-gradient-to-r from-blue-50 to-blue-50">
            <div className="flex flex-col items-center justify-center mx-auto gap-6">
              <div className="sm:w-1/2 text-center">
                {counterData?.data?.label ? (
                  <>
                    <SloganHeadingComponent>
                      {counterData?.data?.label}
                    </SloganHeadingComponent>
                  </>
                ) : null}
                <h1 className="text-4xl font-extrabold text-gray-800">
                  {counterData?.data?.heading}
                </h1>
                {counterData?.data?.description ? (
                  <>
                    <ParaGraphText>
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
