import { createAsyncAction } from "typesafe-actions";

export const LOGIN = {
  REQEUST: "auth/LOGIN_REQUEST",
  SUCCESS: "auth/LOGIN_SUCCESS",
  FAILURE: "auth/LOGIN_FAILURE",
} as const;

interface LoginInfo {
  username: string;
}

export const login = createAsyncAction(
  [LOGIN.REQEUST, (req: LoginInfo) => req],
  [LOGIN.SUCCESS, (res: boolean) => res],
  [LOGIN.FAILURE, (err: Error) => err]
)();

const actions = {
  login,
};

export default actions;
