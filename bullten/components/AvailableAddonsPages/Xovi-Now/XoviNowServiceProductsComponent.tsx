"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { BsStars } from "react-icons/bs";
import { OverViewSubPagesTabsProductsApi } from "@/apis/AvailableAddons";

type Props = {
  decodedSubSlug: string;
};

const sslProductsData = {
  PlanDetails: [
    {
      heading: "SSL Certificates Plans",
      description:
        "Choose from a variety of SSL certificates based on your needs.",
      plan_periods: [
        {
          year: "1 Year",
          ssl_certificates: [
            {
              feature: "Basic SSL",
              prices: [
                { country: "usd", price: 29.99 },
                { country: "eur", price: 27.99 },
                { country: "inr", price: 2199 },
              ],
              plan: "per year",
              button_text: "Buy Now",
              button_link: "/buy/basic-ssl",
              encryption_strength: "256-Bit",
              issuance_time: "Instant",
              great_for: "Personal Websites",
              warranty_value: "$10,000",
              trust_site_seal: "Included",
              free_reissues: "Unlimited",
              browser_support: "99.9%",
            },
            {
              feature: "Advanced SSL",
              prices: [
                { country: "usd", price: 49.99 },
                { country: "eur", price: 44.99 },
                { country: "inr", price: 3999 },
              ],
              plan: "per year",
              button_text: "Buy Now",
              button_link: "/buy/advanced-ssl",
              encryption_strength: "256-Bit",
              issuance_time: "Within 1 Hour",
              great_for: "E-commerce Websites",
              warranty_value: "$100,000",
              trust_site_seal: "Included",
              free_reissues: "Unlimited",
              browser_support: "99.9%",
            },
          ],
        },
        {
          year: "2 Years",
          ssl_certificates: [
            {
              feature: "Basic SSL",
              prices: [
                { country: "usd", price: 49.99 },
                { country: "eur", price: 44.99 },
                { country: "inr", price: 3699 },
              ],
              plan: "per 2 years",
              button_text: "Buy Now",
              button_link: "/buy/basic-ssl-2years",
              encryption_strength: "256-Bit",
              issuance_time: "Instant",
              great_for: "Personal Websites",
              warranty_value: "$10,000",
              trust_site_seal: "Included",
              free_reissues: "Unlimited",
              browser_support: "99.9%",
            },
            {
              feature: "Advanced SSL",
              prices: [
                { country: "usd", price: 79.99 },
                { country: "eur", price: 72.99 },
                { country: "inr", price: 6299 },
              ],
              plan: "per 2 years",
              button_text: "Buy Now",
              button_link: "/buy/advanced-ssl-2years",
              encryption_strength: "256-Bit",
              issuance_time: "Within 1 Hour",
              great_for: "E-commerce Websites",
              warranty_value: "$100,000",
              trust_site_seal: "Included",
              free_reissues: "Unlimited",
              browser_support: "99.9%",
            },
          ],
        },
      ],
    },
  ],
};

const XoviNowServiceProductsComponent = () => {
  const currencyCode = useSelector((state: any) => state.currency);
  const planDetails = sslProductsData?.PlanDetails?.[0];
  const allPlans = planDetails?.plan_periods
    ?.map((period) => period.ssl_certificates)
    .flat();

  return (
    <div className="max-w-7xl mx-auto lg:py-8 py-4 px-4">
      <div className="overflow-x-auto">
        <div className="pb-4 lg:px-4 px-0 ">
          {planDetails && (
            <>
              <h2
                className="sm:text-4xl text-3xl mb-2 text-center font-semibold"
                dangerouslySetInnerHTML={{
                  __html: planDetails?.heading,
                }}
              ></h2>
              {!planDetails?.description ? null : (
                <div
                  className="text-lg lg:text-lg text-center"
                  dangerouslySetInnerHTML={{
                    __html: planDetails?.description,
                  }}
                ></div>
              )}
            </>
          )}
        </div>

        {allPlans && (
          <div className="overflow-x-auto mt-10 lg:px-8">
            <table className="w-full border-collapse rounded-md">
              <thead className="rounded-md">
                <tr className=" bg-bullt-quaternary/[0.07] text-white ">
                  <th className="p-6 text-left border border-gray-400 font-bold text-lg uppercase tracking-wider text-bullt-primary">
                    Features
                  </th>
                  {allPlans?.map((plan: any, index: number) => (
                    <th
                      key={index}
                      className="p-6 text-center border border-gray-400"
                    >
                      <div className="flex flex-col justify-center items-center gap-2">
                        <span className="font-bold text-lg uppercase tracking-wider text-bullt-primary">
                          {plan?.feature}
                        </span>
                        <div className="flex gap-1 items-center">
                          {plan?.prices?.map((price: any, idx: any) => (
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
                            /{plan?.plan}
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
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: "256-Bit Encryption", key: "encryption_strength" },
                  { feature: "Issuance Time ", key: "issuance_time" },
                  { feature: "Great For", key: "great_for" },
                  { feature: "Warranty Value", key: "warranty_value" },
                  { feature: "Trust Site Seal", key: "trust_site_seal" },
                  { feature: "Free Reissues", key: "free_reissues" },
                  { feature: "Browser Support", key: "browser_support" },
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
                    {allPlans?.map((plan: any, index: number) => (
                      <td key={index} className="border p-4 text-center">
                        {plan?.[item.key]}
                      </td>
                    ))}
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

export default XoviNowServiceProductsComponent;
