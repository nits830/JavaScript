const string1 = new String('Hello World'); // Not advised method to declare string in JS
const string2 = 'Hello world';
console.log(string1 === string2); // false because string1 is object datatype and string2 is primitive datatype
console.log(string1 == string2);  // true


/*
In JavaScript, a primitive (primitive value, primitive data type) is data that 
is not an object and has no methods or properties. There are 7 primitive data types:

string
number
bigint
boolean
undefined
symbol
null

Primitives have no methods but still behave as if they do. When properties are accessed on primitives, JavaScript auto-boxes the value into a wrapper object and accesses the property on that object instead. For example, "foo".includes("f") implicitly creates a String wrapper object and calls String.prototype.includes() on that object. This auto-boxing behavior is not observable in JavaScript code but is a good mental model of various behaviors — for example, why "mutating" primitives does not work (because str.foo = 1 is not assigning to the property foo of str itself, but to an ephemeral wrapper object).

BigInt
In JavaScript, BigInt is a numeric data type that can represent integers in the arbitrary precision format. In other programming languages different numeric types can exist, for examples: Integers, Floats, Doubles, or Bignums.

Undefined
undefined is a primitive value automatically assigned to variables that have just been declared, or to formal arguments for which there are no actual arguments.
*/

let x;
console.log(`x's value is ${x}`);



