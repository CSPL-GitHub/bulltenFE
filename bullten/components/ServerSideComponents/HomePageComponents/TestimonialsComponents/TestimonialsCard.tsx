import ParaGraphText from "@/components/CommonComponents/HeadingComponents/ParaGraphText";
import SloganHeadingComponent from "@/components/CommonComponents/HeadingComponents/SloganHeadingComponent";
import SubParaGraph from "@/components/CommonComponents/HeadingComponents/SubParaGraph";
import Image from "next/image";
import React from "react";
import { FaQuoteRight } from "react-icons/fa";

export default function TestimonialsCard({
  testimonial,
}: {
  testimonial: any;
}) {
  return (
    <div className="group w-full max-w-lg min-h-60 border relative bg-white rounded-lg shadow-lg mx-auto mt-12 mb-10 p-6 hover:shadow-xl hover:bg-bullt-quaternary transition-all duration-300">
      <div className="flex items-center gap-4 mb-4">
        {testimonial?.client_image ? (
          <div className="w-16 h-16 relative">
            <Image
              src={`${process.env.NEXT_PUBLIC_BASE_URL}${testimonial?.client_image}`}
              alt={testimonial?.alt_text}
              className="w-full h-full rounded-full object-cover"
              fill={true}
            />
          </div>
        ) : (
          <div className="w-16 h-16 bg-gray-300 rounded-full" />
        )}
        <div>
          {testimonial?.name ? (
            <SloganHeadingComponent
              paddingTop={1}
              alignmentType={1}
              hoverEffect=" text-gray-800 group-hover:text-bullt-secondary transition-colors duration-300"
            >
              {testimonial?.name}
            </SloganHeadingComponent>
          ) : null}

          {testimonial?.role ? (
            <SubParaGraph
              py={1}
              alignmentType={1}
              hoverEffect="text-sm text-gray-500 group-hover:text-bullt-secondary transition-colors duration-300"
            >
              {testimonial?.role}
            </SubParaGraph>
          ) : null}
        </div>
      </div>

      <div className="relative">
        <FaQuoteRight className="absolute top-0 left-0 text-bullt-quaternary text-2xl opacity-20" />
        {testimonial?.description ? (
          <ParaGraphText
            paddingTop={3}
            alignmentType={1}
            hoverEffect="text-gray-700 italic group-hover:text-bullt-secondary transition-colors duration-300"
          >
            {testimonial?.description}
          </ParaGraphText>
        ) : null}
      </div>

      <div className="absolute inset-x-0 bottom-0 h-1 w-full bg-gradient-to-r from-bullt-quaternary to-transparent group-hover:from-bullt-secondary transition-colors duration-300"></div>
    </div>
  );
}
