"use client";
import { ManageHostingProductsApi } from "@/apis/productsApi";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { MdArrowDropUp } from "react-icons/md";
import { useSelector } from "react-redux";
import { BsStars } from "react-icons/bs";

type Props = {
  decodedSlug: any;
};

const ServerProductsComparisionManageHostingAplusComponent: React.FC<Props> = ({
  decodedSlug,
}) => {
  const currencyCode = useSelector((state: any) => state.currency);
  const [serverProductsData, setServerProductsData] = useState<any>({});
  useEffect(() => {
    const fetchServerProducts = async () => {
      try {
        const response = await ManageHostingProductsApi(
          decodedSlug,
          currencyCode?.code?.slug
        );
        setServerProductsData(response?.result);
      } catch (error) {
        console.log(error);
      }
    };
    fetchServerProducts();
  }, [currencyCode]);

  const [activeTab, setActiveTab] = useState(0);
  const planDetails = serverProductsData?.PlanDetails?.[0];
  const activeTabData = planDetails?.tabs?.[activeTab];
  return (
    <div className="container mx-auto py-6 lg:px-8 px-4">
      <div className="overflow-x-auto">
        <div className="py-4 lg:px-4 px-0 ">
          {planDetails && (
            <>
              <h2
                className="sm:text-4xl text-2xl mb-2 text-center font-semibold"
                dangerouslySetInnerHTML={{
                  __html: planDetails?.heading,
                }}
              ></h2>
              <p
                className="text-lg lg:text-lg text-center"
                dangerouslySetInnerHTML={{
                  __html: planDetails?.description,
                }}
              ></p>
            </>
          )}
        </div>

        <div className="grid lg:grid-cols-6 grid-cols-2 max-w-5xl mx-auto justify-center gap-1 gap-y-4 items-center  lg:px-0 px-4 ">
          {planDetails?.tabs?.map((tab: any, index: number) => (
            <div key={index} className="text-lg group relative w-full">
              <button
                onClick={() => setActiveTab(index)}
                className={`w-full py-2  text-lg font-semibold rounded-md transition-all duration-300 ease-in-out ${
                  activeTab === index
                    ? "bg-bullt-tertiary text-bullt-secondary border-bullt-tertiary border"
                    : " text-bullt-tertiary bg-bullt-secondary border-bullt-tertiary border"
                }`}
                dangerouslySetInnerHTML={{
                  __html: tab.plan_periods,
                }}
              />
              {activeTab === index ? (
                <div className="absolute left-1/2 transform -translate-x-1/2 top-full">
                  <div className="w-0 h-0 border-l-[15px] border-r-[15px] border-t-[15px] border-transparent border-t-bullt-tertiary"></div>
                </div>
              ) : null}
            </div>
          ))}
        </div>
        {activeTabData && (
          <div className="overflow-x-auto mt-10 lg:px-8">
            <table className="w-full border-collapse rounded-md">
              <thead className="rounded-md">
                <tr className=" bg-bullt-quaternary/[0.07] text-white ">
                  <th className="p-6 text-left border border-gray-400 font-bold text-lg uppercase tracking-wider text-bullt-primary">
                    Features
                  </th>
                  {activeTabData?.products?.map((plan: any, index: number) => (
                    <th
                      key={index}
                      className="p-6 text-center border border-gray-400"
                    >
                      <div className="flex flex-col justify-center items-center gap-2">
                        <span className="font-bold text-lg uppercase tracking-wider text-bullt-primary">
                          {plan?.product_plan_types}
                        </span>
                        <div className="flex gap-1 items-center">
                          {plan?.prices?.map((price: any, index: any) => (
                            <div
                              className="text-bullt-primary font-semibold text-lg"
                              key={index}
                            >
                              {price?.icon}
                              {price?.price}
                              {price?.country}
                            </div>
                          ))}
                          <span className="text-sm font-semibold text-bullt-primary">
                            /{plan?.product_plans}
                          </span>
                        </div>
                        {plan?.button_text && (
                          <div className="w-full flex justify-center ">
                            <Link
                              href={plan?.button_link}
                              className=" px-6 font-normal bg-bullt-tertiary hover:bg-bullt-secondary hover:text-bullt-tertiary hover:border-bullt-tertiary border border-bullt-tertiary text-white py-1 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                            >
                              <div className="group-hover:scale-100 flex gap-1">
                                <BsStars size={20} />

                                {plan?.button_text}
                              </div>
                            </Link>
                          </div>
                        )}
                        {/* {plan?.button_text && (
                          <Link href={plan?.button_link}>
                            <button className="brightness-150 dark:brightness-100 group hover:shadow-lg transition ease-in-out hover:scale-105 p-1 rounded-xl bg-gradient-to-br from-yellow-800 via-yellow-600 to-yellow-800 ">
                              <div className="px-4 py-2 bg-black/80 rounded-lg font-semibold w-full h-full">
                                <div className="group-hover:scale-100 flex group-hover:text-yellow-500 text-yellow-600 gap-1">
                                  <BsStars size={20} />

                                  {plan?.button_text}
                                </div>
                              </div>
                            </button>
                          </Link>
                        )} */}
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: "Domain", key: "domain" },
                  { feature: "Disk Space", key: "disk_space" },
                  { feature: "Bandwidth", key: "bandwidth" },
                  { feature: "FTP Account", key: "ftp_account" },
                  { feature: "SSL", key: "ssl" },
                  { feature: "DDos Protection", key: "ddos_protection" },
                  { feature: "Port Speed", key: "port_speed" },
                  { feature: "Softaculous", key: "softculous" },
                  { feature: "cPanel", key: "cpanel" },
                  { feature: "Virus Scanner", key: "virus_scanner" },
                  { feature: "Data Center", key: "data_center" },
                ].map((item, idx) => (
                  <tr
                    key={idx}
                    className={`${
                      idx % 2 === 0 ? "bg-white" : "bg-bullt-quaternary/[0.04]"
                    } hover:bg-bullt-quaternary/[0.04] transition-colors`}
                  >
                    <td className="border p-6 text-left font-semibold text-gray-800">
                      {item.feature}
                    </td>
                    {activeTabData?.products?.map(
                      (plan: any, index: number) => (
                        <td key={index} className="border p-4 text-center">
                          {plan?.[item.key]}
                        </td>
                      )
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default ServerProductsComparisionManageHostingAplusComponent;
