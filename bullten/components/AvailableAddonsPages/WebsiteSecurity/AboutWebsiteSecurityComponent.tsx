import React from "react";
type Props = { DataContent: any };
const DataContent = {
  overview_page: [
    {
      heading: "Why You Need a Website Backup Service",
      img: "/images/website-backup-main.jpg", // Image path for the main section image
      description:
        "A website backup service ensures the security and stability of your online presence. With regular backups, you can restore your site quickly in case of a technical failure, hacker attack, or data loss. Website backups are essential for business continuity and peace of mind.",
      features: [
        {
          feature: "Automated daily backups for your website data.",
        },
        {
          feature: "Quick restoration with a single click.",
        },
        {
          feature: "Cloud-based storage ensuring data security.",
        },
        {
          feature: "Protection from malware and accidental deletions.",
        },
        {
          feature: "Complete website backup including databases and files.",
        },
        {
          feature: "24/7 support to help with backup and recovery issues.",
        },
      ],
    },
  ],
};

const AboutWebsiteSecurityComponent = () => {
  return (
    <div className="container mx-auto  py-6 px-4">
      {" "}
      <section className="max-w-7xl mx-auto relative  lg:px-4 px-2 flex lg:flex-row flex-col gap-8 items-start justify-between">
        <div className="relative lg:w-[40%] w-full flex flex-col items-center justify-centertext-center text-2xl sm:text-4xl font-bold py-2">
          {DataContent?.overview_page[0]?.heading ? (
            <div
              className="sm:text-4xl text-2xl font-bold text-gray-800 lg:hidden block pb-4"
              dangerouslySetInnerHTML={{
                __html: DataContent?.overview_page[0]?.heading,
              }}
            />
          ) : null}
          <div className="absolute ">
            <img
              src="/hero-1-circle-right.png"
              alt="Heading Image"
              width={400}
              height={400}
              className="custom-bounce "
            />
          </div>
          <div className="relative w-[400px] h-[250px] lg:w-full lg:h-[400px] rounded-sm overflow-hidden z-0 shadow-md">
            <img
              src={`${process.env.NEXT_PUBLIC_BASE_URL}${DataContent?.overview_page[0]?.img}`}
              alt="Team Meeting"
              className="rounded-lg w-full h-full object-cover shadow-md"
            />
          </div>

          <div className="absolute bg-white  lg:bottom-[-100px] bottom-[-80px] left-[-30px] w-[180px] h-[160px] lg:w-[350px] lg:h-[350px] rounded-md overflow-hidden z-5">
            <img
              src="/21742843_6477175.jpg"
              alt="Team Working"
              className="w-full h-full object-cover rounded-md shadow-md"
            />
          </div>
        </div>

        <div className="lg:w-[60%] w-full text-center lg:text-left mt-12 py-4 lg:mt-0">
          {DataContent?.overview_page[0]?.heading ? (
            <div
              className="lg:text-4xl text-3xl font-bold text-gray-800 lg:block hidden"
              dangerouslySetInnerHTML={{
                __html: DataContent?.overview_page[0]?.heading,
              }}
            />
          ) : null}
          {DataContent?.overview_page[0]?.description ? (
            <p
              className="text-lg text-gray-600 mt-2 lg:text-left text-justify"
              dangerouslySetInnerHTML={{
                __html: DataContent?.overview_page[0]?.description,
              }}
            />
          ) : null}

          <div className="list-disc grid lg:grid-cols-2 grid-flow-col-1 mt-4 gap-3 text-lg list-inside ">
            {DataContent?.overview_page[0]?.features?.map(
              (item: any, index: any) => (
                <div className="flex gap-2 bg-gray-100 p-3 rounded-md shadow-sm">
                  <span className="text-bullt-tertiary text-xl">✔</span>
                  <div
                    className="text-bullt-primary/[0.8] col-span-1 line-clamp-2"
                    dangerouslySetInnerHTML={{
                      __html: item?.feature,
                    }}
                  />
                </div>
              )
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutWebsiteSecurityComponent;
