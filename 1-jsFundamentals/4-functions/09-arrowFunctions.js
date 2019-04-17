/*
ARROW FUNCTIONS

04-functions
    09-arrowFunctions.js
*/

//normal function delcaration
function coffee() {
    return 'coffee is good';
}

//normal function expression
let tea = function(){
    return 'tea is healthy';
}

console.log(coffee());
console.log(tea());

//arrow functions are *always* anonymous
//arrow function expression
let hotChocolate = () => {
    return 'hot chocolate is king';
}

console.log(hotChocolate());

let animals = (kittens, puppies) => {
    return `I have ${kittens} cat(s) and ${puppies} dog(s)`;
}

console.log(animals(3,2));
console.log(animals(0,0));

//arrow fumctions to not get hoisted like normal functions


//concise vs. block body
//concise body
let apples = x => `There are ${x} apples`; 
console.log(apples(10));
//if there is a single argument, you can exclude the ()'s. 
//if the function is a single line, you can also forego the return statement

//block body
let bananas = x => {
    return `There are ${x} bananas`;
}

console.log(bananas(5));

//return must be explicitly written in a block-body arrow function
let func = () => 'hi';
console.log(func());
// the arrow has to follow the ()'s on the same line


