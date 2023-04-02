def runningSum(nums):
    y=[]
    x_index=0
    for x in nums:
        if x_index != 0:
          y.append(sum(nums[:x_index] + [nums[x_index]]))
        else:
            y.append(x)
        x_index+=1
    return y

nums = [1,2,3,4]
print(f"The running sum of {nums} is: {runningSum(nums)}")