import { apiCore } from "./APICore";

export const SiteBuilderPageApi = async (decodedSlug: string) => {
  const response = await apiCore(
    "/api/seo_builder_data",
    { slug: decodedSlug },
    "POST"
  );
  return response;
};

export const SiteBuilderProductsApi = async (
  currency: string,
  decodedSlug: string
) => {
  const response = await apiCore(
    "/api/fetch_site_product_product",
    { currency: currency, slug: decodedSlug },
    "POST"
  );
  return response;
};
