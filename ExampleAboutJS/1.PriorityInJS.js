console.log("first");

setTimeout(() => {
  console.log("second");
}, 0);

Promise.resolve().then(() => {
  console.log("third");
});

// Output: 'first', 'third', 'second'
// Explain: Promise.resolve() tạo ra một promise đã được giải quyết (resolved) ngay lập tức. Hàm then() được đính kèm với promise này, và nó được thực thi ngay khi promise được giải quyết. Do đó, "third" sẽ được in ra sau "first" nhưng trước "second".
// setTimeout: đưa vào hàng đợi sự kiện (event queue) và chỉ được thực thi sau khi stack hiện tại trống. - chờ cho đến khi stack trống (sau khi "first" và "third" được in ra) thì mới được thực thi.
