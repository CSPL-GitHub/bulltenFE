//
import { apiCore } from "./APICore";

export const ProfessionalEmailPageApi = async (decodedSlug: string) => {
  const response = await apiCore(
    "/api/profesional_email_data",
    { slug: decodedSlug },
    "POST"
  );
  return response;
};

export const ProfessionalEmailProductsApi = async (
  currency: string,
  decodedSlug: string
) => {
  const response = await apiCore(
    "/api/fetch_professional_email_product",
    { currency: currency, slug: decodedSlug },
    "POST"
  );
  return response;
};
