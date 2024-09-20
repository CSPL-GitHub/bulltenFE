import { apiCore } from "./APICore";

export const ProductDataApi = async (
  currencyCode: any,
  slug: string,
  disk_type: string[],
  server_location: string,
  minram: string,
  maxram: string,
  minprice: string,
  maxprice: string
) => {
  const response = await apiCore(
    "/api/server_products",
    {
      slug: slug,
      disk_type: disk_type,
      server_location: server_location,
      min_ram: minram,
      max_ram: maxram,
      min_price: minprice,
      max_price: maxprice,
      currency: currencyCode,
    },
    "POST"
  );
  return response;
};

export const PriceRangeApi = async (
  decodedSlug: string,
  curreny_country: string
) => {
  const response = await apiCore(
    "/api/price_filter",
    { decodedSlug: decodedSlug, curreny_country: curreny_country },
    "POST"
  );
  return response;
};

export const ManageHostingProductsApi = async (
  product_data: string,
  currency: string
) => {
  const response = await apiCore(
    "/api/managed_hostings",
    { product_data: product_data, currency: currency },
    "POST"
  );
  return response;
};
export const FilterLoactionApi = async (decodedSlug: string,) => {
  const response = await apiCore("/api/locations", { decodedSlug: decodedSlug }, "POST");
  return response;
};