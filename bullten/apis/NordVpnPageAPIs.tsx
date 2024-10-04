import { apiCore } from "./APICore";

export const NordVpnPageApi = async (decodedSlug: string) => {
  const response = await apiCore(
    "/api/nord_vpn_tab",
    { slug: decodedSlug },
    "POST"
  );
  return response;
};

export const NordVpnProductsApi = async (
  currency: string,
  decodedSlug: string
) => {
  const response = await apiCore(
    "/api/fetch_nord_vpn_product",
    { currency: currency, slug: decodedSlug },
    "POST"
  );
  return response;
};

export const NordVpnCountryLocationsApi = async () => {
  const response = await apiCore("/api/nord_vpn_map", {}, "POST");
  return response;
};
