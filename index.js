// Require: Given a string s, return the longest palindromic substring in s.

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

// console.log(longestPalindrome("babad"));

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
