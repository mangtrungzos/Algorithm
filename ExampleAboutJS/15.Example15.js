let x = {};
// let y = {};

x.__proto__.hi = 10;

Object.prototype.hi = ++x.hi; // được kế thừa từ object cha : Object.prototype
// Object.prototype.hi = ++y.hi;

// console.log(Object.keys(x)); ["hi"]
// console.log(x.hasOwnProperty("hi"));

console.log(x.hi + Object.keys(x).length);

// Khi tạo ra biến x = {} - object sẽ được khởi tạo từ constructor tên là object

// x.__proto__.hi = 10;
// x.__proto__ : thì nó sẽ trỏ về prototype của object mà đã khởi tạo ra nó
// x.__proto__ : Không khác gì việc khi ta gọi "Object.prototype"
// Gán thêm 1 thuộc tính là hi = 10

// Object.prototype.hi = ++x.hi;
// Thì x.__proto__ = Object.prototype.hi
// => 2 thằng đều trỏ về prototype của object cha

// ++x.hi - prototype có thể truy cập qua đối tượng, đối tượng sẽ kế thừa lại prototype
// x là 1 đối tượng và x bản chất lại là 1 object thế nên nó sẽ thừa hưởng lại thuộc tính của prototype là hi và 10

// x.hi + Object.keys(x).length : x.hi = 11,

// another explain:
// Đầu tiên chúng ta có một đối tượng trống x, sau đó chúng ta thêm một thuộc tính khác hi cho x bằng x.__proto__.hi.

// ***Lưu ý điều này tương đương với Object.prototype.hi = 10 và chúng ta đang thêm thuộc tính hi vào đối tượng cha Object.

// ***Nó có nghĩa là mọi đối tượng sẽ kế thừa thuộc tính này. Thuộc tính hi trở thành thuộc tính chung.

// Giả sử bây giờ chúng ta khai báo một đối tượng mới chẳng hạn như let y = {}, y bây giờ có thuộc tính hi được kế thừa từ Object cha.

// Nói một cách đơn giản là x.__proto__ === Object.prototype trả về true.

// Sau đó, chúng ta ghi đè thuộc tính hi bằng giá trị mới 11. Cuối cùng chúng ta có 11 + 1 = 12. x có một thuộc tính và x.hi trả về 11.

// Nếu ta viết Object.prototype.hi = 11; thay vì Object.prototype.hi = ++x.hi; như được viết trong đoạn mã trên, thì Object.keys(x) sẽ trả về một mảng trống vì Object.keys(object) chỉ trả về thuộc tính của chính đối tượng đó chứ không phải thuộc tính được kế thừa.
// Nó có nghĩa là kết quả cuối cùng sẽ là 11 chứ không phải 12.
// Vì lý do nào đó, mã ``Object.prototype.hi = ++x.hi;sẽ tạo một thuộc tính cho chính object `x` và sau đó là `Object.keys(x) ` cung cấp cho chúng ta mảng `["hi"]`.
