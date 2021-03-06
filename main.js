const InsertionSort = require('./InsertionSort').InsertionSort;
const SelectionSort = require('./SelectionSort').SelectionSort;
const BubbleSort = require('./BubbleSort').BubbleSort;
const MergeSort = require('./MergeSort').MergeSort;
const QuickSort = require('./QuickSort').QuickSort;
const HeapSort = require('./HeapSort').HeapSort;
const ShellSort = require('./ShellSort').ShellSort;

const arr = [];
for (let i = 0; i < 10; i++) {
	arr.push(Math.floor(Math.random() * (100 - 0)));
}

// all sorts : (array, function compare(a,b)) => {}
sortName = [
	'InsertionSort',
	'SelectionSort',
	'BubbleSort',
	'MergeSort',
	'QuickSort',
	'HeapSort',
	'ShellSort',
];
sortList = [InsertionSort, SelectionSort, BubbleSort, MergeSort, QuickSort, HeapSort, ShellSort];
sortList.map((sort, idx) => {
	console.log(`======${sortName[idx]}======`);
	console.log(sort(arr, (a, b) => b - a));
});
