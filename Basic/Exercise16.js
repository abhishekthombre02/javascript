//Write a JavaScript program to create another string by adding "Py" in front of a 
// given string. If the given string begins with "Py" return the original string.  

var str="thon";

const printString=(str)=>{

    return str.substring(0,2)=="py"?str:str="py"+str;
}

console.log(printString(str));