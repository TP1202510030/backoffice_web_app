/**
 * Constants related to API configuration.
 * @readonly
 */
export const ApiConfig = {
  AUTH_COOKIE_NAME: "access_token",
};

/**
 * Defines the client types known by the backend API.
 * This should match the enum on the server.
 * @readonly
 */
export const ApiClientType = {
  WEB: "WEB",
  MOBILE: "MOBILE",
} as const;

/**
 * Application route paths.
 * @readonly
 */
export const AppRoutes = {
  LOGIN: "/login",
  COMPANIES: "/companies",
  COMPANIES_GROW_ROOMS: (companyId: number) =>
    `/companies/${companyId}/grow-rooms`,
  COMPANIES_USERS: (companyId: number) => `/companies/${companyId}/users`,
};
