// push(), pop(), shift(), unshift()
let arr = [1, 2, 3 ,5, 6];
arr.pop(); // pops out 6
arr.pop(); // pops out 5
arr.push(4,5,6);
console.log(arr); //[1,2,3,4,5,6]

arr.unshift(0); // The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.
console.log(arr); // [0, 1, 2, 3, 4, 5, 6]


arr.shift(); // The shift() method removes the first element from an array and returns that removed element. This method changes the length of the array.
console.log(arr); // [1, 2, 3, 4, 5, 6]







//----------------------------------------------------------------------------------------
// slice() method:
/* 
The slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.
*/

const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
console.log(animals.slice(2)); // Expected output: Array ["camel", "duck", "elephant"]
console.log(animals.slice(2,4)); // Expected output: Array ["camel", "duck"]



//--------------------------------------------------------------------------------------


//splice() method

/*
 The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place. To access part of an array without modifying it, see slice().
 Syntax = splice(start, deleteCount, item1, item2, itemN)
 */

 let months = ['Jan', 'March', 'April', 'June'];
 months.splice(1, 0, 'Feb'); // Inserts at index 1 -> ["Jan", "Feb", "March", "April", "June"]
 months.splice(4, 1, 'May'); // // Replaces 1 element at index 4 -> ["Jan", "Feb", "March", "April", "May"]

 //Example 1
const myFish = ["angel", "clown", "mandarin", "sturgeon"];
const removed = myFish.splice(2, 0, "drum", "guitar"); // Remove 0 (zero) elements before index 2, and insert "drum" and "guitar" 
console.log(removed); // []
console.log(myFish); // ["angel", "clown", "drum", "guitar", "mandarin", "sturgeon"]

//Example 2
removed = myFish.splice(-3, 2);
console.log(removed); // [ 'clown', 'mandarin' ]
console.log(myFish); // [ 'angel', 'sturgeon' ]

// Misc Examples
myFish.splice(2, 2); // Remove 2 elements, starting from index 2
myFish.splice(2);    // Remove all elements, starting from index 2
myFish.splice(0, 2, "parrot", "anemone", "blue"); // Remove 2 elements from index 0, and insert "parrot",   "anemone" and "blue

//----------------------------------------------------------------------------------------

// find() 

//The find() method returns the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.

/* 1. If you need the index of the found element in the array, use findIndex().

   2. If you need to find the index of a value, use indexOf(). (It's similar to findIndex(), but checks each element for equality with the value instead of using a testing function.)

    3. If you need to find if a value exists in an array, use includes(). Again, it checks each element for equality with the value instead of using a testing function.

    4. If you need to find if any element satisfies the provided testing function, use some(). */

array1 = [5, 12, 8, 130, 44];
let found = array1.find(element => element > 10); // found = 12



//----------------------------------------------------------------------------------------


// Copying Array into other array

let items = ['GFG', 'Geeks', 'G4G'];
let new_Array = [];

items.forEach(function(item) {
    new_Array.push(item);
});

console.log(new_Array);





//----------------------------------------------------------------------------------------

// Array Concatenation

const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const children = arr1.concat(arr2);
console.log(children);   // [ 'Cecilie', 'Lone', 'Emil', 'Tobias', 'Linus' ]


//----------------------------------------------------------------------------------------

// COPYWITHIN(): array.copyWithin(target, start, end) --> returns changed array

let fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.copyWithin(2,0,2);  // Copies first 2 elements i.e.. start to end-1 to target index(here target =2)
console.log(fruits); // [ 'Banana', 'Orange', 'Banana', 'Orange' ]


//----------------------------------------------------------------------------------------

//Entries() --> Key-Value Pair

fruits = ["Banana", "Orange", "Apple", "Mango"];
const f  = fruits.entries();

console.log(f.next().value); // [ 0, 'Banana' ]
console.log(f.next().value); // [ 1, 'Orange' ]

for(let [index, element] of fruits.entries()){
    console.log(index, element);
}

for([index, element] of fruits.entries()){
    console.log(element);
}


//Iterating sparse arrays
//entries() will visit empty slots as if they are undefined.

for (const element of [, "a"].entries()) {
  console.log(element);
}
// [0, undefined]
// [1, 'a']

//----------------------------------------------------------------------------------------

// join() method
let a = ["Hello", "World"];
console.log(a.join()); // By default it joins using ','
console.log(a.join(" "));  // Hello World

//----------------------------------------------------------------------------------------

// includes() --> includes(searchElement), includes(searchElement, fromIndex)
// The includes() method determines whether an array includes a certain value among its entries,
// returning true or false as appropriate.

a = ['a', 'b', 'c'];
console.log(a.includes('d')); //false



//----------------------------------------------------------------------------------------
// every() --> The every() method tests whether all elements in the array pass the test 
//             implemented by the provided function. It returns a Boolean value.

const isBelowThreshold = (value) => value < 40;
const array1 = [1, 30, 59, 29, 10, 13];

console.log(array1.every(isBelowThreshold)); // false as 59 > 40









