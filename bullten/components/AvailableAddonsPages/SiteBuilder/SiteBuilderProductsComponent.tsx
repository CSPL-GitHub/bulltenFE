"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { BsStars } from "react-icons/bs";
import { SiTicktick } from "react-icons/si";
import { RxCrossCircled } from "react-icons/rx";
import { SiteBuilderProductsApi } from "@/apis/SiteBuilderApi";
type Props = {
  decodedSlug: string;
};

const SiteBuilderProductsComponent = ({ decodedSlug }: Props) => {
  const currencyCode = useSelector((state: any) => state.currency);
  const [SiteBuilderProducts, setSiteBuilderProducts] = useState<any>({});

  useEffect(() => {
    const fetchServerProducts = async () => {
      try {
        const response = await SiteBuilderProductsApi(
          currencyCode?.code?.slug,
          decodedSlug
        );

        setSiteBuilderProducts(response?.result);
      } catch (error) {
        console.log(error);
      }
    };
    fetchServerProducts();
  }, [currencyCode, SiteBuilderProducts]);

  return (
    <div className="max-w-7xl mx-auto lg:py-16 py-6 px-4">
      <div className="overflow-x-auto">
        <div className="lg:px-4 px-0 ">
          {SiteBuilderProducts?.Active === true && (
            <>
              <div
                className="sm:text-4xl text-2xl mb-2 text-center font-bold"
                dangerouslySetInnerHTML={{
                  __html: SiteBuilderProducts?.ProductDetails[0]?.heading,
                }}
              ></div>
              {!SiteBuilderProducts?.ProductDetails[0]?.description ? null : (
                <div
                  className="text-lg lg:text-lg text-center"
                  dangerouslySetInnerHTML={{
                    __html: SiteBuilderProducts?.ProductDetails[0]?.description,
                  }}
                ></div>
              )}
            </>
          )}
        </div>

        {SiteBuilderProducts?.ProductDetails?.length > 0 && (
          <div className="overflow-x-auto mt-6">
            <table className="w-full border-collapse rounded-md">
              <thead className="rounded-md">
                <tr className=" bg-bullt-quaternary/[0.07] text-white ">
                  <th className="p-6 text-left border border-gray-400 font-bold text-lg uppercase tracking-wider text-bullt-primary">
                    Features
                  </th>
                  {SiteBuilderProducts?.ProductDetails[0]?.site_builder_data?.map(
                    (plan: any, index: number) => (
                      <th
                        key={index}
                        className="p-4 text-center border border-gray-400"
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
                                {price?.icon}
                                {price?.price}
                                {price?.country}
                              </div>
                            ))}

                            {plan?.period ? (
                              <span className="text-sm font-semibold text-bullt-primary">
                                /{plan?.period}
                              </span>
                            ) : null}
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
                  {
                    feature: "Professional Quality Website Templates",
                    key: "contact_form_builder",
                  },
                  {
                    feature: "User-First Design for All Skill Levels ",
                    key: "user_first_design",
                  },
                  {
                    feature: "Easy Drag & Drop Editing",
                    key: "user_first_design",
                  },
                  {
                    feature: "Responsive to Mobile Devices",
                    key: "responsive_mobile_design",
                  },
                  {
                    feature: "Free Image Gallery",
                    key: "free_image_gallery",
                  },
                  {
                    feature: "Component Based Building Blocks",
                    key: "component_based_building_blocks",
                  },
                  {
                    feature: "Blog",
                    key: "blog",
                  },
                  {
                    feature: "Auto Layouts for Proportional Spacing",
                    key: "auto_layouts",
                  },
                  {
                    feature: "Contact Form Builder",
                    key: "contact_form_builder",
                  },
                  {
                    feature: "Restore Websites",
                    key: "restore_websites",
                  },
                  {
                    feature: "Theme Inheritance",
                    key: "theme_inheritance",
                  },
                  {
                    feature: "Social Media Integration",
                    key: "social_media_integration",
                  },
                  {
                    feature: "SEO Friendly",
                    key: "seo_friendly",
                  },
                  {
                    feature: "Built-In Analytics",
                    key: "built_in_analytics",
                  },
                  {
                    feature: "Pages",
                    key: "pages",
                  },
                  {
                    feature: "E-Commerce Products",
                    key: "e_commerce_products",
                  },
                ].map((item, idx) => (
                  <tr
                    key={idx}
                    className={`${
                      idx % 2 === 0 ? "bg-white" : "bg-bullt-quaternary/[0.04]"
                    } hover:bg-bullt-quaternary/[0.04] transition-colors`}
                  >
                    <td className="border p-4 text-left font-semibold text-gray-800 ">
                      {item.feature}
                    </td>
                    {SiteBuilderProducts?.ProductDetails[0]?.site_builder_data?.map(
                      (plan: any, index: number) => (
                        <td key={index} className="border p-4 text-center">
                          {plan?.[item.key] === false ? (
                            <>
                              <RxCrossCircled className="text-red-700 text-lg mx-auto" />
                            </>
                          ) : (
                            <span>
                              {plan?.[item.key] === true ? (
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

export default SiteBuilderProductsComponent;
