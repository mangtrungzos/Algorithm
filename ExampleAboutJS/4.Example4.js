const a = [undefined];
a[5] = 4;
console.log(a.indexOf(undefined));

// Explain:
//  1. a[5] = 4;: Gán giá trị 4 cho phần tử thứ 6 (vì index bắt đầu từ 0) trong mảng a. Do mảng a hiện tại chỉ có 0 phần tử, nên việc gán này sẽ tạo ra một mảng có 6 phần tử, với 5 phần tử đầu tiên là undefined và phần tử thứ 6 là 4.

//  2. a.indexOf(undefined) luôn trả về 0 nếu mảng có ít nhất một phần tử là undefined.

//  3. Nếu mảng không có phần tử nào là undefined, a.indexOf(undefined) sẽ trả về -1.
