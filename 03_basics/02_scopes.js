//var c = 300
let a = 300

if(true){

 let a = 10
const b = 20
// console.log("INNER:", a);
}

// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username = "subhash"

    function two(){
        const webside = "youtube"
        console.log(username);
    }

    // console.log(webside);

    two()
}

// one()

if (true) {
    const username = "subhash"
   if (username === "subhash") {
     const  webside = " youtube"
    //  console.log(username + webside);
   }
//    console.log(webside);
} 

// console.log(username);


//+++++++++++++++++++++++++ Interesting  +++++++++++++++++++++++++


console.log(addone(5));
function addone(num){
    return num + 1
}

addTwo(5)
const  addTwo = function(num){
    return  num + 2
}

