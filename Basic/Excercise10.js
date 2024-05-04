// Write a JavaScript program to calculate multiplication and division of two numbers 
// (input from the user).  

// Define a function to multiply two numbers and display the result
function multiplyBy() {
    // Get the values of the input fields with the ids "firstNumber" and "secondNumber"
    num1 = document.getElementById("num1").value;
    num2 = document.getElementById("num2").value;

    // Set the inner HTML of the element with the id "result" to the product of the two numbers
    document.getElementById("result").innerHTML = num1 * num2;
}

// Define a function to divide two numbers and display the result
function divideBy() {
    // Get the values of the input fields with the ids "firstNumber" and "secondNumber"
    num1 = document.getElementById("num1").value;
    num2 = document.getElementById("num2").value;

    // Set the inner HTML of the element with the id "result" to the quotient of the two numbers
    document.getElementById("result").innerHTML = num1 / num2;
} 
