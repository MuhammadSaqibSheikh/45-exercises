var personName = 'saqib';
// Lowercase
console.log(personName.toLowerCase());
// Uppercase
console.log(personName.toUpperCase());
// titlecase
var firstletter = personName.charAt(0).toUpperCase();
var restletter = personName.slice(1).toLowerCase();
var titlecase = firstletter + restletter;
console.log(titlecase);
