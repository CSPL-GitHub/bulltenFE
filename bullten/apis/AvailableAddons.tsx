import { apiCore } from "./APICore";

export const OverViewPageDataApi = async (slug: string) => {
  const response = await apiCore(
    "/api/ssl_certificate",
    { slug: slug },
    "POST"
  );
  return response;
};
