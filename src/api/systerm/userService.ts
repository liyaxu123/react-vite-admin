import http from "@/utils/http";
import type { UserInfo, UserToken } from "@/types/entity";

export interface LoginReq {
  username: string;
  password: string;
  captcha: string;
}

export interface RegisterReq extends LoginReq {
  nickName: string;
  email: string;
}

export type LoginRes = UserToken & { userInfo: UserInfo };

export enum UserApi {
  Login = "/user/login",
  Register = "/user/register",
  CaptchaImage = "/api/user/captchaImage",
  RegisterCaptcha = "/user/register-captcha",
  Refresh = "/user/refresh",
  UserInfo = "/user/info",
}

export const login = (data: LoginReq) =>
  http.post<LoginRes>({ url: UserApi.Login, data });

export const register = (data: RegisterReq) =>
  http.post<LoginRes>({ url: UserApi.Register, data });

export const getRefreshToken = (params: string) =>
  http.get({ url: UserApi.Refresh, params });

export const getRegisterCaptcha = () =>
  http.get({ url: UserApi.RegisterCaptcha });

export const getCaptchaImage = () => http.get({ url: UserApi.CaptchaImage });

export const getUserInfo = () => http.get({ url: UserApi.UserInfo });
