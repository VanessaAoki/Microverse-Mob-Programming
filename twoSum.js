var twoSum = function(nums, target) {
    let result = [];
    
    for (let i = 0; i < nums.length; i++) {
        
        if (nums[i] +  nums[i+1] === target) {
            result.push(i);
            result.push(i+1);
            return result;
        } else {
            for (let j = i+1; i < nums.length; j++) {
                if(nums[i] +  nums[j] === target) {
                    result.push(i);
                    result.push(j);
                    return result;
                }
            }
        }
    }  
};
