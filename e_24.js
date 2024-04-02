"use strict";
// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array
// equality and inequality
let myname = "Saqib";
console.log(myname == "Saqib");
console.log(myname !== "saqib");
// // Numberical
let Num1 = 10;
console.log(Num1 > 9); //ture
console.log(Num1 < 5); //false
// // And && ==== Or | Opreators
let Num2 = 10;
let Num3 = 5;
console.log(Num2 > 9 && Num3 < 4);
console.log(Num2 > 9 || Num3 < 4);
// Array and not Array
let myarray = [2, 3, "ali"];
let myString = "saqib";
console.log(Array.isArray(myarray));
console.log(Array.isArray(myString));
