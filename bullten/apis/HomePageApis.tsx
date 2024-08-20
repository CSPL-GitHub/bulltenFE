import { apiCore } from "./APICore";

export const headerApi = async () => {
  const response = await apiCore("/bullten_new/bullten_new", {}, "POST");
  return response;
};

export const HomePageBannerApi = async () => {
  const response = await apiCore(`/api/banners`, {}, "POST");
  return response;
};
