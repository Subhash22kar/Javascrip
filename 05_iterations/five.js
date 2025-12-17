const coding = ["js", "ruby", "java", "python", "cpp"]

// conding.forEach( function (val) {
//     console.log(val);
    
// } )

// conding.forEach( (item) => {
//     console.log(item);
    
// } )

// function printMe(item){
//    console.log(item);
   
// }

// conding.forEach(printMe)


// coding.forEach( ( item, index, arr ) => {
//     console.log(item, index, arr);
    
// } )


const myCoding = [
    {
        languageName : "JavaScript",
        languageFileName : "js"
    },
    {
        languageName : "Java",
        languageFileName : "Java"
    },
    {
        languageName : "python",
        languageFileName : "py"
    },
]

myCoding.forEach( (item) => {
   console.log(item.languageName);
   
} )