const obj = {
  name: "sang",
  printName: () => {
    console.log(this.name);
  },
};

obj.printName();

// Output: undefined
// Explain: Không thể sử dụng con trỏ this trong arrow function
// Chỉ có thể sử dụng cho hàm thường (){}
