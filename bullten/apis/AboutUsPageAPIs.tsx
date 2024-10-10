import { apiCore } from "./APICore";

export const AboutUsPageApi = async () => {
  const response = await apiCore("/api/about_us_data", {}, "POST");
  return response;
};
