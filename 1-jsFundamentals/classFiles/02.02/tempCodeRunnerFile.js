let objOne = {
    key1: 'one',
    key2: 'two',
    key3: 'three',
    key4: 'four',
    key5: 'five'
}

let arrOne = Object.keys(objOne);
console.log(arrOne);
for (keys of arrOne) {
    console.log(keys);
}

arrOne.forEach(x => console.log(objOne[arrOne]));