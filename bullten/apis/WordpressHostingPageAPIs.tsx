import { apiCore } from "./APICore";

export const WordpressHostingPageContentApi = async () => {
  const response = await apiCore("/api/wordpree_page_data", {}, "POST");
  return response;
};

export const WordpressHostingProductsApi = async (
  currency: string,
  decodedSlug: string
) => {
  const response = await apiCore(
    "/api/fetch_wordpress_page_product",
    { currency: currency, slug: decodedSlug },
    "POST"
  );
  return response;
};
