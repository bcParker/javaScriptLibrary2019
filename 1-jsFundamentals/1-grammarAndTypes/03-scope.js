/*
SCOPE

1-grammarAndtypes
    03-scope.js
*/

/*
What is scope?

JS has both LOCAL and GLOBAL scope
*/

//Example 1
var x = 12;

function scope () {
    var x = 33;
    //var y = 10;
    console.log(x);
}
scope(); //logs 33
console.log(y); //code breaks
console.log(x); //logs 12

//Example 2
var x = 12;

function scope() {
    x = 33;
    console.log(x);
}
scope(); //33
console.log(x); //33

//Example 3
var x = 1;

function scope() {
    var x = 2;
    function innerScope() {
        var x = 3;
        console.log(x); //3
    }
    innerScope();
    console.log(x); //2
}
scope();
console.log(x); //1

//Example 4 contrasts with 5
var x = 12;

function scope() {
    var x = 33;
    if (true) {
        let x = 45;
        console.log(45); //45
    }
    console.log(x); //33
}
scope();
console.log(x); //12

//Example 5 contrasts with 4
var x = 12;

function scope() {
    var x = 33;
    if (true) {
        var x = 45;
        console.log(x); //45
    }
    console.log(x); //45 -> 'var' doesn't obey block scope
}
scope();
console.log(x); //12
