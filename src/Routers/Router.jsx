import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import LayouttAdmin1 from "../Components/LayouttAdmin1";

//auth
import ScreenLogin from "../container/screens/auth/ScreenLogin";
import ScreenForgotPassword from "../container/screens/auth/ScreenForgotPassword";

//Tổng quan
import ScreenOverview from "../container/screens/overview/ScreenOverview";

//Sản Phẩm
import ScreenCreateProduct from "../container/screens/product/ScreenCreateProduct";
import ScreenListProduct from "../container/screens/product/ScreenListProduct";
import EditProduct from "../container/screens/product/EditProduct";
//Thể loại sản phẩm
import ScreenCreateTypeProduct from "../container/screens/type/ScreenCreateTypeProduct";
import ScreenListTypeProduct from "../container/screens/type/ScreenListTypeProduct";
import ScreenObjectProduct from "../container/screens/type/ScreenObjectProduct";
import FromUpdateTypeProduct from "../container/screens/type/FromUpdateTypeProduct";

//Danh sách sản phẩm order
import ScreenListOrder from "../container/screens/order/ScreenListOrder";

//Lợi nhuận
import ScreenListProductProfit from "../container/screens/profit/ScreenListProductProfit";
import ScreenStatistical from "../container/screens/profit/ScreenStatistical";

//Mọi người
import ScreenInfoAdmin from "../container/screens/everyone/ScreenInfoAdmin";
import ScreenListUser from "../container/screens/everyone/ScreenListUser";

//bài viết
import ScreenCreatePost from "../container/screens/posts/ScreenCreatePost";
import ScreenListPost from "../container/screens/posts/ScreenListPost";

//màu size
import ColorSize from "../container/screens/colorsize/ColorSize";

// // banner splash
// import BannerSplash from "../container/screens/banner/BannerSplash";
// import ScreenAddBanner from "../container/screens/banner/BannerFlast/ScreenAddBanner";
// import ScreenEditBanner from "../container/screens/banner/BannerFlast/ScreenEditBanner";
//banner flast
import BannerFlast from "../container/screens/banner/BannerFlastt/BannerFlast";
import CreateBannerFlast from "../container/screens/banner/BannerFlastt/CreateBannerFlast";
import EditbannerFlast from "../container/screens/banner/BannerFlastt/EditBannerFlast";

//banner home
// import BannerHome from "../container/screens/banner/bannerhome/BannerHome";
// import ScreenEditBannerHome from "../container/screens/banner/BannerHome/ScreensEditBannerHome";
// import ScreenAddBannerHome from "../container/screens/banner/BannerHome/ScreensAddBannerHome";
import BannerHomee from "../container/screens/banner/HomeBanner/HomeBanner";
import CreateBannerHomee from "../container/screens/banner/HomeBanner/CreateHomeBanner";
import EditbannerHomee from "../container/screens/banner/HomeBanner/EditHomeBanner";
//banner men
import BannerMen from "../container/screens/banner/bannermen/BannerMen";
import CreactBannerMen from "../container/screens/banner/bannermen/CreateBannerMen";
import EditbannerMen from "../container/screens/banner/bannermen/EditbannerMen";

// banner women
import BannerWomen from "../container/screens/banner/bannerwonent/BannerWomen";
import CreateBannerWoment from "../container/screens/banner/bannerwonent/CreateBannerWoment";
import EditBannerWonent from "../container/screens/banner/bannerwonent/EditBannerWonent";

import InforProduct from "../container/screens/product/InforProduct";
import InforBillOder from "../container/screens/order/InforBillOder";
import ScreenNotificationList from "../container/screens/notification/ScreenNotificationList";
import PushNotifications from "../container/screens/notification/PushNotifications";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ScreenLogin />} />
        <Route path="/chitietBill/:id" element={<InforBillOder />}></Route>
        <Route
          path="/shop_quen_mat_khau"
          element={<ScreenForgotPassword />}
        ></Route>
        {/* sủa sản phẩm */}
        <Route path="/edit_product/:id" element={<EditProduct />} />
        <Route path="/infor_product/:id" element={<InforProduct />} />
        <Route path="shop/" element={<LayouttAdmin1 />}>
          <Route path="tong_quan" element={<ScreenOverview />} />

          <Route path="them_sanPham" element={<ScreenCreateProduct />} />

          <Route path="danhSach_sanPham" element={<ScreenListProduct />} />

          <Route
            path="them_LoaiSanPham"
            element={<ScreenCreateTypeProduct />}
          />

          <Route
            path="danhSach_LoaiSanPham"
            element={<ScreenListTypeProduct />}
          />

          <Route path="doiTuong_SuDung" element={<ScreenObjectProduct />} />

          <Route path="khachHang_DatHang" element={<ScreenListOrder />} />

          <Route path="sanPham_DaBan" element={<ScreenListProductProfit />} />

          <Route path="thongKe_loiNhuan" element={<ScreenStatistical />} />

          <Route path="thongTin_shop" element={<ScreenInfoAdmin />} />

          <Route path="danhSach_NguoiDung" element={<ScreenListUser />} />

          <Route path="themBai_Viet" element={<ScreenCreatePost />} />

          <Route path="danhSach_baiViet" element={<ScreenListPost />} />

          <Route path="mau_size" element={<ColorSize />} />

          <Route path="banner_home" element={<BannerHomee />} />
          <Route path="banner_men" element={<BannerMen />} />
          <Route path="banner_women" element={<BannerWomen />} />
          <Route path="banner_splash" element={<BannerFlast />} />
          <Route path="notification_screen" element={<ScreenNotificationList />} />
          <Route path="push_notification_screen" element={<PushNotifications />} />

        </Route>
        {/* banner men */}
        <Route path="/create_banner_men" element={<CreactBannerMen />} />
        <Route path="/edit_banner_men/:id" element={<EditbannerMen />} />
        {/* banner nữ */}
        <Route path="/create_banner_woment" element={<CreateBannerWoment />} />
        <Route path="/edit_banner_woment/:id" element={<EditBannerWonent />} />
        {/* banner home */}

        <Route path="/create_banner_home" element={<CreateBannerHomee />} />
        <Route path="/edit_banner_home/:id" element={<EditbannerHomee />} />

        {/* banner flast */}
        <Route path="/create_banner_flast" element={<CreateBannerFlast />} />
        <Route path="/edit_banner_flast/:id" element={<EditbannerFlast />} />

        <Route path="/edit_list_type/:id" element={<FromUpdateTypeProduct />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
