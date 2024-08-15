const person = { name: "Alice", age: 22 };

for (let key in person) {
  console.log(key); // name age
  console.log(person[key]); // Alice 22
}
