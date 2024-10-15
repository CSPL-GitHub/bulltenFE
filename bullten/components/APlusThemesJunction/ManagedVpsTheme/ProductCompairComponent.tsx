"use client";
import Link from "next/link";
import React, { useState } from "react";
import { useSelector } from "react-redux";
interface Price {
  country_price: string;
  location_center: string;
}

interface Plan {
  title: boolean;
  plans: string;
  year: string;
  button_text: string;
  button_link: string;
  price: Price[];
}

interface Feature {
  product_plans: string;
  featureName: string;
  vCore: string;
  processor: string;
  disk: string;
  RAM: string;
  raid: string;
  virtualization: string;
  Bandwidth: string;
  DDos_Protection: string;
  IpAddress: string;
  location_center: string;
}

interface PlansData {
  heading: string;
  description: string;
  location: Plan[];
  features: Feature[];
}

interface Props {
  Data: {
    content: PlansData[];
    heading: string;
    description: string;
    gap_top: number;
    gap_bottom: number;
  };
}

const ProductCompairComponent: React.FC<Props> = ({ Data }) => {
  const plansData = Data?.content[0];
  const [selectedPeriods, setSelectedPeriods] = useState<{
    [key: number]: string;
  }>({});

  const currencyCode = useSelector((state: any) => state.currency);

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
    <div
      className="container mx-auto py-5 px-4"
      style={{
        marginTop: `${Data?.gap_top / 4}rem`,
        marginBottom: `${Data?.gap_bottom / 4}rem`,
      }}
    >
      <div className="overflow-x-auto">
        <div className="py-4 px-4">
          <h2
            className="sm:text-4xl text-2xl mb-2 text-center font-semibold"
            dangerouslySetInnerHTML={{ __html: Data?.heading }}
          />
          <p
            className="text-lg lg:text-lg text-center"
            dangerouslySetInnerHTML={{ __html: Data?.description }}
          />
        </div>
        <table className="table-auto w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-4 py-2 text-center">
                <h2
                  className="sm:text-2xl text-xl font-semibold"
                  dangerouslySetInnerHTML={{ __html: plansData?.heading }}
                />
              </th>
              {plansData?.location?.map((plan: Plan, index: number) => (
                <th key={index} className="border px-4 py-2 text-center">
                  <div className="sm:text-xl text-lg font-semibold">
                    {plan.plans}
                  </div>

                  <div className="flex gap-1 justify-center items-center">
                    <select
                      value={selectedPeriods[index]}
                      onChange={(e) => handlePeriodChange(e, index)}
                      className="border border-gray-300 rounded px-2 py-1 text-bullt-primary"
                    >
                      {plan?.price?.map((pricingPeriod: any, idx: number) => (
                        <option key={idx} value={pricingPeriod.period}>
                          {pricingPeriod?.year} - {pricingPeriod?.icon}
                          {pricingPeriod?.country_price}
                          {pricingPeriod?.location_center}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="flex justify-center items-center">
                    {selectedPeriods[index] ? (
                      <span className="text-sm font-semibold text-bullt-primary">
                        {selectedPeriods[index]}
                      </span>
                    ) : null}
                  </div>

                  {plan.button_text && plan.button_link && (
                    <Link href={plan.button_link}>
                      <button className="mt-4 bg-bullt-tertiary text-white py-2 border-[1px] px-3 rounded hover:bg-bullt-secondary hover:text-bullt-tertiary">
                        {plan.button_text}
                      </button>
                    </Link>
                  )}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="cursor-pointer">
            {Object.keys(plansData?.features[0] || {})
              .filter((key) => key !== "product_plans" && key !== "featureName")
              .map((feature, index) => (
                <tr key={index}>
                  <td className="border px-4 py-2 text-center font-medium">
                    {feature.replace(/_/g, " ")}
                  </td>
                  {plansData?.features?.map(
                    (plan: Feature, planIndex: number) => (
                      <td
                        key={planIndex}
                        className="border px-4 py-2 text-center"
                      >
                        {plan[feature as keyof Feature]}
                      </td>
                    )
                  )}
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductCompairComponent;
