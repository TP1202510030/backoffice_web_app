import { HttpCookieAuthClient } from "../auth/http-cookie-auth.client";
import {
  CompaniesApi,
  GrowRoomsApi,
  UsersApi,
  AuthenticationApi,
} from "./api-client";
import { createHttp } from "./http";

const authStrategy = new HttpCookieAuthClient();

const http = createHttp(authStrategy);

authStrategy.authApi = new AuthenticationApi(undefined, undefined, http);

export const companiesApi = new CompaniesApi(undefined, undefined, http);
export const growRoomsApi = new GrowRoomsApi(undefined, undefined, http);
export const usersApi = new UsersApi(undefined, undefined, http);
export const authClient = authStrategy;
