import CounterSectionComponent from "@/components/ClientSideComponents/HomePageComponents/CounterSectionComponent";
import { CounteSectionApi } from "@/apis/HomePageApis";
import img1 from "../../../public/counter1.png";

const CounterComponent: React.FC = async () => {
  const response = await CounteSectionApi();
  const counterData = response?.result;

  return (
    <>
      {counterData?.Active === true && (
        <div className="my-16 relative">
           <div className="bg-[#FBAA2E] h-[200px] w-full"></div>
          <div className="w-[95%] py-16  z-10 -mt-[150px] "  style={{
            backgroundImage: `url(${img1.src})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
          }}>
            <div className="">
              {/* <div>
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
              </div> */}
              <CounterSectionComponent counterData={counterData?.data} />

            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CounterComponent;
