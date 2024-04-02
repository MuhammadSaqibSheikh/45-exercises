// Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.

function myalbum(artist: string, album: string){

    return{artist, album}
}
let album1= myalbum("saqib", "sawan");
let album2= myalbum("ali ", "kaho ak din");
let album3= myalbum("atif", "aoo ge jab");

console.log(album1)
console.log(album2)
console.log(album3)

// number of tracks

function album(artist: string, album: string, tracknumber?: number){

    return{artist, album, tracknumber}
}
let album4= album("saqib", "sawan", 40);
let album5= album("ali ", "kaho ak din", 60);
let album6= album("atif", "aoo ge jab");

console.log(album4)
console.log(album5)
console.log(album6)
