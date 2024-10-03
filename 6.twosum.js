function twoSum(nums, target) {
    // Initialise a map to store the first
    const hashMap = new Map();

    // Loop through the numbers
    const arr = nums.length;
    for (let i = 0; i < arr; i++) {
        // Determine the hashMap (required number) for the current number
        const sum = target - nums[i];

        // Check if the hashMap exists in the map
        if(hashMap.has(sum)) {
            return [hashMap.get(sum), i];
        }

        // If not, add the current hashMap to the map
        hashMap.set(nums[i], i);
    }
}

// console.log(twoSum([3,2,4], 6));
// console.log(twoSum([3,3], 6));
console.log(twoSum([2,7,11,15], 9));


