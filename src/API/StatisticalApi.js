import { mToken } from "../../token/TokenLogin";
import {
  URL_ALL_BILL_STATISTICAL,
  URL_COMPLETE_VALE,
  URL_DOING_VALE,
  URL_IMPORT_MONEY_STATISTICAL,
  URL_MONEY_STATISTICAL,
  URL_SALES_REVENUS_MONEY_STATISTICAL,
  URL_STOCKING_PRODUCT,
  URL_SUM_IMPORT_PRODUCT_STATISTICAL,
  URL_SUM_PRODUCT_STATISTICAL,
  URL_UNSTOCKING_PRODUCT,
  URL_WAIT_COMPLETE_VALE,
  URL_WAIT_DOING_VALE,
} from "./ALLAPI";
import { axiosClient } from "./Link";
export const getAllSELl = () => {
  const url = `${URL_SALES_REVENUS_MONEY_STATISTICAL}`;
  return axiosClient.get(url, {
    headers: {
      token: mToken,
    },
  });
};
export const getAllimport = () => {
  const url = `${URL_IMPORT_MONEY_STATISTICAL}`;
  return axiosClient.get(url, {
    headers: {
      token: mToken,
    },
  });
};

export const getAllsanphamNhap = () => {
  const url = `${URL_SUM_IMPORT_PRODUCT_STATISTICAL}`;
  return axiosClient.get(url, {
    headers: {
      token: mToken,
    },
  });
};

export const getAllsum = () => {
  const url = `${URL_SUM_PRODUCT_STATISTICAL}`;
  return axiosClient.get(url, {
    headers: {
      token: mToken,
    },
  });
};

export const getAllConhang = () => {
  const url = `${URL_STOCKING_PRODUCT}`;
  return axiosClient.get(url, {
    headers: {
      token: mToken,
    },
  });
};
export const getAllHethang = () => {
  const url = `${URL_UNSTOCKING_PRODUCT}`;
  return axiosClient.get(url, {
    headers: {
      token: mToken,
    },
  });
};

export const getAllloinhuan = () => {
  const url = `${URL_MONEY_STATISTICAL}`;
  return axiosClient.get(url, {
    headers: {
      token: mToken,
    },
  });
};
export const getAllbill = () => {
  const url = `${URL_ALL_BILL_STATISTICAL}`;
  return axiosClient.get(url, {
    headers: {
      token: mToken,
    },
  });
};
export const getAllbillcomplete = () => {
  const url = `${URL_COMPLETE_VALE}`;
  return axiosClient.get(url, {
    headers: {
      token: mToken,
    },
  });
};
export const getAllbilldoing = () => {
  const url = `${URL_WAIT_COMPLETE_VALE}`;
  return axiosClient.get(url, {
    headers: {
      token: mToken,
    },
  });
};
export const getAllbillxuLy = () => {
  const url = `${URL_DOING_VALE}`;
  return axiosClient.get(url, {
    headers: {
      token: mToken,
    },
  });
};
export const getAllbillchoXN = () => {
  const url = `${URL_WAIT_DOING_VALE}`;
  return axiosClient.get(url, {
    headers: {
      token: mToken,
    },
  });
};
