// Require: Given a string s, return the longest palindromic substring in s.

// idea:
/**
 * Mục tiêu là tìm chuỗi con đối xứng dài nhất trong một chuỗi bất kỳ.
 * Một chuỗi đối xứng (palindrome) là chuỗi mà nếu đảo ngược lại vẫn giữ nguyên thứ tự các ký tự. Vd: "racecar", "aba", "madam".
 *
 * Cách tiếp cận (Expand Around Center):
 * Ý tưởng chính là mở rộng từ vị trí trung tâm để tìm chuỗi đối xứng. Chuỗi đối xứng có thể có:
 * Trung tâm là một ký tự (chuỗi đối xứng lẻ).
 * Trung tâm là một cặp ký tự giống nhau (chuỗi đối xứng chẵn).
 *
 *
 * Complexity: time: O(n²) - vì mỗi ký tự trong chuỗi có thể được mở rộng ra tối đa n lần để kiểm tra chuỗi đối xứng.
 *
 * Phương pháp "Expand Around Center" này rất hiệu quả cho việc tìm chuỗi đối xứng dài nhất với độ phức tạp dễ quản lý.
 *
 * 1. Khởi tạo chuỗi rỗng 'longest'.
 * 2. Duyệt qua từng ký tự trong chuỗi:
 *   a. Kiểm tra chuỗi đối xứng lẻ (làm tâm là ký tự hiện tại).
 *   b. Kiểm tra chuỗi đối xứng chẵn (làm tâm là cặp ký tự hiện tại và ký tự tiếp theo).
 *   c. So sánh và cập nhật chuỗi đối xứng dài nhất.
 * 3. Trả về chuỗi đối xứng dài nhất.

 */

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    // Helper function to expand around the center
    function expandAroundCenter(left, right) {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            left--;
            right++;
        }
        return s.substring(left + 1, right);
    }

    let longest = "";

    for (let i = 0; i < s.length; i++) {
        // Check for odd-length palindromes
        let oddPalindrome = expandAroundCenter(i, i);
        // Check for even-length palindromes
        let evenPalindrome = expandAroundCenter(i, i + 1);

        // Update the longest palindrome found
        if (oddPalindrome.length > longest.length) {
            longest = oddPalindrome;
        }
        if (evenPalindrome.length > longest.length) {
            longest = evenPalindrome;
        }
    }

    return longest;
};

// Test case :
/**
 * Input: s = "babad"
 * Output: "bab"
 * Explanation: "aba" is also a valid answer.
 *
 *
 * Input: s = "cbbd"
 * Output: "bb"
 */

// s.substring(start, end) : Là một phương thức được sử dụng để "trích xuất một phần của chuỗi" từ vị trí start đến trước vị trí end

// Explain:
// 1. i = 0
/**
 * Check odd: lẻ
 * odd(0, 0) => "b"
 * odd(-1, 0) => Condition err
 * => "b"
 *
 * Check even: chẵn
 * even(0, 1) => "Condition err"
 *
 * if () => longest = "b"
 */

// 2. i = 1
/**
 * Check odd:
 * odd(1, 1) => "a"
 * odd(0, 2) => "b b"
 * odd(-1, 3) => "condition err"
 *
 * Check even:
 * even(1, 2) => "condition err"
 *
 * if () => longest = "bab"
 */

// ... => longest = "bab"
