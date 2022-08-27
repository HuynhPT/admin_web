import { URL_GET_ALL_NOTIFICATION, URL_GET_TOKEN_ALL } from "./ALLAPI";
import { axiosClient } from "./Link";

export const getNotification = async () => {
  const url = `${URL_GET_ALL_NOTIFICATION}`;
  return await axiosClient.get(url);
};
export const getTokenNotification = async () => {
  const url = `${URL_GET_TOKEN_ALL}`;
  return await axiosClient.get(url);
};
