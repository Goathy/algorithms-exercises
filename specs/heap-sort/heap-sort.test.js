/*
  
  Create a function called heapSort that accepts an array and performs a heap sort on it in place (heap sorts are normally destructive)
  
  You will probably need at least two more functions: heapify and createMaxHeap
   
*/

const heapSort = (array) => {
	createMaxHeap(array)

	for (let i = array.length - 1; i > 0; i--) {
		swap(0, i, array)
		heapify(array, 0, i)
	}

	return array;
};

const createMaxHeap = (array) => {
	for (let i = Math.floor(array.length / 2) - 1; i >= 0; i--) {
		heapify(array, i, array.length)
	}
};

const swap = (index1, index2, array) => {
	let tmp = array[index2]
	array[index2] = array[index1]
	array[index1] = tmp
}

const heapify = (array, index, heapSize) => {
	let current = index
	const left = (2 * index) + 1
	const right = (2 * index) + 2

	if (heapSize > left && array[current] < array[left]) {
		current = left
	}

	if (heapSize > right && array[current] < array[right]) {
		current = right
	}

	if (current !== index) {
		swap(index, current, array)
		heapify(array, current, heapSize)
	}
};

// unit tests
// do not modify the below code
test("heap sort", function () {
	const nums = [2, 5, 3, 8, 10, 6, 4, 7, 9, 1];
	heapSort(nums);
	expect(nums).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});
