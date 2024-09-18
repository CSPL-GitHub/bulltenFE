import { apiCore } from "./APICore";

export const ManagedHostingDataApi = async (slug : string) => {
    const response = await apiCore("/api/managed_hosting", {slug: slug}, "POST");
    return response;
  };