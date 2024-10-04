"use client";

import React, { useEffect, useState } from "react";
import { ProductDataApi } from "@/apis/productsApi";
import ThemeTwoFilterComponent from "./ThemeTwoFilterComponent";
import ThemeTwoServerProductsComponent from "./ThemeTwoServerProductsComponent";
import { useSelector } from "react-redux";

type Props = {
  decodedSlug: string;
};

const ThemeTwoMainProducts = ({ decodedSlug }: Props) => {
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
  const currencyCode = useSelector((state: any) => state.currency);
  useEffect(() => {
    const fetchPlans = async () => {
      try {
        const response = await ProductDataApi(
          currencyCode?.code?.slug,
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
       
      }
    };

    fetchPlans();
  }, [selectedLocation, selectedDisks, priceRange, ramRange]);

  return (
    <div className="container mx-auto py-4 lg:py-20 px-2 lg:px-9">
      <div className="">
        <div
          className="text-center text-2xl sm:text-4xl text-bullt-secondary font-semibold "
          dangerouslySetInnerHTML={{
            __html: serverProducts?.heading,
          }}
        />
        <div
          className="text-center text-xl py-3 text-bullt-secondary"
          dangerouslySetInnerHTML={{
            __html: serverProducts?.description,
          }}
        />
      </div>
      <ThemeTwoFilterComponent
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
      <ThemeTwoServerProductsComponent ProductsData={serverProducts} />
    </div>
  );
};

export default ThemeTwoMainProducts;
