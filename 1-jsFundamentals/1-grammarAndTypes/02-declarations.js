/*
VARIABLES

1-grammarAndTypes
    02-declarations
*/

//what is a variable?
var a = 1;
var b = 2;
console.log(a + b);

//notes on naming variables:
//1) a variable must begin with a letter, underscore, or dollar sign
//2) numbers may follow the above charactes, but must not be first
//3) javascript is case sensitive-- 'hello' and 'Hello' are different variables

/*
DECLARATIONS, INITIALIZATIONS, ASSIGNMENT
 */

 /*
 Declarations refer to when we 'delcare' a variable
 
 Initializations refer to when a variable is assigned a value

 Assignment refers to giving a variable a value. This can be after the initialization.
 */

 var x;
 console.log("Declaration 1: ", x); //undefined

 x = 10;
 console.log("Intiliazation 1:", x); //10

 x = 33;
 console.log("Assignment 1:", x); //33

 var y;
 console.log(y);

 y = 'hello';
console.log(y);

y = 'you are my friend';
console.log(y);

/*
Var, Let, and Const:

Var = 'old' keyword for variables
Let = 'new' keyword for variables (introduced with ES6)
Const = also 'new', declares unchangeable variables
*/

let tonight = 'great!'; //more predictable than 'var'
const elevenFifty = 'amazing';
console.log(tonight, elevenFifty);

tonight = 'lovely';
console.log(tonight, elevenFifty);

//elevenFifty = 'super';






