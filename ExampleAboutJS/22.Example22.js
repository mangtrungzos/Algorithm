// spread operator = ... allows an iterable such as an arr or string
//                       to be expanded into separate elements
//                       (unpacks the elements)

// Mở rộng (giải ra một chỗ khác) thành các phần tử riêng lẻ
// let numbers = [1, 2, 3, 4, 5];
// let maximum = Math.max(...numbers);
// let minimum = Math.min(...numbers);

// console.log(minimum);

// let username = "always write code";
// let letters = [...username].join(" ");

// console.log(letters);

let fruits = ["apple", "orange", "banana"];
let vegetables = ["carrot", "onion", "pea"];

let foods = [...fruits, ...vegetables, "eggs", "milk"];

console.log(foods);

const arr = [1, 2, 3];
console.log(...arr);  // 1 2 3 (mở rộng thành các phần tử riêng lẻ)