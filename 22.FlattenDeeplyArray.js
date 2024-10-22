// Require: Give a multi-dimensional array "arr" and a depth "n", return a flattened version of that array.
//          A multi-dimensional array is a recursive data structure that contains integers or other multi-dimensional arrays.
//          A flattened array is a version of that array with some or all of the sub-arrays removed and replaced with the actual elements in that sub-array. This flattening operation should only be done if the current depth of nesting is less than n. The depth of the elements in the first array are considered to be 0
//          Please solve it without the built-in Array.flat method.

/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */

// Use Recursive : Đệ quy
var flat = function (arr, n) {
    if (n === 0) return arr;
    let res = [];

    for (let i =  0; i < arr.length; i++) {
        if (n > 0 && Array.isArray(arr[i])) {
            res.push(...flat(arr[i], n - 1));
        } else {
            res.push(arr[i]);
        }
    }
    return res;
};

// Solution : if use Array.flat method
// return arr.flat(n);

// Example 1:

// Input
// arr = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]]
// n = 0
// Output
// [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]]

// Example 2:

// Input
// arr = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]]
// n = 1
// Output
// [1, 2, 3, 4, 5, 6, 7, 8, [9, 10, 11], 12, 13, 14, 15]



// Explaination: 

// [] : depth = 0
// ["[]"] : depth = 1
// [[], ["[]"]] : depth = 2

// 1. For loop : arr[i]
// 2. If : depth > 0 && arr[i] is array
// 3. Push : Làm phảng flatten mảng 
// Use spread operator để làm giải mảng thành các elements riêng biêt sau khi đã được flatten
// n - 1 : It's mean - các elements sẽ được đưa vào mảng với vị trí depth = n - 1
