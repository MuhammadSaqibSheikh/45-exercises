// Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.


// first method 
const myFriend: string[] = ['ali', 'saqib', 'ahmad', 'waseem'];

for (let i = 0; i < myFriend.length; i++){
console.log(`Mr ${myFriend[i]}! you are invited to dinner on monday `)
}

// second medthod 

myFriend.map((ib)=>{
    console.log(`Mr ${ib}! you are invited to dinner on monday\n `)

})