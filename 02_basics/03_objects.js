// Singleton
// Object.create

// Object literals

const mySym = Symbol("key1")

const JsUser = {

    name: "Subhash",
    "full name": "Subhash Baviskar",
    [mySym]: "mykey1",
    age:  18,
    location: "Jaipur",
    email: "subhash@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);
// console.log(typeof mySym)

JsUser.email = "subhash@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "subhash@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS User");
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS User, ${this.name}`);
}


console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
