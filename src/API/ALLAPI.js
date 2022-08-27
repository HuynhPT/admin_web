export const LOCALHOST = "http://52.141.50.48:3000/";
// export const LOCALHOST = "http://18.141.199.110:3000/";

// thông báo
//lấy tất cả token
export const URL_GET_TOKEN_ALL = "api/user-send-token/get-token-notification";
// push thông báo
export const URL_PUSH_NOTIFICATION = "https://fcm.googleapis.com/fcm/send";
// lấy danh sách thông báo
export const URL_GET_ALL_NOTIFICATION =
  "api/user-data-notification/get-data-notification";
//Xóa thông báo
export const URL_REMOVE_NOTIFICATION =
  "api/user-data-notification//delete-data-notification";
// Lưu thông báo
export const URL_SAVE_NOTIFICATION =
  "api/user-data-notification/create-data-notification";

//API BANNER
//sửa banner
export const URL_UPDATE_IMG = "img-first-images/update-img";
//getall banner
export const URL_GET_ALL_IMG = "img-first-images/get-img";
//xoá tất cả banner
export const URL_DELETE_ALL_IMG = "img-first-images/delete-img-all";
//thêm banner
export const URL_POST_IMG = "img-first-images/creact-img";
//xoá theo id
export const URL_REMOVE_ID_IMG = "img-first-images/delete-img-ByID";
// lấy danh sách banner theo title
export const URL_GET_IMG_TITLE = "img-first-images/get-img/title/data";

//API ACC ADMIN
// tạo tài khoản
export const URL_POST_ACC_ADMIN = "account-ad/register-admin";
//đăng nhập admin
export const URL_LOGIN_ACC_ADMIN = "account-ad/login-admin";
//đổi mật khẩu admin
export const URL_CHANGE_ACC_ADMIN = "account-ad/refresh-password-admin";
//xoá tài khoản user
export const URL_REMOVE_ID_ACC_ADMIN = "account-user/delete-user-ByID";

//API ACC USER
export const URL_GET_ALL_USER = "account-user/get-allUsers";

//API SIZE COLOR
//getall màu , size
export const URL_GET_ALL_COLOR = "api/size-color/get-color";
export const URL_GET_ALL_SIZE = "api/size-color/get-size";
//xoá tất cả màu , size
export const URL_DELETE_ALL_COLOR = "api/size-color/destroy-color";
export const URL_DELETE_ALL_SIZE = "api/size-color/destroy-size";
// tìm kiếm theo màu
export const URL_SEARCH_COLOR = "api/size-color/search-color";
//thêm màu và size
export const URL_POST_COLOR = "api/size-color/create-color";
export const URL_POST_SIZE = "api/size-color/create-size";
//xoá màu , size theo id
export const URL_REMOVE_ID_COLOR = "api/size-color/destroy-colorById";
export const URL_REMOVE_ID_SIZE = "api/size-color/destroy-sizeById";
//sửa màu size
export const URL_UPDATE_ID_COLOR = "api/size-color/edit-colorById";
export const URL_UPDATE_ID_SIZE = "api/size-color/edit-sizeById";

//API THELOAISP
//getall thể loại
export const URL_GET_ALL_OPJECT = "api/type-product/get-type-product";
// sửa thể loại
export const URL_UPDATE_ID_OPJECT =
  "api/type-product/edit-type-product/findById";
//xoá thể loại theo id
export const URL_REMOVE_ID_OPJECT =
  "api/type-product/delete-type-product/findById";
//xoá tất cả thể loại
export const URL_DELETE_ALL_OPJECT = "api/type-product/destroy-type-product";
//thêm thể loại
export const URL_POST_OPJECT = "api/type-product/create-type-product";
//tìm kiếm theo tên
export const URL_SEARCH_OPJECT = "api/type-product/search-type-product";

//API LOAISP
//getall loại sản phẩm
export const URL_GET_ALL_TYPE = "api/category-product/get-category-product";
// sửa loại sp
export const URL_UPDATE_ID_TYPE =
  "api/category-product/edit-category-product/findById";
//   xoá theo id loại sp
export const URL_REMOVE_ID_TYPE =
  "api/category-product/delete-category-product/findById";
