import { apiCore } from "./APICore";

export const ServerDataApi = async (slug : string) => {
    const response = await apiCore("/api/server_service", {slug: slug}, "POST");
    return response;
  };