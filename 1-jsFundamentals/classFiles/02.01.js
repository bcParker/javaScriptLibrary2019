for (let i = 1; i < 11; i++) {
    console.log(i);
}

//for-in example 1
let parentThing = [1, 'Tracy', false, {key: 'playing'}];
for (let thing in parentThing) { //works w/ enumberable collections (objects, arrays)
    console.log(thing); //this ouput shows the position numbers of the elements in the array
}

//for-in example 2
//let parentThing = [1, 'Tracy', false, {key: 'playing'}];
for (let thing in parentThing) { //works w/ enumberable collections (objects, arrays)
    console.log(parentThing[thing]); //this ouput shows the position numbers of the elements in the array
}

//for-in example 3 
let obj = {keyA: true, keyB: 'Alan', keyC: [1,2,3,]}
for (let key in obj) {
    console.log(obj[key]); //even though brackets are typically used for arrays, in this situation, inside a for loop, we need to use brackets to referrence the key because '.' notation is specifically looking for the exact key value from the object above. 
    console.log(obj['keyA']);
}

//Mini for-in challenge
let obj2 = {first: '1150 Academy', second: 1150, third: false};
for (let x in obj2) {
    console.log(obj2[x]);
}

// Challenge 1:
// Write a for loop that loops 10 times.  Every time the loop is run, it calls a function.  The function should
// console.log a random number between 0 and 1.  Once you've completed the challenge with a for-loop, see if
// you can make this work with a for-of loop.  If you can solve that problem, see if you can solve this with
// a for-each loop.  Note that for-of and for-each loops require slightly different conditions to work than
// a for loop requires.

function ichi() {
    console.log(Math.random());
}

for (let i = 0; i < 10; i++) {
    ichi(i);
}

let arr = [1,2,3,4,5,6,7,8,9,10]
for (i of arr) {
    ichi(i);
}

// let obj1 = {one: 'a', two: 'b', three: 'c'}
// for each (var item in obj1) {

// }

//mini-challenge
//make a function that takes two parameters: favFood & favDessert. The function should return a setence with those parameters inside

function favorite(favFood, favDessert) {
    console.log(`My favorite food is ${favFood} and my favorite dessert is ${favDessert}`);
}

favorite('spicy miso ramen', 'brownies');

//demonstrate
function first(inputFunction) {
    inputFunction();
}
function second(){
    console.log('functions are amazing, but also hard!');
}
first(second);

/*
Challenge 2:
Let's compose functions!  Your first function should take a function as input and return that function
with a function call.  Your second function should take a string as input and return that string with 
extra stuff added to that string.  Console.log the results of your function calls.  Additional information
is below to help clarify what you're doing (the below is just an example):
first function: input-secondFunc output-secondFunc('coding is great!')
second function: input-'coding is great!' output-'coding is great!  pie is, too!'
*/

function one(input) {
    return input('abcdefg');
}

function second(str){
    return str + ` <- that string didn't make any sense!`;
}

console.log(one(second));

//Challenge 3 
//make 2 functions. the first function takes a function as input and calls that 'input' function with a number value. the second function takes a number as input concatinates that number with a string. the second function should return the concatination. the first should return the call. 

function funcOne(input) {  //'input' refers to 'func2' from line 100
    return input(Math.floor(Math.random()*10));
}

function funcTwo(num) {  //'func2' only runs because of 'func1'
    return num + ' I am a number :)';
}

console.log(funcOne(funcTwo));


