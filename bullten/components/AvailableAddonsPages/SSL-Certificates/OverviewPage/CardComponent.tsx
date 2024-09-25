import React, { useState } from "react";

const CardComponent = () => {
  const cards = [
    {
      image:
        "https://html.fleexstudio.com/techxen/assets/img/about/visiton-img1.png", // Replace with your image URL
      title: "StriveLabs Landing",
      description: "Boost your productivity with StriveLabs.",
    },
    {
      image:
        "https://html.fleexstudio.com/techxen/assets/img/about/visiton-img1.png", // Replace with your image URL
      title: "Skybridge Solutions",
      description: "Innovative solutions for your business.",
    },
    {
      image:
        "https://html.fleexstudio.com/techxen/assets/img/about/visiton-img1.png", // Replace with your image URL
      title: "Tech Vista Landing",
      description:
        "Whether you're looking to enhance productivity, improve efficiency, or stay ahead of technological advancements.",
    },
  ];

  return (
    <div className="flex space-x-6 justify-center mt-10">
      {cards.map((card, index) => (
        <div key={index} className="relative">
          <div className="relative group cursor-pointer group overflow-hidden  text-gray-50 h-72 w-56  rounded-2xl hover:duration-700 duration-700">
            <div className=" h-72 bg-lime-400 text-gray-800">
              <div className="flex flex-row justify-between">
                {" "}
                <img
                  src={card.image}
                  alt={card.title}
                  className="object-cover w-full h-64 rounded-md"
                />
              </div>
            </div>
            <div className="absolute bg-gray-50 -bottom-24 p-3 flex flex-col gap-1 group-hover:-bottom-0 group-hover:duration-600 duration-500">
              <span className="text-gray-800 font-bold text-3xl">
                {card.title}
              </span>
              <p className="text-neutral-800">{card.description}</p>
            </div>
          </div>
          {/* Image section */}
          <div className="relative overflow-hidden rounded-md">
            <img
              src={card.image}
              alt={card.title}
              className="object-cover w-full h-64 rounded-md"
            />

            {/* Heading section */}
            <div className="absolute inset-0 flex items-end p-4">
              <div className="bg-gray-800 bg-opacity-70 text-white text-lg font-semibold px-4 py-2 shadow-lg transition-colors duration-300 relative hover:bg-purple-700 group">
                {card.title}
                {/* Hover content (description and button) */}
                <div className="absolute left-0 right-0 bottom-full bg-purple-700 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-sm mb-4">{card.description}</p>
                  <a href="#" className="underline text-sm">
                    Read More →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardComponent;
