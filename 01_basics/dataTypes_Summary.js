// // Primitive

// const { useSyncExternalStore } = require("react");

// // 7 Types : String, Number, Boolean, Null , undefinded , Symbol, BigInt

// const score = 100
// const scoreValue = 100.3

// const isLoggedIn = false
// const outsideTemp = null
// let userEmail;

// const id = Symbol('123')
// const  anotherId = Symbol('123')

// console.log(id === anotherId);

// const bigNumber = 123431223445n;

// console.log(bigNumber);

// // Reference (Non Primitive)

// // Array, Objects, Functions

// const heros = ["shaktiman", "doremon", "ritesh"]

//  let myObj = {
//     name: "hitesh",
//     age: 22,
// }

// const myFunction = function(){
//     console.log("Hello world");
// }

// console.log(typeof bigNumber);

// console.log(typeof outsideTemp );

// console.log(typeof scoreValue);

// console.log(typeof anotherId);
// console.log(typeof myFunction);
// console.log(typeof heros);
// console.log(typeof userEmail);



// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive), Heap (Non Primitive)

let  myYoutubename = "buddhavihar"

let anothername =  myYoutubename

anothername = "Preetesh Tour & Travels"
console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo =  userOne 

userTwo.email = "subhash@google.com"

console.log(userOne.email);
console.log(userTwo.email);