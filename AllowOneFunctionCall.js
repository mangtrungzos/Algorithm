// Description:
// Given a function fn, return a new function that is identical to the original function except that it ensures fn is called at most once.

/**
 * The first time the returned function is called, it should return the same result as fn
 * Every subsequent time it is called, it should return undefined.
 */

var once = function (fn) {
    let hasBeenCalled = false;
    let result;
    return function (...args) {
        if (!hasBeenCalled) {
            result = fn(...args);
            hasBeenCalled = true;
            return result;
        }
    };
};

/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */

// input
// fn = (a,b,c) => (a + b + c)
// calls = [[1,2,3],[2,3,6]]

// output expected
// [{"calls:1", "value": 6}]

// 1. Hàm fn nhận ba tham số (a, b, c) và trả về tổng của ba tham số này: a + b + c
// 2. `hasBeenCalled` là một biến cờ, ban đầu được gán giá trị `false`, dùng để theo dõi xem hàm `fn` đã được gọi hay chưa.
// 3. `result` lưu trữ kết quả của lần gọi đầu tiên
// 4. Trong hàm trả về:
// 5. Nếu `hasBeenCalled` là `false`, tức là hàm `fn` chưa được gọi
// 6. Ở đây `fn(...args)`: args: [1,2,3] -> ...args : fn(1,2,3)
// 7. Hàm `fn` sẽ được gọi với các tham số truyền vào và kết quả sẽ được lưu vào `result`
// 8. Sau đó, `hasBeenCalled` được gán là `true` và kết quả được trả về.

// 9. Khi gọi lại `once(fn)(2, 3, 6)`, do `hasBeenCalled` đã là `true`
// 10. hàm `fn` không được thực thi nữa và hàm chỉ trả về `undefined`.
