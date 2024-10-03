// Use XOR Algorithm

let a = 32;
let b = 15;

console.log("a = ", a, "b = ", b);

a = a ^ b; // "^" : compare bits 
b = a ^ b;
a = a ^ b;
console.log("a = ", a, "b = ", b);

// Example:
// 1: 0001
// 15: 1111
// The same two bits are equal 1 or different bits equal 0
// 0001 ( 1 in binary) ^ 1111 (15 in binary) = 1110 (14 in binary)


