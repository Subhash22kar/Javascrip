// Singleton
// Object.create

// Object literals

const JsUser = {

    name: "Subhash",
    "full name": "Subhash Baviskar",
    age:  18,
    location: "Jaipur",
    email: "subhash@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full name"]);