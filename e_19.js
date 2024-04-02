"use strict";
// Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
let myFriends = ["sajid", "aqib", "naeem", "fareed", "waqar"];
console.log(`I am inviting ${myFriends.length} friend to my dinner which following`);
for (let i = 0; i < myFriends.length; i++) {
    console.log(`${i + 1}. ${myFriends[i]}`);
}
