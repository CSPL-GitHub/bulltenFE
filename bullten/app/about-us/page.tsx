import { AboutUsPageApi } from "@/apis/AboutUsPageAPIs";
import AboutUsAllComponent from "@/components/AboutUsPage/AboutUsAllComponent";
const page = async ({
  params: { servers },
}: {
  params: { servers: string };
}) => {
  const RefundPolicyResponse = await AboutUsPageApi();
  const Data = RefundPolicyResponse?.result;
  return (
    <div className="sm:overflow-hidden overflow-x-hidden md:mt-[125px] mt-[105px]">
      {Data?.Active === true ? (
        <>
          <AboutUsAllComponent ContentData={Data?.data[0]} />
        </>
      ) : null}
    </div>
  );
};

export default page;
