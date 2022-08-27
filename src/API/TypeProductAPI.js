import { URL_GET_ALL_OPJECT } from "./ALLAPI";
import { axiosClient } from "./Link";
export const getAll = () => {
  const url = `${URL_GET_ALL_OPJECT}`;
  return axiosClient.get(url);
};
