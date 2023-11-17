let userInput = prompt('Enter an Odd Number between 1 and 50');

do {
    userInput = prompt('Enter an Odd Number between 1 and 50');
    if(userInput % 2 === 1 && userInput <= 50 && userInput > 0) {
        break;
    }
} while(true);
userInput = Number(userInput);
if(userInput) {
    console.log(`Number to skip is: ${userInput}`)
    for (let i = 0; i <= 50; i++) {
        if(i !== userInput && i % 2 === 1) {
            console.log(`Here is an odd number: ${i}`);
        }
        if(i === userInput) {
            console.log(`Yikes! Skipping number: ${userInput}`)
        }
    }
}
