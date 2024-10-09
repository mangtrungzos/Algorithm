var x = 10; // x is global variable

const f = (l) => ++l + x;

x = 15; // x assinged to 15 before function call
console.log(f(10));
// Ouput: 26

// x = 15; Giá trị của biến toàn cục x được thay đổi thành 15. Điều này không ảnh hưởng đến giá trị của x bên trong hàm f
