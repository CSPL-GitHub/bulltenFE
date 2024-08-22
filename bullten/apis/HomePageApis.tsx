import { apiCore } from "./APICore";

export const headerApi = async () => {
  const response = await apiCore("/api/header", {}, "POST");
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

export const OurPatnarApi = async () => {
  const response = await apiCore("/api/ourpartner", {}, "POST");
  return response;
};
export const FaqSectionApi = async () => {
  const response = await apiCore("/api/faqs", {}, "POST");
  return response;
};
export const WhyUsSectionApi = async () => {
  const response = await apiCore("/api/whyus", {}, "POST");
  return response;
};
export const CounteSectionApi = async () => {
  const response = await apiCore("/api/counters", {}, "POST");
  return response;
};
export const BlogSectionApi = async () => {
  const response = await apiCore("/api/blogs", {}, "POST");
  return response;
};
export const footerApi = async () => {
  const response = await apiCore("/api/footer", {}, "POST");
  return response;
};

export const footerMapApi = async () => {
  const response = await apiCore("/api/map", {}, "POST");
  return response;
};

export const TestimonialsApi = async () => {
  const response = await apiCore("/api/testimonials", {}, "POST");
  return response;
};
