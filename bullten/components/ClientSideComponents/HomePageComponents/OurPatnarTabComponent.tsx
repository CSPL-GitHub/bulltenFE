"use client"
import Image from 'next/image';
import React, { useState } from 'react';

type Props = {
    data: any;
};
const OurPatnarTabComponent: React.FC<Props> = ({ data }) => {
    const [activeTab, setActiveTab] = useState('Operating System');
    const tabs = [
        { title: data.tab_one, content: data.operating_systems },
        { title: data.tab_two, content: data.list_titles }
    ];
    return (
        <div className="sm:px-4">
            <div className="border-b  border-gray-200">
                {tabs.length > 0 ? <>
                    <nav className="flex justify-center space-x-8">
                        {tabs?.map((tab, index) => (
                            <button
                                key={index}
                                className={`text-lg font-medium px-1 pb-2 border-b-2 h-8 ${activeTab === tab.title
                                    ? 'border-bullt-quinary text-bullt-quinary scale-105'
                                    : 'border-transparent text-bullt-text-quaternary hover:text-gray-700 hover:border-gray-300'
                                    }`}
                                onClick={() => setActiveTab(tab.title)} >
                                {tab.title}
                            </button>
                        ))}
                    </nav></> : null}

                <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 py-3">
                    {tabs.find(tab => tab.title === activeTab)?.content.map((item: any, index: any) => (
                        <div key={index} className="bg-white border border-gray-200 rounded-lg shadow-sm py-2 text-center hover:scale-105">
                            {item.img ? <> 
                             <div className="h-[70px] w-[180px] relative px-2 mx-auto">
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
                            </div></> : null}

                            <h3 className="text-lg font-semibold text-gray-800 py-1">{item.heading}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default OurPatnarTabComponent;
