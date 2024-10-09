console.log("hello");

setTimeout(() => console.log("world"), 0);

console.log("hi");

// Output: hello hi world

// setTimeout() là 1 hàm bất đồng bộ
// Nên nó sẽ được đưa vào web api để đợi

// Khi nó sang web api thì khi nó hết thời gian chờ, nên ngay lập tức nó sẽ được đẩy xuống callback queue
// Khi stack trống thì EventLoop nó sẽ đưa job callback này lên stack và chạy

// JavaScript có một EventLoop, nó liên tục kiểm tra xem có bất kỳ tác vụ nào cần được xử lý hay không.

// EventLoop sẽ ưu tiên xử lý các tác vụ đồng bộ trước. Sau khi các tác vụ đồng bộ được hoàn thành, EventLoop mới bắt đầu xử lý các tác vụ trong hàng đợi tác vụ.
