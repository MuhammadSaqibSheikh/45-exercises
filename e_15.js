// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
// • Print a second set of invitation messages, one for each person who is still in your list.
var myFriend = ['ali', 'saqib', 'ahmad', 'waseem'];
console.log("due to some personal reason mr ".concat(myFriend[1], " will not come on the dinner"));
myFriend[1] = 'yasir';
console.log('new invitation list for my coming friends');
for (var i = 0; i < myFriend.length; i++) {
    console.log("".concat(i, ".").concat(myFriend[i]));
}
