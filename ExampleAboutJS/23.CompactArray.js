/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */

// time : 320ms, memory : 57.7 MB, beats : 98.8%
var compactObject = function(obj) {
    if(Array.isArray(obj)) {
        for (let i = 0; i < obj.length; i++) {
            if(!obj[i]) {
                obj.splice(i, 1);
                i--;
            }
            if(typeof obj[i] === 'object') compactObject(obj[i]);
        }
    } else {
        for (const key in obj) {
            if(!obj[key]) {
                delete obj[key];
            }
            if(typeof obj[key] === "object") compactObject(obj[key]);
        }
    }
    return obj;
};

// time : 89ms, memory : 61.3 MB
var compactObject = function(obj) {
    if(Array.isArray(obj)){
        return obj.reduce((acc,item)=>{
            const compactedItem = compactObject(item);
            if(compactedItem){
                acc.push(compactedItem);
            }
            return acc;
        },[]);
    } else if(typeof obj ==='object' && obj!== null){
        return Object.keys(obj).reduce((acc,key)=>{
            const value = compactObject(obj[key]);
            if(value){
                acc[key] = value;
            }
            return acc;
        },{})
    }
       else{
            return obj;
        }
};

// Example 1:

// Input: obj = [null, 0, false, 1]
// Output: [1]
// Explanation: All falsy values have been removed from the array.

// Example 2:

// Input: obj = {"a": null, "b": [false, 1]}
// Output: {"b": [1]}
// Explanation: obj["a"] and obj["b"][0] had falsy values and were removed.

// Example 3:

// Input: obj = [null, 0, 5, [0], [false, 16]]
// Output: [5, [], [16]]
// Explanation: obj[0], obj[1], obj[3][0], and obj[4][0] were falsy and removed.



// Explaination : solution 1
// i-- : Giảm i để kiểm tra lại phần tử mới ở vị trí i
// Vd : 
/**
 * for : i = 0
 * Giá tị obj[o] = null (falsy)
 * If (!obj[i]) : true, nên splice(0, 1) :  Xóa từ elements có index = 0, và xóa đi 1 elem
 * obj = [0, false, 1]
 * Sau đó i giảm i-- = -1, nhưng khi vòng lặp tiếp tục, i sẽ tăng lên 0 trong lần lặp tiếp theo
 * ...
 */