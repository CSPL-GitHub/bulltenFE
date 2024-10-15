"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { BsStars } from "react-icons/bs";
import { WebsiteSecurityProductsApi } from "@/apis/WebsiteSecurityApi";
import { SiTicktick } from "react-icons/si";
import { RxCrossCircled } from "react-icons/rx";

type Props = {
  decodedSlug: string;
};

const WebsiteSecurityProductsComponent = ({ decodedSlug }: Props) => {
  const [selectedPeriods, setSelectedPeriods] = useState<{
    [key: number]: string;
  }>({});

  const currencyCode = useSelector((state: any) => state.currency);
  const [WebsiteSecurityProducts, setWebsiteSecurityProducts] = useState<any>(
    {}
  );

  useEffect(() => {
    const fetchServerProducts = async () => {
      try {
        const response = await WebsiteSecurityProductsApi(
          currencyCode?.code?.slug,
          decodedSlug
        );

        setWebsiteSecurityProducts(response?.result);
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
          {WebsiteSecurityProducts?.Active === true && (
            <>
              <h2
                className="sm:text-4xl text-2xl mb-2 text-center font-bold"
                dangerouslySetInnerHTML={{
                  __html: WebsiteSecurityProducts?.ProductDetails[0]?.heading,
                }}
              ></h2>
              {!WebsiteSecurityProducts?.ProductDetails[0]
                ?.description ? null : (
                <div
                  className="text-lg lg:text-lg text-center"
                  dangerouslySetInnerHTML={{
                    __html:
                      WebsiteSecurityProducts?.ProductDetails[0]?.description,
                  }}
                ></div>
              )}
            </>
          )}
        </div>

        {WebsiteSecurityProducts?.Active === true && (
          <div className="overflow-x-auto  lg:px-0 px-4">
            <table className="w-full border-collapse rounded-md">
              <thead className="rounded-md">
                <tr className=" bg-bullt-quaternary/[0.07] text-white ">
                  <th className="p-6 text-left border border-gray-400 font-bold text-lg uppercase tracking-wider text-bullt-primary">
                    Features
                  </th>
                  {WebsiteSecurityProducts?.ProductDetails[0]?.website_security_data?.map(
                    (plan: any, index: number) => (
                      <th
                        key={index}
                        className="p-6 text-center border border-gray-400"
                      >
                        <div className="flex flex-col justify-center items-center gap-2">
                          <span className="font-bold text-lg uppercase tracking-wider text-bullt-primary">
                            {plan?.headings}
                          </span>

                          <span className="font-normal text-xs uppercase tracking-wider text-bullt-primary">
                            {plan?.descriptions}
                          </span>

                          {/* Dropdown for selecting period */}
                          <div className="flex gap-1 items-center">
                            <select
                              value={selectedPeriods[index] || "1 Year"}
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
                                    {pricingPeriod.pricing[0]?.icon}
                                    {pricingPeriod.pricing[0]?.price}
                                    {pricingPeriod.pricing[0]?.country}
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
                                  {pricingPeriod.pricing[0]?.icon}
                                  {pricingPeriod.pricing[0]?.price}
                                  {pricingPeriod.pricing[0]?.country}
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
                    feature: "Daily Malware Scanning",
                    key: "daily_malware_scanning",
                  },
                  { feature: "Number of Pages", key: "number_of_pages" },
                  {
                    feature: "Daily Blacklist Monitoring",
                    key: "daily_blacklist_monitoring",
                  },
                  {
                    feature: "SiteLock Risk Score",
                    key: "sitelock_risk_score",
                  },
                  {
                    feature: "Website Application Scan",
                    key: "website_application_scan",
                  },
                  { feature: "SQL Injection Scan", key: "sql_injection_scan" },
                  {
                    feature: "Cross Site (XSS) Scan",
                    key: "cross_site_xss_scan",
                  },
                  {
                    feature: "Sitelock™ Trust Seal",
                    key: "sitelock_trust_seal",
                  },
                  { feature: "Daily SMART Scans", key: "daily_smart_scans" },
                  {
                    feature: "Automatic Malware Removal",
                    key: "automatic_malware_removal",
                  },
                  { feature: "TrueShield Protection", key: "wordpress_scan" },
                  { feature: "WordPress Scan", key: "wordpress_scan" },
                  {
                    feature: "Spam Blacklist Monitoring",
                    key: "spam_blacklist_monitoring",
                  },
                  {
                    feature: "Web Application Firewall",
                    key: "web_application_firewall",
                  },
                  {
                    feature: "Global CDN",
                    key: "global_cdn",
                  },
                  {
                    feature: "Content Acceleration",
                    key: "content_acceleration",
                  },
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
                    {WebsiteSecurityProducts?.ProductDetails[0]?.website_security_data?.map(
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

export default WebsiteSecurityProductsComponent;
