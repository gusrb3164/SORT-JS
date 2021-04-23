const InsertionSort = require('./InsertionSort').InsertionSort;
const SelectionSort = require('./SelectionSort').SelectionSort;
const BubbleSort = require('./BubbleSort').BubbleSort;
const MergeSort = require('./MergeSort').MergeSort;
const QuickSort = require('./QuickSort').QuickSort;
const HeapSort = require('./HeapSort').HeapSort;

const arr = [];
for (let i = 0; i < 20; i++) {
	arr.push(Math.floor(Math.random() * (100 - 0)));
}

// all sorts : (array, function compare(a,b)) => {}
sortList = [InsertionSort, SelectionSort, BubbleSort, MergeSort, QuickSort, HeapSort];
sortList.map((sort) => {
	console.log(sort(arr, (a, b) => a - b));
});
