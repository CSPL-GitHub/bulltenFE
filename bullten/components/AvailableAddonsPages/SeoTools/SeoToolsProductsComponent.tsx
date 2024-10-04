"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { BsStars } from "react-icons/bs";
import { SeoToolProductsApi } from "@/apis/SeoToolsApi";
import { SiTicktick } from "react-icons/si";
import { RxCrossCircled } from "react-icons/rx";
type Props = {
  decodedSlug: string;
};

const SeoToolsProductsComponent = ({ decodedSlug }: Props) => {
  const currencyCode = useSelector((state: any) => state.currency);
  const [SeoToolsProducts, setSeoToolsProducts] = useState<any>({});

  console.log(SeoToolsProducts, "setSeoToolsProducts");
  useEffect(() => {
    const fetchServerProducts = async () => {
      try {
        const response = await SeoToolProductsApi(
          currencyCode?.code?.slug,
          decodedSlug
        );

        setSeoToolsProducts(response?.result);
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
          {SeoToolsProducts?.Active === true && (
            <>
              <div
                className="sm:text-4xl text-2xl mb-2 text-center font-bold"
                dangerouslySetInnerHTML={{
                  __html: SeoToolsProducts?.ProductDetails[0]?.heading,
                }}
              ></div>
              {!SeoToolsProducts?.ProductDetails[0]?.description ? null : (
                <div
                  className="text-lg lg:text-lg text-center"
                  dangerouslySetInnerHTML={{
                    __html: SeoToolsProducts?.ProductDetails[0]?.description,
                  }}
                ></div>
              )}
            </>
          )}
        </div>

        {SeoToolsProducts?.ProductDetails?.length > 0 && (
          <div className="overflow-x-auto mt-6">
            <table className="w-full border-collapse rounded-md">
              <thead className="rounded-md">
                <tr className=" bg-bullt-quaternary/[0.07] text-white ">
                  <th className="p-6 text-left border border-gray-400 font-bold text-lg uppercase tracking-wider text-bullt-primary">
                    Features
                  </th>
                  {SeoToolsProducts?.ProductDetails[0]?.seo_tool_product_data?.map(
                    (plan: any, index: number) => (
                      <th
                        key={index}
                        className="p-6 text-center border border-gray-400"
                      >
                        <div className="flex flex-col justify-center items-center gap-2">
                          <span className="font-bold text-lg uppercase tracking-wider text-bullt-primary">
                            {plan?.plan_name}
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
                              /{plan?.period}
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
                  {
                    feature: "Search engine submission",
                    key: "Search_engine_submission",
                  },
                  {
                    feature: "Connect Google Analytics ",
                    key: "connect_google_analytics",
                  },
                  {
                    feature: "Download SEO report as PDF",
                    key: "download_seo_report_pdf",
                  },
                  {
                    feature: "Pages scanned",
                    key: "pages_scanned",
                  },
                  {
                    feature: "Competitor tracking",
                    key: "competitor_tracking",
                  },
                  {
                    feature: "Keyword tracking & optimization",
                    key: "keyword_tracking_optimization",
                  },
                  {
                    feature: "Updated report & plan",
                    key: "updated_report_plan",
                  },
                  {
                    feature: "Custom SEO Plan",
                    key: "custom_seo_plan",
                  },
                  {
                    feature: "Monthly progress report",
                    key: "monthly_progress_report",
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
                    {SeoToolsProducts?.ProductDetails[0]?.seo_tool_product_data?.map(
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

export default SeoToolsProductsComponent;
