import axios, { AxiosError } from "axios";
import { AuthStrategy } from "../auth/auth.strategy";

let authStrategyInstance: AuthStrategy | null = null;

/**
 * Creates and configures an Axios instance for API communication.
 * @param authStrategy - The authentication strategy to handle session management.
 * @returns A configured Axios instance.
 */
export function createHttp(authStrategy: AuthStrategy) {
  authStrategyInstance = authStrategy;

  const http = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000",
    headers: {
      "Content-Type": "application/json",
    },
    withCredentials: true,
  });

  http.interceptors.response.use(
    (response) => response,
    async (error: AxiosError) => {
      if (error.response?.status === 401 && authStrategyInstance) {
        try {
          await authStrategyInstance.refreshIfNeeded(error);
        } catch (refreshError) {
          console.error("Failed to handle expired session:", refreshError);
        }
      }
      return Promise.reject(error);
    }
  );

  return http;
}
