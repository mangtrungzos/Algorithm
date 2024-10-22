/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */

// Solution 1:
var join = function(arr1, arr2) {
    return Object.values([...arr1, ...arr2].reduce((map, a) => (map[a.id] = {...map[a.id], ...a}) && map, {}));
};

// Solution 2: 

var join = function(arr1, arr2) {
    const res = {};
    for (let i = 0; i < arr1.length; i++){
        res[arr1[i].id] = arr1[i];
    }

    for (let i = 0; i < arr2.length; i++){
        if (arr2[i].id in res){
            var val = arr2[i];
            for (const [key, value] of Object.entries(val)) {
                res[arr2[i].id][key] = value; // arr2[i].id // Cập nhật các thuộc tính
            }
        } else {
            res[arr2[i].id] = arr2[i];
        }
    }
    return Object.values(res);
};

// Note: Theo thứ tự tăng dần thì việc sử dụng "id" để làm key, mỗi object sẽ được lưu với 1 key duy nhất
// Note: JS chỉ cho phép các kiểu giá trị như "string", or "symbol" làm key cho các properties of object.


// Explain: solution 1
// [...arr1, ...arr2] - Sử dụng spread để kết hợp 2 mảng thành 1 (Spread sẽ mở rộng thành các phần tử riêng lẻ)
// reduce - Nhận 2 tham số: hàm callback và initial value ({})
// (map, a) => : callback, với "map" là giá trị tổng (total) - nghĩa là giá trị cuối cùng
// a là từng phần tử trong mảng kết hợp.
// map[a.id] = {...map[a.id], ...a}:

// map[a.id]: Truy cập vào thuộc tính id của đối tượng a trong đối tượng map.
// {...map[a.id], ...a}: Nếu thuộc tính map[a.id] đã tồn tại (tức là đã có đối tượng với id này), chúng ta sử dụng toán tử spread để kết hợp các thuộc tính từ đối tượng hiện tại (a) với thuộc tính đã tồn tại.
// Nếu không, nó sẽ tạo một đối tượng mới với các thuộc tính của a.
// && map: Điều này đảm bảo rằng hàm callback luôn trả về map sau khi cập nhật nó.


// Explain: solution 2
// Phương thức Object.entries() trả về một mảng chứa các cặp khóa-giá trị (key-value pairs) của đối tượng val
// val = arr2[i] : => Object.entries : [[key, value], [key, value], ...] 
// Vd: [["id", 3], ["x", 5]]

// res[arr1[i].id] = arr1[i] : arr1[i].id - Lấy ra id và dựa vào đó sẽ gán bằng giá trị arr1[i]
// Điều này có nghĩa là đối tượng từ arr1 sẽ được thêm vào res mà không thay đổi.
// If : Nếu id tồn tại trong res
// tạo val lưu object hiện tại arr2[i]
// Duyệt qua tất cả các thuộc tính của val bằng cách sử dụng Object.entries(val).
// Với mỗi thuộc tính (khóa key và giá trị value), 
// res[arr2[i].id][key] = value
// id = 2 đã tồn tại trong res.
// Cập nhật đối tượng trong res với các thuộc tính x và y từ arr2
// res[2] = { "id": 2, "x": 10, "y": 20 }; // Cập nhật x và y
// res[arr2[0].id][x] = 10;
// res[arr2[0].id][y] = 20;

// nó sẽ cập nhật hoặc thêm thuộc tính vào đối tượng trong res với khóa là id từ arr2[i].
// res[arr2[i].id] = arr2[i] : Nếu id không tồn tại trong res, đối tượng từ arr2 sẽ được thêm vào res với id làm khóa.
// Object.values(res) sẽ chuyển đổi đối tượng res thành một mảng các đối tượng đã được hợp nhất.



// Example 1:

// Input: 
// arr1 = [
//     {"id": 1, "x": 1},
//     {"id": 2, "x": 9}
// ], 
// arr2 = [
//     {"id": 3, "x": 5}
// ]
// Output: 
// [
//     {"id": 1, "x": 1},
//     {"id": 2, "x": 9},
//     {"id": 3, "x": 5}
// ]
// Explanation: There are no duplicate ids so arr1 is simply concatenated with arr2.
// Example 2:

// Input: 
// arr1 = [
//     {"id": 1, "x": 2, "y": 3},
//     {"id": 2, "x": 3, "y": 6}
// ], 
// arr2 = [
//     {"id": 2, "x": 10, "y": 20},
//     {"id": 3, "x": 0, "y": 0}
// ]
// Output: 
// [
//     {"id": 1, "x": 2, "y": 3},
//     {"id": 2, "x": 10, "y": 20},
//     {"id": 3, "x": 0, "y": 0}
// ]
// Explanation: The two objects with id=1 and id=3 are included in the result array without modifiction. The two objects with id=2 are merged together. The keys from arr2 override the values in arr1.