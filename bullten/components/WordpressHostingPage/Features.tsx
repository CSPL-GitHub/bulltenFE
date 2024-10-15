import React from "react";

const features = [
  {
    title: "Increase sales",
    description:
      "Consectetur pariatur irure exercitation sit amet id consectetur consecteturmagna et Lorem labore qui velit.",
  },
  {
    title: "Enterprise-ready",
    description:
      "Labore duis pariatur est exercitation laboris cupidatat amet cillum. Amet nisi ullamco.",
  },
  {
    title: "Unlimited growth",
    description:
      "Elit deserunt nisi esse duis cupidatat proident sit minim mollit officia pariatur incididunt in tempor.",
  },
  {
    title: "Recommended by experts",
    description:
      "Velit sit tempor pariatur quis pariatur incididunt culpa dolor voluptate officia incididunt velit dolore.",
  },
  {
    title: "Modern platform",
    description:
      "Laboris elit consectetur sint nisi eu mollit proident sit magna velit adipisicing consequat amet reprehenderit.",
  },
  {
    title: "Integrations",
    description:
      "Nostrud excepteur incididunt proident sit nulla ipsum sunt nostrud est esse adipisicing irure officia consectetur.",
  },
];

const FeatureSection = () => (
  <section className={`bg-white pb-6`}>
    <div className={`max-w-7xl mx-auto p-4 sm:p-6 lg:p-8`}>
      <div className={`container mx-auto px-6 p-6 bg-white`}>
        <div className={`mb-16 text-center`}>
          <h4
            className={`text-base text-indigo-600 font-semibold tracking-wide uppercase`}
          >
            Features
          </h4>
          <p
            className={`mt-2 text-5xl lg:text-7xl font-bold tracking-tight text-gray-900`}
          >
            How we change the game
          </p>
        </div>
        <div className={`flex flex-wrap my-12`}>
          {features.map((feature, index) => (
            <div
              key={index}
              className={`w-full border-b md:w-1/2 ${
                index % 3 !== 2 ? "md:border-r" : ""
              } lg:w-1/3 ${index > 2 ? "lg:border-b-0" : ""} p-8`}
            >
              <div className={`flex items-center mb-6`}>
                <div className={`ml-4 text-xl`}>{feature.title}</div>
              </div>
              <p className={`leading-loose text-gray-500`}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default FeatureSection;
