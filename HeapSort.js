function HeapSort(arr, compare) {
	console.log('HeapSort');
	function Heapify(orderedNum) {
		for (let i = parseInt((arr.length - orderedNum) / 2) - 1; i >= 0; i--) {
			const parentIdx = i;
			const leftIdx = i * 2 + 1;
			const rightIdx = i * 2 + 2;
			if (compare(arr[parentIdx], arr[leftIdx]) < 0)
				[arr[parentIdx], arr[leftIdx]] = [arr[leftIdx], arr[parentIdx]];
			if (rightIdx < arr.length - orderedNum && compare(arr[parentIdx], arr[rightIdx]) < 0)
				[arr[parentIdx], arr[rightIdx]] = [arr[rightIdx], arr[parentIdx]];
		}
		[arr[0], arr[arr.length - 1 - orderedNum]] = [arr[arr.length - 1 - orderedNum], arr[0]];
	}
	for (let i = 0; i < arr.length - 1; i++) Heapify(i);
	return arr;
}

exports.HeapSort = HeapSort;
