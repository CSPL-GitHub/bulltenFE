import { WhyUsSectionApi } from '@/apis/HomePageApis';
import Image from 'next/image';
import React from 'react';

const WhyBulletinComponent = async () => {


  const WhyUsSection = await WhyUsSectionApi()
  const WhyUsSectionApiResponse = WhyUsSection?.result?.[0];

  return (
    <div className="">
    
    <section className="flex flex-col sm:flex-row  bg-white py-12 px-12 rounded-md ">
      <div className="relative w-full sm:w-1/2">
        <div className="sm:h-[300px] h-[300px] w-full relative ">
          <Image
            src={`${process.env.NEXT_PUBLIC_BASE_URL}${WhyUsSectionApiResponse?.img}`}
            alt={WhyUsSectionApiResponse?.img_alt_text}
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
      <div className="sm:w-1/2 w-full px-4">
        <div className="">
          <h2 className="text-green-600 font-semibold">{WhyUsSectionApiResponse?.label}</h2>
          <h3 className="text-2xl font-bold py-2">{WhyUsSectionApiResponse?.heading}</h3>
          <p className="text-gray-600 py-2">{WhyUsSectionApiResponse?.description} </p>

          <div className="grid grid-cols-2 gap-2 text-gray-700">
           {WhyUsSectionApiResponse?.Feature.map((data:any,index:any)=>
          <div   key={index} className="flex items-center">
          <span className="text-green-600">&#10003;</span>
          <span className="ml-2">{data?.name}</span>
        </div>)}
          </div>
        </div>
        <button className="mt-4 px-6 py-3 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600">
          Explore More
        </button>
      </div>
    </section>
    </div>
  );
};

export default WhyBulletinComponent;
