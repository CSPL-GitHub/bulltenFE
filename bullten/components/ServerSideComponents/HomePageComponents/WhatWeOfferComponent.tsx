import HomePageButtonOne from "@/components/CommonComponents/ButtonsComponent/HomePageButton";
import React from "react";

const WhatWeOfferComponent = () => {
  return (
    <section className="relative bg-gray-900 text-white py-24 px-4">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-50 custom-bounce"
        style={{ backgroundImage: "url('/bg-shap1.png')" }}
      ></div>
      <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-8 z-10">
        <div className="flex flex-col justify-center w-full lg:w-3/4">
          <p className="text-bullt-tertiary font-semibold mb-2 lg:text-left text-center">
            WHAT WE OFFER
          </p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight lg:text-left text-center">
            Help you Overcome your Technology Challenges
          </h1>
          <div className="py-6">
            <HomePageButtonOne
              alignmentType={1}
              buttonText={"discover More"}
              route={"#"}
            />
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            {
              icon: "https://i.pinimg.com/736x/6c/f3/7a/6cf37af0c3f4b3a0066d846a441e7077.jpg",
              label: "fast cloud hosting",
            },
            {
              icon: "https://i.pinimg.com/736x/c5/cc/7e/c5cc7e0640b40a5a57b5ab0311d0650a.jpg",
              label: "HVAC Protection",
            },
            {
              icon: "https://w7.pngwing.com/pngs/609/292/png-transparent-technology-network-security-lock-chip-software-network-security-icon.png",
              label: "Reliable Power",
            },
            {
              icon: "https://i.pinimg.com/564x/09/e7/90/09e790696aec1a4e551a5d0d33d50ba4.jpg",
              label: "Network & Security",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-gray-800 flex flex-col justify-around h-full items-center p-4 rounded transform transition-transform hover:bg-bullt-quaternary hover:text-black duration-300 ease-in-out group"
            >
              <img
                src={item.icon}
                alt={item.label}
                className="w-12 h-12 mb-4 transition-transform duration-300 ease-in-out group-hover:scale-x-[-1]"
              />
              <p className="text-white text-center">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeOfferComponent;
