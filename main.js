const InsertionSort = require('./InsertionSort').InsertionSort;
const SelectionSort = require('./SelectionSort').SelectionSort;
const BubbleSort = require('./BubbleSort').BubbleSort;
const MergeSort = require('./MergeSort').MergeSort;

const arr = [32, 21, 134, 33, 32, 1, 99, 32121, 5454, 237, 211, 33232, 5, 10, 21];

// all sorts : (array, function compare(a,b)) => {}
sortList = [InsertionSort, SelectionSort, BubbleSort, MergeSort];
sortList.map((sort) => {
	console.log(sort(arr, (a, b) => b - a));
});
