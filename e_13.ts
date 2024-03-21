// Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”



const myTrans: string[] = ['car', 'bike', 'bus', 'train', 'airoplain'];

// first method  (loop)
// for (let i = 0; i < myTrans.length; i++) {
//     console.log(`i would to like own a ${myTrans [i]}`)
    
// }

// second method 

myTrans.map((ib)=>{
    console.log(`i would like to own a ${ib}`)
})