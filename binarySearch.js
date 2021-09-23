// 115 ms
var search = function(nums, target) {
  let awnser  = nums.indexOf(target);
  return awnser === undefined ? -1 : awnser
};

let low = 0, high = nums.length - 1;
let middle = low + Math.floor((high - low + 1) / 2);
if (target < nums[middle]) {
  high = mid - 1
} else {
  low = middle;
};
return nums[low] == target ? low : -1;


[-1,0,3,5,9,12], 9
