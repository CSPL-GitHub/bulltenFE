import { apiCore } from "./APICore";

export const ProductDataApi = async () => {
    const response = await apiCore("/api/server_products", {}, "POST");
    return response;
  };