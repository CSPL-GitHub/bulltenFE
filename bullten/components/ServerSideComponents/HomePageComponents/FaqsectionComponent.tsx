import { FaqSectionApi } from '@/apis/HomePageApis';
import FaqQuestionComponent from '@/components/ClientSideComponents/HomePageComponents/FaqQuestionComponent';
import Image from 'next/image';
import React, { useState } from 'react';


const FaqSection = async () => {

    
    const FaqSection = await FaqSectionApi();
    const FaqSectionApiResponse = FaqSection?.result?.[0]
    return (
        <section className="bg-gray-50 py-16 sm:px-10 px-4">
            <div className="sm:flex gap-5 ">
                <div className="sm:w-1/2">
                    <h1 className="sm:text-4xl text-2xl text-gray-600 font-bold mb-4">{FaqSectionApiResponse?.heading}</h1>
                    <p className="text-gray-600">
                    {FaqSectionApiResponse?.description}
                    </p>
                    <div className="sm:h-[450px] h-[300px] w-full relative ">
                        <Image
                            src={`${process.env.NEXT_PUBLIC_BASE_URL}${FaqSectionApiResponse?.img}`}
                            alt={FaqSectionApiResponse?.img_alt_text}
                            style={{
                                position: "absolute",
                                objectFit: "contain",
                                inset: 0,
                            }}
                            fill={true}
                            className='rounded-md'
                        />
                    </div>
                </div>
                <FaqQuestionComponent FaqSectionApiResponse={FaqSectionApiResponse?.questions} />
            </div>
        </section>
    );
};

export default FaqSection;
