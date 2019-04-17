/*
ARRAYS

9-arrays
    02-populating&Referring.js
*/

//what is an array?
//has [] brackets
//can hold multiple data types
//arrays can list data types in an ordered, numbered way

let students = ['Tony', 'Marshall', 'Rhys', 'Ray', 23, true, ['Ryan', 'Iesha']];
//hidden keys:    0         1         2       3     4    5            6
console.log(typeof students); //typeof doesn't tell me my varialbe is an array -> object
console.log(students instanceof Array); //instanceof tells me my array is an array
console.log(students[2]);
console.log(students[1]);
console.log(students[6]);

let name = students[6][1];
console.log(name);
console.log(`Hellow ${name}, you like nice today`);

//recall for-of loop -> gives values of array
let food = ['pecan pie', 'shrimp', 'quesadillas', 'cheesecake', 'hot dog'];
for (f of food) {
    console.log(f + ' is amazing');
}

//array methods
// food.push('pizza'); //.push  adds elements to the array
// console.log(food);
// food.splice(1, 1, 'bananas'); //inserts an element at a specific point and potentially adds a new element
// console.log(food);
// food.splice(2, 0, 'sweet potatoe pie');
// console.log(food);
// food.pop(); //removes the last element of an array
// console.log(food);

// food = food.slice(2,4); //the first number is the first element to slice from the array, while the second number is the stop position (not to be included) 
// console.log(food);

//forEach allows us to iterate with loops specificaly, and we can directly grab both the elements and their index numbers. 

// food.forEach((f) => console.log(f));

food.forEach((food, index) => {
    console.log(`The ${food} food in our array is at postion ${index}`);
    //console.log(index);
})

let movies = ['300', 'Snow White', 'The Phantom Menace', 'The Watchmen', 'The Sound of Music'];
movies.push('The Force Awakens');
console.log(movies);
movies.splice(3, 1, 'The League of Extraordinary Gentleman');
console.log(movies);
movies.forEach(movies => console.log(movies));
console.log(movies.length.toString);

//lets do the following with an array:
//we will check if we are working with an array
//flip the values within the array (4 to 0, 3 to 1, etc...)
//using a method only, print the new values of the array

let arr = new Array(1,2,3,4,5);

if (arr instanceof Array){
    let revArr = arr.reverse();
    revArr.forEach(numbers => console.log(numbers));
}

