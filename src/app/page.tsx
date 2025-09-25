import { redirect } from "next/navigation";
import { AppRoutes } from "@/lib/constants";

/**
 * The root page of the application.
 *
 * This page is protected by the middleware. If a user is authenticated,
 * the middleware will allow access, and this component will redirect them
 * to the main page. If they are not authenticated, the middleware
 * will redirect them to the login page before this component is ever rendered.
 */
export default function HomePage() {
  redirect(AppRoutes.COMPANIES);
}
