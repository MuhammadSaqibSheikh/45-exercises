"use strict";
// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
const myFriend = ['ali', 'saqib', 'ahmad', 'waseem'];
console.log('we have 3 mor friend invited in dinner\n');
// add beginning 
myFriend.unshift('waleed');
console.log(myFriend);
// add middle
myFriend.splice(2, 0, 'muhammad ali');
console.log(myFriend);
// add last 
myFriend.push("hammad");
console.log(myFriend);
