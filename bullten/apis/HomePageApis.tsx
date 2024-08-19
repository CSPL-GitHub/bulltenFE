import { apiCore } from "./APICore";

export const headerApi = async () => {
  const response = await apiCore("/bullten_new/bullten_new", {}, "POST");
  return response;
};
