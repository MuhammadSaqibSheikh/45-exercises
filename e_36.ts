// T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.

function make_shirt(size: number , Lable: string){
    // return size + Lable
    return `my shirt size is ${size} and lable is ${Lable}`

}
let myfun = make_shirt(36, " the sunny day")

console.log(myfun)