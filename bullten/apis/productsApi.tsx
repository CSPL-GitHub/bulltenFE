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
