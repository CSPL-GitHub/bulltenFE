import { apiCore } from "./APICore";

export const ProductDataApi = async (
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
      minram: minram,
      maxram: maxram,
      minprice: minprice,
      maxprice: maxprice,
    },
    "POST"
  );
  return response;
};
