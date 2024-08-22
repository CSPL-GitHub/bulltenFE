import ParaGraphText from "@/components/CommonComponents/HeadingComponents/ParaGraphText";
import SloganHeadingComponent from "@/components/CommonComponents/HeadingComponents/SloganHeadingComponent";
import CounterSectionComponent from "@/components/ClientSideComponents/HomePageComponents/CounterSectionComponent";
import { CounteSectionApi } from "@/apis/HomePageApis";

const CounterComponent: React.FC = async () => {
  const response = await CounteSectionApi();
  const counterData = response?.result?.[0]; 
  return (
    <div className="w-full sm:p-0 p-4 sm:py-16 bg-gradient-to-r from-blue-50 to-blue-50">
      <div className="flex flex-col items-center justify-center mx-auto gap-6">
        <div className="sm:w-1/2 text-center">
          <SloganHeadingComponent>{counterData?.label}</SloganHeadingComponent>
          <h1 className="text-4xl font-extrabold text-gray-800">
            {counterData?.heading}
          </h1>
          <ParaGraphText>{counterData?.description}</ParaGraphText>
        </div>
        <CounterSectionComponent counterData={counterData} />
      </div>
    </div>
  );
};

export default CounterComponent;
