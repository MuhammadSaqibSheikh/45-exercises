"use strict";
// Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.
// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
let current_Users = ["ali", "saqiB", "wahaB", "siraj", "hakim"];
let New_Users = ["yasir", "sajid", "wahab", "siRaj", "nabi"];
New_Users.forEach(New_Users => {
    let new_UsersLower = New_Users.toLowerCase();
    let userNameTaken = current_Users.some(current_Users => current_Users.toLowerCase() === new_UsersLower); //ture or false
    // now will apply conditions
    if (userNameTaken) {
        console.log(`${New_Users}need to be a choose a new user name becuase its already taken`);
    }
    else {
        console.log(`${New_Users} is the new member added`);
        current_Users.push(New_Users);
    }
});
console.log(current_Users);
