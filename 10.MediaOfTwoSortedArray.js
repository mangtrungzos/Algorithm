// Require: Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

// The overall run time complexity should be O(log (m+n))

// Nếu mảng có 𝑛 phần tử:
//   1. n lẻ: Trung vị là giá trị ở vị trí (n + 1)/2 trong mảng sắp xếp
//   2. n chẵn: Trung vị là giá trị ở vị trí n/2 và n/2 + 1

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

// Solution 1:
var findMedianSortedArrays = function (nums1, nums2) {
  let numsMerged = nums1.concat(nums2);
  let numsSorted = numsMerged.sort((nums1, nums2) => nums1 - nums2);
  let n = numsSorted.length;

  let mid = Math.floor(n / 2);
  if (n % 2 === 0) {
    return (numsSorted[mid - 1] + numsSorted[mid]) / 2;
  } else {
    return numsSorted[mid];
  }
};

// Solution 2: Don't use method in array (concat, sort)
