import { TermsAndConditionsPageApi } from "@/apis/LegalPagesAPIs";
import LegalPageAllComponent from "@/components/LegalPagesComponent/LegalPageAllComponent";
import React from "react";
const page = async ({
  params: { servers },
}: {
  params: { servers: string };
}) => {
  const RefundPolicyResponse = await TermsAndConditionsPageApi();
  const Data = RefundPolicyResponse?.result;

  return (
    <div className="sm:overflow-hidden overflow-x-hidden md:mt-[125px] mt-[105px]">
      <LegalPageAllComponent Data={Data} />
    </div>
  );
};

export default page;
