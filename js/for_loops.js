// ---------------Multiplication Table---------------
function showMultiplicationTable(num) {
    for (let i = 1; i < 11; i++) {
        console.log(`${num} x ${i} = ` + (num * i))
    }
}
//checking functionality
// (showMultiplicationTable(5));
// (showMultiplicationTable(10));

// ---------------20 - 200 | Even or Odd---------------

for (let i = 0; i < 10; i++) {
const random= Math.floor((Math.random() * (200-20) + 20));
    if(random % 2 === 0) {
        console.log(`${random} is even`)
    } else {
        console.log(`${random} is odd`)
    }
}

// ---------------Pyramid Problem---------------

//this is starting at 1 and going until 10 (but really 9)
for (let i = 1; i < 10; i++) {
    let line = '';
    //every instance 'i' is less than 'j', print the line with number from 'i'... 'j' amount of times in the row
    for (let j = 0; j < i; j++) {
        //adding 'i' to the current line
        line += i;
    }
    //show what is saved in 'line' each time 'j' is greater than 'i'
    console.log(line)
}

//another way complete pyramid problem with .repeat() method
for (let i = 1; i < 10; i++) {
    console.log(i.toString.repeat(i));
}

// ---------------For Loop decrement 5 from 100---------------

for (let i = 100; i >= 5 ;i -= 5) {
    console.log(i)
}
