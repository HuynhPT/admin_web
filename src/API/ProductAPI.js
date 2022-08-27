import {
  URL_GET_ALL_PRODUCT,
  URL_GET_NEW_DAY_PRODUCT,
  URL_GET_OLD_DAY_PRODUCT,
  URL_GET_PRICE_HIGHT_PRODUCT,
  URL_GET_PRICE_LOW_PRODUCT,
  URL_POST_PRODUCT,
} from "./ALLAPI";
import { axiosClient } from "./Link";

export const getAll = () => {
  const url = `${URL_GET_ALL_PRODUCT}`;
  return axiosClient.get(url);
};
export const getNew = () => {
  const url = `${URL_GET_NEW_DAY_PRODUCT}`;
  return axiosClient.get(url);
};
export const getOld = () => {
  const url = `${URL_GET_OLD_DAY_PRODUCT}`;
  return axiosClient.get(url);
};
export const getHight = () => {
  const url = `${URL_GET_PRICE_HIGHT_PRODUCT}`;
  return axiosClient.get(url);
};
export const getLow = () => {
  const url = `${URL_GET_PRICE_LOW_PRODUCT}`;
  return axiosClient.get(url);
};
export const addAll = (data) => {
  const url = `${URL_POST_PRODUCT}`;
  return axiosClient.post(url, data);
};
