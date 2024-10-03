/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var timeLimit = function (fn, t) {
    return async function (...args) {
        return new Promise((resolve, reject) => {
            setTimeout(() => reject("Time Limit Exceeded"), t);
            fn(...args)
                .then(resolve)
                .catch(reject);
        });
    };
};

/**
 * const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
 * limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms
 */

// Explain:
// setTimeout(() => reject("Time Limit Exceeded"), t); :
// Đặt một giới hạn thời gian với setTimeout. Sau t miligiây (giới hạn thời gian), nếu hàm fn vẫn chưa hoàn thành, Promise sẽ bị từ chối (reject) với lỗi "Time Limit Exceeded".

// fn(...args).then(resolve).catch(reject); :
//  Thực hiện hàm fn với các đối số được cung cấp. Nếu hàm fn hoàn thành thành công, nó sẽ gọi resolve để trả về kết quả của hàm đó.
//  Nếu có lỗi xảy ra trong quá trình thực thi hàm fn, catch sẽ bắt lỗi và trả về (reject) lỗi đó.

/**
 * Example 1:
 * Input:
 * fn = async (n) => {
 *    await new Promise(resolve => setTimeout(resolve, 100));
 *    return n * n;
 * }
 * inputs = [5]
 * t = 50
 *
 * Output:
 * {"rejected":"Time Limit Exceeded","time":50}
 */
