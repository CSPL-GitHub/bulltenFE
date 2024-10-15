import React from "react";
import APlusUseCasesAllComponentsJunction from "@/components/APluseUseCasesPages/APlusUseCasesAllComponentsJunction";
import { UseCasesDataApi } from "@/apis/UseCasesAPIs";

const page = async ({
  params: { useCase },
}: {
  params: { useCase: string };
}) => {
  const decodedSlug = decodeURIComponent(useCase);

  const UseCasesPageResponse = await UseCasesDataApi(decodedSlug);
  return (
    <div className="sm:overflow-hidden overflow-x-hidden md:mt-[125px] mt-[105px]">
      <>
        {UseCasesPageResponse?.result?.Active === true ? (
          <div>
            <APlusUseCasesAllComponentsJunction
              aPlusResponse={UseCasesPageResponse?.result}
              decodedSlug={decodedSlug}
            />
          </div>
        ) : null}
      </>
    </div>
  );
};

export default page;
