"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { BsStars } from "react-icons/bs";

import { XoviNowProductsApi } from "@/apis/XoviNowPageAPIs/XoviNowAPIs";
import { NordVpnProductsApi } from "@/apis/NordVpnPageAPIs";

type Props = {
  decodedSlug: string;
};

const NordVpnProductsComponent = ({ decodedSlug }: Props) => {
  const currencyCode = useSelector((state: any) => state.currency);
  const [NordVpnProducts, setNordVpnProducts] = useState<any>({});
  // const allPlans = NordVpnProducts?.ProductDetails[0]?.xovi_now_data;

  console.log(NordVpnProducts, "Prodcuts__________?");

  useEffect(() => {
    const fetchServerProducts = async () => {
      try {
        const response = await NordVpnProductsApi(
          currencyCode?.code?.slug,
          decodedSlug
        );

        setNordVpnProducts(response?.result);
      } catch (error) {
        console.log(error);
      }
    };
    fetchServerProducts();
  }, [currencyCode]);

  return (
    <div className="max-w-7xl mx-auto lg:py-16 py-6 px-4">
      <div className="overflow-x-auto">
        <div className="lg:px-4 px-0 ">
          {NordVpnProducts?.Active === true && (
            <>
              <div
                className="sm:text-4xl text-3xl mb-2 text-center font-semibold"
                dangerouslySetInnerHTML={{
                  __html: NordVpnProducts?.ProductVpnDetails[0]?.heading,
                }}
              ></div>
              {!NordVpnProducts?.ProductVpnDetails[0]?.description ? null : (
                <div
                  className="text-lg lg:text-lg text-center"
                  dangerouslySetInnerHTML={{
                    __html: NordVpnProducts?.ProductVpnDetails[0]?.description,
                  }}
                ></div>
              )}
            </>
          )}
        </div>

        {NordVpnProducts?.ProductVpnDetails?.length > 0 && (
          <div className="overflow-x-auto mt-6">
            <table className="w-full border-collapse rounded-md">
              <thead className="rounded-md">
                <tr className=" bg-bullt-quaternary/[0.07] text-white ">
                  <th className="p-6 text-left border border-gray-400 font-bold text-lg uppercase tracking-wider text-bullt-primary">
                    Features
                  </th>
                  {NordVpnProducts?.ProductVpnDetails[0]?.nord_vpn_data?.map(
                    (plan: any, index: number) => (
                      <th
                        key={index}
                        className="p-6 text-center border border-gray-400"
                      >
                        <div className="flex flex-col justify-center items-center gap-2">
                          <span className="font-bold text-lg uppercase tracking-wider text-bullt-primary">
                            {plan?.product_Time}
                          </span>
                          <div className="flex gap-1 items-center">
                            {plan?.pricing?.map((price: any, idx: any) => (
                              <div
                                className="text-bullt-primary font-semibold text-lg"
                                key={idx}
                              >
                                {price?.country === "eur" ? (
                                  <span>€</span>
                                ) : price?.country === "usd" ? (
                                  <span>$</span>
                                ) : (
                                  <span>₹</span>
                                )}
                                {price?.price}
                              </div>
                            ))}
                            <span className="text-sm font-semibold text-bullt-primary">
                              /{plan?.product_Time}
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
                        </div>
                      </th>
                    )
                  )}
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: "Projects", key: "product_Time" },
                  {
                    feature: "Full-Access Accounts ",
                    key: "restrictions",
                  },
                  { feature: "Read-Only Accounts", key: "speed_network" },
                  {
                    feature: "Competitor Benchmarking",
                    key: "bandwidth",
                  },
                  {
                    feature: "Competitors per project",
                    key: "encryption",
                  },
                  // {
                  //   feature: "Keyword Research",
                  //   key: "keyword_research",
                  // },
                  // { feature: "Rank Tracker", key: "rank_tracker" },
                  // { feature: "Keyword crawls", key: "keyword_crawls" },
                  // { feature: "Keyword check", key: "keyword_check" },
                  // { feature: "Site Audit", key: "site_audit" },
                  // { feature: "Pages to crawl", key: "pages_to_crawl" },
                  // { feature: "SEO Advisor", key: "seo_advisor" },
                  // { feature: "SEO Text Optimizer", key: "seo_text_optimizer" },
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
                    {NordVpnProducts?.ProductVpnDetails[0]?.nord_vpn_data?.map(
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

export default NordVpnProductsComponent;
