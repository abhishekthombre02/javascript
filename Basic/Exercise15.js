// Write a JavaScript program to compute the sum of the two given integers. 
//If the two values are the same, then return triple their sum.

const sum=(num1,num2)=>{

    return num1==num2?6*num1:num1+num2;
}

console.log(sum(2,4));
console.log(sum(2,2));