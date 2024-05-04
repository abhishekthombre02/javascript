// Write a JavaScript program to display the current day and time in the following format.
// Today is : Tuesday.
// Current time is : 10 PM : 30 : 38

//get the current date and time using date()

var today =new Date();

//Get the day of the week (0-6,where 0 is sunday and 6 is saturday)
var day= today.getDay();

//Display Current Date
console.log("Date: "+ today.getDate());

//Array of day names
var daylist=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

//Display the current day
console.log("Today is: "+daylist[day]+".");


//Get the current hour,minute and second
var hour= today.getHours();
var minute=today.getMinutes();
var second=today.getSeconds();


