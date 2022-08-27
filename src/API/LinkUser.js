import axios from "axios";
import { mToken } from "../../token/TokenLogin";
import { LOCALHOST } from "./ALLAPI";
export const axiosClient = axios.create({
  baseURL: `${LOCALHOST}`,
  headers: {
    Authorization: mToken,
    "Content-Type": "application/x-www-form-urlencoded",
  },
});
