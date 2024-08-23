import { DomainsearchApi } from "@/apis/HomePageApis";
import SearchSection from "@/components/ClientSideComponents/HomePageComponents/SearchSection";
import SloganHeadingComponent from "@/components/CommonComponents/HeadingComponents/SloganHeadingComponent";

const DomainSearchComponent = async () => {
  const DomainsearchApiResponse = await DomainsearchApi();

  return (
    <>
      {DomainsearchApiResponse?.result?.Active === true ? (
        <section className="w-full flex flex-col justify-center px-4 py-6 bg-gradient-to-b from-blue-100/50 via-blue-100/50 to-transparent  ">
          <div className="mx-auto">
            {DomainsearchApiResponse?.result?.data?.label ? (
              <SloganHeadingComponent paddingTop={1} alignmentType={1}>
                <p className="text-bullt-tertiary">
                  {DomainsearchApiResponse?.result?.data?.label}
                </p>
              </SloganHeadingComponent>
            ) : null}
            {DomainsearchApiResponse?.result?.data?.heading ? (
              <h1 className="sm:text-3xl text-2xl font-bold text-gray-900 mb-6">
                {DomainsearchApiResponse?.result?.data?.heading}
              </h1>
            ) : null}
            <SearchSection data={DomainsearchApiResponse?.result?.data} />
          </div>
        </section>
      ) : null}
    </>
  );
};

export default DomainSearchComponent;
