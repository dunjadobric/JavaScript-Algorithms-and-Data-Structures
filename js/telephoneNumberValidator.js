//freeCodeCamp
//JavaScript Algorithms and Data Structure
//Telephone Number Validator

// 555-555-5555
// (555)555-5555
// (555) 555-5555
// 555 555 5555
// 5555555555
// 1 555 555 5555

//regex's
var RE = /^(1\s)?\d{3}-?\s?\d{3}-?\s?\d{4}$/;//1,4,5,6
var RE2 = /^(1\s?)?\(\d{3}\)\s?\d{3}-\d{4}$/;//2,3,7

function telephoneCheck(str) {
    return RE.test(str) || RE2.test(str);
  }
  
  console.log(telephoneCheck("555-555-5555"));
  console.log(telephoneCheck("(555)555-5555"));
  console.log(telephoneCheck("(555) 555-5555"));
  console.log(telephoneCheck("555 555 5555"));
  console.log(telephoneCheck("5555555555"));
  console.log(telephoneCheck("1 555 555 5555"));
  console.log(telephoneCheck("1(555)555-5555"));
  console.log(telephoneCheck("5555555")); //false
  console.log(telephoneCheck("1 555)555-5555")); //false


//solution with arrays
var arr = [RE, RE2];
function telephoneCheck2(str) {
    for(var item of arr) {
        return item.test(str);
    }
}

console.log(telephoneCheck2("555-555-5555"));




