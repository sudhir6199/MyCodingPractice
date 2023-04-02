def pivotIndex(nums):
        i=0
        while i<len(nums):
            if sum(nums[:i]) == sum(nums[i+1:]):
                return i
            i=i+1
        return -1

nums=[1,7,3,6,5,6]
print(f"The Pivot Index of {nums} is: {pivotIndex(nums)}")