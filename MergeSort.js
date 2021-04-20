// Bottom-Up
function MergeSort(arr, compare) {
	if (arr.length <= 1) return arr;
	const mid = parseInt(arr.length / 2);
	const leftArr = MergeSort(arr.slice(0, mid), compare);
	const rightArr = MergeSort(arr.slice(mid, arr.length), compare);
	let leftIdx = 0,
		rightIdx = 0;
	const result = [];
	while (leftIdx < leftArr.length && rightIdx < rightArr.length) {
		if (compare(leftArr[leftIdx], rightArr[rightIdx]) > 0) {
			result.push(rightArr[rightIdx]);
			rightIdx++;
		} else {
			result.push(leftArr[leftIdx]);
			leftIdx++;
		}
	}
	leftIdx === leftArr.length ? result.push(...rightArr) : result.push(...leftArr);
	return result;
}

exports.MergeSort = MergeSort;
