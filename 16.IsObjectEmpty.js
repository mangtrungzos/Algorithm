// Require: Given an object or an array, return if it is empty.
//          An empty object contains no key-value pairs.
//          An empty array contains no elements.

var isEmpty = () => {
    return Object.keys(obj).length === 0;
}

// const obj = {"x": 5, "y": 42};
// console.log(isEmpty(obj));