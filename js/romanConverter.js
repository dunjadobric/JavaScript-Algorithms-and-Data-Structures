//freeCodeCamp
//JavaScript Algorithms and Data Structure
//Roman Converter

//Medical Xavier
//M- 1000
//D - 500
//C - 100
//L - 50
//X - 10
//V - 5
//I - 1


//1st solution
function romanConverter(num) {
    var result = "";

    //M - 1000
    while(num >= 1000) {
        result += "M";
        num -= 1000;
    }
    console.log("Number M, leftover: " + `${num}`);

    //CM - 900
    while(num >= 900) {
        result += "CM";
        num -= 900;
    }
    console.log("Number CM, leftover: " + `${num}`);

    //D - 500
    while(num >= 500) {
        result += "D";
        num -= 500;
    }
    console.log("Number D, leftover: " + `${num}`);

    //CD - 400
    while(num >= 400) {
        result += "CD";
        num -= 400;
    }
    console.log("Number CD, leftover: " + `${num}`);

    //C - 100
    while(num >= 100) {
        result += "C";
        num -= 100;
    }
    console.log("Number C, leftover: " + `${num}`);

    //XC - 90
    while(num >= 90) {
        result += "XC";
        num -= 90;
    }
    console.log("Number XC, leftover: " + `${num}`);

    //L - 50
    while(num >= 50) {
        result += "L";
        num -= 50;
    }
    console.log("Number L, leftover: " + `${num}`);

    //XL - 40
    while(num >= 40) {
        result += "XL";
        num -= 40;
    }
    console.log("Number XL, leftover: " + `${num}`);
    
    //X - 10
    while(num >= 10) {
        result += "X";
        num -= 10;
    }
    console.log("Number X, leftover: " + `${num}`);

    //IX - 9
    while(num >= 9) {
        result += "IX";
        num -= 9;
    }
    console.log("Number IX, leftover: " + `${num}`);

    //V - 5
    while(num >= 5) {
        result += "V";
        num -= 5;
    }
    console.log("Number V, leftover: " + `${num}`);

    //IV - 4
    while(num >= 4) {
        result += "IV";
        num -= 4;
    }
    console.log("Number IV, leftover: " + `${num}`);

    //I - 1
    while(num >=1) {
        result += "I";
        num -= 1;
    }
    console.log("Number I, leftover: " + `${num}`);
    return result;
    
}


// console.log(romanConverter(36));
console.log(romanConverter(97));//XCVII
console.log(romanConverter(99));//XCIX
console.log(romanConverter(798));//DCCXCVIII
console.log(romanConverter(891));//DCCCXCI
console.log(romanConverter(3999));//MMMCMXCIX


//2nd solution with class instance

class RomanConvertorClass {
    constructor(numToConvert) {
        this.num = numToConvert;
        this.result = "";
    }

    processResult(symbol, symbolValue) {
        while(this.num >= symbolValue) {
            this.result += symbol;
            this.num -= symbolValue;
        }
    }
}

function romanConv(number) {
    const converter = new RomanConvertorClass(number);
    converter.processResult("M", 1000);
    converter.processResult("CM", 900);
    converter.processResult("D", 500);
    converter.processResult("CD", 400);
    converter.processResult("C", 100);
    converter.processResult("XC", 90);
    converter.processResult("L", 50);
    converter.processResult("XL", 40);
    converter.processResult("X", 10);
    converter.processResult("IX", 9);
    converter.processResult("V", 5);
    converter.processResult("IV", 4);
    converter.processResult("I", 1);

    return converter.result;
}


console.log(romanConv(107));











