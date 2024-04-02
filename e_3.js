"use strict";
// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
const personName = 'saqib';
// Lowercase
console.log(personName.toLowerCase());
// Uppercase
console.log(personName.toUpperCase());
// titlecase
let firstletter = personName.charAt(0).toUpperCase();
let restletter = personName.slice(1).toLowerCase();
let titlecase = firstletter + restletter;
console.log(titlecase);
