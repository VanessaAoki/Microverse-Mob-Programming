var searchInsert = function(nums, target) {
  nums.push(target);
  let uniqueItems = [...new Set(nums)].sort(function (a, b) {  return a - b;  });
    let lo = 0, hi = uniqueItems.length - 1; // setting initial boundaries
  while (lo < hi) {
    let mid = lo + Math.floor((hi - lo + 1)/2); // calculating mid, left/lower mid
    // comparing the target to mid to shrink boundary
    if (target < uniqueItems[mid]) { // if target is greater than mid, it must exist in right of mid, so we exclude what's left of the array, setting the high as the new mid
      hi = mid - 1; // mid is excluded
    } else {
      lo = mid; // mid is included
    }
  };
  return lo;
};