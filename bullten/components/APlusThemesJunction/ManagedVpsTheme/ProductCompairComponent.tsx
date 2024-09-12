"use client";
import React, { useState } from "react";
import { MdArrowDropUp } from "react-icons/md";

const plansData = [
    {
        planName: "KVM Basic",
        price: "$12.50",
        pricingTerm: "Monthly",
        websitesHosted: "Unlimited",
        storage: "30GB",
        cpuCores: "4 TB",
        memory: "2 x 2.20GHz",
        freeCPanelWHM: "4GB",
        fullManagement: "Unlimited",
        support: "24/7 Support",
        moneyBackGuarantee: "7-Days MoneyBack Guarantee",
        multipleServerLocations: "Unlimited",
    },
    {
        planName: "KVM Advance",
        price: "$40.40",
        pricingTerm: "Quarterly",
        websitesHosted: "Unlimited",
        storage: "90GB",
        cpuCores: "8 TB",
        memory: "2 x 2.20GHz",
        freeCPanelWHM: "8GB",
        fullManagement: "Unlimited",
        support: "24/7 Support",
        moneyBackGuarantee: "7-Days MoneyBack Guarantee",
        multipleServerLocations: "Unlimited",
    },
    {
        planName: "KVM Pro",
        price: "$48.50",
        pricingTerm: "Semi-Annually",
        websitesHosted: "Unlimited",
        storage: "30GB",
        cpuCores: "12 TB",
        memory: "2 x 2.20GHz",
        freeCPanelWHM: "10GB",
        fullManagement: "Unlimited",
        support: "24/7 Support",
        moneyBackGuarantee: "7-Days MoneyBack Guarantee",
        multipleServerLocations: "Unlimited",
    },
    {
        planName: "KVM Pro+",
        price: "$90.00",
        pricingTerm: "Annually",
        websitesHosted: "Unlimited",
        storage: "40GB",
        cpuCores: "24 TB",
        memory: "2 x 2.20GHz",
        freeCPanelWHM: "24GB",
        fullManagement: "Unlimited",
        support: "24/7 Support",
        moneyBackGuarantee: "7-Days MoneyBack Guarantee",
        multipleServerLocations: "Unlimited",
    },
];

const ProductCompairComponent = () => {
    const [open, setOpen] = useState(false); 

    const handleDescription = () => {
        setOpen(!open); 
    };

    return (
        <div className="container mx-auto py-5 px-4" onClick={handleDescription} >
            <div className="overflow-x-auto">
                <table className="table-auto w-full border-collapse border border-gray-300">
                    <thead className="w-[200px]">
                        <tr className="bg-gray-100">
                            <h2 className="text-2xl font-semibold text-center py-10">
                                Compare Our Cloud VPS
                            </h2>
                            {plansData.map((plan, index) => (
                                <th key={index} className="border px-4 py-2 text-center">
                                    <div className="text-xl font-semibold">{plan.planName}</div>
                                    <div className="text-xl font-bold text-purple-600">
                                        {plan.price}
                                    </div>
                                    <div className="text-lg                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         ">{plan.pricingTerm}</div>
                                    <button className="mt-4 bg-bullt-tertiary text-white py-2 px-4 rounded hover:bg-bullt-secondary hover:text-bullt-tertiary">
                                        Get Started
                                    </button>
                                </th>
                            ))}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
                        </tr>
                    </thead>
                    <tbody className="cursor-pointer">
                        <tr>
                            <div className="flex">
                                <td className="border bg-bullt-tertiary px-4 py-2 text-center font-medium">
                                    Comparision
                                </td>
                                <MdArrowDropUp size={50} className={`cursor-pointer transform transition-transform duration-300 ${open ? "rotate-180" : ""}`}/>
                            </div>
                        </tr>
                        {open && (
                            <>
                                <tr>
                                    <td className="border px-4 py-2 text-center font-medium">
                                        Websites Hosted
                                    </td>
                                    {plansData.map((plan, index) => (
                                        <td key={index} className="border px-4 py-2 text-center">
                                            {plan.websitesHosted}
                                        </td>
                                    ))}
                                </tr>
                                <tr>
                                    <td className="border px-4 py-2 text-center font-medium">
                                        Storage
                                    </td>
                                    {plansData.map((plan, index) => (
                                        <td key={index} className="border px-4 py-2 text-center">
                                            {plan.storage}
                                        </td>
                                    ))}
                                </tr>
                                <tr>
                                    <td className="border px-4 py-2 text-center font-medium">
                                        CPU Cores
                                    </td>
                                    {plansData.map((plan, index) => (
                                        <td key={index} className="border px-4 py-2 text-center">
                                            {plan.cpuCores}
                                        </td>
                                    ))}
                                </tr>
                                <tr>
                                    <td className="border px-4 py-2 text-center font-medium">
                                        Memory
                                    </td>
                                    {plansData.map((plan, index) => (
                                        <td key={index} className="border px-4 py-2 text-center">
                                            {plan.memory}
                                        </td>
                                    ))}
                                </tr>
                                <tr>
                                    <td className="border px-4 py-2 text-center font-medium">
                                        Free cPanel/WHM
                                    </td>
                                    {plansData.map((plan, index) => (
                                        <td key={index} className="border px-4 py-2 text-center">
                                            {plan.freeCPanelWHM}
                                        </td>
                                    ))}
                                </tr>
                                <tr>
                                    <td className="border px-4 py-2 text-center font-medium">
                                        Full Management
                                    </td>
                                    {plansData.map((plan, index) => (
                                        <td key={index} className="border px-4 py-2 text-center">
                                            {plan.fullManagement}
                                        </td>
                                    ))}
                                </tr>
                                <tr>
                                    <td className="border px-4 py-2 text-center font-medium">
                                        Priority Technical Support
                                    </td>
                                    {plansData.map((plan, index) => (
                                        <td key={index} className="border px-4 py-2 text-center">
                                            {plan.support}
                                        </td>
                                    ))}
                                </tr>
                                <tr>
                                    <td className="border px-4 py-2 text-center font-medium">
                                        Money-Back Guarantee
                                    </td>
                                    {plansData.map((plan, index) => (
                                        <td key={index} className="border px-4 py-2 text-center">
                                            {plan.moneyBackGuarantee}
                                        </td>
                                    ))}
                                </tr>
                                <tr>
                                    <td className="border px-4 py-2 text-center font-medium">
                                        Multiple Server Locations
                                    </td>
                                    {plansData.map((plan, index) => (
                                        <td key={index} className="border px-4 py-2 text-center">
                                            {plan.multipleServerLocations}
                                        </td>
                                    ))}
                                </tr>
                            </>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ProductCompairComponent;
