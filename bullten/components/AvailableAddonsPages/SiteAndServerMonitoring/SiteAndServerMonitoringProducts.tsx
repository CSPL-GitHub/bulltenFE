"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { BsStars } from "react-icons/bs";
import { SiTicktick } from "react-icons/si";
import { RxCrossCircled } from "react-icons/rx";
import { SiteMonitoringProductsApi } from "@/apis/SiteAndServerMonitoring";

type Props = {
  decodedSlug: string;
  tabName: string;
};

const SiteAndServerMonitoringProducts = ({ decodedSlug, tabName }: Props) => {
  const [selectedPeriods, setSelectedPeriods] = useState<{
    [key: number]: string;
  }>({});

  const currencyCode = useSelector((state: any) => state.currency);
  const [MonitoringProducts, setMonitoringProducts] = useState<any>({});

  useEffect(() => {
    const fetchServerProducts = async () => {
      try {
        const response = await SiteMonitoringProductsApi(
          currencyCode?.code?.slug,
          decodedSlug,
          tabName
        );

        setMonitoringProducts(response?.result);
      } catch (error) {
        console.log(error);
      }
    };
    fetchServerProducts();
  }, [currencyCode]);

  const handlePeriodChange = (
    e: React.ChangeEvent<HTMLSelectElement>,
    planIndex: number
  ) => {
    setSelectedPeriods((prevState) => ({
      ...prevState,
      [planIndex]: e.target.value,
    }));
  };
  return (
    <div className="max-w-7xl mx-auto lg:py-8 py-4 px-4">
      <div className="overflow-x-auto">
        <div className="pb-4 lg:px-4 px-0 ">
          {MonitoringProducts?.Active === true && (
            <>
              <h2
                className="sm:text-4xl text-2xl mb-2 text-center font-bold"
                dangerouslySetInnerHTML={{
                  __html: MonitoringProducts?.ProductDetails[0]?.heading,
                }}
              ></h2>
              {!MonitoringProducts?.ProductDetails[0]?.description ? null : (
                <div
                  className="text-lg lg:text-lg text-center"
                  dangerouslySetInnerHTML={{
                    __html: MonitoringProducts?.ProductDetails[0]?.description,
                  }}
                ></div>
              )}
            </>
          )}
        </div>

        {MonitoringProducts?.Active === true && (
          <div className="overflow-x-auto  lg:px-0 px-4">
            <table className="w-full border-collapse rounded-md">
              <thead className="rounded-md">
                <tr className=" bg-bullt-quaternary/[0.07] text-white ">
                  <th className="p-6 text-left border border-gray-400 font-bold text-lg uppercase tracking-wider text-bullt-primary">
                    Features
                  </th>
                  {MonitoringProducts?.ProductDetails[0]?.site_server_data?.map(
                    (plan: any, index: number) => (
                      <th
                        key={index}
                        className="p-6 text-center border border-gray-400"
                      >
                        <div className="flex flex-col justify-center items-center gap-2">
                          <span className="font-bold text-lg uppercase tracking-wider text-bullt-primary">
                            {plan?.plan_name}
                          </span>

                          <span className="font-normal text-xs uppercase tracking-wider text-bullt-primary">
                            {plan?.sub_heading}
                          </span>

                          <div className="flex gap-1 items-center">
                            <select
                              value={selectedPeriods[index]}
                              onChange={(e) => handlePeriodChange(e, index)}
                              className="border border-gray-300 rounded px-2 py-1 text-bullt-primary"
                            >
                              {plan?.pricing?.map(
                                (pricingPeriod: any, idx: number) => (
                                  <option
                                    key={idx}
                                    value={pricingPeriod.period}
                                  >
                                    {pricingPeriod.period} -
                                    {pricingPeriod.pricing[0]?.country ===
                                    "eur" ? (
                                      <span>€</span>
                                    ) : pricingPeriod.pricing[0]?.country ===
                                      "usd" ? (
                                      <span>$</span>
                                    ) : (
                                      <span>₹</span>
                                    )}
                                    {pricingPeriod.pricing[0]?.price}
                                  </option>
                                )
                              )}
                            </select>
                          </div>

                          <div className="flex gap-1 items-center">
                            {plan?.pricing
                              ?.filter(
                                (pricingPeriod: any) =>
                                  pricingPeriod.period ===
                                  selectedPeriods[index]
                              )
                              .map((pricingPeriod: any, idx: number) => (
                                <div
                                  className="text-bullt-primary font-semibold text-lg"
                                  key={idx}
                                >
                                  {pricingPeriod.pricing[0]?.country ===
                                  "eur" ? (
                                    <span>€</span>
                                  ) : pricingPeriod.pricing[0]?.country ===
                                    "usd" ? (
                                    <span>$</span>
                                  ) : (
                                    <span>₹</span>
                                  )}
                                  {pricingPeriod.pricing[0]?.price}
                                </div>
                              ))}

                            {selectedPeriods[index] ? (
                              <span className="text-sm font-semibold text-bullt-primary">
                                /{selectedPeriods[index]}
                              </span>
                            ) : null}
                          </div>

                          {plan?.button_text && (
                            <div className="w-full flex justify-center ">
                              <Link
                                href={plan?.button_link}
                                className="px-6 font-normal bg-bullt-tertiary hover:bg-bullt-secondary hover:text-bullt-tertiary hover:border-bullt-tertiary border border-bullt-tertiary text-white py-1 rounded-lg  hover:shadow-xl transition-all duration-300"
                              >
                                <div className="group-hover:scale-100 flex gap-1">
                                  <BsStars size={20} />
                                  {plan?.button_text}
                                </div>
                              </Link>
                            </div>
                          )}
                        </div>
                      </th>
                    )
                  )}
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    feature: "Servers",
                    key: "servers",
                  },
                  {
                    feature: "Websites",
                    key: "websites",
                  },
                  { feature: "Time Intervals", key: "time_intervals" },
                  {
                    feature: "Alerting",
                    key: "alerting",
                  },
                  {
                    feature: "Data Retention",
                    key: "data_retention",
                  },
                  {
                    feature: "Full Site Check",
                    key: "full_site_check",
                  },
                  { feature: "Concurrent Crawls", key: "concurrent_crawls" },
                  {
                    feature: "High-Priority Crawls",
                    key: "high_priority_crawls",
                  },
                  {
                    feature: "Recurring Scheduled Crawls",
                    key: "recurring_scheduled_crawls",
                  },
                  { feature: "Crawl Depth (URLs)", key: "crawl_Depth_URLs" },
                ].map((item, idx) => (
                  <tr
                    key={idx}
                    className={`${
                      idx % 2 === 0 ? "bg-white" : "bg-bullt-quaternary/[0.04]"
                    } hover:bg-bullt-quaternary/[0.04] transition-colors`}
                  >
                    <td className="border p-4 text-left font-semibold text-gray-800">
                      {item.feature}
                    </td>
                    {MonitoringProducts?.ProductDetails[0]?.site_server_data?.map(
                      (plan: any, index: number) => (
                        <td key={index} className="border p-4 text-center">
                          {plan?.[item.key] === "" ? (
                            <>
                              <RxCrossCircled className="text-red-700 text-lg mx-auto" />
                            </>
                          ) : (
                            <span>
                              {plan?.[item.key] === "Yes" ? (
                                <>
                                  <SiTicktick className="text-green-700 text-lg mx-auto" />
                                </>
                              ) : (
                                <>{plan?.[item.key]}</>
                              )}
                            </span>
                          )}
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

export default SiteAndServerMonitoringProducts;
