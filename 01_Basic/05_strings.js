const name = "subhash"

const repoCount = 3

//console.log(name + repoCount + "Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Subhash-hc-com')

// console.log(gameName[0]);

// console.log(gameName.__proto__);

// console.log(gameName.length);

// console.log(gameName.toUpperCase());

// console.log(gameName.charAt(4));
// console.log(gameName.indexOf('a'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-9,4)
console.log(anotherString);

const newStringOne = "   Subhash   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://subhash.com/subhash%20baviskar"

console.log(url.replace('%20', '-'));

console.log(url.includes('subhash'));
console.log(url.includes('ritesh'));

console.log(gameName.split('-'));