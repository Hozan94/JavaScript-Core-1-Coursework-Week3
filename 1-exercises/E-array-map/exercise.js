// Using the .map() method, create a new array with `numbers` multiplied by 100
// Write multiple solutions using different syntax (as shown in the README)

var numbers = [0.1, 0.2, 0.3, 0.4, 0.5];


// Method one
function multiplyByHundred(eachNumber){
    return eachNumber * 100;
}

var newNumbers = numbers.map(multiplyByHundred);

// Method two
var newNumbers1 = numbers.map(function (eachNumber){
    return eachNumber * 100;
});

// Method three
var newNumbers2 = numbers.map(eachNumber => eachNumber * 100);


// Results
console.log(newNumbers);
console.log(newNumbers1);
console.log(newNumbers2);