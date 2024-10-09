const array = (a) => {
  let length = a.length;
  delete a[length - 1];
  return a.length;
};

console.log(array([1, 2, 3, 4])); // Output: 4

const object = (obj) => {
  let key = Object.keys(obj);
  let length = key.length;
  delete obj[key[length - 1]];

  return Object.keys(obj).length;
};

console.log(object({ 1: 2, 2: 3, 3: 4, 4: 5 })); // Output: 3

const setPropNull = (obj) => {
  let key = Object.keys(obj);
  let length = key.length;
  obj[key[length - 1]] = null;

  return Object.keys(obj).length;
};

console.log(setPropNull({ 1: 2, 2: 3, 3: 4, 4: 5 })); // Output: 4

// chúng ta viết delete someObject hoặc delete someArray.

// Tuy nhiên, nó xóa và xóa hoàn toàn một thuộc tính của một đối tượng khi viết một cái gì đó như xóa someObject.someProperty.

// ***Trong trường hợp mảng, khi chúng ta viết delete someArray[keyNumber], "nó chỉ xóa giá trị của chỉ mục, giữ nguyên chỉ mục và giá trị mới bây giờ được đặt thành không xác định."

// Vì lý do đó, trong đoạn mã đầu tiên, chúng ta nhận được (độ dài) 4 phần tử như trong mảng ban đầu nhưng chỉ còn lại 3 thuộc tính trong đối tượng được truyền khi hàm object() được gọi, như trong đoạn mã thứ hai
