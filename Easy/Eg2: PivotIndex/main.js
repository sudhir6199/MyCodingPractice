
function sum(x) {
    let sum = 0; // declare the sum variable and initialize it to 0
    for (let i = 0; i < x.length; i++) {
        sum = sum + x[i]; // add the value at each index to the sum variable
    }
    return sum;
}

function pivotIndex(nums) {
    for (let i = 0; i < nums.length; i++) {
        if (sum(nums.slice(0, i)) == sum(nums.slice(i + 1))) {
            return i;
        }
    }
    return -1;
};

nums=[1,7,3,6,5,6]
console.log(`The pivotIndex of ${nums} is: ${pivotIndex(nums)}`)
