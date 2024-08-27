import CounterSectionComponent from "@/components/ClientSideComponents/HomePageComponents/CounterSectionComponent";
import { CounteSectionApi, footerMapApi } from "@/apis/HomePageApis";
import SloganHeadingComponent from "@/components/CommonComponents/HeadingComponents/SloganHeadingComponent";
import MainHeadingComponent from "@/components/CommonComponents/HeadingComponents/MainHeadingComponent";
import ParaGraphText from "@/components/CommonComponents/HeadingComponents/ParaGraphText";

const CounterComponent: React.FC = async () => {
  const response = await CounteSectionApi();
  const counterData = response?.result;

  return (
    <>
      {counterData?.Active === true && (
        <div className="my-16 relative bg-fixed bg-cover bg-center bg-no-repeat bg-[url('https://img.freepik.com/premium-photo/strengthening-information-security-measures-secure-digital-data-protection-concept-cybersecurity-data-encryption-secure-networks-access-controls-risk-assessment_918839-342123.jpg?uid=R138009000&ga=GA1.1.57192057.1700485831&semt=ais_hybrid')]">
          <div className="bg-gradient-to-b from-black/80 to-black/60 w-full py-16 mx-auto">
            <div className="container flex sm:flex-row flex-col items-start justify-start gap-6 px-4 md:px-8 lg:px-12">
              <div>
                {counterData?.data?.label && (
                  <SloganHeadingComponent paddingTop={1} alignmentType={1}>
                    {counterData?.data?.label}
                  </SloganHeadingComponent>
                )}
                {counterData?.data?.heading && (
                  <MainHeadingComponent
                    hoverEffect="leading-tight text-bullt-secondary"
                    paddingTop={1}
                  >
                    {counterData?.data?.heading}
                  </MainHeadingComponent>
                )}
                {counterData?.data?.description && (
                  <ParaGraphText hoverEffect="max-w-4xl text-bullt-secondary">
                    {counterData?.data?.description}
                  </ParaGraphText>
                )}
              </div>
              <CounterSectionComponent counterData={counterData?.data} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CounterComponent;
