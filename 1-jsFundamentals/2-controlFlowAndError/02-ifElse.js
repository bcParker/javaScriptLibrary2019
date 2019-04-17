/*
IF ELSE CONDITIONALS

2-controlFlowAndError
    02-ifElse.js
*/


//IF ELSE
let weather = 75;
if (weather < 70) {
    console.log('Wear a jacket');
} else {
    console.log('No jacket necessary');
}

//You can blend complex conditionals and if-else statements based upon your need:
if (weather > 70 && typeof weather === 'number') {
    console.log('This weather is amazing!');
} else {
    console.log('Either the temperature is cool , the variable is not a string, or both');
}


//ELSE IF

//if-elseif statements can be chained

let age = 30;
if (age >= 25) {
    console.log('yay! you can rent a car');
} else if (age >= 21) {
    console.log('Yay! you can drink');
} else if (age >= 18) {
    console.log('Yay! you can vote');
} else {
    console.log('Sorry, you are too yong to do anything fun')
}