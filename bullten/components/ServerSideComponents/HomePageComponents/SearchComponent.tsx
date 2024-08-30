import { DomainsearchApi } from "@/apis/HomePageApis";
import SearchSection from "@/components/ClientSideComponents/HomePageComponents/SearchSection";
import MainHeadingComponent from "@/components/CommonComponents/HeadingComponents/MainHeadingComponent";
import ParaGraphText from "@/components/CommonComponents/HeadingComponents/ParaGraphText";
import SloganHeadingComponent from "@/components/CommonComponents/HeadingComponents/SloganHeadingComponent";
import Image from "next/image";
import img1 from "../../../public/back.png";

const DomainSearchComponent = async () => {
  const DomainsearchApiResponse = await DomainsearchApi();

  return (
    <>
      {DomainsearchApiResponse?.result?.Active === true ? (
        <section className="container mx-auto sm:flex sm:justify-center sm:items-center px-4 py-4 w-full  relative">
          {/*  <div
            className="w-full sm:w-[50%] flex justify-center items-center"
            style={{
              backgroundImage: `url(${img1.src})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          >
             <div className="relative w-[250px] h-[250px] lg:w-[370px] lg:h-[370px]">
              <Image
                src={`${process.env.NEXT_PUBLIC_BASE_URL}${DomainsearchApiResponse?.result?.data?.img}`}
                alt="Main Image"
                className="rounded-full border-[5px] border-bullt-tertiary"
                style={{
                  objectFit: "cover",
                  objectPosition: "center",
                  inset: 0,
                }}
                fill
              />
              <div className="absolute top-2 -right-35 w-[80px] h-[80px] lg:w-[100px] lg:h-[100px]">
                <Image
                    src={`${process.env.NEXT_PUBLIC_BASE_URL}${DomainsearchApiResponse?.result?.data?.img}`}
                  alt="Small Image 1"
                  className="rounded-full border-4 border-yellow-500"
                  style={{
                    objectFit: "cover",
                    objectPosition: "center",
                  }}
                  fill
                />
              </div>


              <div className="absolute bottom-3 left-50 w-[60px] h-[60px] lg:w-[80px] lg:h-[80px]">
                <Image
                    src={`${process.env.NEXT_PUBLIC_BASE_URL}${DomainsearchApiResponse?.result?.data?.img}`}
                  alt="Small Image 2"
                  className="rounded-full border-4 border-white"
                  style={{
                    objectFit: "cover",
                    objectPosition: "center",
                  }}
                  fill
                />
              </div>
              <div className="absolute top-3 -right-2 w-[60px] h-[60px] lg:w-[80px] lg:h-[80px]">
                <Image
                   src={`${process.env.NEXT_PUBLIC_BASE_URL}${DomainsearchApiResponse?.result?.data?.img}`}
                  alt="Small Image 3"
                  className="rounded-full border-4 border-white"
                  style={{
                    objectFit: "cover",
                    objectPosition: "center",
                  }}
                  fill
                />
              </div>

            </div> 
          </div>*/}

          <div className="flex flex-col gap-2 justify-center items-center py-8 lg:max-w-5xl w-full mx-auto bg-bullt-secondary shadow-sm px-6 -mt-24 lg:-mt-32 rounded-md border border-bullt-secondary">
            {DomainsearchApiResponse?.result?.data?.label ? (
              <SloganHeadingComponent paddingTop={1} alignmentType={1}>
                {DomainsearchApiResponse?.result?.data?.label}
              </SloganHeadingComponent>
            ) : null}
            {DomainsearchApiResponse?.result?.data?.heading ? (
              <MainHeadingComponent alignmentType={1} paddingTop={1}>
                {DomainsearchApiResponse?.result?.data?.heading}
              </MainHeadingComponent>
            ) : null}
            {DomainsearchApiResponse?.result?.data?.description ? (
              <ParaGraphText paddingTop={1} alignmentType={1}>
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
