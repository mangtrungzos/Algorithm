// Require: Write code that enhances all arrays such that you can call the array.groupBy(fn) method on any array and it will return a grouped version of the array.


// grouped : is initial value
// item : is current value


Array.prototype.groupBy = function(fn) {
    return this.reduce((grouped, item) => {
        const key = fn(item);
        if (!grouped[key]) {
            grouped[key] = [];
        }
        grouped[key].push(item);

        return grouped;
    },{});
}


// Example 1:

// Input: 
// array = [
//   {"id":"1"},
//   {"id":"1"},
//   {"id":"2"}
// ], 
// fn = function (item) { 
//   return item.id; 
// }
// Output: 
// { 
//   "1": [{"id": "1"}, {"id": "1"}],   
//   "2": [{"id": "2"}] 
// }

// Example 2:

// Input: 
// array = [
//   [1, 2, 3],
//   [1, 3, 5],
//   [1, 5, 9]
// ]
// fn = function (list) { 
//   return String(list[0]); 
// String(list[0]) : Sẽ trả về chuỗi đại diện cho phần tử đầu tiên của danh sách con mà hàm đang xử lý
// Vd: [1, 2, 3] => "1"
// }
// Output: 
// { 
//   "1": [[1, 2, 3], [1, 3, 5], [1, 5, 9]] 
// }