import Image from "next/image";
import Link from "next/link";

type Props = {
  BannerData: any;
};
export default function AboutUsBannerSection({ BannerData }: Props) {
  return (
    <section className="relative h-[430px] bg-gradient-to-br from-indigo-50 via-white to-pink-50 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <svg
          className="absolute left-0 top-0 h-full w-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <path d="M0,0 L100,0 L100,100 Z" fill="rgba(99, 102, 241, 0.05)" />
        </svg>
        <svg
          className="absolute right-0 bottom-0 h-full w-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <path d="M0,100 L100,0 L100,100 Z" fill="rgba(244, 114, 182, 0.05)" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 lg:py-6 flex flex-col lg:flex-row items-center">
        {/* Hero content */}
        <div className="lg:w-1/2 lg:pr-12 mb-12 lg:mb-0">
          {BannerData?.heading ? (
            <h1 className="text-4xl md:text-6xl font-bold text-bullt-quaternary mb-6">
              {BannerData?.heading}
            </h1>
          ) : null}

          {BannerData?.description ? (
            <p className="text-xl sm:text-2xl text-gray-600 mb-8">
              {BannerData?.description}
            </p>
          ) : null}

          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"></div>
        </div>

        <div className="lg:w-1/2 relative">
          <div className="relative w-full max-w-lg mx-auto">
            <div className="absolute top-0 -left-4 w-72 h-72 bg-bullt-text-quaternary/40 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
            <div className="absolute top-0 -right-4 w-72 h-72 bg-bullt-tertiary/40 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-bullt-quaternary/40 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
            <div className="relative">
              <Image
                src={`${process.env.NEXT_PUBLIC_BASE_URL}${BannerData?.image}`}
                alt={BannerData?.heading}
                width={600}
                height={600}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 sm:pb-24 lg:pb-32">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Innovative Solutions",
              description: "Cutting-edge technology to solve complex problems",
            },
            {
              title: "Expert Team",
              description: "Dedicated professionals with years of experience",
            },
            {
              title: "Global Reach",
              description: "Serving clients across continents",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-white bg-opacity-50 backdrop-filter backdrop-blur-lg rounded-xl p-6 shadow-lg"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div> */}
    </section>
  );
}
