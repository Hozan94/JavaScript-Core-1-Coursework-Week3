/*
  You are given a list of some London street names.
  
  Write a function that will return all street names which contain 'Lane' in their name.

  HINT: string and array methods that could be helpful (indexOf, filter)
*/

// Method 1
function getLanes(streetNames) {
  let newStreetNames = streetNames.filter(street => street.indexOf("Lane") > -1)
  return newStreetNames;
}

// Method 2
function getLanes(streetNames) {
  let newStreetNames = streetNames.map(street => street.split(" ")).filter(newStreet => newStreet.includes("Lane")).map(newStreet => newStreet.join(" "));
  return newStreetNames;                                                                                                               
}        

//^^^Above method^^^ : 1st iteration changes each string into an array which contains two strings e.g "Abchurch Lane" => ["Abchurch" ,"Lane"] 
// 2nd iteration checks which nested array inside the main/parent array contains the word "Lane" , and then return it if it is true and have it inside a new main/parent array 
// 3rd iteration to change each nested array inside the main/ parent array back to a string e.g ["Abchurch" , "Lane"] => "Abchurch Lane"                

// Method 3 from the "solution"
function getLanes(streetNames) {
  return streetNames.filter((name) => name.includes("Lane"));
}
// In getLanes, we're using an implicit return in the arrow function:

(name) => name.includes("Lane");
// There are no curly braces { } after the => which means the return value will be the expression immediately after the =>. 
// In this case, the return value will be the expression name.includes('Lane') which will evaluate to either true or false.






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
