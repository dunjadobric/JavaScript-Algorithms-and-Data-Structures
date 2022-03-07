// Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.

// Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.

// Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.

// Currency Unit	Amount
// Penny	$0.01 (PENNY)
// Nickel	$0.05 (NICKEL)
// Dime	$0.1 (DIME)
// Quarter	$0.25 (QUARTER)
// Dollar	$1 (ONE)
// Five Dollars	$5 (FIVE)
// Ten Dollars	$10 (TEN)
// Twenty Dollars	$20 (TWENTY)
// One-hundred Dollars	$100 (ONE HUNDRED)

//convert all values in cents
var objUnitValues = {
    PENNY: 1,
    NICKEL: 5,
    DIME: 10,
    QUARTER: 25,
    ONE: 100,
    FIVE: 500,
    TEN: 1000,
    TWENTY: 2000,
    "ONE HUNDRED": 10000
}

function checkCashRegister(price, cash, cid) {

    //change (diffrence between given cash and acctual price) in cents
    var change = (cash - price) * 100;
    console.log(change);

    //cid - paramether, "cash in draw - cid" is two-dimension array given as argument in call of function

    //CLOSED

    //status CLOSED when there is no need to return change bcs value in cid and change are equal 

    //use of reduce method on cid array to calculate how much value is in cid
    //convert values in cents
    var closedValue = cid.reduce((acc, [name, value]) => {
        return acc + value * 100;
    }, 0);

    console.log(closedValue);//50 for closed example

    //if cid value is equal with change return object requiered
    //change property value is equal to unchanged cid
    if(closedValue === change) {
        return {status: "CLOSED", change: cid};
    }

    //END OF CLOSED

    //INSUFFICIENT FUND

    //reverse method - sorted in highest to lowest order for OPEN
    //use of map method on cid array
    //The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.

    var fundValue = cid
    .reverse()
    .map(([name, value]) => {
        var total = 0;

        //name from object "objUnitValues" to be compared with name from cid sub-arrays returning value in square brackets notations
        var compareNameValue = objUnitValues[name];
        //console.log(compareNameValue);//logging all values from objUnitValues
        //console.log(compareNameValue < change);//true
        //console.log(change);//decreasing
        //converting cid value to cents
        var valueCents = value * 100;

        //while loop
        //loop with while untill value from objUnitValues is less than change and value from cid is bigger than zero
        while(compareNameValue <= change && valueCents > 0) {

            //adding to total values of compareNameValues lesser than change
            total += compareNameValue;

            //substr value from cid out of overall change
            //decreasing change
            change -= compareNameValue;

            //lowering value
            valueCents -= compareNameValue;
        } 
        return [name, total/100];//converting from cents to dollars
    })
    //use of filter method on cid array to filter only values bigger than zero
    .filter(([name, value]) => value > 0);

    if(change > 0) {
        return {status: "INSUFFICIENT_FUNDS", change: []};
    }

    //END OF INSUFFICIENT FUND

    //OPEN
    else {
        return {status: "OPEN", change: fundValue};
    }
    
    //END OF OPEN
}





    

//console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])); 
//should return {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}

//console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));
 //should return {status: "INSUFFICIENT_FUNDS", change: []}

//console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])); 
//should return {status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}

/******/

console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));
//should return {status: "OPEN", change: [["QUARTER", 0.5]]} 

console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));
//should return {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}
