const x = function (...x) {
  let k = (typeof x).length;
  let y = () => "freetut".length;
  let z = { y: y };

  return k - z.y();
};

console.log(Boolean(x()));

// ...x : Toán tử rest parameter, cho phép hàm 'x' nhận nhiều tham số khác nhau.
//        Lưu chúng và một mảng có tên x

// typeof x : Trả về chuỗi "object" (Vì x là một mảng)
// typeof(x).length : Tính độ dài của "object" - 6

// z.y() : Gọi hàm y, trả về 7

// k - z.y() : -1

// Boolean(-1) : true
