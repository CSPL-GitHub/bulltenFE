import { apiCore } from "./APICore";

export const headerApi = async () => {
  const response = await apiCore("/bullten_new/bullten_new", {}, "POST");
  return response;
};

export const HomePageBannerApi = async () => {
  const response = await apiCore(`/api/banners`, {}, "POST");
  return response;
};

export const WordPressHoistingApi = async () => {
  const response = await apiCore(`/api/hosting`, {}, "POST");
  return response;
};

export const footerApi = async () => {
  const response = await apiCore("/api/footer", {}, "POST");
  return response;
};