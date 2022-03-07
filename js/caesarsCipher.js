//freeCodeCamp
//JavaScript Algorithms and Data Structure
//Caesars Cipher

//I solution
function rot13(str) {

    var alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

    var arrString = str.split("");
    console.log(arrString);

    var arr3 = [];


    for (var i = 0; i < arrString.length; i++) {
        for(var j = 0; j < alphabet.length; j++) {
            if(alphabet.indexOf(alphabet[j]) <= 12) {
                if(arrString[i] == alphabet[j]) {
                    arr3.push(alphabet[j + 13]);
                    console.log(arr3);
                }
            } else {
                if(arrString[i] == alphabet[j]) {
                    arr3.push(alphabet[j - 13]);
                    console.log(arr3);
                }
            }
        }

        if((/[^A-Z]/).test(arrString[i])) {
            arr3.push(arrString[i]);
        }
    }

    str = arr3.join("");
    console.log(str);
    return str;
}


//console.log(rot13("SERR PBQR PNZC"));
//console.log(rot13("A"));
rot13("SERR PBQR PNZC!");
rot13("SERR CVMMN!");


//2nd solution
//Object
//"A","B","C","D","E","F","G","H","I","J","K","L","M",
//"N","O","P","Q","R","S","T","U","V","W","X","Y","Z"
const arrayObj = {
    A: "N",
    B: "O",
    C: "P",
    D: "Q",
    E: "R",
    F: "S",
    G: "T",
    H: "U",
    I: "V",
    J: "W",
    K: "X",
    L: "Y",
    M: "Z",
    N: "A",
    O: "B",
    P: "C",
    Q: "D",
    R: "E",
    S: "F",
    T: "G",
    U: "H",
    V: "I",
    W: "J",
    X: "K",
    Y: "L",
    Z: "M" 
}

var strArray = "";

function rot13Func(str) {
    for(var i = 0; i < str.length; i++) {
        if((/[A-Z]/).test(str[i])) {
            strArray += arrayObj[str[i]];
        } else {
            //adding to string non-alpfabet characters
            strArray += str[i];
        }
        
    }

    return strArray;
}

console.log(rot13Func("QHAWN QBOEVP!"));





