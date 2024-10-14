// Require: The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

// P   A   H   N
// A P L S I I G
// Y   I   R

// And then read line by line: "PAHNAPLSIIGYIR"

// Write the code that will take a string and make this conversion given a number of rows:

// string convert(string s, int numRows);

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  let res = [];
  let count = 0;
  let up = true;
  for (let i = 0; i < s.length; i++) {
    if (!res[count]) {
      res[count] = [];
    }
    res[count].push(s[i]);

    count = up ? count + 1 : count - 1;
    if (count + 1 == numRows) {
      up = false;
    } else if (count == 0) {
      up = true;
    }
  }
  let result = "";
  for (let i of res) {
    result += i.join("");
  }
  return result;
};

// Explain:
/**
 * let res = []; Mảng lưu các hàng của zigzag
 *   Ex: res = [ ['P','A', 'H', 'N'], [...], [...], [...] ]
 *
 * up = true; // Cờ di chuyển: true = đi xuống, false = đi lên
 *
 * let count = 0; // Theo dõi hàng hiện tại cho biết đang đi xuống hay đi lên
 *
 * res[count]; // Nếu hàng hiện tại res[count] chưa tồn tại thì tạo một mảng rỗng cho nó
 *
 * Ký tự s[i] được thêm vào hàng hiện tại res[count].
 *
 * Sau khi thêm một ký tự vào hàng, chúng ta cập nhật giá trị count.
 * Nếu up là true, tăng count (di chuyển xuống hàng tiếp theo)
 * Nếu up là false, giảm count (di chuyển lên trên).
 *
 * count + 1 == numRows; // It's mean: đã đến hàng cuối cùng. Do đó, cờ up được đặt thành false để di chuyển lên.
 * count == 0; // It's mean: trở lại hàng đầu tiên. Do đó, up flag -> true -> move down
 *
 */

// Example 1:

// Input: s = "PAYPALISHIRING", numRows = 3
// Output: "PAHNAPLSIIGYIR"

// Example 2:

// Input: s = "PAYPALISHIRING", numRows = 4
// Output: "PINALSIGYAHRPI"
// Explanation:
//   P     I    N
//   A   L S  I G
//   Y A   H R
//   P     I
