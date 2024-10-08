import { apiCore } from "./APICore";

export const PrivacyPolicyPageApi = async () => {
  const response = await apiCore("/api/fetch_privacy_policy", {}, "POST");
  return response;
};

export const RefundPolicyPageApi = async () => {
  const response = await apiCore("/api/fetch_refund_policy", {}, "POST");
  return response;
};
