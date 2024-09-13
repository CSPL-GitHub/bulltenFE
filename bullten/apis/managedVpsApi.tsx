import { apiCore } from "./APICore";

export const ManagedVpsDataApi = async (slug : string) => {
    const response = await apiCore("/api/managed_vps", {slug: slug}, "POST");
    return response;
  };