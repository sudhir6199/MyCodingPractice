package main

import "fmt"

func runningSum(nums []int) []int {
	for i := 1; i < len(nums); i++ {
		nums[i] = nums[i-1] + nums[i]
	}
	return nums
}

func main() {

	nums := []int{1, 2, 3, 4}

	input := make([]int, len(nums))
	copy(input, nums)
	// Here we are copying "nums" variable to new variable "input" because nums variable will value will be consistent accross the functions i.e. global within all functions a function calls, unlike in python .

	fmt.Printf("1dArray Running Sum of ==> %v is %v \n", input, runningSum(nums))
}
