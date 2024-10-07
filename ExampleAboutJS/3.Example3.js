// Ex 1:
const a = [];
let primitive = 2;
a.push(primitive);
a[0] = 20;
console.log(primitive);

// Ex 2:
const b = [];
const obj = {
  a: 1,
};
b.push(obj);

b[0].a = 5;
console.log(obj);

// Explain: Khi b.push(obj); được thực thi, mảng b không sao chép đối tượng obj, mà chỉ lưu trữ một tham chiếu đến đối tượng obj trong bộ nhớ.
// Do đó, khi ta thay đổi giá trị của thuộc tính a trong đối tượng obj thông qua b[0].a = 5;, bạn thực chất là thay đổi giá trị của thuộc tính a trong chính đối tượng obj, không phải một bản sao của nó.
