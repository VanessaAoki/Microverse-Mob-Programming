// Not binary solution
var search = function(nums, target) {
  let awnser  = nums.indexOf(target);
  return awnser === undefined ? -1 : awnser
};

// Binary solution
var search = function(nums, target) { 
    let first = 0
    let last = nums.length - 1

    while (first <= last) {
        let mid = Math.floor(((first + last) / 2))
        if(nums[mid] < target){
            first = mid + 1
        } else if(nums[mid] > target){
            last = mid - 1
        } else{
            return mid
        }
    }
    return - 1
};


[-1,0,3,5,9,12], 9
