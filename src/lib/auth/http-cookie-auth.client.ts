import { AuthenticationApi, SignInResource } from "../api/api-client";
import { AuthStrategy } from "./auth.strategy";
import { AppRoutes } from "../constants";

/**
 * An authentication client that implements the AuthStrategy for an HttpOnly cookie-based session.
 * It communicates with the backend, which is responsible for setting and clearing the secure cookie.
 */
export class HttpCookieAuthClient implements AuthStrategy {
  public authApi: AuthenticationApi;

  constructor(authApi?: AuthenticationApi) {
    this.authApi = authApi || new AuthenticationApi();
  }

  /**
   * @inheritdoc
   * Client-side JavaScript cannot access HttpOnly cookies.
   * Therefore, this method will always return null. The presence of a session is
   * verified by the browser automatically sending the cookie with each request.
   */
  public async getAccessToken(): Promise<null> {
    return null;
  }

  /**
   * @inheritdoc
   * With HttpOnly cookies, there is no client-side refresh token. A 401 response
   * indicates that the session has expired. The only recourse is to sign out
   * and force the user to log in again.
   */
  public async refreshIfNeeded(_error?: unknown): Promise<void> {
    console.warn("Session expired or invalid. Redirecting to login.");

    await this.signOut();
  }

  /**
   * @inheritdoc
   * Calls the backend's sign-in endpoint. The backend is expected to set
   * an HttpOnly cookie in the response upon successful authentication.
   */
  public async signIn(credentials: SignInResource): Promise<void> {
    try {
      await this.authApi.signIn(credentials);
    } catch (error) {
      console.error("Sign-in failed:", error);
      throw error;
    }
  }

  /**
   * @inheritdoc
   * Calls the backend's sign-out endpoint to clear the HttpOnly cookie.
   */
  public async signOut(): Promise<void> {
    try {
      await this.authApi.signOut();
    } catch (error) {
      console.error("Sign-out failed:", error);
    } finally {
      if (typeof window !== "undefined") {
        window.location.href = AppRoutes.LOGIN;
      }
    }
  }
}
