const arr = [[1,2,3], [2,3], [3,4], 4];
let num = arr.length;
for(let i = 0; i < arr.length; i++){
    for (a in arr[i]){
        num += arr[i][a]
    }
};
console.log(num %  5);