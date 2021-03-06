/*
 Before we go the big story; we will introduce more string methods.
 Some of the methods you're using in Array have similar ones with strings.
 Methods like : IndexOf, Include, Search, Slice , Spilt and more.
 
 You can always google how a method of a string works!
 Here are links to some of those:
  - https://www.w3schools.com/js/js_string_methods.asp
  - https://javascript.info/string#quotes
 Now let's do this small exercise
 
 Using string methods update the checkCodeIsThere() function
  - The function will have a string as a paramter
  - The function should check if the string has the word "code" exists in the string
  - If it does exist, return the index of it, if not return "Not found"

 Hint: search for string methods like Includes and IndexOf.
*/

function checkCodeIsThere(stringText) {
  let magicWord = "code";
  //edit code below
  if (stringText.includes(magicWord)) {
    return stringText.indexOf(magicWord);
  } else {
    return "Not found";
  }
}

/*
  I am new to London and would like to know what transport I can take to different famous locations.
  The input provided contains a list of locations in London. Each of locations is followed by a list
  of transport modes that can be used to get there.
  Let's see an example:
  
  To take to Tower Bridge, you can use tube or river boat. This information will represented as 
    ["Tower Bridge", "tube", "river boat"]

  Where
    the 1st element says the name of the location,
    and rest of them says the transport modes.

  You will then get a list of these information, e.g:
  [
    ["Tower Bridge", "tube", "river boat"],
    ["Abbey road", "double decker"],
    ["London Eye", "tube", "river boat", "bus"]
  ]

  You have to finish up the body of journeyPlanner function that should tell where I can go if I only
  want to use a specific mode of transport. But before jumping straight to the main function, we will
  break down the whole task into smaller steps that make our job easier.

  This technic is also referred as "problem decomposition". It helps you to reduce scope of the problem 
  by only focusing on a small chunk of the whole problem at a time.)
*/

/*
  Implement the function getTransportModes that
   - Accepts an array containing the location and available transport modes
     e.g: ["Tower Bridge", "tube", "river boat"]
   - Returns an array including the available transport modes to the given location
     e.g: ["tube", "river boat"]
  
  Hint: Use the corresponding array method to split the array.
*/
function getTransportModes(arr) {
   return arr.slice(1);
}

/*
  Implement the function isAccessibleByTransportMode that

   - Accepts two parameters:
     1) First parameter is an array of transport modes
        e.g: ["tube", "river boat"]
     2) Second parameter is a string containing a transport mode
        e.g: "river boat"
     
   - Returns 
     * True if the location in the first parameter is accessible by the transport mode given in second parameter
     * Otherwise, returns false
    
  Hint: Use the corresponding array method to decide if an element is member of an array.
*/
function isAccessibleByTransportMode(arr,str) {
  return arr.includes(str);
}

/*
  Implement the function getLocationName that

   - Accepts a location and available transports in an array
      e.g:["Tower Bridge", "tube", "river boat"]

   - Returns the name of the location
      e.g: "Tower Bridge"
*/
function getLocationName(arr) {
  return arr[0];
}

/*
 We arrived at the final method. it won't take long if you use the previously implemented functions wisely.

 Finish up the implementation of the function journeyPlanner that

  - Accepts two parameters:
    1) An array with a list of locations' and their transports
       e.g:
       [
         ["Angel", "tube", "bus"],
         ["London Bridge", "tube", "river boat"]
       ]

    2) A string containing a transport mode
       e.g: "bus"

  - Returns an array of where I can go if I only want to use a specific mode of transport.

  NOTE: only the location names should be returned, not the name of transports.
  
  HINTS:
   - Use the function you implemented above.
   - Use array method to remove locations that is not accessible by the given transportMode.
   - Use array method to manipulate its elements.
   
  Advanced challange: try to use arrow function when invoking an array method.
*/

// IS there a way to apply all the functions above and deliver the same results
//  function journeyPlanner(locations, transportMode) {
//   let arr1 =locations.map(getTransportModes);
//   let arr2 = locations.filter(isAccessibleByTransportMode(arr1, transportMode));
//   let arr3 = arr2.map(getLocationName(locations))
//   console.log(arr2);
// return arr3;

// }

