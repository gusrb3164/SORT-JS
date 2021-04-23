function ShellSort(arr, compare) {
	function InsertionSort(gap) {
		for (let start = 0; start < gap; start++) {
			for (let end = start + gap; end < arr.length; end += gap) {
				let idx = end;
				while (idx > start && compare(arr[idx - gap], arr[idx]) > 0) {
					[arr[idx - gap], arr[idx]] = [arr[idx], arr[idx - gap]];
					idx -= gap;
				}
			}
		}
	}
	let gap = parseInt(arr.length / 2);
	while (gap > 0) {
		InsertionSort(gap);
		gap = parseInt(gap / 2);
		if (gap > 0 && gap % 2 === 0) gap++;
	}
	return arr;
}

exports.ShellSort = ShellSort;
