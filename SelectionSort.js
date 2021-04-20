function SelectionSort(arr, compare) {
	for (let start = 0; start < arr.length - 1; start++) {
		let swapIdx = start;
		for (let compIdx = start + 1; compIdx < arr.length; compIdx++) {
			if (compare(arr[swapIdx], arr[compIdx]) > 0) swapIdx = compIdx;
		}
		[arr[start], arr[swapIdx]] = [arr[swapIdx], arr[start]];
	}
	return arr;
}

exports.SelectionSort = SelectionSort;
