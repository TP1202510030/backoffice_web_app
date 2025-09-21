import { SignInResource } from "../api/api-client";

/**
 * Defines the core contract for an authentication client.
 * It abstracts the details of how tokens are retrieved, stored, and refreshed.
 */
export interface AuthStrategy {
  /**
   * Retrieves the current access token. For HttpOnly cookie strategy, this may not be possible from client-side script.
   * @returns A promise that resolves to the access token string, or null if not available.
   */
  getAccessToken(): Promise<string | null>;

  /**
   * Attempts to refresh the authentication session.
   * @param error - The original error that triggered the refresh attempt.
   * @returns A promise that resolves when the refresh attempt is complete.
   */
  refreshIfNeeded(error?: unknown): Promise<void>;

  /**
   * Signs in the user with the provided credentials.
   * The implementation will handle how the token or session is established.
   * @param credentials - The user's username, password, and client type.
   * @returns A promise that resolves upon successful sign-in.
   */
  signIn(credentials: SignInResource): Promise<void>;

  /**
   * Signs out the current user and clears any session data.
   * @returns A promise that resolves upon successful sign-out.
   */
  signOut(): Promise<void>;
}
