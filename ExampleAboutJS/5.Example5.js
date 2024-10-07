const foo = false;
const bar = 0;
const baz = "Nullish ??";

const result = foo ?? bar ?? baz;
console.log(result);

// Operator: ??
// Toán tử ?? kiểm tra xem biến ở bên trái có phải là null hoặc undefined hay không.
