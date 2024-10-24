// Require : Cho số nguyên x 32 bit có dấu, trả về x với các chữ số bị đảo ngược. 
//           Nếu đảo ngược x làm cho giá trị nằm ngoài phạm vi số nguyên 32 bit đã ký [-2^31, 2^31 - 1] thì trả về 0.

// Giả sử môi trường không cho phép lưu trữ số nguyên 64 bit (có dấu hoặc không dấu)

// Constraints:
// -2^31 <= x <= 2^31 - 1

// parseInt : là một hàm phân tích một chuỗi và trả về một số nguyên. | let num = parseInt("123"); // Output: 123 (as a number)
// Math.abs() : trả về giá trị tuyệt đối của một số
// split('') : chia một chuỗi thành một mảng các chuỗi con dựa trên một dấu phân cách được chỉ định
// join() : nối tất cả các phần tử của mảng thành một chuỗi. Bạn có thể chỉ định dấu phân cách (như dấu phẩy, dấu cách hoặc bất kỳ ký tự nào) được đặt giữa mỗi phần tử trong quá trình nối.



var reverse = function(x) {
    let negative = x < 0;
    let reversed = parseInt(x.toString().split('').reverse().join(''));

    reversed = negative ? -reversed : reversed;
    if (reversed < Math.pow(-2,31) || reversed > Math.pow(2,31) - 1) return 0;
    return reversed;
}

// Example 1:

// Input: x = 123
// Output: 321

// Example 2:

// Input: x = -123
// Output: -321

// Example 3:

// Input: x = 120
// Output: 21
 

// split() :
// let str = "Hello World";
// let arr = str.split(" ");
// console.log(arr);  // Output: ["Hello", "World"]

// join() :
// let arr = ["apple", "banana", "orange"];
// let str = arr.join();  // Default separator is a comma
// console.log(str);  // Output: "apple,banana,orange"