import CounterSectionComponent from "@/components/ClientSideComponents/HomePageComponents/CounterSectionComponent";
import { CounteSectionApi, footerMapApi } from "@/apis/HomePageApis";

const CounterComponent: React.FC = async () => {
  const response = await CounteSectionApi();
  const counterData = response?.result;

  return (
    <>
      {counterData?.Active === true && (
        <div className="relative bg-fixed bg-cover bg-center bg-no-repeat bg-[url('https://img.freepik.com/premium-photo/strengthening-information-security-measures-secure-digital-data-protection-concept-cybersecurity-data-encryption-secure-networks-access-controls-risk-assessment_918839-342123.jpg?uid=R138009000&ga=GA1.1.57192057.1700485831&semt=ais_hybrid')]">
          <div className="bg-gradient-to-b from-black/80 to-black/60 w-full pt-10 pb-14 mx-auto">
            <div className="container flex sm:flex-row flex-col items-start justify-start gap-6 px-4 md:px-8 lg:px-12">
              <div>
                {counterData?.data?.label && (
                  <h2 className="text-bullt-text-quinary font-semibold">
                    {" "}
                    {counterData?.data?.label}
                  </h2>
                )}
                {counterData?.data?.heading && (
                  <h1 className="text-white text-start font-bold text-3xl md:text-4xl lg:text-5xl leading-tight">
                    {counterData?.data?.heading}
                  </h1>
                )}
                {counterData?.data?.description && (
                  <p className="text-gray-200 text-start text-lg md:text-xl lg:text-2xl max-w-4xl">
                    {counterData?.data?.description}
                  </p>
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
