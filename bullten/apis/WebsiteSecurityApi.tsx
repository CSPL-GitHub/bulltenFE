//
import { apiCore } from "./APICore";

export const WebsiteSecurityPageApi = async (
  currencySlug: string,
  decodedSlug: string
) => {
  const response = await apiCore(
    "/api/website_security_data",
    { currency: currencySlug, slug: decodedSlug },
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
