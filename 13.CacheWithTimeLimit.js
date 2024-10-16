// Require: Write a class that allows getting and setting key-value pairs, however a "time until expiration" is associated with each key.

/**
 * The class has three public methods:
 * set(key, value, duration): accepts an integer key, an integer value, and a duration in milliseconds.
 * Once the duration has elapsed, the key should be inaccessible. 
 * The method should return true if the same un-expired key already exists and false otherwise. 
 * Both the value and duration should be overwritten if the key already exists.
 * get(key): if an un-expired key exists, it should return the associated value. Otherwise it should return -1
 * count(): returns the count of un-expired keys.
 */

/**
 * Yêu cầu viết một lớp TimeLimitedCache cho phép lưu trữ các cặp khóa-giá trị (key-value) kèm theo thời gian tồn tại cho mỗi khóa. 
 * Sau khi thời gian tồn tại của một khóa kết thúc, khóa đó sẽ hết hạn và không còn truy cập được nữa.
 */

/**
 * // Set()
 * this.cache = {}; // Lưu những cặp key-value & timer để xác định khi nào key hết hạn
 * 
 * this.cache[key] && this.cache[key].timer : Check if - Nếu key đã tồn tại trong cache & bộ đếm timer chưa bị xóa 
 *      if true => update new value & restart again time has existed 
 * 
 * clearTimeout(this.cache[key].timer) : Hủy bộ đếm time cũ (timer) của key.
 *      Đảm bảo rằng key không bị xóa do timer vẫn đang chạy
 * 
 * this.cache[key].value = value : Cập nhật giá trị của key với giá trị mới value.
 * 
 * this.cache[key].timer = setTimeout(() => { this.remove(key); }, duration) : 
 *      Thiết lập một bộ đếm thời gian mới cho khóa key dựa trên thời gian duration
 * return true : If key is existed
 * else : return false
 * 
 * this.cache[key] = { value: value, timer: setTimeout(() => { this.remove(key); }, duration) } : 
 * Tạo một mục mới trong cache với khóa key, giá trị value, và bộ đếm thơi gian mới.
 */

/**
 * // Get()
 * if (this.cache[key] && this.cache[key].timer):
 *      Kiểm tra xem khóa key có tồn tại trong cache và vẫn còn bộ đếm thơi gian hoạt động không. Nếu đúng, khóa này chưa hết hạn.
 * 
 * return this.cache[key].value;:
 *      Trả về giá trị value tương ứng với khóa key.
 * 
 * else { return -1; }:
 *      Nếu khóa không tồn tại hoặc đã hết hạn, trả về -1.
 */

/**
 * // Count()
 * let count = 0;
 *      Khởi tạo biến đếm count để theo dõi số lượng khóa chưa hết hạn.
 * 
 * for (const key in this.cache):
 *      Vòng lặp for duyệt qua tất cả các khóa trong cache.
 * 
 * if (this.cache[key].timer):
 *      Kiểm tra xem khóa đó có bộ đếm thời gian (timer) hoạt động hay không, tức là khóa chưa hết hạn.
 * 
 * count++;
 *      Tăng biến đếm lên 1 cho mỗi khóa chưa hết hạn.
 * 
 * return count;
 *      Trả về tổng số khóa chưa hết hạn.
 */

var TimeLimitedCache = function() {
    this.cache = {};
}

// Phương thức này đặt một giá trị mới vào trong cache với thời gian tồn tại cụ thể.
TimeLimitedCache.prototype.set = function(key, value, duration) {
    if (this.cache[key] && this.cache[key].timer) {
        clearTimeout(this.cache[key].timer);
        this.cache[key].value = value;
        this.cache[key].timer = setTimeout(() => {
            this.remove(key);
        }, duration);
        return true;
    } else {
        this.cache[key] = {
            value: value,
            timer: setTimeout(() => {
                this.remove(key);
            }, duration)
        };
        return false;
    }
};

/** 
 * @param {number} key
 * @return {number} value associated with key
 */

// Truy xuất giá trị tương ứng với khóa key.
TimeLimitedCache.prototype.get = function(key) {
    if (this.cache[key] && this.cache[key].timer) {
        return this.cache[key].value;
    } else {
        return -1;
    }
};

// Đếm số lượng khóa chưa hết hạn trong cache.
TimeLimitedCache.prototype.count = function() {
    let count = 0;
    for (const key in this.cache) {
        if (this.cache[key].timer) {
            count++;
        }
    }
    return count;
};


// Xóa mục trong cache có khóa key để giải phóng bộ nhớ.
TimeLimitedCache.prototype.remove = function(key) {
    delete this.cache[key];
};



// Input: 
// actions = ["TimeLimitedCache", "set", "get", "count", "get"]
// values = [[], [1, 42, 100], [1], [], [1]]
// timeDelays = [0, 0, 50, 50, 150]
// Output: [null, false, 42, 1, -1]


// Explain: 
// Provide 3 methods:

// set(key, value, duration) :
/**
 * Nhận vào một khóa (key), một giá trị (value), và một khoảng thời gian tồn tại (duration) tính bằng mili-giây.
 * Nếu 'key' đã tồn tại và chưa hết hạn, phương thức này trả về true và ghi đè cả giá trị lẫn thời gian tồn tại. 
 * Nếu 'key' chưa tồn tại, trả về false.
 */

// get(key) :
/**
 * Nếu 'key' tồn tại và chưa hết hạn, trả về giá trị tương ứng với khóa đó.
 * Nếu 'key' không tồn tại hoặc đã hết hạn, trả về -1.
 */

// count() :
// Trả về số lượng các khóa còn lại chưa hết hạn trong cache.


// 1. "TimeLimitedCache": Khởi tạo đối tượng TimeLimitedCache.
//      Không có tham số đi kèm ([]).

// 2. "set(1, 42, 100)":
//      Đặt khóa 1 với giá trị 42 và thời gian tồn tại là 100 mili-giây.
//      Vì khóa 1 chưa tồn tại trước đó, hàm trả về false.

// 3. "get(1)" (sau 50ms):
//      Truy cập khóa 1 sau 50 mili-giây. 
//      Vì thời gian tồn tại của khóa là 100ms và chưa hết hạn, hàm trả về 42.

// 4. "count()" (sau 50ms):
//      Đếm số lượng khóa còn tồn tại. Chỉ có khóa 1 và chưa hết hạn, nên trả về 1.

// 5. "get(1)" (sau 150ms):
//      Truy cập khóa 1 sau 150 mili-giây. Lúc này, thời gian tồn tại của khóa đã hết (100ms), nên hàm trả về -1.