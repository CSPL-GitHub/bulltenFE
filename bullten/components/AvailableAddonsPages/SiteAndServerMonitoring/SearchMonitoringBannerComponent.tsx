"use client";
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { RxCrossCircled } from "react-icons/rx";
import { Dialog } from "@headlessui/react";
import { motion, AnimatePresence } from "framer-motion";
type Props = {};

export default function SearchMonitoringBannerComponent({ BannerData }: any) {
  const [url, setUrl] = useState("");
  const [country, setCountry] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsOpen(true);
  };

  function open() {
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
  }
  return (
    <section
      className={`mx-auto w-full bg-gradient-to-br from-bullt-tertiary/[0.07] via-white to-bullt-quaternary/[0.1] overflow-hidden ${
        BannerData?.tabs[0]?.Search === true
          ? "md:h-[500px]  h-[700px]"
          : "md:h-[500px] h-[400px]"
      } `}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16 lg:py-0 py-8 lg:px-0 px-4">
          <div className="flex flex-col justify-center space-y-8">
            <h1 className="lg:text-left text-center text-5xl font-bold text-bullt-quaternary sm:text-6xl md:text-6xl leading-[15rem]">
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
                        // required
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
                      onClick={open}
                      type="submit"
                      className="w-full sm:w-auto px-6 py-2 bg-bullt-tertiary text-bullt-secondary rounded-md border font-semibold flex items-center justify-center hover:bg-bullt-tertiary/20 hover:border hover:border-bullt-tertiary hover:text-bullt-primary transition-colors duration-300"
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
      {isOpen ? (
        <AnimatePresence>
          {isOpen && (
            <Dialog
              open={isOpen}
              as="div"
              className="relative z-10 focus:outline-none"
              onClose={close}
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm"
              />
              <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div className="flex min-h-full items-center justify-center p-4">
                  <Dialog.Panel
                    as={motion.div}
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.9, opacity: 0 }}
                    className="w-full max-w-4xl mt-14 overflow-hidden rounded-2xl bg-gray-100 shadow-2xl"
                  >
                    <div className="relative p-6 sm:p-8">
                      <button
                        onClick={close}
                        className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors"
                      >
                        <RxCrossCircled size={24} />
                      </button>

                      {/* Header */}
                      <div className="text-center py-4">
                        <p className="text-xl font-semibold text-gray-800">
                          Test results for:
                        </p>
                      </div>

                      {/* Results Box */}
                      <div className="bg-white p-6 rounded-xl ">
                        <h2 className="lg:text-3xl text-xl font-bold text-center mb-6 text-bullt-quaternary">
                          TESTER RESULTS
                        </h2>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6 gap-3 mb-8">
                          {[
                            {
                              label: "Current Status",
                              value: "ONLINE",
                              color: "text-green-600",
                            },
                            {
                              label: "DNS Resolving Time",
                              value: "0.021 S",
                              color: "text-blue-600",
                            },
                            {
                              label: "Connection Time",
                              value: "0.021 S",
                              color: "text-blue-600",
                            },
                            {
                              label: "Total Time Needed",
                              value: "1.601 S",
                              color: "text-purple-600",
                            },
                          ].map((item, index) => (
                            <motion.div
                              key={index}
                              initial={{ y: 20, opacity: 0 }}
                              animate={{ y: 0, opacity: 1 }}
                              transition={{ delay: index * 0.1 }}
                              className="text-center p-4 bg-gray-50 rounded-lg shadow-md"
                            >
                              <p className="font-semibold text-gray-600 mb-2">
                                {item.label}
                              </p>
                              <p
                                className={`lg:text-2xl text-xl font-bold ${item.color}`}
                              >
                                {item.value}
                              </p>
                            </motion.div>
                          ))}
                        </div>

                        <div className="flex flex-wrap justify-center gap-6 mt-8">
                          {[
                            { color: "bg-green-500", label: "Positive" },
                            { color: "bg-yellow-500", label: "Concern" },
                            { color: "bg-red-500", label: "Negative" },
                          ].map((item, index) => (
                            <motion.div
                              key={index}
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{ delay: 0.5 + index * 0.1 }}
                              className="flex items-center space-x-2"
                            >
                              <span
                                className={`block w-4 h-4 ${item.color} rounded-full`}
                              ></span>
                              <span className="text-gray-700">
                                {item.label}
                              </span>
                            </motion.div>
                          ))}
                        </div>

                        <motion.div
                          initial={{ y: 20, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ delay: 0.8 }}
                          className="mt-10 text-center"
                        >
                          <button className="bg-bullt-tertiary border-bullt-tertiary border-[1px] text-white font-semibold px-8 py-3 rounded-full hover:bg-bullt-secondary hover:text-bullt-tertiary hover:border-bullt-tertiary  transition-colors duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 shadow-lg">
                            GET STARTED
                          </button>
                        </motion.div>
                      </div>
                    </div>
                  </Dialog.Panel>
                </div>
              </div>
            </Dialog>
          )}
        </AnimatePresence>
      ) : null}
    </section>
  );
}
