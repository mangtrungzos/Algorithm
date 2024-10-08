let count = 0;
do {
  console.log("hello");
  count++;
} while (count < 3);

// do { ... }: Khối lệnh bên trong dấu ngoặc nhọn {} sẽ được thực thi ít nhất một lần, ngay cả khi điều kiện trong phần while ban đầu là sai.

// Vòng lặp bắt đầu với count được đặt là 0.
// Vòng lặp in "hello" ra màn hình.
// count được tăng lên 1.
// Vòng lặp kiểm tra xem count có nhỏ hơn 3 không (lúc này là đúng).
// Quá trình lặp lại: in "hello", tăng count, kiểm tra điều kiện.
// Điều này tiếp tục cho đến khi count đạt đến 3, lúc đó điều kiện count < 3 trở thành sai và vòng lặp dừng.
