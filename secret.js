
const ACCESS_KEY = "secretPageUnlocked";

if (sessionStorage.getItem(ACCESS_KEY) !== "yes") {
  // Chưa mở khóa: quay về trang nhập mật khẩu.
  window.location.replace("index.html");
} else {
  // Xóa trạng thái để tránh sử dụng lại sau khi đã mở.
  sessionStorage.removeItem(ACCESS_KEY);
}
