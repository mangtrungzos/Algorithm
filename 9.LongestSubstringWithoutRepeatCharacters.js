// Require: Given a string s, find the length of the longest substring without repeating characters.

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let arr = [];
    let len = 0;

    for (let i = 0; i < s.length; i++) {
        if (arr.includes(s[i])) {
            if (len < arr.length) {
                len = arr.length;
            }
            let index = arr.indexOf(s[i]); // Tìm chỉ số (vị trí) của phần tử đầu tiên có giá trị bằng s[i] trong mảng arr.
            arr.splice(0, index + 1); // Sẽ cắt bỏ một đoạn các phần tử từ mảng arr bắt đầu từ vị trí 0 (phần tử đầu tiên) đến index + 1.
        }
        arr.push(s[i]);
        // console.log(arr);
    }

    if (len < arr.length) {
        return arr.length;
    } else {
        return len;
    }
};

// var s = "abcabcbb";
// var result = lengthOfLongestSubstring(s);
// console.log(result);

/**
 * Example 1:
 * Input: s = "abcabcbb"
 * Output: 3
 * Explanation: The answer is "abc", with the length of 3.
 */
