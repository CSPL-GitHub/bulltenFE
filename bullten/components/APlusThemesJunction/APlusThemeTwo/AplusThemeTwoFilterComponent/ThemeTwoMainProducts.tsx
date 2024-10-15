"use client";
import React, { useEffect, useState } from "react";
import {
  FilterLoactionApi,
  PriceRangeApi,
  ProductDataApi,
} from "@/apis/productsApi";
import { useSelector } from "react-redux";
import LoaderComponent from "@/components/CommonComponents/LoaderComponent/LoaderComponent";
import ThemeTwoServerProductsComponent from "./ThemeTwoServerProductsComponent";
import ThemeTwoFilterComponent from "./ThemeTwoFilterComponent";

type Props = {
  decodedSlug: string;
};

const ThemeTwoMainProducts = ({ decodedSlug }: Props) => {
  const [serverProducts, setServerProducts] = useState<any>({});
  const [selectedLocation, setSelectedLocation] = useState<string>("");
  const [filterRange, setFilterRange] = useState<any>({});
  const [priceRange, setPriceRange] = useState<[number | null, number | null]>([
    null,
    null,
  ]);
  const [ramRange, setRamRange] = useState<[number | null, number | null]>([
    null,
    null,
  ]);
  const [MinRamRange, setMinRamRange] = useState<any>(4);
  const [MaxRamRange, setMaxRamRange] = useState<any>(1500);
  const [selectedDisks, setSelectedDisks] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false); // Loader state

  const currencyCode = useSelector((state: any) => state.currency);

  useEffect(() => {
    const fetchPriceRange = async () => {
      try {
        setLoading(true); // Start loader
        const response = await PriceRangeApi(
          decodedSlug,
          currencyCode?.code?.slug
        );
        if (response?.result) {
          setFilterRange(response.result);
          setPriceRange([response.result?.min, response.result?.max]);
        }
        setLoading(false); // Stop loader
      } catch (err) {
        setLoading(false); // Stop loader in case of error
      }
    };

    if (currencyCode?.code?.slug) {
      fetchPriceRange();
    }
  }, [currencyCode, decodedSlug]);

  useEffect(() => {
    const fetchPlans = async () => {
      try {
        setLoading(true); // Start loader
        const response = await ProductDataApi(
          currencyCode?.code?.slug,
          decodedSlug,
          selectedDisks,
          selectedLocation,
          MinRamRange !== null ? MinRamRange : "",
          MaxRamRange !== null ? MaxRamRange : "",
          priceRange[0] !== null ? priceRange[0] : filterRange?.min,
          priceRange[1] !== null ? priceRange[1] : filterRange?.max
        );
        setServerProducts(response?.result?.data);
        setLoading(false); // Stop loader
      } catch (err) {
        setLoading(false); // Stop loader in case of error
        console.error("Error fetching plans:", err);
      }
    };

    fetchPlans();
  }, [
    selectedLocation,
    selectedDisks,
    priceRange,
    MinRamRange,
    MaxRamRange,
    currencyCode,
    filterRange,
  ]);

  return (
    <div className="container mx-auto py-4 lg:py-8 px-2 lg:px-9">
      <div className="">
        <div
          className="text-white text-center lg:text-4xl text-2xl font-semibold "
          dangerouslySetInnerHTML={{
            __html: serverProducts?.heading,
          }}
        />
        <div
          className="text-center text-xl py-3 text-white"
          dangerouslySetInnerHTML={{
            __html: serverProducts?.description,
          }}
        />
      </div>
      <p className="text-xl font-semibold px-4 lg:text-left text-center bg-white rounded-md py-2 lg:w-[20%]">
        Result Found : {serverProducts?.server_products?.length}
      </p>
      <ThemeTwoFilterComponent
        setSelectedLocation={setSelectedLocation}
        setPriceRange={setPriceRange}
        setRamRange={setRamRange}
        setSelectedDisks={setSelectedDisks}
        selectedDisks={selectedDisks}
        ramRange={ramRange}
        selectedPriceRange={priceRange}
        filterRange={filterRange}
        selectedLocation={selectedLocation}
        ProductsDetails={serverProducts}
        decodedSlug={decodedSlug}
        MaxRamRange={MaxRamRange}
        setMaxRamRange={setMaxRamRange}
        MinRamRange={MinRamRange}
        setMinRamRange={setMinRamRange}
      />
      {loading ? (
        <div className="flex justify-center items-center w-[20%] mx-auto mt-[20px] ">
          <LoaderComponent /> {/* Display the loader when loading */}
        </div>
      ) : (
        <>
          {serverProducts?.server_products?.length > 0 ? (
            <ThemeTwoServerProductsComponent ProductsData={serverProducts} />
          ) : (
            <div>
              {" "}
              <p className="lg:text-4xl text-2xl font-bold text-center py-[50px] text-white">
                No Prducts Found
              </p>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default ThemeTwoMainProducts;
