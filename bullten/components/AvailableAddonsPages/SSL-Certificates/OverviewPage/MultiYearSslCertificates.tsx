import React from "react";

type Props = { DataContent: any };

const MultiYearSslCertificates = ({ DataContent }: Props) => {
 
  return (
    <div>
      <section className="bg-cover bg-center px-8">
        {/* Title and Description */}
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-5xl mx-auto mb-12">
            {DataContent?.Multi_certificate[0]?.multiple_certificate_data
              ?.heading ? (
              <div
                className="text-2xl sm:text-4xl font-bold py-2 text-gray-800"
                dangerouslySetInnerHTML={{
                  __html:
                    DataContent?.Multi_certificate[0]?.multiple_certificate_data
                      ?.heading,
                }}
              />
            ) : null}
            {DataContent?.Multi_certificate[0]?.multiple_certificate_data
              ?.description ? (
              <p
                className="text-lg text-gray-600 mt-2 lg:text-left text-justify"
                dangerouslySetInnerHTML={{
                  __html:
                    DataContent?.Multi_certificate[0]?.multiple_certificate_data
                      ?.description,
                }}
              />
            ) : null}
          </div>

          {/* Timeline */}
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 items-center mb-12">
            <div className="relative w-full p-8 bg-white rounded-lg shadow-lg">
              <img
                src={`${process.env.NEXT_PUBLIC_BASE_URL}${DataContent?.Multi_certificate[0]?.multiple_certificate_data?.image}`}
                className="lg:h-[300px] h-[100px] object-contain"
              />
            </div>
            <div className="max-w-4xl mx-auto text-left">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                SSL certificates must be revalidated periodically. The maximum
                certificate lifetime is 13 months, requiring revalidation
                annually.
              </h3>

              <div className="list-disc sm:grid sm:grid-cols-2 gap-3 text-lg list-inside space-y-1">
                {DataContent?.Multi_certificate[0]?.multiple_certificate_data?.certificate_data.map(
                  (item: any, index: any) => (
                    <div className="flex gap-2 bg-bullt-quaternary/[0.06] rounded-md p-2">
                      <span className="text-bullt-tertiary text-xl">✔</span>
                      <div
                        className="text-bullt-primary text-base font-normal col-span-1"
                        dangerouslySetInnerHTML={{
                          __html: item?.benifits,
                        }}
                      />
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
      </section>
    </div>
  );
};

export default MultiYearSslCertificates;
