"use client";
import { ProductDataApi } from '@/apis/productsApi';
import React, { useState, useEffect } from 'react';

const PricingTable: React.FC = () => {
    const [expandedPlan, setExpandedPlan] = useState<string | null>(null);
    const [plans, setPlans] = useState<any>({});
    const [selectedPlan, setSelectedPlan] = useState<string | null>(null); // State to store selected plan

    const toggleExpanded = (planName: string) => {
        setExpandedPlan(expandedPlan === planName ? null : planName);
    };

    const handleAddToCart = (planName: string) => {
        setSelectedPlan(planName); 
    };

    useEffect(() => {
        const fetchPlans = async () => {
            try {
                const response = await ProductDataApi();
                setPlans(response?.result?.data);
            } catch (err) {
                console.error('Error fetching plans:', err);
            }
        };

        fetchPlans();
    }, []);

    return (
        <div className="container mx-auto py-4">
            <h2 className="text-center text-5xl font-bold mb-8">{plans?.heading}</h2>
            <div className="px-4">
                {plans?.server_products?.map((plan: any, index: any) => (

                    <div key={index} className="border mb-4 rounded-lg shadow-md">
                        <div
                            className="flex justify-between items-center p-4 bg-white rounded-t-lg cursor-pointer h-[100px] hover:bg-gray-100 transition"
                            onClick={() => toggleExpanded(plan.name)} >
                            <div className="grid grid-cols-12 items-center">
                                <span className="text-purple-600 font-bold text-lg col-span-2">{plan.name}</span>
                                <span className="ml-8 text-md font-semibold  col-span-4">CPU: {plan?.Processor}</span>
                                <span className="ml-8 text-md col-span-2">Ram: {plan.Memory}</span>
                                <span className="ml-8 text-md col-span-2">Disks: {plan.Disk}</span>
                            </div>
                            <div className="text-right">
                                <span className="text-purple-600 font-bold text-xl">{plan.Price}</span>
                                <button 
                                    className="bg-purple-600 text-white py-2 px-4 ml-4 rounded-md"
                                    onClick={() => handleAddToCart(plan.name)} // Click event to add to cart
                                >
                                    {plan.buttonText}
                                </button>
                            </div>
                        </div>













                        {expandedPlan === plan.name && (
                            <div className="sm:flex bg-gray-50 p-4 rounded-b-lg">
                                <ul className="grid md:grid-cols-4 grid-cols-2 gap-2 list-inside">
                                    {plan.server_benifits.map((benefit: any, i: number) => (
                                        <div key={i} className="flex items-center">
                                            <span className="text-green-500 mr-2 text-2xl">✔</span>
                                            <li className="flex items-center text-md font-semibold">{benefit.title}</li>
                                        </div>
                                    ))}
                                </ul>
                                <div className="ml-8 flex flex-col justify-center">
                                    <span className="font-bold text-gray-700 mb-2">Server Location:</span>
                                    <div className="flex space-x-2">
                                        {plan.server_locations.map((location: any, i: number) => (
                                            <span key={i} className="">
                                                <img src={`data:image/gif;base64,${location.location_flag}`} alt={location.alt_text || 'Flag'} className="w-6 h-4" />
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
            {selectedPlan && (
                <div className="fixed bottom-4 right-4 p-4 bg-white shadow-lg rounded-lg">
                    <h3 className="text-xl font-bold">Selected Plan</h3>
                    <p className="text-md">You have selected: <strong>{selectedPlan}</strong></p>
                </div>
            )}
        </div>
    );
};

export default PricingTable;
