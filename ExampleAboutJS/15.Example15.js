let x = {};

x.__proto__.hi = 10;

Object.prototype.hi = ++x.hi;

// console.log(Object.keys(x)); ["hi"]

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
