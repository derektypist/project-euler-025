// Function to Get Number Information (including Invalid Input)
function getNumberInfo() {
    // Set Up Variable
    let txt = "";
    // Get the value of the input field
    let num = document.getElementById("mynumber").value;
    // Check if input is valid
    if (isNaN(num) || num.toString().length == 0 || num<1 || num>2000 || !Number.isInteger(Number(num))) {
        txt += `Invalid Input.  Please enter a whole number between 1 and 2000.`;
    } else {
        txt += `You have entered the number ${num}.`;
        txt += `Index of First Term to contain ${num} digits is ${digitFibonacci(num)}.`;
    }

    // Display Information in the Browser
    document.getElementById("numinfo").innerHTML = txt;
}

/*
    Function to return the index of the first term in the Fibonacci sequence
    to contain n digits
    digitFibonacci(5)  returns 21
    digitFibonacci(10) returns 45
    digitFibonacci(15) returns 69
    digitFibonacci(20) returns 93
*/
function digitFibonacci(n) {
    // Need to Use BigInt for f0 and f1
    let f0 = 0n, f1 = 1n, i = 1;
    while (String(f1).length < n) {
        [f0,f1] = [f1, f0 + f1];
        i++;
    }

    return i;
}