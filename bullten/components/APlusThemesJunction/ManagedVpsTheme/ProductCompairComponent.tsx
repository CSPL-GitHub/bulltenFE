"use client";
import React, { useState } from "react";
import { MdArrowDropUp } from "react-icons/md";


type Props = {
    Data: any
}
const ProductCompairComponent: React.FC<Props> = ({ Data }) => {
    const plansData = Data?.content[0]

    return (
        <div className="container mx-auto py-5 px-4"
        style={{
            marginTop: `${Data?.gap_top / 4}rem`,
            marginBottom: `${Data?.gap_bottom / 4}rem`,}}>
            <div className="overflow-x-auto">
               <div className="py-4 px-4">
               <h2 className="sm:text-4xl text-2xl mb-2 text-center font-semibold"
                    dangerouslySetInnerHTML={{
                        __html: Data?.heading,
                    }}>
                </h2>
                <p className="text-lg lg:text-lg text-center"
                    dangerouslySetInnerHTML={{
                        __html: Data?.description,
                    }}>
                </p>
               </div>
                <table className="table-auto w-full border-collapse border border-gray-300">
                    <thead className="w-[200px]">
                        <tr className="bg-gray-100">
                            <h2 className="sm:text-2xl text-xl font-semibold text-center py-10"
                                dangerouslySetInnerHTML={{
                                    __html: Data?.heading,
                                }}>
                            </h2>
                            {plansData?.location?.map((plan: any, index: any) => (
                                <th key={index} className="border px-4 py-2 text-center">
                                    <div className="sm:text-xl text-lg font-semibold">{plan?.plans}</div>
                                    <div className="sm:text-xl text-lg font-bold text-purple-600">
                                        {plan?.price}
                                    </div>
                                    <div className="text-lg">{plan?.month}</div>
                                    <button className="mt-4 bg-bullt-tertiary text-white py-2 border-[1px] px-3 rounded hover:bg-bullt-secondary hover:text-bullt-tertiary">
                                        {plan?.button_text}
                                    </button>
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className="cursor-pointer">

                        <tr>
                            <td className="border px-4 py-2 text-center font-medium">
                                vCore
                            </td>
                            {plansData?.features?.map((plan: any, index: any) => (
                                <td key={index} className="border px-4 py-2 text-center">
                                    {plan?.vCore}
                                </td>
                            ))}
                        </tr>
                        <tr>
                            <td className="border px-4 py-2 text-center font-medium">
                                Processor
                            </td>
                            {plansData?.features?.map((plan: any, index: any) => (
                                <td key={index} className="border px-4 py-2 text-center">
                                    {plan?.processor}
                                </td>
                            ))}
                        </tr>
                        <tr>
                            <td className="border px-4 py-2 text-center font-medium">
                                Disk
                            </td>
                            {plansData?.features?.map((plan: any, index: any) => (
                                <td key={index} className="border px-4 py-2 text-center">
                                    {plan?.disk}
                                </td>
                            ))}
                        </tr>
                        <tr>
                            <td className="border px-4 py-2 text-center font-medium">
                                RAM
                            </td>
                            {plansData?.features?.map((plan: any, index: any) => (
                                <td key={index} className="border px-4 py-2 text-center">
                                    {plan?.RAM}
                                </td>
                            ))}
                        </tr>
                        <tr>
                            <td className="border px-4 py-2 text-center font-medium">
                                RAID
                            </td>
                            {plansData?.features?.map((plan: any, index: any) => (
                                <td key={index} className="border px-4 py-2 text-center">
                                    {plan?.raid}
                                </td>
                            ))}
                        </tr>
                        <tr>
                            <td className="border px-4 py-2 text-center font-medium">
                                Virtualization
                            </td>
                            {plansData?.features?.map((plan: any, index: any) => (
                                <td key={index} className="border px-4 py-2 text-center">
                                    {plan?.virtualization}
                                </td>
                            ))}
                        </tr>
                        <tr>
                            <td className="border px-4 py-2 text-center font-medium">
                                Bandwidth
                            </td>
                            {plansData?.features?.map((plan: any, index: any) => (
                                <td key={index} className="border px-4 py-2 text-center">
                                    {plan?.Bandwidth}
                                </td>
                            ))}
                        </tr>
                        <tr>
                            <td className="border px-4 py-2 text-center font-medium">
                                DDos-Protection
                            </td>
                            {plansData?.features?.map((plan: any, index: any) => (
                                <td key={index} className="border px-4 py-2 text-center">
                                    {plan?.DDos_Protection}
                                </td>
                            ))}
                        </tr>
                        <tr>
                            <td className="border px-4 py-2 text-center font-medium">
                                IP Address
                            </td>
                            {plansData?.features?.map((plan: any, index: any) => (
                                <td key={index} className="border px-4 py-2 text-center">
                                    {plan?.IpAddress}
                                </td>
                            ))}
                        </tr>
                       
                        <tr>
                            <td className="border px-4 py-2 text-center font-medium">
                                Data Center
                            </td>
                            {plansData?.features?.map((plan: any, index: any) => (
                                <td key={index} className="border px-4 py-2 text-center">
                                    {plan?.location_center}
                                </td>
                            ))}
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ProductCompairComponent;
