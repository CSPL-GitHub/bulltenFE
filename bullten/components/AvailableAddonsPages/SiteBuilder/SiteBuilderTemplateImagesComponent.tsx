"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";

type Props = {
  TemplateData: any;
};
export default function SiteBuilderTemplateImagesComponent({
  TemplateData,
}: Props) {
  const [activeCategory, setActiveCategory] = useState<any>(0);
  const [hoveredImage, setHoveredImage] = useState<number | null>(null);

  return (
    <div className="max-w-7xl mx-auto px-4 py-4">
      <h2 className="lg:text-4xl text-2xl font-bold text-center mb-8 text-gray-800">
        {TemplateData?.template[0]?.heading}
      </h2>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 justify-center mb-8">
        {TemplateData?.template[0]?.template_data?.map(
          (category: any, index: number) => (
            <button
              key={index}
              onClick={() => setActiveCategory(index)}
              className={`px-4 py-3 mx-2 text-lg rounded-lg transition-all duration-300 ease-in-out ${
                activeCategory === index
                  ? "bg-bullt-tertiary text-white shadow-lg transform scale-105"
                  : "bg-gray-200 text-gray-800 hover:bg-bullt-tertiary/[0.08] hover:border-bullt-tertiary/[0.08] border-gray-200 border-[1px]"
              }`}
            >
              {category?.template_heading}
            </button>
          )
        )}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {TemplateData?.template[0]?.template_data[
          activeCategory
        ]?.templates?.map((image: any, index: number) => (
          <Link href={image?.link}>
            <div
              key={index}
              className="relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105"
              onMouseEnter={() => setHoveredImage(index)}
              onMouseLeave={() => setHoveredImage(null)}
            >
              {/* <Image
                src={`${process.env.NEXT_PUBLIC_BASE_URL}${image?.image}`}
                alt={image?.headings}
                width={400}
                height={300}
                className="w-full h-auto object-cover"
              />{" "} */}
              <Image
                src={`${process.env.NEXT_PUBLIC_BASE_URL}${image?.image}`}
                alt={image?.headings}
                width={400}
                height={300}
                className="w-full h-auto object-cover"
              />{" "}
              <span className="absolute overflow-hidden w-36 h-36 -top-2.5 -left-2.5 flex items-center justify-center">
                <div className="absolute w-[150%] text-sm h-10 bg-gradient-to-r from-[#ff6547] via-[#ffb144] to-[#ff7053] rotate-[-45deg] -translate-y-5 flex items-center justify-center text-white font-normal  uppercase shadow-[0_5px_10px_rgba(0,0,0,0.23)]">
                  {image?.tag}
                </div>
                <div className="absolute w-2.5 h-2.5 bottom-0 left-0 -z-10 shadow-[140px_-140px_0px_0px_#cc3f47] bg-gradient-to-r from-[#FF512F] via-[#F09819] to-[#FF512F]"></div>
              </span>
              <div
                className={`absolute inset-0 bg-black bg-opacity-50 transition-opacity duration-300 ${
                  hoveredImage === index ? "opacity-100" : "opacity-0"
                }`}
              >
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-lg font-semibold">{image?.tag}</p>
                  <p className="text-sm">{image.headings}</p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
