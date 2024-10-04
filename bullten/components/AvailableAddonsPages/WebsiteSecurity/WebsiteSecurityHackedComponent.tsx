import React from "react";

const WhyChooseSectionBoxesData = {
  feature: [
    {
      heading: "Why Choose Our Email Hosting?",
      features: [
        {
          icon: "/images/icon1.png", // Update with the appropriate image path
          heading: "Expect More from Email",
          description:
            "Professional email@your-domain.com Secure and reliable with 99.9% Uptime Use Webmail Mobile or Desktop Apps Huge 10GB & 50GB mailboxes",
        },
        {
          icon: "/images/icon2.png",
          heading: "Say Goodbye to Spam",
          description:
            "Using AI and predictive email defense software, OX App Suite fights to keep your inbox safe from spam, viruses, malware and phishing attacks.",
        },
        {
          icon: "/images/icon3.png",
          heading: "Work Anywhere",
          description:
            "OX App Suite syncs across all your devices. And Mobile and Desktop access are no problem as OX App Suite works seamlessly across all native clients.",
        },
      ],
    },
  ],
};
type Props = {
  SecurityData: any;
};
export default function WebsiteSecurityHackedComponent({
  SecurityData,
}: Props) {
  return (
    <div className="max-w-7xl mx-auto px-4 lg:py-8 py-6">
      <h1 className="lg:text-4xl text-2xl font-bold text-center mb-2 text-bullt-primary">
        {SecurityData?.website_hacker[0]?.heading}
      </h1>
      {SecurityData?.website_hacker[0]?.hack_sub_heading ? (
        <div
          className="py-1 text-center text-xl font-bold text-gray-900 sm:text-2xl"
          dangerouslySetInnerHTML={{
            __html: SecurityData?.website_hacker[0]?.hack_sub_heading,
          }}
        />
      ) : null}
      {SecurityData?.website_hacker[0]?.description ? (
        <div
          className="py-3 text-center text-bullt-primary/[0.8] text-lg"
          dangerouslySetInnerHTML={{
            __html: SecurityData?.website_hacker[0]?.description,
          }}
        />
      ) : null}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {SecurityData?.website_hacker[0]?.Website_hacker_data.map(
          (box: any, index: number) => (
            <div
              key={index}
              className={`
                relative overflow-hidden rounded-xl p-4
                transition-all duration-500 ease-in-out
                hover:shadow-xl hover:-translate-y-2
                group cursor-pointer bg-gradient-to-br from-bullt-quaternary/[0.05] to-bullt-quaternary/[0.08]`}
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/20 rounded-full -mr-32 -mt-32 transform rotate-45 transition-transform duration-700 ease-in-out group-hover:rotate-90" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/30 rounded-full -ml-24 -mb-24 transition-transform duration-700 ease-in-out group-hover:scale-150" />
              <div className="relative z-10">
                <div className="text-6xl mb-6 inline-block p-4 rounded-full transform transition-all duration-300 ease-in-out group-hover:scale-110 group-hover:rotate-12 bg-bullt-tertiary/55 group-hover:bg-bullt-tertiary/90">
                  <img
                    src={`${process.env.NEXT_PUBLIC_BASE_URL}${box?.image}`}
                    className="w-14 h-14 object-contain"
                  />
                </div>
                <h2 className="md:text-2xl text-xl font-bold mb-4 text-gray-800 transition-colors duration-300 group-hover:text-gray-900">
                  {box.heading}
                </h2>
                <p className="text-lg text-bullt-primary leading-relaxed transition-colors duration-300 group-hover:text-gray-700">
                  {box.description}
                </p>
              </div>
              <div className="absolute inset-0 border-4 border-transparent rounded-3xl transition-colors duration-300 group-hover:border-white/30" />
            </div>
          )
        )}
      </div>
    </div>
  );
}
