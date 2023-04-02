package main

import "fmt"

func sum(nums []int) int {

	sum := 0
	for i := 0; i < len(nums); i++ {
		sum += nums[i]
	}

	return sum
}

func pivotIndex(nums []int) int {

	for i := 0; i < len(nums); i++ {
		if sum(nums[:i]) == sum(nums[i+1:]) {
			return i
		}
	}

	return -1
}

func main() {

	nums := []int{1, 7, 3, 6, 5, 6}
	input := make([]int, len(nums))
	copy(input, nums)

	fmt.Printf("Pivot Index of ==> %v is %v \n", input, pivotIndex(nums))
}
