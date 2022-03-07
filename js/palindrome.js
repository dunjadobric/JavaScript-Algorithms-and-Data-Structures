//freeCodeCamp
//JavaScript Algorithms and Data Structure
//Palindrome Checker

//1st solution - for loop

function palindrome(str) {
    var strPal = str.toLowerCase().replace(/[^A-Za-z0-9]/g, "");//as requested in project, from str should be removed all non alfabet and numerical characters, and converted to all upper or lower case
    
    for(var i = 0; i < strPal.length/2; i++) {
        if(strPal[i] !== strPal[strPal.length - i - 1]) {
            return false;
        }
    }
    return true;
}

//2nd solution - functions

//first function for converting given string to lower case
function strToLowerCaseFunc(str) {
    return str.toLowerCase();
}

//second function replacing non-alphabetic and numerical characters from string
function strRegexFunc(str) {
    return str.replace(/[\W_]/g, "");//another regex solution for non-alphabet/numeric characters plus underscore thats consider within W, not including i bcs in previuos function is used case method
}

//third function that reverse string
function strReverseFunc(str) {
    var result = "";
    for(var i = str.length - 1; i >= 0; i--) {
        result += str[i];
    }
    return result;
}

function palindrome1(str) {
    var strToLowerCase = strToLowerCaseFunc(str);

    var strRegex = strRegexFunc(strToLowerCase);

    var strReverse = strReverseFunc(strRegex);

    return strRegex == strReverse;
}


//3rd solution with JS string methods (split, join, reverse)

function palindrome2(str) {
    var result = "";

    var strReg = str.toLowerCase().replace(/[\W_]/g, "");//string
    //console.log(strReg);
    result = strReg.split("").reverse().join("");//gnirts
    //console.log(result);
    
    return strReg == result;
}

console.log(palindrome2("string"));

console.log(palindrome("a"));//true - one letter is by default a palindrome

console.log(palindrome("eye"));//true
console.log(palindrome("_eye"));//true
console.log(palindrome("race car"));//true
console.log(palindrome("not a palindrome"));//false
console.log(palindrome("A man, a plan, a canal. Panama"));//true
console.log(palindrome("never odd or even"));//true
console.log(palindrome("nope"));//false
console.log(palindrome("almostomla"));//false
console.log(palindrome("My age is 0, 0 si ega ym."));//true
console.log(palindrome("1 eye for of 1 eye."));//false
console.log(palindrome("0_0 (: /-\ :) 0-0"));//true
console.log(palindrome("five|\_/|four"));//false



