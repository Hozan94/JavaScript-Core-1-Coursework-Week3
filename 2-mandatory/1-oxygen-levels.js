/*
    Many years into the future, a team of Space Voyagers find their ship is low on Oxygen and need to dock
    somewhere safe while they call home for help.
  
    Their computer detects a list of nearby planets that have Oxygen in their atmosphere.

    To be safe, they need to land on the first unnamed planet that has Oxygen levels between 19.5% and 23.5%.

    Write a function that finds the oxygen level of the first safe planet - Oxygen between 19.5% and 23.5%

    Some string methods that might help you here are .replace() and .substring(). 
*/

// Method 1
function findNum(elem){                                         
  return parseFloat(elem) > 19.5 && parseFloat(elem) < 23.5;
    
}
function safeLevels(arr) {
  let firstCorrectLevel = arr.find(findNum)
  return firstCorrectLevel;
  
}

// Method 2
function newNum(elem){
  return parseFloat(elem);
}
function correctNum(num){
  return num > 19.5 && num < 23.5;
}
function safeLevels(arr) {
let newArrWithNum = arr.map(newNum);
let correctLevel = newArrWithNum.find(correctNum) + "%";
return correctLevel;
}

//Method 2 shortcut:
let safeLevels = arr => arr.map(elem => parseFloat(elem)).find(num => num > 19.5 && num < 23.5) + "%";


//Method 3 invalid
// function eachStr(str){
// return str;
// }
// function safeLevels(arr) {
//   let newArr = arr.map(replace(eachStr,parseFloat(eachStr)));
//   let correctLevel = newArr.find(correctNum) + "%";
//   return correctLevel;
// }

/* ======= TESTS - DO NOT MODIFY ===== */

const oxygenLevels1 = ["24.2%", "11.3%", "19.9%", "23.1%", "29.3%", "20.2%"];
const oxygenLevels2 = ["30.8%", "23.5%", "18.8%", "19.5%", "20.2%", "31.6%"];
const oxygenLevels3 = ["200%", "21.1%"];

const util = require("util");

function test(test_name, actual, expected) {
  let status;
  if (actual === expected) {
    status = "PASSED";
  } else {
    status = `FAILED: expected: ${util.inspect(
      expected
    )} but your function returned: ${util.inspect(actual)}`;
  }

  console.log(`${test_name}: ${status}`);
}

test("safeLevels function works - case 1", safeLevels(oxygenLevels1), "19.9%");

test("safeLevels function works - case 2", safeLevels(oxygenLevels2), "20.2%");

test("safeLevels function works - case 3", safeLevels(oxygenLevels3), "21.1%");
