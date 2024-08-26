"use client";
import Image from 'next/image';
import React, { useState } from 'react';

type Props = {
    data: any;
};

const OurPatnarTabComponent: React.FC<Props> = ({ data }) => {
    const [activeTab, setActiveTab] = useState(data.tab_one);

    return (
        <div className="sm:px-4">
            <div className="border-b border-gray-200 py-2">
                <nav className="flex justify-center gap-5">
                    <button
                        className={`text-lg font-medium  border-b-[1px]  ${activeTab === data.tab_one
                            ? 'border-bullt-quinary text-bullt-quinary scale-105'
                            : 'border-transparent text-bullt-text-quaternary hover:text-gray-700 hover:border-gray-300'
                            }`}
                        onClick={() => setActiveTab(data.tab_one)}>
                        {data.tab_one}</button>
                    <button
                        className={`text-lg font-medium px-1  border-b-[1px] ${activeTab === data.tab_two
                            ? 'border-bullt-quinary text-bullt-quinary scale-105'
                            : 'border-transparent text-bullt-text-quaternary hover:text-gray-700 hover:border-gray-300'
                            }`}
                        onClick={() => setActiveTab(data.tab_two)}>
                        {data.tab_two}
                    </button>
                </nav>
                <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 sm:gap-2 gap-4 py-3">
                    {(activeTab === data.tab_one ? data.operating_systems : data.list_titles)?.map((item: any, index: any) => (
                        <div key={index} className="bg-white border border-gray-200 lg:w-[200px] w-[190px] rounded-lg shadow-sm py-1 text-center hover:scale-105">
                            {item.img ? (
                                <div className="h-[70px] sm:w-[150px] w-[120px] relative mx-auto">
                                    <Image
                                        src={`${process.env.NEXT_PUBLIC_BASE_URL}${item.img}`}
                                        alt="all"
                                        style={{
                                            position: "absolute",
                                            objectFit: "contain",
                                            inset: 0,
                                        }}
                                        fill={true}
                                    />
                                </div>
                            ) : null}
                            <h3 className="text-lg font-semibold text-gray-800 py-1">{item.heading}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default OurPatnarTabComponent;
