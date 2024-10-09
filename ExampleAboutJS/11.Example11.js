let x = {};
let y = {};
let z = x;

console.log(x == y);
console.log(x === y);
console.log(x == z);
console.log(x === z);

// Ouput: false false true true

// let x sẽ tạo ra một vùng nhớ để lưu trữ biến x
// let y sẽ tạo ra một vùng nhớ để lưu trữ biến y

// 2 vùng nhớ khác nhau => false

// x và z đều trỏ đến cùng một vùng nhớ => true
