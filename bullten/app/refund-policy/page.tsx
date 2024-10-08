"use client";
import { RefundPolicyPageApi } from "@/apis/LegalPagesAPIs";
import React from "react";
import { FaShieldAlt, FaUserSecret, FaEnvelope, FaLock } from "react-icons/fa";
const page = async ({
  params: { servers },
}: {
  params: { servers: string };
}) => {
  const RefundPolicyResponse = await RefundPolicyPageApi();
  console.log("PrivacyPolicyPageApi", RefundPolicyResponse);
  return (
    <div className="sm:overflow-hidden overflow-x-hidden md:mt-[125px] mt-[105px]">
      <div className="min-h-screen bg-gray-50">
        <div className="bg-gradient-to-r from-purple-600 to-bullt-quaternary/70 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative overflow-hidden">
            <div className="absolute inset-0 opacity-20">
              <svg className="h-full w-full" viewBox="0 0 800 800">
                <path
                  d="M400 0C179.1 0 0 179.1 0 400s179.1 400 400 400 400-179.1 400-400S620.9 0 400 0zm0 700c-165.4 0-300-134.6-300-300s134.6-300 300-300 300 134.6 300 300-134.6 300-300 300z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <div className="relative">
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
                {RefundPolicyResponse?.result?.heading}
              </h1>
              <p className="mt-6 max-w-3xl text-xl">
                We value your trust and are committed to protecting your
                privacy. This policy outlines how we collect, use, and safeguard
                your personal information.
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-white shadow-xl rounded-lg overflow-hidden">
            <div className="p-6 sm:p-10">
              {/* Information We Collect */}
              <section className="mb-12">
                <h2 className="lg:text-3xl text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <FaShieldAlt className="mr-4 text-bullt-quaternary lg:text-4xl text-2xl" />
                  Information We Collect
                </h2>
                <p className="text-gray-600 mb-4 text-lg">
                  We collect information you provide directly to us, such as
                  when you create an account, use our services, or communicate
                  with us. This may include:
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                  {[
                    "Personal details",
                    "Account credentials",
                    "Payment information",
                    "Usage data",
                  ].map((item, index) => (
                    <li
                      key={index}
                      className="flex items-center bg-indigo-50 p-4 rounded-lg"
                    >
                      <FaUserSecret className="text-indigo-600 mr-3" />
                      <span className="text-gray-800">{item}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {/* How We Use Your Information */}
              {RefundPolicyResponse?.result?.privacy_page_data.map(
                (content: any, index: number) => {
                  return (
                    <section className="mb-12 " key={index}>
                      <h2 className="lg:text-3xl text-2xl font-bold text-gray-900 mb-6 flex items-center">
                        <FaLock className="mr-4 text-indigo-600 text-4xl" />
                        {content?.heading}
                      </h2>
                      {/* <p className="text-gray-600 mb-4 text-lg">
                        We use the information we collect to:
                      </p> */}
                      <div className="bg-gradient-to-r from-indigo-100 to-purple-100 p-6 rounded-lg">
                        {content?.description ? (
                          <p
                            className="text-lg text-gray-600 mt-2 lg:text-left text-justify"
                            dangerouslySetInnerHTML={{
                              __html: content?.description,
                            }}
                          />
                        ) : null}
                      </div>
                    </section>
                  );
                }
              )}

              {/* Data Sharing */}
              {/* <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                  <FaUserFriends className="mr-4 text-indigo-600 text-4xl" />
                  Data Sharing
                </h2>
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <p className="text-gray-600 text-lg mb-4">
                    We do not sell or rent your personal information to third
                    parties. We may share your information in the following
                    situations:
                  </p>
                  <ul className="list-disc list-inside text-gray-800 space-y-2">
                    <li>With your consent</li>
                    <li>To comply with legal obligations</li>
                    <li>To protect our rights and prevent fraud</li>
                    <li>
                      With service providers who help us operate our business
                    </li>
                  </ul>
                </div>
              </section> */}

              {/* Contact Us */}
              <section>
                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                  <FaEnvelope className="mr-4 text-indigo-600 text-4xl" />
                  Contact Us
                </h2>
                <div className="bg-indigo-600 text-white p-6 rounded-lg shadow-lg">
                  <p className="text-lg mb-4">
                    If you have any questions about this Privacy Policy, please
                    contact us at:
                  </p>
                  <a
                    href="mailto:privacy@example.com"
                    className="text-white text-xl font-semibold hover:underline"
                  >
                    privacy@example.com
                  </a>
                </div>
              </section>
            </div>

            <div className="bg-gray-50 px-6 py-4 sm:px-10">
              <p className="text-sm text-gray-500">
                Last updated: {new Date().toLocaleDateString()}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
