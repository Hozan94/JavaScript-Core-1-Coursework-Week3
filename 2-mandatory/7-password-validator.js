/* 
Password Validation

Write a program that should check if each password in an array 
contains a valid password (see below for password criteria) and return a
new array with true or false booleans for whether that password was valid or not.

To be valid, a password must:
- Have at least 5 characters.
- Have at least one English uppercase letter (A-Z)
- Have at least one English lowercase letter (a-z)
- Have at least one number (0-9)
- Have at least one non-alphanumeric symbol ("!", "#", "$", "%", ".", "*", "&")

Passwords must not be any previous password in the passwords array. 

We have supplied functions which will help you with some of these checks.

Example 1:
PreviousPassword = ["fhD8!yrjj", "ttkTu.wer3", "dvyyeyY!5", "qwbfj76%", "tytT3729."];

Expected Result:
PasswordValidationResult=  [false, false, false, false, true]

*/

// Method 1 
function validatePasswords(passwords) {
    let correctPass = passwords.map((eachPassword, index) => eachPassword.length >= 5 && containsUppercaseLetter(eachPassword) && containsLowercaseLetter(eachPassword) && containsNumber(eachPassword) && containsSymbol(eachPassword) && passwords.indexOf(eachPassword) === index);
    return correctPass;
}

// Returns true if string contains at least one uppercase letter.
function containsUppercaseLetter(string) {
    return /[A-Z]/.test(string);
}

// Returns true if string contains at least one lowercase letter.
function containsLowercaseLetter(string) {
    return /[a-z]/.test(string);
}

// Returns true if string contains at least one number.
function containsNumber(string) {
    return /[0-9]/.test(string);
}

// Returns true if string contains at least one symbol.
function containsSymbol(string) {
    return /[!#$%.*&]/.test(string);
}

// Method 2 from the "solutions"

function validatePasswords(passwords) {
  return passwords.map((password) => {
    const patterns = [/.{5,}/, /[A-Z]/, /[a-z]/, /[0-9]/, /[!#$%.*&]/];
    const isValidPassword = patterns.every((pattern) => pattern.test(password));
    return isValidPassword;
  });
}

// In this function, we store an array of different regular expressions which will allow us to match certain characters in a password. 
// For example, the regular expression shown below
/*
/[!#$%.*&]/;
will allow us to match one of the special characters !, #, $, %, ., * or &. Therefore, if we call the in-built function .test() we can check if our password contains one of these special characters:

/[!#$%.*&]/.test(password);
The expression above will evaluate to a boolean depending on whether the password contains one of the special characters.

So we store all these patterns, like /[!#$%.*&]/, in an array and check that a given password will match of all the given regular expressions:

const patterns = [/.{5,}/, /[A-Z]/, /[a-z]/, /[0-9]/, /[!#$%.*&]/];
const isValidPassword = patterns.every((pattern) => pattern.test(password));
Finally, this logic is then applied to each item in the array of passwords by using map.
*/
/* ======= TESTS - DO NOT MODIFY ===== */

const passwords1 = ["Se%5", "TktE.TJTU", "384#HsHF", "dvyyeyy!5", "tryT3729"]
const passwords2 = ["StUFf27%", "Pl3nty!", "Jai33", "shajsaUA**&&", "Pl3nty!"]

const util = require('util');

function test(test_name, actual, expected) {
    let status;
    if (util.isDeepStrictEqual(actual, expected)) {
        status = "PASSED";
    } else {
        status = `FAILED: expected: ${util.inspect(expected)} but your function returned: ${util.inspect(actual)}`;
    }

    console.log(`${test_name}: ${status}`);
}

test(
  "validatePasswords function works - case 1",
  validatePasswords(passwords1),
  [false, false, true, false, false]
 );

test(
  "validatePasswords function works - case 2",
  validatePasswords(passwords2),
  [true, true, false, false, false]
);
