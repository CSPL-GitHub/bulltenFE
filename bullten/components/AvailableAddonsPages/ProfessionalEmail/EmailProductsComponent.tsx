"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { BsStars } from "react-icons/bs";

import { ProfessionalEmailProductsApi } from "@/apis/ProfessionalEmail";

type Props = {
  decodedSlug: string;
};

const EmailProductsComponent = ({ decodedSlug }: Props) => {
  const currencyCode = useSelector((state: any) => state.currency);
  const [ProfessionalEmailProducts, setProfessionalEmailProducts] =
    useState<any>({});

  useEffect(() => {
    const fetchServerProducts = async () => {
      try {
        const response = await ProfessionalEmailProductsApi(
          currencyCode?.code?.slug,
          decodedSlug
        );

        setProfessionalEmailProducts(response?.result);
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
          {ProfessionalEmailProducts?.Active === true && (
            <>
              <div
                className="sm:text-4xl text-3xl mb-2 text-center font-semibold"
                dangerouslySetInnerHTML={{
                  __html: ProfessionalEmailProducts?.ProductDetails[0]?.heading,
                }}
              ></div>
              {!ProfessionalEmailProducts?.ProductDetails[0]
                ?.description ? null : (
                <div
                  className="text-lg lg:text-lg text-center"
                  dangerouslySetInnerHTML={{
                    __html:
                      ProfessionalEmailProducts?.ProductDetails[0]?.description,
                  }}
                ></div>
              )}
            </>
          )}
        </div>

        {ProfessionalEmailProducts?.ProductDetails?.length > 0 && (
          <div className="overflow-x-auto mt-6">
            <table className="w-full border-collapse rounded-md">
              <thead className="rounded-md">
                <tr className=" bg-bullt-quaternary/[0.07] text-white ">
                  <th className="p-6 text-left border border-gray-400 font-bold text-lg uppercase tracking-wider text-bullt-primary">
                    Features
                  </th>
                  {ProfessionalEmailProducts?.ProductDetails[0]?.profesional_email_data?.map(
                    (plan: any, index: number) => (
                      <th
                        key={index}
                        className="p-6 text-center border border-gray-400"
                      >
                        <div className="flex flex-col justify-center items-center gap-2">
                          <span className="font-bold text-lg uppercase tracking-wider text-bullt-primary">
                            {plan?.product_name}
                          </span>
                          <div className="flex gap-1 items-center">
                            {plan?.pricing?.map((price: any, idx: any) => (
                              <div
                                className="text-bullt-primary font-semibold text-lg"
                                key={idx}
                              >
                                {price?.icon}
                                {price?.price}
                                {price?.country}
                              </div>
                            ))}
                            {plan?.period && (
                              <span className="text-sm font-semibold text-bullt-primary">
                                /{plan?.period}/{plan?.user}
                              </span>
                            )}
                          </div>
                          {plan?.button_text && (
                            <div className="w-full flex justify-center ">
                              <Link
                                href={plan?.button_link}
                                className=" px-6 font-normal bg-bullt-tertiary hover:bg-bullt-secondary hover:text-bullt-tertiary hover:border-bullt-tertiary border border-bullt-tertiary text-white py-1 rounded-lg  hover:shadow-xl transition-all duration-300"
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
                  { feature: "99.9% Uptime SLA", key: "uptime_sla" },
                  {
                    feature: "Premium Anti-Virus & Anti-Spam",
                    key: "premium_anti_virus",
                  },
                  { feature: "email@your-domain.com", key: "support_email" },
                  {
                    feature: "Mailboxes Size",
                    key: "mailboxes_size",
                  },
                  {
                    feature: "Full-Featured Webmail",
                    key: "full_featured_webmail",
                  },
                  {
                    feature: "Mobile & Desktop Access (IMAP)",
                    key: "mobile_desktop_access",
                  },
                  {
                    feature: "Shared Calendars, Contacts, Tasks",
                    key: "shared_calendars",
                  },
                  {
                    feature: "CardDAV & CalDAV",
                    key: "carddav_caldav",
                  },
                  {
                    feature: "Integrated Portal Page",
                    key: "integrated_portal_page",
                  },
                  {
                    feature: "Self-Service Migration Tool",
                    key: "self_service_migration_tool",
                  },
                  { feature: "Cloud File Storage", key: "cloud_file_storage" },
                  {
                    feature: "Online Office Suite",
                    key: "online_office_suite",
                  },
                  {
                    feature: "Create / Edit Word Docs",
                    key: "create_edit_word_docs",
                  },
                  {
                    feature: "Create / Edit Spreadsheets",
                    key: "create_edit_spreadsheets",
                  },
                  {
                    feature: "Create / Edit PowerPoint",
                    key: "create_edit_powerpoint",
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
                    {ProfessionalEmailProducts?.ProductDetails[0]?.profesional_email_data?.map(
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

export default EmailProductsComponent;
