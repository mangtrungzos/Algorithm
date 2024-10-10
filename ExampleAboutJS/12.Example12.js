var tip = 100;

(function () {
  // var tip;  // Biến này được hoisted lên đầu, nhưng chưa có giá trị (là undefined)
  console.log("I have $" + husband());

  function wife() {
    return tip * 2;
  }

  function husband() {
    return wife() / 2;
  }

  var tip = 10;
})();

// Hoisting: JavaScript đưa phần khai báo biến và hàm lên đầu của phạm vi (scope) trước khi mã thực sự được thực thi.

// Hoisting: Just var tip

// Việc khai báo hàm và biến sẽ được xử lý trước tiên, nhưng việc gán giá trị cho biến sẽ không được hoisting.

// Khi hàm IIFE được thực thi, biến tip được khai báo ở đầu hàm nhưng chưa được gán giá trị.

// Tai thời điểm gọi hàm wife(), biến tip trong phạm vi của hàm IIFE có giá trị là undefined.

// Mặc dù có một biến tip = 100 bên ngoài, nhưng bên trong IIFE có một biến tip mới được khai báo với var tip = 10
