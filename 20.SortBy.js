// Require: 

// Sort an array
// Ex: arr.sort((a, b) => a - b)
// Nếu a - b nhỏ hơn 0, a sẽ đặt trước b
// Nếu a - b lớn hơn 0, b sẽ đặt sau a 

/**
 * @param {Array} arr
 * @param {Function} fn
 * @return {Array}
 */
var sortBy = function(arr, fn) {
    return arr.sort((a,b) => fn(a) - fn(b))
};

// Example 1:

// Input: arr = [5, 4, 1, 2, 3], fn = (x) => x
// Output: [1, 2, 3, 4, 5]
// Explanation: fn simply returns the number passed to it so the array is sorted in ascending order.

// Example 2: 

// Input: arr = [{"x": 1}, {"x": 0}, {"x": -1}], fn = (d) => d.x
// Output: [{"x": -1}, {"x": 0}, {"x": 1}]
// Explanation: fn returns the value for the "x" key. So the array is sorted based on that value.
// fn = (d) => d.x là một hàm nhận một đối tượng d và trả về giá trị của thuộc tính x trong đối tượng đó.


// Example 3:

// Input: arr = [[3, 4], [5, 2], [10, 1]], fn = (x) => x[1]
// Output: [[10, 1], [5, 2], [3, 4]]
// Explanation: arr is sorted in ascending order by number at index=1. 
// sắp xếp mảng arr dựa trên giá trị của phần tử thứ hai trong mỗi mảng con (được biểu diễn bằng x[1]).