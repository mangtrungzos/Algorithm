const obj = {
  a: 5,
};
const obj1 = {
  a: 5,
};

console.log(obj === obj1);

// Explain:
//   1. Toán tử === so sánh địa chỉ bộ nhớ của hai đối tượng. Vì obj và obj1 có địa chỉ bộ nhớ khác nhau nên chúng sẽ không bằng nhau theo toán tử ===.
//   2. Khi bạn tạo hai đối tượng riêng biệt, chúng sẽ được lưu trữ ở hai vùng nhớ khác nhau trong bộ nhớ.
