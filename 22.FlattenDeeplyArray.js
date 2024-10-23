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
// n - 1 : It's mean - Sẽ làm phẳng đến depth n - 1

// 1. For loop : Duyệt qua từng phần tử
// 2. If : depth > 0 && arr[i] is array
//         if true & n > 0, sẽ gọi hàm flat() một lần nữa(đệ quy) với phần tử đó và giảm n - 1


/* -------------------------- */
// let arr = [[1,2], [3,[4,5]], 6];
// n = 2

// 1. Check if : false
// 2. Cre res = []
// 3. For : [1,2] : (0)
//    Check if : n (2) > 0 ; Array is true
// 4. Gọi hàm flat(arr[i], n - 1)
//    Gọi đệ quy flat([1,2], 1)
// 5. Quay lại check if flat  | Do gọi đệ quy
/**
 * if : false
 * Cre res = []
 * for : Duyệt arr [1, 2]
 * check if : false
 * push : 1 -> res = [1]
 * push : 2 -> res = [1, 2]
 * Sau đó quy về flat(arr, 2)
 * res.push(...flat([1,2], 1))
 * Ở bước này spread giải các elements trong arr res mới được tạo ra ở bước đệ quy : ...res[1,2]
 * => res = [1, 2] (res được thiết lập ban đầu)
 */

// For : i = 1 | [3, [4, 5]]
// 1. if - false
// 2. Cre res = []
// 3. for : (1) [3, [4, 5]]
//    if : n (2) > 0 ; Array is true
// 4. Gọi đệ quay flat([3, [4, 5]], 1)
// 5. Quay lại check if first do đệ quy
/**
 * if: false
 * Cre res mới
 * for :  duyệt [3, [4, 5]]
 * 3 is not array -> res = [3]
 * i = 1 : [4, 5] is array , n > 0: 1 true
 * => Đề quy flat([4, 5], 0): Quay lại các bước đầu
 * n === 0 : true => Đưa [4, 5] vào res ban đầu
 * 
 * KQ : res = [1, 2, 3, 4, 5]
 */