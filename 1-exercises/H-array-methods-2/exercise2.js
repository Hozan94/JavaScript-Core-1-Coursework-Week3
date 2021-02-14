/*
  Array methods - .join()
  -------------------------
  Complete the capitalise function 
  It should return a string with the first letter in uppercase
  For example, capitailise("hello") should return "Hello"
  Tip: use the string method .split() and the array method .join()
*/

function capitalise(str) {
  let capLetter = str.charAt(0).toUpperCase();  //Make the first letter in the string as capital and assign it as a new value to a variable 
  let arr = capLetter.split("");                //To make the new string letter as a string inside an array; 
  let newArr = arr.concat(str.slice(1));        //Create a new array which contains the variable 'capLetter' and the letters in 'str' from index 1 and onward. 
  let newWord = newArr.join("");                //Make the new array as a string
  return newWord;
}

function capitalise(str) {                      //Another method;
  let arr = str.split("");
  let cap = arr[0].toUpperCase();
  let capWord = cap + str.slice(1);
  return capWord;
}


/* 
  DO NOT EDIT BELOW THIS LINE
  --------------------------- */
var name = "daniel";

console.log(capitalise(name));
console.log(capitalise("hello"));

/* 
  EXPECTED RESULT
  ---------------
  Daniel
  Hello
*/
