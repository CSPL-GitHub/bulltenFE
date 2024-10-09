import { WordpressHostingPageContentApi } from "@/apis/WordpressHostingPageAPIs";
import WordpressHostingAllComponents from "@/components/WordpressHostingPage/WordpressHostingAllComponents";

const page = async () => {
  const WordpressPageContent = await WordpressHostingPageContentApi();
  return (
    <div className="sm:overflow-hidden overflow-x-hidden md:mt-[125px] mt-[105px]">
      <WordpressHostingAllComponents
        Data={WordpressPageContent?.result?.data[0]}
      />
    </div>
  );
};

export default page;
