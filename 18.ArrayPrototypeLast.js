// require: Array Prototype Last

Array.prototype.last = function() {
    return this.length === 0 ? -1 : this[this.length - 1];
}

// Example 1:

// Input: nums = [null, {}, 3]
// Output: 3
// Explanation: Calling nums.last() should return the last element: 3.


// Example 2:

// Input: nums = [] 
// Output: -1
// Explanation: Because there are no elements, return -1.
// [] === 0 : true