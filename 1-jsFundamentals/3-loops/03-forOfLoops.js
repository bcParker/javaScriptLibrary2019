/*
FOR OF LOOPS

3-loops
    03-forOfLoops.js
*/

//of requires the 'thing' you're looping through needs to be iteralbe--that means it needs to be numbered. 'Objects' aren't numbered but 'arrays' are

//let student = {name: 'Peter', isAwesome: true, degree: 'javascript', week: 1};

//for (item of student) {
//    console.log(item);
//}

let catArray = ['tabby', 'british shorthair', 'burmese', 'maine coon', 'rag doll'];

for (cat of catArray) {
    console.log(cat, 'says meow');
}