import Link from "next/link";
import React from "react";
import { SiTicktick } from "react-icons/si";

type Props = { DataContent: any };
const CertificateComparisonSection = ({ DataContent }: Props) => {
  console.log(
    DataContent?.type_certificate[0]?.Type_certificate_data,
    "Certificates"
  );
  return (
    <section className="relative lg:py-16 py-6">
      <div className="absolute top-0 left-0 w-80 h-80 opacity-60">
        <img src="/blocks2.png" className="w-full h-full" />
      </div>
      {/* <div className="absolute bottom-0 right-0 w-80 h-80 opacity-60">
        <img src="/dots.png" className="w-full h-full" />
      </div> */}
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center flex flex-col gap-3 max-w-4xl mx-auto pb-8">
          {DataContent?.type_certificate[0]?.Type_certificate_data
            ?.heading_ssl_type ? (
            <div
              className="w-full text-center text-3xl md:text-4xl font-bold"
              dangerouslySetInnerHTML={{
                __html:
                  DataContent?.type_certificate[0]?.Type_certificate_data
                    ?.heading_ssl_type,
              }}
            />
          ) : null}
          {DataContent?.type_certificate[0]?.Type_certificate_data
            ?.heading_ssl_description ? (
            <div
              className="w-full text-center text-bullt-primary/[0.8] text-lg "
              dangerouslySetInnerHTML={{
                __html:
                  DataContent?.type_certificate[0]?.Type_certificate_data
                    ?.heading_ssl_description,
              }}
            />
          ) : null}
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-6">
          {DataContent?.type_certificate[0]?.Type_certificate_data?.certificate_data?.map(
            (certificate: any, index: number) => (
              <div
                key={index}
                className="relative bg-bullt-quaternary/[0.02] border border-bullt-tertiary/[0.3] rounded-md shadow-sm hover:shadow-sm text-left pb-4 flex flex-col justify-between"
              >
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-black text-center pb-3">
                    {certificate?.heading}
                  </h3>
                  <img
                    src={`${process.env.NEXT_PUBLIC_BASE_URL}${certificate?.image}`}
                    alt={certificate?.heading}
                    className="w-full object-cover border-gray-100 border-[1px] rounded-lg h-[250px]"
                  />
                </div>
                <div className="flex flex-col gap-2 px-4 flex-grow">
                  <p className="italic font-medium text-sm text-gray-600">
                    {certificate?.sub_heading}
                  </p>
                  <p className="text-gray-600 mb-4 text-justify">
                    {certificate?.description}
                  </p>

                  <div className="list-disc sm:grid sm:grid-cols-1 gap-3 text-lg list-inside space-y-1">
                    {certificate?.feature.map((item: any, index: any) => (
                      <div key={index} className="flex gap-2">
                        <span className="text-bullt-tertiary text-md">
                          <SiTicktick />
                        </span>
                        <div
                          className="text-bullt-primary/[0.8] col-span-1 text-base"
                          dangerouslySetInnerHTML={{
                            __html: item?.Features,
                          }}
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {certificate?.button_text ? (
                  <div className="mt-3 rounded flex justify-center">
                    <Link href={certificate?.button_link}>
                      <input
                        className="cursor-pointer border-[1px] px-6 py-2 bg-bullt-tertiary hover:bg-white text-white hover:text-bullt-tertiary text-md border-bullt-tertiary rounded-md"
                        type="button"
                        value={certificate?.button_text}
                      />
                    </Link>
                  </div>
                ) : null}
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default CertificateComparisonSection;
