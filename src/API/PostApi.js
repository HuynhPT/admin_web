import { mToken } from "../../token/TokenLogin";
import { URL_GET_ALL_SOCIETY } from "./ALLAPI";
import { axiosClient } from "./Link";

export const getPostAll = async () => {
  const url = `${URL_GET_ALL_SOCIETY}`;

  return await axiosClient.get(url, {
    headers: {
      token: mToken,
    },
  });
};
