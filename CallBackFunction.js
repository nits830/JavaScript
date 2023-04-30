
// Example 1

function myCallBack(randomNumber){
    return randomNumber *2;
}

function mainFunction(randomNumber, shouldCall, callBack){

    let result =  randomNumber;

    if(shouldCall)
    {
        result = callBack(randomNumber);
    }

    return result;
}

let ans1 = mainFunction(20, true, myCallBack);
console.log(ans1);


//----------------------------------------------------------------------------------------
// Example 2

let ans2 = mainFunction(20, true, function(num){return num * 5;});
console.log(ans2); 

//----------------------------------------------------------------------------------------
// Example 3

let ans3 = mainFunction(20, true, (num) => {return num * 10;});
console.log(ans3)


//----------------------------------------------------------------------------------------
// Example 4

let ans4 = mainFunction(20, true, num => num * 1000);
console.log(ans4);

//----------------------------------------------------------------------------------------
// Example 5

const myArray = [2,4,6,8];

function myCustomMapOperationCallBack(itemFromArray){
    return itemFromArray * 2;
}

const newArray = myArray.map(myCustomMapOperationCallBack);
console.log(newArray); //  [4, 8, 12, 16 ]


//----------------------------------------------------------------------------------------
// Example 6

const strArray = ["Hello", "World", "Bye"];

console.log(strArray.map(itemFromArray => itemFromArray[0])); // [ 'H', 'W', 'B' ]

