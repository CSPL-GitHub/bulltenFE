import { apiCore } from "./APICore";

export const SeoToolsPageApi = async (decodedSlug: string) => {
  const response = await apiCore(
    "/api/seo_tool_data",
    { slug: decodedSlug },
    "POST"
  );
  return response;
};

export const WebsiteSecurityProductsApi = async (
  currency: string,
  decodedSlug: string
) => {
  const response = await apiCore(
    "/api/fetch_website_security_product",
    { currency: currency, slug: decodedSlug },
    "POST"
  );
  return response;
};
