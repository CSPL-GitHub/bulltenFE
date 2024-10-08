import { apiCore } from "./APICore";

export const SiteMonitoringPageApi = async (decodedSlug: string) => {
  const response = await apiCore(
    "/api/site_server_monitoring_data",
    { slug: decodedSlug },
    "POST"
  );
  return response;
};

export const SiteMonitoringProductsApi = async (
  currency: string,
  decodedSlug: string,
  tabName: string
) => {
  const response = await apiCore(
    "/api/fetch_site_server_product",
    { currency: currency, slug: decodedSlug, product_type: tabName },
    "POST"
  );
  return response;
};
