import { mToken } from "../../token/TokenLogin";
import { URL_GET_ALL_USER } from "./ALLAPI";
import { axiosClient } from "./Link";
export const getAllUser = async () => {
  const url = `${URL_GET_ALL_USER}`;
  return await axiosClient.get(url, {
    headers: {
      token: mToken,
    },
  });
};
