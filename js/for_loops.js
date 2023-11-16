function showMultiplicationTable(num) {
    for (let i = 1; i < 11; i++) {
        console.log(`${num} x ${i} = ` + (num * i))
    }
}
//checking functionality
// (showMultiplicationTable(5));
// (showMultiplicationTable(10));
//
for (let i = 0; i < 10; i++) {
const random= Math.floor((Math.random() * (200-20) + 20));
    if(random % 2 === 0) {
        console.log(`${random} is even`)
    } else {
        console.log(`${random} is odd`)
    }
}
for (let i = 1; i < 10; i++) {
    let n = '';
    for (let j = 0; j < i; j++) {
        n += i;
    }
    console.log(n)
}