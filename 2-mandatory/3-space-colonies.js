/*
  The voyagers decide that they quite like this planet, and some of them want to settle there and colonise it.

  They call the planet "Alpha" and they decide that the FAMILIES whose last names start with 'A' should stay,
  while the others go on in search of other planets to call home.

  Create a function that returns an array of colonisers that will stay, according to the above rules.

  NOTE: don't include any element that is not a "family".

  HINT: Whenever you read the above the instructions, try to come up with the main input and output and logic
        Input: Is an array
        Output: Is an array
        Logic: Only strings that start with A, and finish with family
  
*/

// Method 1
function colonisers(arr) {
  let getFamilyName = arr.filter(str => str.includes("family"));              // we get an array of ['Adam family', 'Potter family', 'Button family', 'Oscar family', 'Avery family', 'Archer family'] 
  let familyNameWithA = getFamilyName.filter(str => str.charAt(0) === 'A')    
  return familyNameWithA;
}

// Method 2
function canLiveOnAlpha(eachName) {
  return eachName.includes("family") && eachName.charAt(0) ==="A";
}
function colonisers(listOfNames) {
 return listOfNames.filter(canLiveOnAlpha);
}

// Method 3 from "solutions"

// solution-1
function colonisers(families) {
  return families.filter(function (family) {
    const lastName = family.split(" ")[0];
    const secondItem = family.split(" ")[1];

    return secondItem === "family" && lastName.startsWith("A");
  });
}

// In colonisers we're not storing the return value from .filter() in a variable, 
// instead we're just returning the result of filter straight away:

return families.filter(function (family) {
  // filtering logic goes here
});

// We could also use array destructuring syntax in our first solution, 
// which would provide a concise way for accessing an array and assigning some of its contents to variable names.



// solution-2
function colonisers(families) {
  return families.filter(function (family) {
    const [lastName, secondItem] = family.split(" ");
    return secondItem === "family" && lastName.startsWith("A");
  });
}
// On the line, const [lastName,secondItem] = family.split(' '); we're creating two variables lastName and secondItem.
// lastName is being assigned to whatever is at position 0 on the right hand side
// secondItem is being assigned to whatever is at position 1 on the right hand side.


/* ======= TESTS - DO NOT MODIFY ===== */

const voyagers = [
  "Adam family",
  "Potter family",
  "Eric",
  "Aldous",
  "Button family",
  "Jude",
  "Carmichael",
  "Bunny",
  "Asimov",
  "Oscar family",
  "Avery family",
  "Archer family",
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

test("colonisers function works", colonisers(voyagers), [
  "Adam family",
  "Avery family",
  "Archer family",
]);
