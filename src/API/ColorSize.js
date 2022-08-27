import {
  URL_GET_ALL_COLOR,
  URL_GET_ALL_SIZE,
  URL_GET_ALL_TYPE,
} from "./ALLAPI";
import { axiosClient } from "./Link";

export const getSize = async () => {
  const url = `${URL_GET_ALL_SIZE}`;
  return await axiosClient.get(url);
};
export const getColor = async () => {
  const url = `${URL_GET_ALL_COLOR}`;
  return await axiosClient.get(url);
};
export const getTheloai = async () => {
  const url = `${URL_GET_ALL_TYPE}`;
  return await axiosClient.get(url);
};
