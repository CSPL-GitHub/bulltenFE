import { apiCore } from "./APICore";

export const HomePageSEOApi = async () => {
  const response = await apiCore("/api/homeseo", {}, "POST");
  return response;
};
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
export const DomainsearchApi = async () => {
  const response = await apiCore(`/api/domainsearch`, {}, "POST");
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

export const SupportSectionAPI = async () => {
  const response = await apiCore("/api/supports", {}, "POST");
  return response;
};

export const trustedComponies = async () => {
  const response = await apiCore("/api/trustedcompanys", {}, "POST");
  return response;
};

export const serverFeaturesApi = async () => {
  const response = await apiCore("/api/serverfeature", {}, "POST");
  return response;
};

export const chatSupportApiData = async () => {
  const response = await apiCore("/api/chatsupport", {}, "POST");
  return response;
};

export const WhyChooseWebHostingApi = async () => {
  const response = await apiCore("/api/webhosting", {}, "POST");
  return response;
};

export const ContactUsStripApi = async () => {
  const response = await apiCore("/api/freetrial", {}, "POST");
  return response;
};
