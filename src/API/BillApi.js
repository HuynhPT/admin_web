import { mToken } from "../../token/TokenLogin";
import {
  URL_COMPLETE_VALE,
  URL_DOING_VALE,
  URL_GET_ALL_BILL,
  URL_GET_NEW_DAY_BILL,
  URL_GET_OLD_DAY_BILL,
  URL_WAIT_COMPLETE_VALE,
  URL_WAIT_DOING_VALE,
} from "./ALLAPI";
import { axiosClient } from "./Link";
export const getBill = async () => {
  const url = `${URL_GET_ALL_BILL}`;
  return await axiosClient.get(url, {
    headers: {
      token: mToken,
    },
  });
};
export const getBillNew = async () => {
  const url = `${URL_GET_NEW_DAY_BILL}`;

  return await axiosClient.get(url, {
    headers: {
      token: mToken,
    },
  });
};
export const getBillOld = async () => {
  const url = `${URL_GET_OLD_DAY_BILL}`;

  return await axiosClient.get(url, {
    headers: {
      token: mToken,
    },
  });
};
export const get_sum_bill_status_0 = async () => {
  const url = `${URL_WAIT_DOING_VALE}`;

  return await axiosClient.get(url, {
    headers: {
      token: mToken,
    },
  });
};
export const get_sum_bill_status_1 = async () => {
  const url = `${URL_DOING_VALE}`;

  return await axiosClient.get(url, {
    headers: {
      token: mToken,
    },
  });
};
export const get_sum_bill_status_2 = async () => {
  const url = `${URL_WAIT_COMPLETE_VALE}`;

  return await axiosClient.get(url, {
    headers: {
      token: mToken,
    },
  });
};
export const get_sum_bill_status_3 = async () => {
  const url = `${URL_COMPLETE_VALE}`;

  return await axiosClient.get(url, {
    headers: {
      token: mToken,
    },
  });
};
