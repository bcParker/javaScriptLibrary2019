/*
FOR IN LOOPS

3-loops
    02-forInLoops.js
*/

//in does not require that the 'thing' you're looping through to be numbered 

let student = {
    name: 'peter',
    awesome: true,
    degree: 'javascript',
    week: 1
}

for (item in student) {
    console.log(item);
    console.log(student[item]);
}

let catArray = ['tabby', 'british shorthair', 'burmese', 'main coon', 'rag doll'];

for (cat in catArray) {
    console.log(cat);
    console.log(catArray[cat]);
}

//lets write a for-in loop that capitalizes the first letter of a name
function upperCase (str) {
    let arrOne = str.split(' ');
    let arrTwo = [];
    for (let i=0; i<arrOne.length; i++) {
        arrTwo.push(arrOne[i].charAt(0).toUpperCase()+arrOne[i].slice(1));
    }
    return arrTwo.join(' ');
}
    console.log(upperCase('benjamin'));

//example from video
let instructor = 'pAuL';
let capName;

for (n in instructor) {
    if (n==0) {
        capName = instructor[n].toUpperCase();
    } else {
        capName += instructor[n].toLowerCase();
    }
}
console.log(capName);