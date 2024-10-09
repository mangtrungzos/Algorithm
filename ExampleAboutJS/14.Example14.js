String.prototype.lengthy = () => {
  console.log("hello");
};

let x = { name: "sang" };

delete x;

x.name.lengthy(); // x.name gọi được lengthy: do x có kiểu dữ liệu là string

// String.prototype: tạo ra 1 phương thức mới cho string là lengthy()

// delete x: delete để xóa đối tượng x khỏi bộ nhớ, biến x sẽ không còn tham chiếu đến đối tượng đó nữa và đối tượng sẽ bị thu hồi bộ nhớ (garbage collected).

// x.name.lengthy();
// Dòng này cố gắng gọi phương thức lengthy() trên thuộc tính name của đối tượng x. Tuy nhiên, do x đã bị xóa ở dòng trước, nên x không còn tồn tại và x.name sẽ là undefined.

// do undefined cũng là một kiểu dữ liệu trong JavaScript, và nó kế thừa từ String.prototype (mặc dù nó không phải là một chuỗi thực sự)
