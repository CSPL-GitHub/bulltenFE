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
            <div className="border-b border-gray-200 mb-6">
                <nav className="flex justify-center gap-5">
                    <button
                        className={`text-lg font-medium  border-b-[1px]  ${activeTab === data.tab_one
                            ? ' text-bullt-secondary scale-105 rounded-md px-3'
                            : 'border-transparent text-bullt-secondary'
                            }`}
                        onClick={() => setActiveTab(data.tab_one)}>
                        {data.tab_one}</button>
                    <button
                        className={`text-lg font-medium px-1  border-b-[1px] ${activeTab === data.tab_two
                            ? 'border-bullt-secondary text-bullt-secondary  rounded-md scale-105 '
                            : 'border-transparent text-bullt-secondary '
                            }`}
                        onClick={() => setActiveTab(data.tab_two)}>
                        {data.tab_two}
                    </button>
                </nav>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3  gap-6 py-3">
                    {(activeTab === data.tab_one ? data.operating_systems : data.list_titles)?.map((item: any, index: any) => (
                        <div key={index} className="bg-white border border-gray-200  sm:w-[150px] w-[160px] rounded-lg shadow-sm py-1 text-center hover:scale-105">
                            {item.img ? (
                                <div className="h-[70px] lg:w-[130px] w-[120px] relative mx-auto">
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
