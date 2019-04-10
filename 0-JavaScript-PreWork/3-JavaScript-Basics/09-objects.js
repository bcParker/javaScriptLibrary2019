function spaces() {
    for (var i = 1; i <= 3; i++) {
        console.log("  ");          // creats space between examples
    }
    return null;
}
// ***OBJECTS***

// Object Literals
// 1. It's created using the 'var' keyword, like a variable
// 2. It gets wrapped in curly braces '{}'
// 3. 'name', 'age', 'vocation', and 'isRetired' are properties of the object
// 4. Each of the properties has a value following the colon

//1                 //2
var bobAlcorn = {
    //3        //4
    name:      "Bob Alcorn",
    age:       "59",
    vocation:  "Chief Operating Officer",
    isRetired: false
};

// Dot Notations
//  * '.' is an operator like a plus symbol. it gives you access inside the object. 
console.log(bobAlcorn); //1
console.log(bobAlcorn.name); //2
console.log(bobAlcorn.age); //3
// 1. prints the whole objects
// 2. prints the object, then the value for the name property
// 3. prints the age property of the particular object

spaces();

//Underfined
//  * when we try to access a property that doesn't exist, we get an 'undefined' notificatoin
console.log(bobAlcorn.middleName); // undefined

spaces();

var player = {
    username: "PapsMcgee", 
    power: 500, 
    toughness: 300,
    level: 35
};
console.log(player.username);
console.log(player.level);
console.log(player.power);
console.log(player.toughness);

spaces();

var friend = {
    name: "Andrew",
    age: 30,
    location: "Kokomo",
    yearsKnown: 25 
};
console.log("Name: " + friend.name);
console.log("Age: " + friend.age);
console.log("Location: " + friend.location);
console.log("Years Known: " + friend.yearsKnown);

spaces();

var car = {
    make: "Pontiac", 
    model: "G8 GT", 
    year: 2009,
    hrsPwr: 380,
    gasMlge: 12
};
console.log("Make: " + car.make);
console.log("Model: " + car.model);
console.log("Year: " + car.year);
console.log("Horsepower: " + car.hrsPwr);
console.log("Gas Mileage: " + car.gasMlge);

spaces();

var overwatch = {
    favChar: "D.VA",
    hrsPlayed: 200,
    favSkin: "Bumble Bee",
    numKills: 1200,
    numDeaths: 200
};
console.log("Character Name: " + overwatch.favChar);
console.log("Hourse Played: " + overwatch.hrsPlayed);
console.log("Favorite Skin: " + overwatch.favSkin);
console.log("# of Kills: " + overwatch.numKills);
console.log("# of Deaths: " + overwatch.numDeaths);