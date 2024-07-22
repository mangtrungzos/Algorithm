// Description: 
// Given a function fn, return a memoized version of that function.
// A memoized function is a function that will never be called twice with the same inputs. Instead it will return a cached value.

// You can assume there are 3 possible input functions: sum, fib, and factorial.
/**
 * sum accepts two integers a and b and returns a + b. Assume that if a value has already been cached for the arguments (b, a) where a != b, it cannot be used for the arguments (a, b). For example, if the arguments are (3, 2) and (2, 3), two separate calls should be made.
 * fib accepts a single integer n and returns 1 if n <= 1 or fib(n - 1) + fib(n - 2) otherwise.
 * factorial accepts a single integer n and returns 1 if n <= 1 or factorial(n - 1) * n otherwise.
 */

function memoize(fn) {
    const cache = {}; // {"[[2,2]]": 4, "[[1,2]]": 3}
    return function(...args) {
        const json = JSON.stringify(args);
        // if: cache in json
        if (json in cache) {
            return cache[json];
        } else {
            const result = fn(...args);
            cache[json] = result;
            return result; 
        }
    };
}

/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount++;
 *   return a + b;
 * })
 * 
 * // memoizedFn(2, 2) // 4
 * // memoizedFn(2, 2) // 4
 * // console.log(callCount) // 1 
 * 
 * const actions = ["call", "call", "getCallCount", "call", "getCallCount"];
 * const values = [[2, 2], [2, 2], [], [1, 2], []];
 * const results = [];
 * 
 * for (let i = 0; i < actions.length; i++) {
 * if (actions[i] === "call") {
 *      results.push(memoizedFn(...values[i])); // use spread operator
 * } else if (actions[i] === "getCallCount") {
 *      results.push(callCount);
 *  }
 * 
 * console.log(results); // Expected output: [4, 4, 1, 5, 2]
 */

 // 1. Khai báo các giá trị
 // 2. Duyệt qua mảng actions 
 // 3. Nếu actions[i] === "call" thì khi đó ta sẽ push kết quả của `memoizedFn` mà lúc này memoizedFn đã được gọi
 // 4. `...values[i]`: sử dụng spread operator để đổi mảng values[i] thành tham số / ex. [2,2] -> 2,2
 // 5. `memoizedFn`: được gọi mà lúc này nó sẽ được gán bằng 1 function `memoize` trong `memoize` khai báo 1 hàm tính tổng `a + b`
 // 6. `callCount`: được khởi tạo = 0, mỗi khi hàm tính tổng được thực hiện thì sẽ callCount sẽ tăng lên 1
 // 7. Khi `memoizedFn = memoize(sum)` thì `memoized` được thực hiện ở phái trên 
 // 8. `fn`: chính là `sum` này
 // 9. `cache`: là 1 đối tượng dùng để lưu trữ kết quả của các lần gọi hàm với các tham số không bằng nhau
 // 10. `return function(...args)`: trả về 1 hàm mới / args chính là đối số truyền vào `memoizedFn(2, 2)`
 // 11. `JSON.stringify(args)`: sử dụng `JSON.stringify` để chuyển đổi mảng args thành chuỗi 
 // 12. Khi đó nó sẽ từ: (2,2) -> "[2,2]"
 // 13. `if`: kiểm tra xem `json` có trong cache không 
 // 14. Nếu không khi đó `result` được gán bằng `fn(...args)`
 // 15. Ở đây fn(...args) sẽ được gọi với đối số được truyền lúc đầu là (2,2)
 // 16. `fn`: chính là hàm tính tổng `sum` -> `(a, b) => a + b` / Biến callCount tâng 1 và return kết quả : `4`
 // 17. `cache[json] = result`: 
 //     `json`: "[2,2]"
 //     `result`: `4`
 // 18. Khi đó ta sẽ lưu kết quả vào `cache`: {"[2,2]": 4}
 // 19. `return result`: `4`: Khi đó kết quả của lần gọi hàm `memoize` sẽ là `4`
 // 20. `results.push(memoizedFn())`: Quay lại bước này thì sẽ push `4` với mảng `results`

 // 21. Cứ thế tiếp tục `for loop`
 // 22. Ở bước này `memoize` sẽ là (2,2)
 // 23. `JSON.stringify(args)`: Thành "[2,2]"
 // 24. `if`: Lúc này trong cache đã `json` được lưu vào trước đó là "[2,2]"
 // 25. `return cache[json]`: Kết quả: 4 (lấy từ cache, không tính toán lại) / Cache không thay đổi: cache = {"[[2,2]]": 4}
 // 26. Khi đó ta sẽ push tiếp `4` vào results

 // 27. Tiếp tục `for loop`: Lấy ra `"getCallCount"` so sánh / sau đó push `callCount: 1` với mảng `results`
 
 // 28. Cứ thế tiếp tục `for loop` / Lấy ra "[1,2]"
 // 29. lúc này trong `cache`: {"[2,2]": 4}
 // 30. `JSON.stringify(args)`: Thành "[1,2]"
 // 31. `if`: Lúc này trong cache không có `json` là "[1,2]"
 // 32. Thực hiện hàm `fn` tính `sum` -> `(a, b) => a + b` / `callCount` tâng 1 -> 2 và return kết quả: `3`
 // 33. `memoize` sẽ có result là 3 
 // 34. Sau đó sẽ được push vào results

 // log: [4,4,1,3,2]


/**------------------------------------------------------------------- */

// input: 
// fnName = "sum"
// actions = ["call", "call", "getCallCount", "call", "getCallCount"]
// values = [[2,2], [2,2], [], [1,2], []]

// output:
// [4,4,1,3,2]

// Explanation: 
/**
 * const sum = (a, b) => a + b;
 * const memoizedSum = memoize(sum);
 * memoizedSum(2, 2); // "call" - returns 4. sum() was called as (2, 2) was not seen before.
 * memoizedSum(2, 2); // "call" - returns 4. However sum() was not called because the same inputs were seen before.
 * "getCallCount" - total call count: 1
 * memoizedSum(1, 2); // "call" - returns 3. sum() was called as (1, 2) was not seen before.
 * "getCallCount" - total call count: 2
 */


// Example 2:

// Input:
// fnName = "factorial"
// actions = ["call","call","call","getCallCount","call","getCallCount"]
// values = [[2],[3],[2],[],[3],[]]
// Output: [2,6,2,2,6,2]

// Explanation:
/**
 * const factorial = (n) => (n <= 1) ? 1 : (n * factorial(n - 1));
 * const memoFactorial = memoize(factorial);
 * memoFactorial(2); // "call" - returns 2.
 * memoFactorial(3); // "call" - returns 6.
 * memoFactorial(2); // "call" - returns 2. However factorial was not called because 2 was seen before.
 * "getCallCount" - total call count: 2
 * memoFactorial(3); // "call" - returns 6. However factorial was not called because 3 was seen before.
 * "getCallCount" - total call count: 2
 */


// Example 3:

// Input:
// fnName = "fib"
// actions = ["call","getCallCount"]
// values = [[5],[]]
// Output: [8,1]

// Explanation:
// fib(5) = 8 // "call"
// "getCallCount" - total call count: 1


// How to run: 
/**
 * `memoize`: Nhận 1 hàm `fn` và return về 1 hàm mới 
 * `cache`: Nhận 1 đối tượng dùng để lưu trữ kết quả của các lần gọi hàm với các tham số đã cho
 * `json in cache`: Kiểm tra kết quả với các tham số đã được lưu trữ trong cache chưa
 * Nếu kết quả đã có trong cache, return kết quả từ cache
 * Nếu không, gọi hàm `fn`, lưu kết quả vào cache, return kết quả 
 */