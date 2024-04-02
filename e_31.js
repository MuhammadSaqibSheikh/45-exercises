"use strict";
// No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is printed.
let username2 = ["saqib", "sarfaraz", 'sajid', 'admin', 'haadi', 'aman'];
username2 = [];
if (username2.length > 0)
    for (let i = 0; i < username2.length; i++)
        if (username2[i] == "admin") {
            console.log(`\nhello ${username2[i]}, would you like to see a status report?\n`);
        }
        else {
            console.log(`Hello ${username2[i]}thank you for logging in again.`);
        }
else {
    console.log(` We need to find some users!`);
}
