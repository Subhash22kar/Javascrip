const accountId = 969111;
let accountEmail = "Subhash@gmail.com";
var accountPassword = "123456";
accountCity = "Bhopal";
let accountState;

// accountId = 2; // not allowed
console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/
accountEmail = "Ritesh@gmail.com";
accountPassword = "123457";
accountCity = "Indore";

console.table([accountEmail, accountId, accountPassword, accountCity, accountState]);