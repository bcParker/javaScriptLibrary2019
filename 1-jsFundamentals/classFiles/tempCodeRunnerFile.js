function funcOne(input) {
    return input(Math.floor(Math.random()*10));
}

function funcTwo(num) {
    return num + ' I am a number :)';
}

console.log(funcOne(funcTwo));