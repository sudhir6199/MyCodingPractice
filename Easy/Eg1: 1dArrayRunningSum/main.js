var runningSum = function(nums) {
    
    for (i=1;i<nums.length;i++) {
          nums[i]=nums[i-1]+nums[i]
    }
    return nums
};

nums = [1,2,3,4]
console.log(`The running sum of ${nums} is: ${runningSum(nums)}`)