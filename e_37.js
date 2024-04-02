"use strict";
// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
// function make_shirt ( lable: string, size: string= " large"){
//     return size + lable
// }
// let myfuntion= make_shirt( "i love typescript")
// console.log(myfuntion)
// function make_shirt ( lable: string, size: string= " medium"){
//     return size + lable
// }
// let myfuntion= make_shirt( "i love typescript")
// console.log(myfuntion)
function make_shirt(lable, size) {
    return size + lable;
}
let myfuntion = make_shirt(" any size ", "i love typescript");
console.log(myfuntion);
