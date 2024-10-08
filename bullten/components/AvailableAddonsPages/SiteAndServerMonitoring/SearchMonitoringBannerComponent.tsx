"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
type Props = {};

export default function SearchMonitoringBannerComponent({ BannerData }: any) {
  const [url, setUrl] = useState("");
  const [country, setCountry] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitted:", { url, country });
  };
  return (
    <section
      className={`mx-auto w-full bg-gradient-to-br from-bullt-tertiary/[0.07] via-white to-bullt-quaternary/[0.1] overflow-hidden ${
        BannerData?.tabs[0]?.Search === true
          ? "lg:h-[500px] h-[600px]"
          : "lg:h-[500px] h-[400px]"
      } `}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16 lg:py-0 py-8 lg:px-0 px-4">
          <div className="flex flex-col justify-center space-y-8">
            <h1 className="lg:text-left text-center text-5xl font-bold tracking-tight text-bullt-tertiary sm:text-6xl md:text-6xl leading-[4rem]">
              {BannerData?.tabs[0]?.Sub_heading}
            </h1>
            {BannerData?.tabs[0]?.desc ? (
              <div
                className="lg:text-left text-center items-start max-w-prose text-xl tailwind-unrested py-3 text-bullt-primary/[0.8]"
                dangerouslySetInnerHTML={{
                  __html: BannerData?.tabs[0]?.desc,
                }}
              ></div>
            ) : null}
            {BannerData?.tabs[0]?.Search === true ? (
              <div className="mx-auto max-w-5xl">
                <div className="mt-1">
                  <form
                    onSubmit={handleSubmit}
                    className="flex flex-col sm:flex-row items-center justify-center gap-3"
                  >
                    <div className="w-full sm:w-2/5">
                      <label htmlFor="website-url" className="sr-only">
                        Website URL
                      </label>
                      <input
                        id="website-url"
                        name="website-url"
                        type="url"
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                        placeholder="Enter your website URL"
                        required
                        className="w-full px-4 py-2 rounded-md bg-bullt-quaternary/10 border border-bullt-quaternary/10 text-black placeholder-bullt-primary"
                      />
                    </div>
                    <div className="w-full sm:w-1/3">
                      <label htmlFor="country" className="sr-only">
                        Select Country
                      </label>
                      <select
                        id="country"
                        name="country"
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                        className="w-full px-4 py-2 rounded-md bg-bullt-quaternary/10 border border-bullt-quaternary/10 text-black"
                      >
                        <option value="">Select Country</option>
                        <option value="us">United States</option>
                        <option value="uk">United Kingdom</option>
                        <option value="ca">Canada</option>
                        <option value="au">Australia</option>
                        <option value="de">Germany</option>
                      </select>
                    </div>
                    <button
                      type="submit"
                      className="w-full sm:w-auto px-6 py-2 bg-bullt-tertiary text-bullt-secondary rounded-md font-semibold flex items-center justify-center hover:bg-bullt-tertiary/20 hover:border hover:border-bullt-tertiary hover:text-bullt-primary transition-colors duration-300"
                    >
                      <FaSearch className="mr-2" /> Monitoring
                    </button>
                  </form>
                </div>
              </div>
            ) : null}
          </div>

          <div className="relative lg:mt-8 mt-0 lg:block hidden">
            <motion.div
              className="absolute inset-0 bg-indigo-200 rounded-3xl transform rotate-3"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            />
            <motion.div
              className="relative bg-white p-8 rounded-3xl shadow-xl"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <img
                src={`${process.env.NEXT_PUBLIC_BASE_URL}${BannerData?.tabs[0]?.image}`}
                alt={BannerData?.tabs?.heading}
                className="w-full h-[300px] lg:h-[350px] object-contain rounded-xl"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
