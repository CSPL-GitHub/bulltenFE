"use client";

import React, { useEffect, useState } from "react";
import { ProductDataApi } from "@/apis/productsApi";
import ServerProductsComponent from "./ServerProductComponent";
import FilterComponent from "./FilterComponet";

type Props = {
  decodedSlug: string;
};

const MainFilterProducts = ({ decodedSlug }: Props) => {
  const [serverProducts, setServerProducts] = useState<any>({});
  const [selectedLocation, setSelectedLocation] = useState<string>("");
  const [priceRange, setPriceRange] = useState<[number | null, number | null]>([
    null,
    null,
  ]);
  const [ramRange, setRamRange] = useState<[number | null, number | null]>([
    null,
    null,
  ]);
  const [selectedDisks, setSelectedDisks] = useState<string[]>([]);

  useEffect(() => {
    const fetchPlans = async () => {
      try {
        const response = await ProductDataApi(
          decodedSlug,
          selectedDisks,
          selectedLocation,
          ramRange[0] !== null ? ramRange[0].toString() : "",
          ramRange[1] !== null ? ramRange[1].toString() : "",
          priceRange[0] !== null ? priceRange[0].toString() : "",
          priceRange[1] !== null ? priceRange[1].toString() : ""
        );
        setServerProducts(response?.result?.data);
      } catch (err) {
        console.error("Error fetching plans:", err);
      }
    };

    fetchPlans();
  }, [selectedLocation, selectedDisks, priceRange, ramRange]);

  console.log(serverProducts, "Plans fetched");

  return (
    <div className="container py-6 w-full px-4 lg:px-8">
      <div className="">
        <div
          className="text-center lg:text-4xl text-2xl font-semibold "
          dangerouslySetInnerHTML={{
            __html: serverProducts?.heading,
          }}
        />
        <div
          className="text-center text-xl py-3"
          dangerouslySetInnerHTML={{
            __html: serverProducts?.description,
          }}
        />
      </div>
      <FilterComponent
        setSelectedLocation={setSelectedLocation}
        setPriceRange={setPriceRange}
        setRamRange={setRamRange}
        setSelectedDisks={setSelectedDisks}
        selectedDisks={selectedDisks}
        ramRange={ramRange}
        priceRange={priceRange}
        selectedLocation={selectedLocation}
        ProductsDetails={serverProducts}
      />
      <ServerProductsComponent ProductsData={serverProducts} />
    </div>
  );
};

export default MainFilterProducts;
