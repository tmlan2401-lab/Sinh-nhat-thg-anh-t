
const CORRECT_PASSWORD = "Emgaicutebakhinhatthegioi";

const form = document.querySelector("#password-form");
const passwordInput = document.querySelector("#password-input");
const feedback = document.querySelector("#feedback");
const hintToggle = document.querySelector("#hint-toggle");
const hintBox = document.querySelector("#hint-box");
const lockCard = document.querySelector(".lock-card");

// Bật hoặc tắt ô gợi ý.
hintToggle.addEventListener("click", () => {
  const isOpening = hintBox.hidden;

  hintBox.hidden = !isOpening;
  hintToggle.setAttribute(
    "aria-expanded",
    String(isOpening)
  );
});

// Kiểm tra mật khẩu khi người dùng gửi biểu mẫu.
form.addEventListener("submit", (event) => {
  event.preventDefault();

  // Bỏ khoảng trắng thừa ở đầu và cuối.
  const enteredPassword = passwordInput.value.trim();

  if (enteredPassword === CORRECT_PASSWORD) {
    feedback.textContent = "Waoo, hihi cứ khen z đi thic lắm...";
    feedback.classList.add("success");

    // Ghi nhận mở khóa trong tab hiện tại.
    sessionStorage.setItem("secretPageUnlocked", "yes");

    // Chỉ chuyển trang khi mật khẩu đúng.
    window.location.href = "secret.html";
    return;
  }

  // Mật khẩu sai: giữ nguyên trang hiện tại.
  feedback.classList.remove("success");
  feedback.textContent = "Sai roi, gà";

  passwordInput.setAttribute("aria-invalid", "true");

  // Kích hoạt hiệu ứng rung khi nhập sai.
  lockCard.classList.remove("shake");

  // Khởi động lại hoạt ảnh khi nhập sai liên tiếp.
  void lockCard.offsetWidth;

  lockCard.classList.add("shake");
  passwordInput.focus();
});

// Xóa thông báo lỗi khi người dùng bắt đầu nhập lại.
passwordInput.addEventListener("input", () => {
  passwordInput.removeAttribute("aria-invalid");
  feedback.textContent = "";
  feedback.classList.remove("success");
});
