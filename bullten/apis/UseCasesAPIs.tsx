import { apiCore } from "./APICore";

export const UseCasesDataApi = async (slug: string) => {
  const response = await apiCore("/api/usecases_data", { slug: slug }, "POST");
  return response;
};
