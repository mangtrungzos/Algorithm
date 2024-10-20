// Require: Execute Asynchronous Functions in Parallel


// Promise.All() // Thực hiện các promise thực thi nhiều promise cùng lúc và đợi tất cả các promise đó hoàn thành 
// return result nếu tất cả promise hoàn thành 
// Kết quả trả về là một mảng

/**
 * let results = new Array(functions.length); // Tạo mảng để chứa kết quả của từng promise
 * // tạo một mảng mới với số phần tử bằng với số lượng phần tử trong mảng functions
 * // res sẽ là một mảng trống có số phần tử đã xác định, nhưng ban đầu tất cả các phần tử trong mảng này sẽ là undefined.
 * 
 * count // Biến đếm số lượng promise đã hoàn thành
 * 
 * .then (val) // Khi một promise hoàn thành
 * 
 * results[i] = val // Lưu kết quả vào mảng `results` tại vị trí tương ứng
 * 
 * if (count === functions.length) resolve(results); // Nếu tất cả promise hoàn thành, trả về kết quả
 * // Nếu có lỗi trong bất kỳ promise nào, gọi `reject` để thông báo lỗi
 * 
 * val // val chính là giá trị mà promise của hàm fn() trả về khi hoàn thành
 * 
 * // Bởi vì đây là hàm bất đồng bộ nên tất cả các promise sẽ được thực hiện ngay mà không cần chờ
 */

/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = function(functions) {
    return new Promise((resolve, reject) => {
        let results = new Array(functions.length);
        let count = 0;
        functions.forEach((fn, i) => {
            fn()
            .then(val => {
                results[i] = val
                count++;
                if (count === functions.length) resolve(results);
            })
            .catch(reason => reject(reason))
        });
    })

};

var promiseAll = (functions) => {
    return new Promise((resolve, reject) => {
        let count = 0;
        let res = new Array(functions.length);
        for (let i = 0; i < functions.length; i++) {
            let fn = functions[i];
            fn()
            .then(val => {
                res[i] = val;
                count++;
                if (count === functions.length) resolve(res);
            })
            .catch((err) => reject(err));
        }
    })
}


/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */


// Example 1:

// Input: functions = [
//   () => new Promise(resolve => setTimeout(() => resolve(5), 200))
// ]
// Output: {"t": 200, "resolved": [5]}
// Explanation: 
// promiseAll(functions).then(console.log); // [5]

// The single function was resolved at 200ms with a value of 5.


// Example 2:

// Input: functions = [
//     () => new Promise(resolve => setTimeout(() => resolve(1), 200)), 
//     () => new Promise((resolve, reject) => setTimeout(() => reject("Error"), 100))
// ]
// Output: {"t": 100, "rejected": "Error"}
// Explanation: Since one of the promises rejected, the returned promise also rejected with the same error at the same time.


// Example 3:

// Input: functions = [
//     () => new Promise(resolve => setTimeout(() => resolve(4), 50)), 
//     () => new Promise(resolve => setTimeout(() => resolve(10), 150)), 
//     () => new Promise(resolve => setTimeout(() => resolve(16), 100))
// ]
// Output: {"t": 150, "resolved": [4, 10, 16]}
// Explanation: All the promises resolved with a value. The returned promise resolved when the last promise resolved.
 