//xoá tất cả loạisp
export const URL_DELETE_ALL_TYPE =
  "api/category-product/destroy-category-product";
// thêm loạisp
export const URL_POST_TYPE = "api/category-product/create-category-product";
//tìm kiếm theo tên
export const URL_SEARCH_TYPE = "api/category-product/search-category-product";
// lấy danh sách theo thể loại
export const URL_GET_ID_OPJECT_TYPE =
  "api/category-product/get-category-product/findById";

//API PRODUCT
// RATE
// export const  URL_COMMENT_ID_PRODUCT=''
//VIEW
export const URL_VIEW_ID_PRODUCT = "api/product//count-view-product-ById";
//FAVORIT
export const URL_FAVORIT_ID_PRODUCT = "api/product/count-heart-product-ById";
export const URL_UNFAVORIT_ID_PRODUCT =
  "api/product/subtraction-heart-product-ById";
export const URL_GET_FAVORIT_PRODUCT = "api/product/get-heart-product-ById";
//PRODUCT
//getall sản phẩm
export const URL_GET_ALL_PRODUCT = "api/product/get-product";
// sửa sản phẩm
export const URL_UPDATE_ID_PRODUCT = "api/product/update-product-ById";
// xoá sản phẩm theo id
export const URL_REMOVE_ID_PRODUCT = "api/product/delete-product-ById";
// xoá tất cả sản phẩm
export const URL_DELETE_ALL_PRODUCT = "api/product/delete-product";
//Thêm sản phẩm
export const URL_POST_PRODUCT = "api/product/create-product";
// lấy danh sách sản phẩm theo id thể loại
export const URL_GET_ID_OPJEC_PRODUCT = "api/product/get-product/ByID/Object";
//lấy danh sách sản phẩm theo id loại sp
export const URL_GET_ID_TYPE_PRODUCT = "api/product/get-product/ByID";
// thay đổi trạng thái sản phẩm
export const URL_CHANGE_STATUS_PRODUCT = "api/product/change-product/ByID";
// lấy danh sách mới nhất ngày
export const URL_GET_NEW_DAY_PRODUCT = "api/product/get-product-date-high-web";
// lấy danh sách cũ nhất ngày
export const URL_GET_OLD_DAY_PRODUCT = "api/product/get-product-date-low-web";
// lấy danh sách giá cao nhất
export const URL_GET_PRICE_HIGHT_PRODUCT = "api/product/get-product-price-high-web";
// lấy danh sách giá thấp nhất
export const URL_GET_PRICE_LOW_PRODUCT = "api/product/get-product-price-low-web";
// tìm kiếm sản phẩm theo tên
export const URL_SEARCH_TITLE_PRODUCT = "api/product/search-product-title";
// tìm kiếm sản phẩm theo size
export const URL_SEARCH_SIZE_PRODUCT = "api/product/search-product-size";
// tìm kiếm sản phẩm theo màu
export const URL_SEARCH_COLOR_PRODUCT = "api/product/search-product-color";

// BILL PRODUCT
// thêm đơnmobile
export const URL_POST_BILL = "api/user-bill/add-bill-product";
//lấy danh sách hoá đơn theo iduser
export const URL_GET_ID_USER_BILL = "api/user-bill/bill-product-byid-user";
//lấy tất cả danh sách hoá đơn
export const URL_GET_ALL_BILL = "api/user-bill/get-bill-product";
// xoá tất cả danh sách hoá đơn
export const URL_DELETE_ALL_BILL = "api/user-bill/bill-product-delete-all";
// lấy danh sách hoá đơn mới nhất ngày
export const URL_GET_NEW_DAY_BILL = "api/user-bill/get-bill-product/high";
// lấy danh sách hoá đơn cũ nhất ngày
export const URL_GET_OLD_DAY_BILL = "api/user-bill/get-bill-product/short";
// lấy danh sách user mua nhiều nhất
export const URL_GET_TOP_USER_BUY_BILL = "api/user-bill/get-user-bill-high";
//xoá hoá đơn bằng admin
export const URL_ADMIN_REMOVE_BILL = "api/user-bill/delete-bill";
// thay đổi trạng thái đơn hàng
export const URL_CHANGE_STATUS_BILL = "api/user-bill/edit-status";
// tìm kiếm hoá đơn theo encode
export const URL_SEARCH_ENCODE_BILL = "api/user-bill/search-BillByIdUser";
// tìm kiếm hóa đơn theo sđt
export const URL_SEARCH_BILL_PHONE =
  "api/user-bill/user-get-bill-by-number-phone";
