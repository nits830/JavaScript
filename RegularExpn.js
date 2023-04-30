// The RegExp object is used for matching text with a pattern. abc@gmail.com

const emailValidatorRegex = new RegExp('^.+@.+\..+$');
const userInput = 'invalidmail@g';

/*
The test() method executes a search for a match between a regular expression and a specified string. Returns true if there is a match; false otherwise.
*/
const isValid = emailValidatorRegex.test(userInput);


//----------------------------------------------------------------------------------------

/* Identifiers, Quantifiers

Identifiers is what we are trying to match
*/
// Example 1
let string1 = 'my favourite';
let string2 = 'my favourite pie';

let regex = new RegExp('p');
console.log(regex.test(string1)); // false 
console.log(regex.test(string2)); //true --> Because it matched 'p' in the world pie

// Example 2

regex = new RegExp('favourite');
console.log(regex.test(string1));  // true
console.log(regex.test(string2));  // true

// Example 3

console.log(/favourite/.test(string1)); //true
/[A-Z]/.test(string1);
/[a-z]/.test(string1);
/[0-9]/.test(string1);
/[A-Za-z0-9 ]/.test(string1); // There is a space after 9 for it to be matched
/./.test(string1); // Period as RegExp represent any characters whatsoever. Returns true here

/\d/.test(string1); //Equivalent to [0-9] RegExp
/\s/.test(string1); // Matches any white space characters
/\w/.test(string1); // Matches all numbers and letters i.e.. alpha-numeric

/^f/.test(string1); // Matches if the first letter starts with f. Here returns false
/e$/.test(string1); // Matched last character of string1


/code||pie/.test(string1); // Tries to match code or pie in string1





//----------------------------------------------------------------------------------------
// The exec() method executes a search for a match in a specified string and returns a   result array, or null.
// Quantifiers

console.log(/[a-z]/.exec(string1)); // returns 'm'

console.log(/[a-z]*/.exec(string1)); // * matches any lower case character[a-z] more than 0 times

/[a-z]+/.exec(string1); // matches 1 or more of the preceding character
/[a-z]?/.exec(string1); // matches 0 or 1 of the preceding character

console.log(/[a-z ]+/.exec(string1)); // returns 'my favourite'

/[a-z ]{5}/.exec(string1);      // Matches the 1st five characters. Returns 'my fa'
/[a-z ]{2,6}/.exec(string1);    // Matches range of characters


//----------------------------------------------------------------------------------------
// Advance searching with flags

/*
The flags accessor property represents the flags of the current regular expression object.


*/

regex = /[a-z]+/g;  // g is a flag here for global



//----------------------------------------------------------------------------------------


/* for my future referencing,

  ^ = start of a line, 
  \d = [0-9], {4} specifies 4 digits, 
  {6} specifies 6 digits, $ - end of a line
  
  first alternative ^\d{4}$ - equivalent to [0-9], matches exactly 4 digits.
  second alternative ^\d{6}$ - "", matches previous token exactly 6 digits.
  
   use RegEx .test to search for these characters stored.
   
*/ 

const validatePIN = pin => /^\d{4}$|^\d{6}$/.test(pin);




