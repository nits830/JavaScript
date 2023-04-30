// replaceAll()
/*
 The replaceAll() method returns a new string with all matches of a pattern replaced by a replacement. The pattern can be a string or a RegExp, and the replacement can be a string or a function to be called for each match. The original string is left unchanged.
 
 Syntax: replaceAll(pattern, replacement)

 const newStr = str.replaceAll(regexp|substr, newSubstr|function)
 */

 let myString = 'My Dog jumped on the bed. My dog is a bad Dog.';

 let newString = myString.replaceAll(/[Dd]{1}og/g, 'cat');

console.log(newString); // My cat jumped on the bed. My cat is a bad cat.



//----------------------------------------------------------------------------------------
// substring()

myString = 'Hello World';
console.log(myString.substring(5,10)); //Worl

myString = 'javascript';
console.log(myString[0].toUpperCase() + myString.substring(1, myString.length));  // Javascript



//----------------------------------------------------------------------------------------
// trim()

let extData = [
    {
        title: 'Coding',
        author: '  Jack'
    },
    {
        title:'    English',
        author: 'Sam      '
    }
];
for(let i = 0; i < extData.length; i++)
{
    const currentTitle = extData[i].title;
    const currentAuthor = extData[i].author;

    extData[i].title = currentTitle.trim();
    extData[i].author = currentAuthor.trim();
}

console.log(extData);



//----------------------------------------------------------------------------------------
// match() method

const regex = /[a-z]+/;

let str = 'asdadsfdfoa1233243243543mdiaodmao';
console.log(regex.exec(str));  // asdadsfdfoa
console.log(str.match(regex)); // asdadsfdfoa

// Note putting global flag, the above tow methods behave differently
