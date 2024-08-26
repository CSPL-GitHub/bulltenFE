import { DomainsearchApi } from "@/apis/HomePageApis";
import SearchSection from "@/components/ClientSideComponents/HomePageComponents/SearchSection";
import MainHeadingComponent from "@/components/CommonComponents/HeadingComponents/MainHeadingComponent";
import ParaGraphText from "@/components/CommonComponents/HeadingComponents/ParaGraphText";
import SloganHeadingComponent from "@/components/CommonComponents/HeadingComponents/SloganHeadingComponent";
import SubParaGraph from "@/components/CommonComponents/HeadingComponents/SubParaGraph";

const DomainSearchComponent = async () => {
  const DomainsearchApiResponse = await DomainsearchApi();

  return (
    <>
      {DomainsearchApiResponse?.result?.Active === true ? (
        <section className="flex flex-col bg-bullt-quaternary/[0.03] justify-center px-4 py-4 w-full mx-auto container">
          <div className="bg-bullt-secondary px-8 py-4 rounded-md border border-bullt-primary/[0.1]  lg:max-w-3xl w-full mx-auto">
            {DomainsearchApiResponse?.result?.data?.label ? (
              <SloganHeadingComponent paddingTop={1} alignmentType={1}>
                <p className="text-bullt-tertiary">
                  {DomainsearchApiResponse?.result?.data?.label}
                </p>
              </SloganHeadingComponent>
            ) : null}
            {DomainsearchApiResponse?.result?.data?.heading ? (
              <p className="sm:text-3xl text-2xl font-bold text-gray-900 mb-6">
                {DomainsearchApiResponse?.result?.data?.heading}
              </p>
            ) : null}
            {DomainsearchApiResponse?.result?.data?.description ? (
              <ParaGraphText paddingTop={1}>
                {DomainsearchApiResponse?.result?.data?.description}
              </ParaGraphText>
            ) : null}

            <SearchSection data={DomainsearchApiResponse?.result?.data} />
          </div>
        </section>
      ) : null}
    </>
  );
};

export default DomainSearchComponent;
