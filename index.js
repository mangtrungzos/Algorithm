let x = {};

x.__proto__.hi = 10;

Object.prototype.hi = ++x.hi;

// console.log(Object.keys(x)); ["hi"]

console.log(x.hi + Object.keys(x).length);
