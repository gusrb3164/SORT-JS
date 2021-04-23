function ShellSort(arr, compare) {
	function InsertionSort(gap) {
		for (let start = 0; start < gap; start++) {
			let end = start + gap;
			while (start < end && com) {}
		}
	}
	let gap = parseInt(arr.length / 2);
	while (gap > 0) {
		InsertionSort(gap);
		gap = parseInt(gap / 2);
		if (gap % 2 === 0) gap++;
	}
	return arr;
}

exports.ShellSort = ShellSort;
