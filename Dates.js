let now = new Date();

// The value which is stored within the Date object is the number of milliseconds that have elapsed since midnight on January 1, 1970 UTC

console.log(now.valueOf()); // 1679828106370 milliseconds
let now1 = new Date(2020, 11, 2, 12, 9)
console.log(now1);

//----------------------------------------------------------------------------------------
// toString()
let myDate = new Date();
console.log(myDate.toString());

//----------------------------------------------------------------------------------------
//toISOString()
myDate.toISOString();


//----------------------------------------------------------------------------------------

//Get date
console.log(myDate.getDate()); // 26
console.log(myDate.getMonth()); // return index of the month, January being 0
console.log(myDate.getFullYear()); // 2023



