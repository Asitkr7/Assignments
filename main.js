
//searching
var search =require('./search.js');
var sort =require('./sort.js');
var arr=[2,9,4,5,7,5,6,88,42]
var arr1=[10,20,32,35,40,55,65,88,90]
var key;

console.log(search.linearSearch(arr,42));

console.log(search.binarySearch(arr1,10));

//sorting 
var arr2=[2,9,4,5,7,5,6,88,42]
var arr3=[2,9,4,5,7,54,8,98,189]
var arr4=[2,3,7,5,8,12,99,52]

console.log(sort.insertionSort(arr4));
console.log(sort.selectionSort(arr2));
console.log(sort.bubbleSort(arr3));