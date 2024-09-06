"use client";

import React, { useEffect, useState } from "react";
import FilterComponent from "./FilterComponet";
import { ProductDataApi } from "@/apis/productsApi";
import ServerProductsComponent from "./ServerProductComponent";

type Props = {
  decodedSlug: string;
};
const MainFilterProducts = ({ decodedSlug }: Props) => {
  const [serverProducts, setServerProducts] = useState<any>({});
  const [selectedLocation, setSelectedLocation] = useState("india");
  const [priceRange, setPriceRange] = useState([0, 50000]);
  const [ramRange, setRamRange] = useState([4, 1536]);
  const [selectedDisks, setSelectedDisks] = useState("");

  useEffect(() => {
    const fetchPlans = async () => {
      try {
        const response = await ProductDataApi(
          "",
          selectedDisks,
          "",
          selectedLocation
        );
        setServerProducts(response?.result?.data);
      } catch (err) {
        console.error("Error fetching plans:", err);
      }
    };
    fetchPlans();
  }, [selectedLocation, selectedDisks, priceRange, ramRange]);

  return (
    <div>
      <FilterComponent
        setSelectedLocation={setSelectedLocation}
        setPriceRange={setPriceRange}
        setRamRange={setRamRange}
        setSelectedDisks={setSelectedDisks}
        selectedDisks={selectedDisks}
        priceRange={priceRange}
        ramRange={ramRange}
        selectedLocation={selectedLocation}
      />
      <ServerProductsComponent ProductsData={serverProducts} />
    </div>
  );
};

export default MainFilterProducts;