// tìm hóa đơn theo ngày tháng
export const URL_SEARCH_BILL_DATE = "api/user-bill/user-get-bill-by-time";
//DETALS
// thêm chi tiết hoá đơn
export const URL_POST_DETALS = "api/user-detail-bill/add-detail-bill-product";
// lấy danh sách hoá đơn theo user
export const URL_GET_ID_USER_DETALS =
  "api/user-bill/deatailbill-product-byid-user";
// lấy danh sách hoá đơn ct theo hoá đơn
export const URL_GET_ID_BILL_DETALS =
  "api/user-detail-bill/get-detail-bill-product-byid";

//SOCIETY
// đăng bài viết
export const URL_POST_SOCIETY = "api/user-spaper/create-post";
//lấy danh sách tất cả bài viết
export const URL_GET_ALL_SOCIETY = "api/user-spaper/get-post";
//sửa bài viết
export const URL_UPDATE_SOCIETY = "api/user-spaper/create-post";
//xoá bài viết theo us
export const URL_REMOVE_ID_USER_SOCIETY = "api/user-spaper/delete-post-ById";
//xoá tất cả bài viết
export const URL_DELETE_ALL_SOCIETY = "api/user-spaper/delete-post";
// bày tỏ cảm xúc và commet
export const URL_POST_COMMENT_SOCIETY = "api/user-spaper/create-post";
export const URL_POST_LIKE_SOCIETY = "api/user-spaper/create-post";
export const URL_POST_FAVORIT_SOCIETY = "api/user-spaper/create-post";
export const URL_POST_HAHA_SOCIETY = "api/user-spaper/create-post";
export const URL_POST_SAD_SOCIETY = "api/user-spaper/create-post";
export const URL_POST_WOW_SOCIETY = "api/user-spaper/create-post";
export const URL_POST_SPAPER_SOCIETY = "api/user-spaper/create-post";

//Thống kê
//Tổng tiền nhập hàng
export const URL_IMPORT_MONEY_STATISTICAL =
  "api/admin-statistical/import-money";
// tổng doanh thu bán được
export const URL_SALES_REVENUS_MONEY_STATISTICAL =
  "api/admin-statistical/sales-revenue-money";
//tổng sản phẩm bán được
export const URL_SUM_PRODUCT_STATISTICAL =
  "api/admin-statistical/sum-product-bill";
//tổng sản phẩm nhập
export const URL_SUM_IMPORT_PRODUCT_STATISTICAL =
  "api/admin-statistical/sum-product-import";
//lợi nhuận
export const URL_MONEY_STATISTICAL = "api/admin-statistical/profit-product";
//tổng tất cả đơn hàng
export const URL_ALL_BILL_STATISTICAL =
  "api/admin-statistical/sum-bill-product";
//đơn hàng đã giao
export const URL_COMPLETE_VALE = "api/admin-statistical/sum-bill-status_3";
//đơn hàng đang vận chuyển
export const URL_WAIT_COMPLETE_VALE = "api/admin-statistical/sum-bill-status_2";
// đơn hàng đang xử lý
export const URL_DOING_VALE = "api/admin-statistical/sum-bill-status_1";
// đơn hàng xác nhận
export const URL_WAIT_DOING_VALE = "api/admin-statistical/sum-bill-status_0";
//sản phẩm còn hàng
export const URL_STOCKING_PRODUCT =
  "api/admin-statistical/sum-stocking-product";
//sản phẩm hết hàng
export const URL_UNSTOCKING_PRODUCT = "api/admin-statistical/sum-out-of-stock";
//thống kê sản phẩm bán theo ngày
export const URL_GET_STATISTICAL_ADAY = " api/admin-statistical";
// doanh thu bán được theo ngày
export const URL_TURNOVER_STATISCAL = "api/admin-statistical/";
