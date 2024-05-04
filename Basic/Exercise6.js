// Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar.

var year=2000;
var ans=year%4==0?(year%100==0?(year%400==0?"Yes":"No"):"Yes"):"No";
var ans=(year%4==0) ? (year%100==0) : (year%400==0);
console.log(ans)

if(year%2==0 && year%100==0 && year%400==0){
     console.log("Yes");
}
else{
    console.log("No");
}