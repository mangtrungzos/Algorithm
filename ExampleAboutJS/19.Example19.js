function a(x) {
    x++;
    return function () {
        console.log(++x);
    };
}

a(1)();
a(1)();
a(1)();

// 1. a(1)();
// Gọi a(1):
// Giá trị ban đầu của x là 1.
// Sau đó, x++ làm tăng x lên 2.
// Hàm a(1) trả về hàm bên trong (closure), và giá trị của x lúc này là 2 trong môi trường cục bộ của hàm.
// Gọi hàm bên trong:
// ++x làm tăng x từ 2 lên 3.
// In ra 3.

// 2. a(1)();
// Lần này, khi a(1) được gọi lại, một môi trường hoàn toàn mới được tạo ra:

// Ban đầu, x lại là 1 trong môi trường mới.
// Sau đó, x++ làm tăng x lên 2.
// Hàm trả về hàm bên trong với x có giá trị là 2.
// Gọi hàm bên trong:

// ++x làm tăng x từ 2 lên 3.
// In ra 3.

let x = a(1);
x();
x();
x();

// Biến x lưu trữ hàm con trả về từ a(1)
// x = 1
// x++ → x tăng lên 2
// Hàm con được trả về và lưu vào biến x.
// Hàm con đó được lưu vào bộ nhớ
