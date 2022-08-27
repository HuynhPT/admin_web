import { URL_GET_ALL_TYPE } from "./ALLAPI";
import { axiosClient } from "./Link";
export const getAll = () => {
  const url = `${URL_GET_ALL_TYPE}`;
  return axiosClient.get(url);
};
