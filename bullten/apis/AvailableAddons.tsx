import { apiCore } from "./APICore";

// to get the data for the overview Main Data Page. overviewPage is the SSL-Certificates page
export const OverViewPageDataApi = async (slug: string) => {
  const response = await apiCore(
    "/api/ssl_certificate",
    { slug: slug },
    "POST"
  );
  return response;
};

// To Get the All Components Data for the Tabs inside the overviewPage
export const OverViewSubPageDataApi = async (slug: string) => {
  const response = await apiCore(
    "/api/ssl_certificate_tab",
    { slug: slug },
    "POST"
  );
  return response;
};

// To Get the Tabs Name and The Slugs of tab which are added in the Odoo CRM
export const OverViewPageTabsDataApi = async () => {
  const response = await apiCore("/api/ssl_tab_page", {}, "POST");
  return response;
};

// To Fetch the data of the products based on the tabs/SubPages

export const OverViewSubPagesTabsProductsApi = async (
  currency: string,
  tab_name: string
) => {
  const response = await apiCore(
    "/api/fetch_ssl_plans",
    { tab_name: tab_name, currency: currency },
    "POST"
  );
  return response;
};

// Xovi Now Page API
