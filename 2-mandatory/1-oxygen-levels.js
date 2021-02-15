/*
    Many years into the future, a team of Space Voyagers find their ship is low on Oxygen and need to dock
    somewhere safe while they call home for help.
  
    Their computer detects a list of nearby planets that have Oxygen in their atmosphere.

    To be safe, they need to land on the first unnamed planet that has Oxygen levels between 19.5% and 23.5%.

    Write a function that finds the oxygen level of the first safe planet - Oxygen between 19.5% and 23.5%

    Some string methods that might help you here are .replace() and .substring(). 
*/

// Method 1
function isSafeLevel(elem){                                         
  return parseFloat(elem) > 19.5 && parseFloat(elem) < 23.5;
    
}
function safeLevels(levels) {
  return levels.find(isSafeLevel)
  
}

// Method 2
function changeToNum(eachLevel){
  return parseFloat(eachLevel);
}
function isCorrectLevel(num){
  return num > 19.5 && num < 23.5;
}
function safeLevels(levels) {
let newArrWithNum = levels.map(changeToNum);
let firstSafeLevel = newArrWithNum.find(isCorrectLevel) + "%";
return firstSafeLevel;
}

//Method 2 shortcut:
let safeLevels = levels => levels.map(eachLevel => parseFloat(eachLevel)).find(num => num > 19.5 && num < 23.5) + "%";


//Method 3 from "solutions repo":
function safeLevels(oxygenLevels) {
  const safeLevel = oxygenLevels.find(function (level) {
    const numericalLevel = +level.replace("%", "");
    const lowerLimit = 19.5;
    const upperLimit = 23.5;
    return lowerLimit < numericalLevel && numericalLevel < upperLimit;
  });
  return safeLevel;
}

// In this question, we've used the .find() method as it will return the first item that meets some sort of condition. 
// The anonymous function does a check to see if the level is between the right limits and returns a boolean. 
// It should be noted in this question that we've used + to do explicit type coercion - this is when we convert one data type into another. 

// +"100"; // this will evaluate to 100
// Here the expression +'100' in the snippet above will evaluate to a number.

// We also created the variable safeLevel which stores the return value from calling the .find() array method. 
// We don't need to create a variable like this however sometimes it can be worth labelling the results of a function call, 
// especially when it is unclear what a particular expression might mean.

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
