// Write a JavaScript program to find the area of a triangle where three sides are 5, 6, 7.

var side1=5,side2=6,side3=7;

//calculate semiPerimeter
var s=(side1+side2+side3)/2;

//Using heron's formula

var area= Math.sqrt(s*((s-side1)*(s-side2)*(s-side3)));

//log the calculated area to the console
console.log(area);
console.log(typeof(area));
area=area.toFixed(2);
console.log(area);


