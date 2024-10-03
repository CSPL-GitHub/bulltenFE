import React from "react";

const features = [
  {
    title: "Malware Scan",
    description:
      "Proactively monitors for and alerts you about any malware detected on your website.",
    icon: "🔍",
  },
  {
    title: "Vulnerability Scan",
    description:
      "Automatically checks your applications to ensure they’re up-to-date and secured.",
    icon: "💻",
  },
  {
    title: "SiteLock™ Trust Seal",
    description:
      "Give your visitors added confidence by showing your website is protected.",
    icon: "🏆",
  },
  {
    title: "Protect your reputation",
    description:
      "Daily scans help detect malware before search engines blacklist your site.",
    icon: "🔒",
  },
  {
    title: "Content Delivery Network (CDN)",
    description:
      "Speed up your website by distributing it globally and serving visitors from closest locations.",
    icon: "🌐",
  },
  {
    title: "Automatic malware removal",
    description:
      "Automatically ensures your applications are up-to-date and protected.",
    icon: "🛡️",
  },
  {
    title: "OWASP Protection",
    description:
      "Get protection against the top 10 web app security flaws as recognized by OWASP.",
    icon: "🧩",
  },
  {
    title: "Firewall",
    description:
      "The TrueShield™ Web Application Firewall protects your website against hackers.",
    icon: "🔥",
  },
  {
    title: "Fast automated setup",
    description:
      "Instant setup provides protection immediately without needing any installation.",
    icon: "⚡",
  },
];

const WebsiteSecurityFeaturesComponent = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            SiteLock Features
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            A range of advanced security features to protect your website and
            your business.
          </p>
        </div>

        {/* Zigzag Layout */}
        <div className="relative">
          <div className="absolute border-l-2 border-gray-300 h-full left-1/2 transform -translate-x-1/2"></div>

          {features.map((feature, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row items-center mb-10 relative ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Line connection */}
              <div className="hidden md:block absolute w-6 h-6 bg-orange-500 rounded-full left-1/2 transform -translate-x-1/2"></div>

              {/* Content on Left/Right */}
              <div
                className={`md:w-1/2 p-6 ${
                  index % 2 === 0 ? "md:pl-12 text-right" : "md:pr-12 text-left"
                }`}
              >
                <h3 className="text-2xl font-semibold text-gray-900">
                  {feature.title}
                </h3>
                <p className="mt-4 text-gray-600">{feature.description}</p>
              </div>

              {/* Icon on the Opposite Side */}
              <div className="md:w-1/2 flex justify-center items-center p-6">
                <div className="text-6xl bg-orange-100 text-orange-500 rounded-full p-6 shadow-lg">
                  {feature.icon}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WebsiteSecurityFeaturesComponent;
