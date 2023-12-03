// for both exercises, the id of the object you're searching for is given to you
// as integer. return the whole object that you're looking for
//
// it's up to you what to return if the object isn't found (we're not testing that)

function linearSearch(id, array) {
	for (let i = 0; i < array.length; i++) {
		if (array[i].id === id) {
			return array[i]
		}
	}
}

function binarySearch(id, array) {
	let start = 0
	let end = array.length

	while (start <= end) {
		const middle = Math.floor((start + end) / 2)

		if (array[middle].id === id) {
			return array[middle]
		}

		if (array[middle].id > id) {
			end = middle - 1
		} else {
			start = middle + 1
		}
	}
}

function recursiveBinarySearch(id, array, start = 0, end = array.length) {
	const middle = Math.floor((start + end) / 2)

	if (array[middle].id === id) {
		return array[middle]
	}

	if (array[middle].id > id) {
		return recursiveBinarySearch(id, array, start, middle - 1)
	} else {
		return recursiveBinarySearch(id, array, middle + 1, end)
	}
}

// unit tests
// do not modify the below code
test("linear search", function () {
	const lookingFor = { id: 5, name: "Brian" };
	expect(
		linearSearch(5, [
			{ id: 1, name: "Sam" },
			{ id: 11, name: "Sarah" },
			{ id: 21, name: "John" },
			{ id: 10, name: "Burke" },
			{ id: 13, name: "Simona" },
			{ id: 31, name: "Asim" },
			{ id: 6, name: "Niki" },
			{ id: 19, name: "Aysegul" },
			{ id: 25, name: "Kyle" },
			{ id: 18, name: "Jem" },
			{ id: 2, name: "Marc" },
			{ id: 51, name: "Chris" },
			lookingFor,
			{ id: 14, name: "Ben" }
		])
	).toBe(lookingFor);
});

test("binary search", function () {
	const lookingFor = { id: 23, name: "Brian" };
	expect(
		binarySearch(23, [
			{ id: 1, name: "Sam" },
			{ id: 3, name: "Sarah" },
			{ id: 5, name: "John" },
			{ id: 6, name: "Burke" },
			{ id: 10, name: "Simona" },
			{ id: 12, name: "Asim" },
			{ id: 13, name: "Niki" },
			{ id: 15, name: "Aysegul" },
			{ id: 17, name: "Kyle" },
			{ id: 18, name: "Jem" },
			{ id: 19, name: "Marc" },
			{ id: 21, name: "Chris" },
			lookingFor,
			{ id: 24, name: "Ben" }
		])
	).toBe(lookingFor);
});

test("recursive binary search", function () {
	const lookingFor = { id: 23, name: "Brian" };
	expect(
		recursiveBinarySearch(23, [
			{ id: 1, name: "Sam" },
			{ id: 3, name: "Sarah" },
			{ id: 5, name: "John" },
			{ id: 6, name: "Burke" },
			{ id: 10, name: "Simona" },
			{ id: 12, name: "Asim" },
			{ id: 13, name: "Niki" },
			{ id: 15, name: "Aysegul" },
			{ id: 17, name: "Kyle" },
			{ id: 18, name: "Jem" },
			{ id: 19, name: "Marc" },
			{ id: 21, name: "Chris" },
			lookingFor,
			{ id: 24, name: "Ben" }
		])
	).toBe(lookingFor);
});
