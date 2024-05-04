//Write a JavaScript program to get the difference between a given number and 13, 
//if the number is broader than 13 return double the absolute difference.

// Define a function named difference that takes a parameter n
function difference(n) {

    // Check if n is less than or equal to 13
    if (n <= 13) {
        // If true, return the difference between 13 and n
        return 13 - n;
    } else {
        // If false, return the double of the difference between n and 13
        return (n - 13) * 2;
    }

}

// Log the result of calling the difference function with the argument 32 to the console
console.log(difference(32));

// Log the result of calling the difference function with the argument 11 to the console
console.log(difference(11)); 



//Es6 concept arrow function
const difference1=(n)=>{
    return n<=13?13-n:(n-13)*2;
};

console.log(difference1(32));
console.log(difference1(11));
