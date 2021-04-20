function BubbleSort(arr, compare) {
	let idx = arr.length - 1;
	while (idx > 0) {
		for (let i = 0; i < idx; i++) {
			if (compare(arr[i], arr[i + 1]) > 0) [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
		}
		idx--;
	}
	return arr;
}

exports.BubbleSort = BubbleSort;
