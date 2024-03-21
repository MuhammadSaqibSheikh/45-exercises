// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
// // • Print a second set of invitation messages, one for each person who is still in your list.
var myFriend = ['ali', 'saqib', 'ahmad', 'waseem', 'arsalan', 'naeem'];
console.log("table is not available i can invited only 2 persons\n");
// remove all 4 last friend 
var friend1 = myFriend.pop();
console.log("sorry Mr ".concat(friend1, " you are not invited"));
var friend2 = myFriend.pop();
console.log("sorry Mr ".concat(friend2, " you are not invited"));
var friend3 = myFriend.pop();
console.log("sorry Mr ".concat(friend3, " you are not invited"));
var friend4 = myFriend.pop();
console.log("sorry Mr ".concat(friend4, " you are not invited"));
for (var i = 0; i < myFriend.length; i++) {
    console.log("mr ".concat(myFriend[i], " you are still invited"));
}
myFriend.pop();
myFriend.pop();
console.log(myFriend);
