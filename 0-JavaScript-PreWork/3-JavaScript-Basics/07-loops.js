function spaces() {
    for (var i = 1; i <= 3; i++) {
        console.log("  ");          // creats space between examples
    }
    return null;
}

// ***LOOPS***

// 'For' Loops
//  They allow the user to perform the same task multiple times without physically creating 
//  the scenario multiple times.
for (var i = 1; i < 101; i += 1) {
    console.log(i);
}

spaces();

// Basic Structure
// for (setup; text expression; increment) {
//      body;   
// }
     //1        //2     //3
for (var i = 1; i <= 10; i++) {
    console.log("Number:", i);
}
// 1. This is the starting point. We're starting to count from 1
// 2. This is the conditional section, the codition to be met. As long as 'i' is under 10 or
//    equal to 10, keep going. 
// 3. This is what it does when it keeps going. 'i++' is shortand for saying, add 1 to 'i'

spaces();

// Counts to 50 by 5's. Starts @ 0
for (var i = 0; i <= 50; i += 5) {
    console.log(i);
}

spaces();

// Starts @ 20, counts down to 1. It subtracts 1 each time
for (var i = 20; i >= 1; i--) {
    console.log(i);
}

spaces();

// Starts @ 3, increments by 5, but does go over 30
for (var i = 3; i <= 30; i += 5) {
    console.log(i);
}

spaces();

// CHALLENGE
// * write 10 loops

// 1. Count to 200 by 25's. Start @ 25
for (var i = 25; i <= 200; i +=25) {
    console.log(i);
}

spaces();

// 2. Count to 10 by 2's. Start @ 6 
for (var i = 6; i <= 10; i += 2) {
    console.log(i);
}

spaces();

// 3. Count to 10 by 5's. Start @ 100
for (var i = 100; i >= 10; i -= 5) {
    console.log(i);
}

spaces();

// 4. Count to 50 by 2's. Start @ 10
for (var i = 10; i <= 50; i += 2) {
    console.log(i);
}

spaces();

// 5. Count to 30 by 3's. Start @ 0
for (var i = 0; i <= 30; i += 3) {
    console.log(i);
}

spaces();

// 6. Write a function that is called within a loop
function victory() {
    console.log("Your team won!!");
}

for (var i = 0; i <= 3; i++) {
    victory();
}

spaces();

// 7. Write a function that contains a loop
function dinner() {
    for (var i = 1; i <= 4; i++) {
        console.log("Dinner's ready!");
    }
    return null;
}
dinner();

spaces();

// 8. Write a for loop that contains an if statement
for (var i = 1; i <=5; i++) {
    if (i = 5) {
        console.log("I did it!");
    }
}

spaces();

// 9. Count to 100 by 20. Start @ 20
for (var i = 20; i <= 100; i += 20) {
    console.log(i);
}

spaces();

// 10. Count to 10 by 1. Start @ 1 
for (var i = 1; i <= 10; i++) {
    console.log(i);
}