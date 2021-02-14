/* 
  You are given an array of names.
  Using .find(), we'd like to find the first name which starts with A and is longer than 7 letters.
*/

// write your code here

var names = [
  "Rakesh",
  "Antonio",
  "Alexandra",
  "Andronicus",
  "Annam",
  "Mikey",
  "Anastasia",
  "Karim",
  "Ahmed",
];

function isLongNameThatStartsWithA(eachName) {
  return eachName.length > 7 && eachName[0] === 'A';
}

function findLongNameThatStartsWithA(listNames) {           // Can be done as an arrow function.
  return listNames.find((eachName) => isLongNameThatStartsWithA(eachName));
}

var longNameThatStartsWithA = findLongNameThatStartsWithA(names);

console.log(longNameThatStartsWithA);

/* EXPECTED OUTPUT */
// "Alexandra"
