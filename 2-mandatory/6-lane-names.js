/*
  You are given a list of some London street names.
  
  Write a function that will return all street names which contain 'Lane' in their name.

  HINT: string and array methods that could be helpful (indexOf, filter)
*/

// Method 1
function getLanes(arr) {
  let newArr = arr.filter(str => str.indexOf("Lane") > -1)
  return newArr;
}

// Method 2
function getLanes(arr) {
  let newArr = arr.map(str => str.split(" ")).filter(eachArr => eachArr.includes("Lane")).map(eachNewArr => eachNewArr.join(" "));
  return newArr;                                                                                                               
}        

//^^^Above method^^^ : 1st iteration changes each string into an array which contains two strings e.g "Abchurch Lane" => ["Abchurch" ,"Lane"] 
// 2nd iteration checks which nested array inside the main/parent array contains the word "Lane" , and then return it if it is true and have it inside a new main/parent array 
// 3rd iteration to change each nested array inside the main/ parent array back to a string e.g ["Abchurch" , "Lane"] => "Abchurch Lane"                




/* ======= TESTS - DO NOT MODIFY ===== */

const streetNames = [
  "Abchurch Lane",
  "Adam's Court",
  "Addle Hill",
  "Addle Lane",
  "Alban Highwalk",
];

const util = require("util");

function test(test_name, actual, expected) {
  let status;
  if (util.isDeepStrictEqual(actual, expected)) {
    status = "PASSED";
  } else {
    status = `FAILED: expected: ${util.inspect(
      expected
    )} but your function returned: ${util.inspect(actual)}`;
  }

  console.log(`${test_name}: ${status}`);
}

test("getLanes function works", getLanes(streetNames), [
  "Abchurch Lane",
  "Addle Lane",
]);
