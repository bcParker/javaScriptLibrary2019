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