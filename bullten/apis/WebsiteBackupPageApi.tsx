//
import { apiCore } from "./APICore";

export const WebsiteBackupPageApi = async (decodedSlug: string) => {
  const response = await apiCore(
    "/api/website_backup_data",
    { slug: decodedSlug },
    "POST"
  );
  return response;
};

export const WebsiteBackupProductsApi = async (
  currency: string,
  decodedSlug: string
) => {
  const response = await apiCore(
    "/api/fetch_website_backup_product",
    { currency: currency, slug: decodedSlug },
    "POST"
  );
  return response;
};
