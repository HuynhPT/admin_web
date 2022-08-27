import { URL_GET_ALL_IMG } from "./ALLAPI";
import { axiosClient } from "./Link";
export const getAll = () => {
  const url = `${URL_GET_ALL_IMG}`;
  return axiosClient.get(url);
};