// Method 1
 function journeyPlanner(locations, transportMode) {
  let correctTransportMode = locations.filter(str => str.includes(transportMode));
  let possibleLocations = correctTransportMode.map(getLocationName);
  return possibleLocations;
}

//Method 2

let journeyPlanner = (locations, transportMode) => locations.filter(location => location.includes(transportMode)).map(location => location[0]);

// Method 3 from the "solutions"

function journeyPlanner(locations, transportMode) {
  return locations
    .filter((location) => {
      return isAccessibleByTransportMode(location, transportMode);
    })
    .map((accessibleLocation) => {
      return getLocationName(accessibleLocation);
    });
}

// We can create a solution by using similar reasoning to the previous function. 
// We need to filter out the array of locations to find those that are acccessible by some transport mode. 
// Note that if we filter an array of nested arrays then filter is still going to return an array of nested arrays. 
// filter shouldn't be used to transform the items of an array - only to remove some of its contents according to some condition.
// We can then apply map to the array of accessible locations to get the location name for each accessible transport.

// We've also used arrow functions instead of the normal function expressions in the previous questions. 
// In this arrow function expression:

(location) => {
  return isAccessibleByTransportMode(location, transportMode);
};

// location is our parameter and the body of the function is still denoted with { } after the => arrow. 
// For the purposes of this problem, there would be no real difference with using a normal function expression, as shown below:

function n(location) {
  return isAccessibleByTransportMode(location, transportMode);
}

/* ======= TESTS - DO NOT MODIFY ===== */

const string1 = "I Love coding and perfect code makes me happy";
const string2 = "I don't like to do coding";
const string3 = "Can you scan the barcode for me";

const londonLocations = [
  ["Angel", "tube", "bus"],
  ["London Bridge", "tube", "river boat"],
  ["Tower Bridge", "tube", "bus"],
  ["Greenwich", "bus", "river boat"],
];

function arraysEqual(a, b) {
  if (a === b) return true;
  if (a == null || b == null) return false;
  if (a.length != b.length) return false;

  for (let i = 0; i < a.length; ++i) {
    if (a[i] !== b[i]) return false;
  }

  return true;
}

function test(test_name, expr) {
  let status;
  if (expr) {
    status = "PASSED";
  } else {
    status = "FAILED";
  }

  console.log(`${test_name}: ${status}`);
}

test(
  "checkCodeIsThere function works - case 1",
  checkCodeIsThere(string1) === 26
);

test(
  "checkCodeIsThere function works - case 2",
  checkCodeIsThere(string2) === "Not found"
);
test(
  "checkCodeIsThere function works - case 3",
  checkCodeIsThere(string3) === 20
);

test(
  "getTransportModes function works",
  arraysEqual(getTransportModes(["Angel", "tube", "bus"]), ["tube", "bus"])
);

test(
  "isAccessibleByTransportMode function works - positive case 1",
  arraysEqual(isAccessibleByTransportMode(["tube", "bus"], "tube"), true)
);

test(
  "isAccessibleByTransportMode function works - negative case 1",
  arraysEqual(isAccessibleByTransportMode(["tube", "bus"], "river boat"), false)
);

test(
  "isAccessibleByTransportMode function works - negative case 2",
  arraysEqual(
    isAccessibleByTransportMode(["tube", "bus", "river boat"], "boat"),
    false
  )
);

test(
  "getLocationName function works - case 1",
  arraysEqual(
    getLocationName(["London Bridge", "tube", "river boat"]),
    "London Bridge"
  )
);

test(
  "getLocationName function works - case 2",
  arraysEqual(getLocationName(["Angel", "tube", "bus"]), "Angel")
);

test(
  "journeyPlanner function works - case 1",
  arraysEqual(journeyPlanner(londonLocations, "river boat"), [
    "London Bridge",
    "Greenwich",
  ])
);

test(
  "journeyPlanner function works - case 2",
  arraysEqual(journeyPlanner(londonLocations, "bus"), [
    "Angel",
    "Tower Bridge",
    "Greenwich",
  ])
);

test(
  "journeyPlanner function works - case 3",
  arraysEqual(journeyPlanner(londonLocations, "tube"), [
    "Angel",
    "London Bridge",
    "Tower Bridge",
  ])
);
