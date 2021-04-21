function QuickSort(arr, compare) {
	function partition(left, right) {
		let pivot = parseInt((left + right) / 2);
		while (left < right) {
			while (compare(arr[left], arr[pivot]) < 0) left++;
			while (left < right && compare(arr[right], arr[pivot]) >= 0) right--;
			[arr[left], arr[right]] = [arr[right], arr[left]];
		}
		[arr[left], arr[pivot]] = [arr[pivot], arr[left]];
		return left;
	}

	function splitSort(left, right) {
		if (left >= right) return;
		let partitionIdx = partition(left, right);
		splitSort(left, partitionIdx - 1);
		splitSort(partitionIdx + 1, right);
	}
	splitSort(0, arr.length - 1);
	return arr;
}

exports.QuickSort = QuickSort;
