//Declaration of a function

//1      //2
function hello() {
    //3
    console.log("Hello World");
}

// 1: We use the 'function' keyowrd to notify that this a function
// 2: We named the function 'hello'. We can name it whatever we want, as long as it's not a keyword.
// 3: We execute some code when the function is called.

hello(); // a function call after its been declared

function pacersWon() {
    console.log("Pacers won!!");
}

pacersWon();

pacersWon();
pacersWon();
pacersWon();
pacersWon();
pacersWon();

// Parameters & Arguments: 
//   * Parameters are the names listed in the function definition
//   * Arguments are the real values received by the function when you call it

function numberEntered(x) {
    console.log("The number you entered was: ", x);
}

numberEntered(5);
numberEntered(4);
numberEntered(3);

// Two Params (Parameters)
function addAnyTwoNumbers(x, y) {
    console.log(x + y);
}

addAnyTwoNumbers(4, 5);
addAnyTwoNumbers(6, 11);
addAnyTwoNumbers(7, 8);

function subtractTwoNumbers(firstNum, secondNum) {
    console.log(secondNum - firstNum);
}

subtractTwoNumbers(9, 11);
subtractTwoNumbers(21, 13);

// The 'return' keyword

// Declare the function
function getMyTaxReturnAndDoMyTaxesAndStuff(a, x, y, z) {
    let myInc = a * x;
    let myTaxes = myInc - y;
    let total = myTaxes + z;
    return total;
}

// Call the function
console.log(getMyTaxReturnAndDoMyTaxesAndStuff(10000, 5, 50000, 0));

// How does the 'return' keyword works in a function?
// 
// First of all, the 'let' declaration allows a variable to be declared in a limited scope
// essentially allowing it to only work inide whatever statement, block or expression it is
// used. 
//
// The 'return' keyword essentially stops the function and instructs the computer to return 
// a value to the screen. Similar to 'if' statements and 'loops', the computer needs to 
// know when to stop and then also produces the outcome of whatever is determined inside the
// function.

// My practice functions
function addMyNumbers(x, y) {
    let numOne = x;
    let numTwo = y;
    let total = numOne + numTwo;
    return total;
}
console.log(addMyNumbers(15, 6));   //<== calling the function inside a 'console.log' after
                                    // after the function was declared. NOT A CLEAN WAY!

function wholeName(firstName, lastName) {
    let name = firstName + " " + lastName;
    return name;
}
console.log(wholeName("Chase", "Parker"));

function myPet(petName, breed) {
    let pet = petName + " is an " + breed + ".";
    return pet;
}
console.log(myPet("Filbert", "American Short Hair"));

// Function examples from work
//   * instead of calling the function from inside a 'console.log' after the declaration, 
//     the 'console.log' is inside the function so when the function is called later, the
//     'return' variable is automatically displayed to the console.
function fullName(first, last) {
    var wholeName = first + " " + last;
    console.log(wholeName);
    return wholeName;
}
fullName("Paul", "O'Connor");

// CHALLENGE
//  * write a function that calculates the totalPrice after tax on any quantity of any 
//    price on a product. 
function totalPrice(price, quantity) {
    let tax = 0.07;
    let totalTax = price * tax * quantity;
    let total = totalTax + quantity * price;
    console.log(total);
    return total;
}

totalPrice(1.99, 5);
