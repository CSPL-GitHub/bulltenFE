import { apiCore } from "./APICore";

export const OverViewPageDataApi = async () => {
  const response = await apiCore("/api/ssl_certificate", {}, "POST");
  return response;
};
