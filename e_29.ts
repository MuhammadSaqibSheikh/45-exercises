// Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.

// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!
let favoriteFruites = ["apple", "orange", "banana", "pineapple", "watermelon"]

// if (favoriteFruites.includes("mango")){
//     console.log("i would like to eat mango")
// }else if (favoriteFruites.includes("banana")){
//     console.log("i would like to eat banana")
// }else {
//     console.log("your favorite fruit is not available")
// }

let fruitavailable = "pineapple"
if (favoriteFruites.includes(fruitavailable)){
 console.log(`i would like to eat ${fruitavailable}}`)
}else if (favoriteFruites.includes("orange")){
    console.log(`i would like to eat ${fruitavailable}` )
}else {
    console.log("your favorite fruit is not available")
}