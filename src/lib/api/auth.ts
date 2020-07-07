import client from "./client";

interface loginReq {
  username: string;
  password: string;
}

export const login = ({ username, password }: loginReq) =>
  client.post("/api/auth/login", { username, password });
