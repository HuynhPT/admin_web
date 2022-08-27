import { combineReducers, configureStore } from "@reduxjs/toolkit";
import Redux from "./AuthSlice";
import productSlice from "./ProductSlice";
import typeProductSlice from "./TypeProductSlice";
import ojectCategoriSlice from "./OjectCategoriSlice";
import colorSlice from "./ColorSlice";
import sizeSlice from "./SizeSlice";
import billslice from "./BillSlice";
import postSlice from "./PostSlice";

import bannerSlice from "./AllBanner";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import userSlice from "./UserSlice";
import StatisticalSlice from "./StatisticalSlice";
import NotificationSlice from "./NotificationSlice";
import importPriceSlice from "./importPriceSlice";
import exportPriceSlice from "./exportPriceSlice";
import tongDonhang from "./tongDonhang";
import tongDonhangdagiao from "./tongDonhangdagiao";
import tongDonhangdanggiao from "./tongDonhangdanggiao";
import tongDonhangdangxuLy from "./tongDonhangdangxuLy";
import tongDonhangchoxacnhan from "./tongDonhangchoxacnhan";
import TongsanPhambanduoc from "./TongsanPhambanduoc";
import sanphamConhang from "./SanphamConhang";
import sanphamNhap from "./SanphamNhap";
import sanphamHethang from "./SanphamHethang";
import tongloiNhuan from "./TongloiNhuan";
const persistConfig = {
  key: "root",
  version: 1,
  storage,
};
const rootReducer = combineReducers({
  auth: Redux,
  product: productSlice,
  typeproduct: typeProductSlice,
  categoris: ojectCategoriSlice,
  colorsize: colorSlice,
  sizecolor: sizeSlice,
  bills: billslice,
  posts: postSlice,
  banners: bannerSlice,
  users: userSlice,
  statiscal: StatisticalSlice,
  notification: NotificationSlice,
  importPrice: importPriceSlice,
  exportPrice: exportPriceSlice,
  allbill: tongDonhang,
  allbillcomplete: tongDonhangdagiao,
  danggiao: tongDonhangdanggiao,
  dangxuly: tongDonhangdangxuLy,
  choxacnhan: tongDonhangchoxacnhan,
  tongSP: TongsanPhambanduoc,
  conhang: sanphamConhang,
  hethang: sanphamHethang,
  tongnhapsanpham: sanphamNhap,
  loinhuan:tongloiNhuan
});
const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export let persistor = persistStore(store);
