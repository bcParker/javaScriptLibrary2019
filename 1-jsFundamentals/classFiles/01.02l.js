//arrays
let arr = [1,2,3,4,5,];
//arrays have numbered elements. The numbers are indexes and the values are elements.
console.log(arr[3]);

//assigning something to an already existing array
arr[3] = 'PICKLES';
console.log(arr[3]);

let newArr = [1,2,3,{ketchup: true, pickles: false, meat: true}];
console.log(newArr[3]);
newArr[3].pickles = true;
console.log(newArr[3]);
console.log(newArr[3].pickles);

//conditionals
let weather = 70;
if (weather > 70) {
    console.log('Wear shorts!');
} else if(weather > 40){
    console.log('You should bundle up');
} else {
    console.log('You should bring a jacket');
}

let gpas = [1.9, 3.5, 4.0, 2.8];
let singleGpa = gpas[1];

if (singleGpa == 4.0) {
    console.log('Wow! That is amazing!');
} else if (singleGpa >= 3.0) {
    console.log('That is a strong GPA!');
} else {
    console.log('You might want to hit the books');
}

/*Challenge 1:
Write an array with at least 5 different numbers stored as values in the array.  Use if-elseif statements to
change one value of the array based upon the index number passed to the conditional.  Use the =, +=, /=, 
%=, and **= operators to make the change of the array value (only use one operator per conditional 
statement).*/

let myArr = [1,2,3,4,5];
let arrTwo = [0,2,3,5,6];

if (myArr[3] == arrTwo[4]) {
    console.log(true);
} else if (myArr[2] == arrTwo[2]) {
    myArr[3] = myArr[3] *= 3;
} else {
    console.log('nice try');
}
console.log(myArr[3]);

let oreo = [1,2,3,4,5];
let indexNum = 3;

if (indexNum == 0) {
    oreo[0] **= 5;
} else if (indexNum == 1) {
    oreo[1] **= 5;
} else if (indexNum == 2) {
    oreo[2] **= 5;
} else if (indexNum == 3) {
    oreo[3] **= 5;
} else if(indexNum == 4) {
    oreo[4] **= 5;
} 

/*hallenge 2:
Write an object that stores information about your favorite movie.  nameOfMovie, runTime, characters, and
genre should be keys directly inside the object.  Inside of characters should be no more than 2 character 
objects, each of which stores name, age, and items.  Inside of items should be no more than 2 item
objects, each of which stores name and color.

Use console.log statements to show that you can print out the nameOfMovie, the characters, the age of a
character, and colors for the objects the characters have.*/

let movieObj = {
    nameOfMovie: 'Star Wars: Empire Strikes Back' , 
    runTime: '2 Hours 7 Minutes',
    characters: {
        charOne: {
            name: 'Darth Vader', 
            age: 45, 
            itemOne: {
                name: 'Lightsaber', color: 'Red'
            },
        }, 
        charTwo: {
            name: 'Luke Skywalker',
            age: 22, 
            itemTwo: {
                name: 'Lightsaber', color: 'green'
            },
        },
    },
    genre: 'Science Fiction'
}

console.log(movieObj.characters.charOne.itemOne.color);


let lotrObj = {
    nameOfMovie: 'Lord of the Rings: The Fellowship of the Ring',
    runTime: 'long',
    characters: {
        charOne: {
            name: 'Legolas',
            age: 2931,
        },
        charTwo: {
            name: 'Gandalf',
            age: 2019,
        }
    },
    genre: 'Action & Adventure'
}

console.log(lotrObj.characters, lotrObj.characters.charOne.age);

/*
Challenge 3:
Try to predict the behavior of each variable separatey (first, second, and third).
//1st example:
console.log(first);
console.log(second);
console.log(third);
var first = 1;  //undefined
let second = 2;  //broken (not defined)
const third = 3;  //broken (not defined)

//2nd example:
hoistTest();
var first = 5;
function hoistTest() {
  console.log(first);
}
//Prediction: break (wrong--undefined) function runs first, then variable declared, variable is global so function can still read it, then function is called

//3rd example:
function hoistTest(){
  console.log(first, second, third);
  if (true){
    var first = 1;
    let second = 2;
    const third = 3;
  }
  console.log(first, second, third);
}
hoistTest();
*/
//prediction: breaks
