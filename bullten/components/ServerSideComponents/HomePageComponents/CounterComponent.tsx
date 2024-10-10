import CounterSectionComponent from "@/components/ClientSideComponents/HomePageComponents/CounterSectionComponent";
import { CounteSectionApi } from "@/apis/HomePageApis";
import img1 from "../../../public/counter1.png";

const CounterComponent: React.FC = async () => {
  const response = await CounteSectionApi();
  const counterData = response?.result;

  return (
    <>
      {counterData?.Active === true && (
        <div className="sm:py-4 py-2  relative">
          <div className="bg-bullt-tertiary h-[180px] w-full"></div>
          <div
            className="w-[90%] py-6  z-10 -mt-[130px] "
            style={{
              backgroundImage: `url(${img1.src})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          >
            <div className="">
              <CounterSectionComponent counterData={counterData?.data} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CounterComponent;
