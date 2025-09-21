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
  DASHBOARD: "/dashboard",
  COMPANIES: "/companies",
  USERS: "/users",
};
