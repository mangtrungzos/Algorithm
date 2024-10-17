// Require: Given a function fn and a time in milliseconds t, return a debounced version of that function.
/**
 * @param {Function} fn
 * @param {number} t milliseconds
 * @return {Function}
 */
var debounce = function(fn, t) {
    let timeout;
    return function(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            fn(...args)
        }, t)
    }
};

/**
 * const log = debounce(console.log, 100);
 * log('Hello'); // cancelled
 * log('Hello'); // cancelled
 * log('Hello'); // Logged at t=100ms
 */

// Example 1:
// t = 50
// calls = [
//   {"t": 50, inputs: [1]},
//   {"t": 75, inputs: [2]}
// ]
// Output: [{"t": 125, inputs: [2]}]


// Example 2:

// Input: 
// t = 20
// calls = [
//   {"t": 50, inputs: [1]},
//   {"t": 100, inputs: [2]}
// ]
// Output: [{"t": 70, inputs: [1]}, {"t": 120, inputs: [2]}]
    
// Example 3:

// Input: 
// calls = [
//   {"t": 50, inputs: [1, 2]},
//   {"t": 300, inputs: [3, 4]},
//   {"t": 300, inputs: [5, 6]}
// ]
// Output: [{"t": 200, inputs: [1,2]}, {"t": 450, inputs: [5, 6]}]

// Explanation:

// Example 1:
/**
 * Tại thời điểm t = 50ms thì hàm debounce sẽ được gọi với đầu vào là [1] 
 * Nhưng nó sẽ vẫn chưa được thực thi do độ trễ là 50ms
 * Do đó 50ms + 50ms = 100ms nghĩa là sau 100ms thì fn debounce mới đươc thực thi
 * 
 * Tại t = 75ms nghĩa là sau 25ms so kể từ lần gọi fn debounce được gọi với [2]
 * Thì fn debounce nó sẽ được gọi lại tại thời điểm t = 75ms
 * Nó sẽ xóa bộ đếm time cũ là 50ms đi và thay bằng 75ms
 * Khi đó t = 75ms và delay = 50ms, thì fn debounce sẽ được thực thi sau 125ms
 * 
 * => result [{"t": 125, inputs: [2]}]
 */


// Example 2: 
/**
 * Tại thời điểm t = 50ms thì fn debounce sẽ được gọi với đầu vào là [1]
 * Delay = 20ms => sau 70ms thì fn debounce will be excuted
 * => Kết quả của lần gọi sau 70ms là [1]
 * 
 * Tại thời điểm t = 100ms thì fn debounce sẽ được gọi với [2]
 * Nó sẽ xóa bộ đếm cũ là 50ms đi và thay bằng 100ms
 * Delay = 20ms => sau 120ms thì fn debounce will be excuted
 * => Kết quả là 120ms với [2] 
 * 
 * => result [{"t": 70, inputs: [1]}, {"t": 120, inputs: [2]}]
 */

// Example 3:
/**
 * Tại t = 50ms thì fn debounce sẽ có gọi với đầu vào là [1, 2]
 * Delay = 150ms nên sau 200ms tổng cộng thì fn sẽ được thực thi
 * => Kết quả là 200ms với [1, 2]
 * 
 * Tại t = 300ms, hàm debounce sẽ được gọi tại thời điểm t = 300ms 
 * Nhưng Delay = 150ms nên phải sau 450ms tổng cộng thì fn mới được thực thi
 * => Kết quả là 450ms với [3, 4]
 * 
 * Nhưng tại thời điểm t = 300ms thì chúng ta sẽ gọi hàm thêm 1 lần nữa với inputs: [5, 6]
 * Thì tại đợi điểm này bộ đếm sẽ không bị hủy, bộ đếm sẽ tiếp tục cho đến 450ms và thực thi
 * Khi đến 450ms thì bộ đếm thực thi và truyền đầu vào [5, 6]
 * 
 * => result [{"t": 200, inputs: [1, 2]}, {"t": 450, inputs: [5, 6]}]
 */
