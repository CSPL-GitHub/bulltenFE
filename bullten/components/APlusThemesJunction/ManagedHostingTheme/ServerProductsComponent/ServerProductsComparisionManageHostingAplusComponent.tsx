"use client";
import { ManageHostingProductsApi } from "@/apis/productsApi";
import React, { useEffect, useState } from "react";
import { MdArrowDropUp } from "react-icons/md";
import { useSelector } from "react-redux";
type Props = {
  decodedSlug: any;
};

const ServerProductsComparisionManageHostingAplusComponent: React.FC<Props> = ({
  decodedSlug,
}) => {
  console.log(decodedSlug, "decodedSlug");
  const currencyCode = useSelector((state: any) => state.currency);
  const [serverProductsData, setServerProductsData] = useState<any>({});
  useEffect(() => {
    const fetchServerProducts = async () => {
      try {
        const response = await ManageHostingProductsApi(
          // currencyCode?.code?.slug,
          decodedSlug
        );
        setServerProductsData(response?.result);
        console.log(response?.result, "products");
      } catch (error) {
        console.log(error);
      }
    };
    fetchServerProducts();
  }, [currencyCode]);

  const [activeTab, setActiveTab] = useState(0);
  const planDetails = serverProductsData?.PlanDetails?.[0];
  const activeTabData = planDetails?.tabs?.[activeTab];
  console.log(activeTabData, "activeTab");
  return (
    <div className="container mx-auto py-12 lg:px-8 px-4">
      <div className="overflow-x-auto">
        {/* <div className="container">
          <div className="card">
            <div className="card-inner">
              <div className="box">
                <div className="imgBox">
                  <img
                    src="https://images.unsplash.com/photo-1601049676869-702ea24cfd58?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Trust & Co."
                  />
                </div>
                <div className="icon">
                  <a href="#" className="iconBox">
                    <span className="material-symbols-outlined">
                      arrow_outward
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div> */}
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
                  __html: tab.plan_period,
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
                <tr className=" bg-bullt-quaternary/[0.9] text-white ">
                  <th className="p-6 text-left font-bold text-lg uppercase tracking-wider">
                    Features
                  </th>
                  {activeTabData?.products?.map((plan: any, index: number) => (
                    <th key={index} className="p-6 text-center ">
                      <div className="flex flex-col justify-center items-center gap-4">
                        <span className="font-bold text-base uppercase tracking-wider">
                          {plan?.product_plan_type}
                        </span>
                        <button className=" px-6 font-normal bg-bullt-tertiary text-white py-1 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                          {/* {plan?.button_text} */}
                          Choose Plan
                        </button>
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
