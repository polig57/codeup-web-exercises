// let int = 2;
//
// while(int <= 65536) {
//     console.log(int)
//     int += int;
// }


// generates a random number between 50 and 100 representing the amount of cones to sell before you start your loop.
// Inside of the loop your code should generate another random number between 1 and 5, simulating the amount of cones being bought by her clients.
// Use a do-while loop to log to the console the amount of cones sold to each person.
// The below code shows how to get the random numbers for this exercise.

// This is how you get a random number between 50 and 100 (number of cones to sell before loop)
// let allCones = Math.floor(Math.random() * 50) + 50;
// let totalPurchasedCones = 0;
//
// do {
//     let purchasedCones = Math.floor(Math.random() * 5) + 1;
//     if(totalPurchasedCones !== allCones) {
//         console.log(`${purchasedCones} cones sold...`);
//         totalPurchasedCones += purchasedCones;
//         // console.log(`All Cones: ${allCones}, total bought: ${totalPurchasedCones}, purchased: ${purchasedCones}`);
//         let conesLeft = (allCones - purchasedCones);
//     if(purchasedCones > conesLeft) {
//         console.log(`Cannot sell you ${purchasedCones} cones I only have ${conesLeft} Cones left...` )
//         // break;
//     }
//     }
//     if (totalPurchasedCones === allCones) {
//         console.log(`Yay! I sold them all!`);
//         break;
//     }
//     // console.log(`check 1` + allCones)
// } while (totalPurchasedCones < allCones);

let allCones = Math.floor(Math.random() * 50) + 50;
do {
    console.log(`All Cones: ${allCones}`);

    const purchasedCones = Math.floor(Math.random() * 5) + 1;

    if(purchasedCones <= allCones) {
        allCones -= purchasedCones;
        console.log(`${purchasedCones} cones sold...`);
    } else {
        console.log(`Cannot sell you ${purchasedCones} cones I only have ${allCones} Cones left...` );
    }

} while (allCones > 0);
    console.log(`Yay! I sold them all!`);

