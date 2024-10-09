var candidate = {
  name: "Sang",
  age: 21,
};

var job = {
  frontend: "Vuejs or Reactjs",
  backend: "Nodejs or PHP",
  city: "Hanoi",
};

class Combine {
  static get() {
    return Object.assign(candidate, job);
  }
  static count() {
    return Object.keys(this.get()).length;
  }
}

console.log(Combine.count());

// Object.assign() là một phương thức trong JavaScript được sử dụng để sao chép các thuộc tính của một hoặc nhiều đối tượng vào một đối tượng đích.
// Object.assign() sẽ hợp nhất từ phải qua trái - Nó sẽ không tạo ra object mới mà nó sẽ chỉ hợp nhất "job" vào object cũ là candidate và trả về candidate
