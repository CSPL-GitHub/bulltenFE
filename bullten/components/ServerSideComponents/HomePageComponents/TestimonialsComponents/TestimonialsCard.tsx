import ParaGraphText from "@/components/CommonComponents/HeadingComponents/ParaGraphText";
import SloganHeadingComponent from "@/components/CommonComponents/HeadingComponents/SloganHeadingComponent";
import SubHeadingComponents from "@/components/CommonComponents/HeadingComponents/SubHeadingComponents";
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
    <div
      className="group w-full min-h-60 relative bg-bullt-secondary rounded-md border-bullt-quaternary  hover:rounded-md shadow-md mx-auto mt-12 mb-10  transition-colors duration-300"
      style={{
        backgroundImage: 'url("/feature-img.png")',
        backgroundSize: "cover",
        backgroundPosition: "right",
      }}
    >
      <div className="absolute inset-x-0 top-0 flex justify-center transform -translate-y-1/2">
        <div className="w-24 h-24 relative flex justify-center bg-bullt-quaternary  group-hover:bg-bullt-secondary rounded-full shadow-lg items-center transition-colors duration-300">
          <FaQuoteRight className="text-bullt-secondary  group-hover:text-bullt-quaternary text-4xl transition-colors duration-300" />
        </div>
      </div>
      <div className="w-full h-full pt-14 px-4 pb-3 flex flex-col justify-between items-start gap-2 group-hover:bg-bullt-quaternary group-hover:rounded-md  transition-colors duration-300">
        {testimonial?.description ? (
          <ParaGraphText
            paddingTop={3}
            alignmentType={1}
            hoverEffect="group-hover:text-bullt-secondary transition-colors duration-300"
          >
            {testimonial?.description}
          </ParaGraphText>
        ) : null}
        <div className="flex flex-row gap-2 justify-center items-start">
          {testimonial?.client_image ? (
            <div className="w-14 h-14 relative">
              <Image
                src={`${process.env.NEXT_PUBLIC_BASE_URL}${testimonial?.client_image}`}
                alt={testimonial?.alt_text}
                className="w-full h-full absolute top-0 start-0 rounded-full object-cover"
                fill={true}
              />
            </div>
          ) : null}
          <div className="flex flex-col">
            {testimonial?.name ? (
              <SloganHeadingComponent
                paddingTop={1}
                alignmentType={1}
                hoverEffect="group-hover:text-bullt-secondary transition-colors duration-300"
              >
                {testimonial?.name}
              </SloganHeadingComponent>
            ) : null}

            {testimonial?.role ? (
              <SubParaGraph
                py={1}
                alignmentType={1}
                hoverEffect="group-hover:text-bullt-secondary transition-colors duration-300"
              >
                {testimonial?.role}
              </SubParaGraph>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
