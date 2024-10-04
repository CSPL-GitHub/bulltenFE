"use client";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Image from "next/image";
import { WebsiteBackupProductsApi } from "@/apis/WebsiteBackupPageApi";
import { BsStars } from "react-icons/bs";
import Link from "next/link";

type Props = {
  BenifitesData: any;
  decodedSlug: string;
};

export default function WebsiteBackupStorageProduct({
  BenifitesData,
  decodedSlug,
}: Props) {
  const [StorageProductsData, setStorageProductsData] = useState<any>({});
  const [defaultStorage, setDefaultStorage] = useState<any>();

  const currencyCode = useSelector((state: any) => state.currency);
  const [selectedStorage, setSelectedStorage] = useState(defaultStorage);
  const [price, setPrice] = useState<number | null>(null);
  useEffect(() => {
    const fetchServerProducts = async () => {
      try {
        const response = await WebsiteBackupProductsApi(
          currencyCode?.code?.slug,
          decodedSlug
        );
        setStorageProductsData(response?.result);
      } catch (error) {
        console.log(error);
      }
    };
    fetchServerProducts();
  }, [currencyCode, decodedSlug]);

  useEffect(() => {
    if (StorageProductsData?.ProductDetails?.[0]?.website_backup_data) {
      const firstBackupData =
        StorageProductsData.ProductDetails[0].website_backup_data[0];
      setDefaultStorage(firstBackupData?.storage);
      setSelectedStorage(firstBackupData?.storage); // set the default selected storage
    }
  }, [StorageProductsData]);
  useEffect(() => {
    if (StorageProductsData?.ProductDetails?.length > 0) {
      const selectedData =
        StorageProductsData.ProductDetails[0].website_backup_data.find(
          (data: any) => data.storage === selectedStorage
        );

      if (selectedData) {
        const selectedPricing = selectedData.pricing.find(
          (price: any) => price.country === currencyCode?.code?.slug
        );

        if (selectedPricing) {
          setPrice(selectedPricing.price);
        } else {
          setPrice(null);
        }
      }
    }
  }, [StorageProductsData, selectedStorage, currencyCode]);

  return (
    <div className="bg-gradient-to-br from-blue-50 to-purple-50 py-16 px-4 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 text-gray-800">
          Secure Your Website with Our Backup Solution
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {BenifitesData?.Overview[0]?.Overview_data.map(
            (benefit: any, index: number) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-sm p-6 transition-all duration-300 hover:shadow-xl hover:scale-105"
              >
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-100 rounded-full p-1">
                    <Image
                      src={`${process.env.NEXT_PUBLIC_BASE_URL}${benefit.image}`}
                      width={30}
                      height={30}
                      alt=""
                      className="text-blue-600"
                    />
                  </div>
                  <h3 className="font-semibold text-lg text-gray-800">
                    {benefit.heading}
                  </h3>
                </div>
              </div>
            )
          )}
        </div>

        {StorageProductsData?.Active === true ? (
          <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12">
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-center mb-12">
              <h2 className="text-3xl font-bold mb-4 md:mb-0 text-gray-800">
                {StorageProductsData?.ProductDetails[0]?.heading}
              </h2>
              {/* <div className="flex items-center space-x-4">
                <label className="text-gray-600">Currency:</label>
                <select
                  className="bg-gray-100 text-gray-800 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={currency}
                  onChange={(e) => setCurrency(e.target.value)}
                >
                  <option value="INR">₹ INR</option>
                  <option value="USD">$ USD</option>
                  <option value="EUR">€ EUR</option>
                </select>
              </div> */}
            </div>

            {/* Storage Options */}
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 mb-12">
              {StorageProductsData?.ProductDetails[0]?.website_backup_data.map(
                (size: any) => (
                  <button
                    key={size?.storage}
                    className={`p-4 rounded-lg transition-all duration-300 ${
                      selectedStorage === size?.storage
                        ? "bg-bullt-tertiary text-white font-bold shadow-lg scale-105"
                        : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                    }`}
                    onClick={() => setSelectedStorage(size?.storage)}
                  >
                    <p className="text-xl font-semibold">{size?.storage}</p>
                  </button>
                )
              )}
            </div>

            {/* Pricing Section */}
            <div className="text-center mb-12">
              <div className="text-5xl font-bold mb-2 text-bullt-quaternary">
                {price ? price : "N/A"}
                <span className="text-2xl font-normal text-gray-600">
                  /month
                </span>
              </div>
              <p className="text-gray-600">Billed annually</p>
            </div>

            {/* Order Now Button */}
            <div className="text-center">
              {StorageProductsData?.ProductDetails[0]?.button_text && (
                <div className="w-full flex justify-center ">
                  <Link
                    href={StorageProductsData?.ProductDetails[0]?.button_link}
                    className=" px-6 font-normal bg-bullt-tertiary hover:bg-bullt-secondary hover:text-bullt-tertiary hover:border-bullt-tertiary border border-bullt-tertiary text-white py-1 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <div className="group-hover:scale-100 flex gap-1">
                      <BsStars size={20} />

                      {StorageProductsData?.ProductDetails[0]?.button_text}
                    </div>
                  </Link>
                </div>
              )}
              <p className="mt-4 text-gray-600">No credit card required</p>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}

// "use client";
// import { useState } from "react";
// import {
//   AiOutlineCloudUpload,
//   AiOutlineClockCircle,
//   AiOutlineAlert,
// } from "react-icons/ai";
// import { FaWordpress, FaShieldAlt } from "react-icons/fa";

// export default function WebsiteBackupStorageProduct() {
//   const [selectedStorage, setSelectedStorage] = useState(10);
//   const [currency, setCurrency] = useState("INR");

//   const price = (selectedStorage * 52.55).toFixed(2);
//   const storageOptions = [1, 5, 10, 25, 50, 100, 200];

//   // Array with benefits and icons
//   const benefits = [
//     {
//       label: "Automatic Daily Backups",
//       icon: <AiOutlineCloudUpload size={24} />,
//     },
//     { label: "Website Time Machine", icon: <AiOutlineClockCircle size={24} /> },
//     { label: "WordPress Plugin Updates", icon: <FaWordpress size={24} /> },
//     {
//       label: "File Change Alert Monitoring",
//       icon: <AiOutlineAlert size={24} />,
//     },
//     { label: "Malware Detection and Restore", icon: <FaShieldAlt size={24} /> },
//   ];

//   return (
//     <div className="w-full bg-bullt-quaternary/[0.07] py-16">
//       {/* Benefits Section */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12 max-w-5xl mx-auto">
//         {benefits.map((benefit, index) => (
//           <div
//             key={index}
//             className="bg-white text-bullt-primary px-6 py-4 rounded-lg shadow-md flex items-center space-x-4"
//           >
//             <div>{benefit.icon}</div>
//             <p className="font-semibold">{benefit.label}</p>
//           </div>
//         ))}
//       </div>

//       <div className="text-black px-8 md:px-16 lg:px-0 rounded-lg shadow-sm max-w-7xl mx-auto">
//         {/* Header */}
//         <div className="flex flex-col md:flex-row justify-between items-center mb-12">
//           <h1 className="text-3xl font-bold mb-4 md:mb-0">
//             Select Your Backup Storage
//           </h1>
//           <div>
//             <label className="text-sm mr-4">Currency:</label>
//             <select
//               className="bg-gray-800 text-white px-4 py-2 rounded-md"
//               value={currency}
//               onChange={(e) => setCurrency(e.target.value)}
//             >
//               <option value="INR">₹ INR</option>
//               <option value="USD">$ USD</option>
//               <option value="EUR">€ EUR</option>
//             </select>
//           </div>
//         </div>

//         {/* Storage Options */}
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
//           {storageOptions.map((size) => (
//             <div
//               key={size}
//               className={`cursor-pointer p-6 text-center rounded-lg border-2 ${
//                 selectedStorage === size
//                   ? "bg-bullt-tertiary border-bullt-tertiary text-white font-bold"
//                   : "border-gray-700 hover:border-bullt-tertiary"
//               }`}
//               onClick={() => setSelectedStorage(size)}
//             >
//               <p className="text-2xl font-semibold">{size}GB</p>
//             </div>
//           ))}
//         </div>

//         {/* Pricing Section */}
//         <div className="text-center mb-12">
//           <div className="text-5xl font-bold mb-2">
//             {currency} {price}
//           </div>
//           <p className="text-gray-400">Per Month</p>
//         </div>

//         {/* Order Now Button */}
//         <div className="text-center">
//           <button className="bg-bullt-tertiary hover:from-yellow-600 hover:to-yellow-500 text-white font-bold py-4 px-8 rounded-lg text-lg shadow-lg transition duration-300">
//             Order Now
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }
