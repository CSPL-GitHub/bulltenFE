import { serverFeaturesApi } from "@/apis/HomePageApis";
import MainHeadingComponent from "@/components/CommonComponents/HeadingComponents/MainHeadingComponent";
import ParaGraphText from "@/components/CommonComponents/HeadingComponents/ParaGraphText";
import SubHeadingComponents from "@/components/CommonComponents/HeadingComponents/SubHeadingComponents";
import Image from "next/image";
import React from "react";

const ServerFeatures = async () => {
  const serverFeaturesData = await serverFeaturesApi();
  console.log(serverFeaturesData, "serverFeatureDatas");

  const products = [
    {
      title: "Fully Managed Dedicated Server Hosting plans include:",
      description: "Fully Managed Dedicated Server Hosting plans include",
      data: [
        {
          icon: "💧",
          title: "HACKER-FREE SECURITY",
          description:
            "Our servers and infrastructure are by default protected against denial of service attacks (DDoS) Layer3/4.",
        },
        {
          icon: "📦",
          title: "BLAZING FAST SPEEDS",
          description: "The server utilizes cloudlinux lsphp for speed.",
        },
        {
          icon: "🚀",
          title: "REGULAR BACKUPS",
          description:
            "Our server comes with regular free backups so you don’t need to worry about your data.",
        },
        {
          icon: "💾",
          title: "CPANEL",
          description:
            "Our shared hosting comes with cPanel so that it’s easy to manage the shared environment. Almost all the options are there to manage your server.",
        },
        {
          icon: "☁️",
          title: "REIMAGINED SFTP",
          description:
            "Our shared hosting comes with SFTP enabled option so you can use the command line functionality too.",
        },
        {
          icon: "🔀",
          title: "TUNED FOR WORDPRESS",
          description:
            "Our servers are optimized for WordPress so you can get maximum speed out of it.",
        },
      ],
    },
  ];

  return (
    <div className="bg-gray-100 w-full flex flex-col items-center py-16 px-4 lg:px-12">
      <MainHeadingComponent alignmentType={2} paddingTop={1}>
        {serverFeaturesData?.result?.data?.title}
      </MainHeadingComponent>
      <ParaGraphText alignmentType={2}>
        {serverFeaturesData?.result?.data?.description}
      </ParaGraphText>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        {serverFeaturesData?.result?.data?.server_feature.map(
          (product: any, index: number) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md text-center flex flex-col justify-center items-center hover:border-bullt-tertiary border-2"
            >
              {product.icon && (
                <div className="w-14 h-14 relative">
                  <Image
                    src={`${process.env.NEXT_PUBLIC_BASE_URL}${product?.icon}`}
                    alt={product?.alt_text}
                    className="w-full h-full absolute top-0 start-0 rounded-full object-cover"
                    fill={true}
                  />
                </div>
              )}
              <SubHeadingComponents alignmentType={2}>
                {product.title}
              </SubHeadingComponents>
              <p className="text-gray-500 mb-4">{product.description}</p>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default ServerFeatures;
