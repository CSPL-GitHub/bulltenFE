import { apiCore } from "./APICore";

export const ManagedVpsDataApi = async (slug: string, currency: string) => {
  const response = await apiCore(
    "/api/managed_vps",
    { slug: slug, currency: currency },
    "POST"
  );
  return response;
};
