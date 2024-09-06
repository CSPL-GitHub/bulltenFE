import { apiCore } from "./APICore";

export const ProductDataApi = async (
  product_category: string,
  disk_type: string,
  Memory: string,
  server_location: string
) => {
  const response = await apiCore(
    "/api/server_products",
    {
      product_category: product_category,
      disk_type: disk_type,
      Memory: Memory,
      server_location: server_location,
    },
    "POST"
  );
  return response;
};
