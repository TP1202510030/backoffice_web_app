import { AuthenticationApi, SignInResource } from "../api/api-client";
import { ApiConfig } from "../constants";
import { AuthStrategy } from "./auth.strategy";

/**
 * An authentication client that implements the AuthStrategy using JWT
 * and stores the token in sessionStorage.
 */
export class JwtAuthClient implements AuthStrategy {
  private readonly authApi: AuthenticationApi;

  constructor() {
    this.authApi = new AuthenticationApi();
  }

  /**
   * @inheritdoc
   */
  public async getAccessToken(): Promise<string | null> {
    if (typeof window === "undefined") {
      return null;
    }
    return window.sessionStorage.getItem(ApiConfig.AUTH_COOKIE_NAME);
  }

  /**
   * @inheritdoc
   * For a simple JWT strategy without a refresh token, this method
   * will clear the session, effectively forcing a re-login.
   */
  public async refreshIfNeeded(_error?: unknown): Promise<void> {
    console.warn(
      "Access token expired or invalid. No refresh token available. Logging out."
    );
    // Since there's no refresh token, the only "refresh" action is to sign out.
    await this.signOut();
    // This will trigger a redirect to the login page in a well-structured app.
  }

  /**
   * @inheritdoc
   */
  public async signIn(credentials: SignInResource): Promise<void> {
    try {
      const response = await this.authApi.signIn(credentials);
      const token = response.data.token;

      if (!token) {
        throw new Error("No token received from authentication server.");
      }

      if (typeof window !== "undefined") {
        window.sessionStorage.setItem(ApiConfig.AUTH_COOKIE_NAME, token);
      }
    } catch (error) {
      console.error("Sign-in failed:", error);
      throw error;
    }
  }

  /**
   * @inheritdoc
   */
  public async signOut(): Promise<void> {
    if (typeof window !== "undefined") {
      window.sessionStorage.removeItem(ApiConfig.AUTH_COOKIE_NAME);
    }
    // In a real application, you might also want to call a /logout endpoint
    // on the backend to invalidate the token on the server-side if needed.
  }
}
