/*
  Write a function that performs mergesort
  Name the function mergeSort
  It will take in a array of numbers and return a sorted array numbers

  You'll need to write more than just one function
*/

function mergeSort(nums) {
	if (nums.length <= 1) {
		return nums
	}

	const middle = Math.floor(nums.length / 2)

	const left = mergeSort(nums.slice(0, middle))
	const right = mergeSort(nums.slice(middle, nums.length))

	return merge(left, right)
};

function merge(left, right) {
	const result = []
	while (left.length && right.length) {
		if (left[0] <= right[0]) {
			result.push(left.shift())
		} else {
			result.push(right.shift())
		}
	}
	return result.concat(left, right)
}

// unit tests
// do not modify the below code
test("merge sort", function () {
	const nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
	const ans = mergeSort(nums);
	expect(ans).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});
