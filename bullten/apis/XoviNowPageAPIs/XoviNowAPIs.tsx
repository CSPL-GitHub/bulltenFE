import { apiCore } from "../APICore";

export const XoviNowPageApi = async (decodedSlug: string) => {
  const response = await apiCore(
    "/api/xovi_now_tab",
    { slug: decodedSlug },
    "POST"
  );
  return response;
};

export const XoviNowProductsApi = async (
  currency: string,
  decodedSlug: string
) => {
  const response = await apiCore(
    "/api/fetch_xovi_now_product",
    { currency: currency, slug: decodedSlug },
    "POST"
  );
  return response;
};
