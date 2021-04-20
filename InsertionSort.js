function InsertionSort(arr, compare) {
	for (let end = 1; end < arr.length; end++) {
		let idx = end;
		while (idx > 0) {
			if (compare(arr[idx - 1], arr[idx]) > 0)
				[arr[idx - 1], arr[idx]] = [arr[idx], arr[idx - 1]];
			idx--;
		}
	}
	return arr;
}

exports.InsertionSort = InsertionSort;
