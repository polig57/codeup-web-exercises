// -----------------flickSwitch toy problem --------------------------------
// function flickSwitch(array){
//     // Create an accumulator that will hold the true or false values
// let accumulator = [];
//     // Create a variable to hold what our previous boolean value was
// let switcher = true;
//
//     for(const word of array) {
//         // check to see if the word is 'flick'
//         if(word === 'flick') {
//             switcher = !switcher;
//             accumulator.push(switcher);
//         }
//         accumulator.push(switcher);
//     }
//     // Return the accumulator
// return accumulator;
// }
//
// console.log(flickSwitch(['this', 'that', 'flick']));
// console.log(flickSwitch(['flick','this', 'that', 'flick']));





// -----------------Bank Statements toy problem --------------------------------
// Given the array of bank transactions below, ask the user with a prompt to choose from one of the following options:

// - Enter 1 to check account balance
// - Enter 2 for the total of all debits
// - Enter 3 for the total of all credits
// - Enter 4 to enter a date to get all transactions for that date
//
// If the user enters any inputs other than 1 - 4, continue to prompt them to enter a valid input. If the user chooses 4, prompt them
// again for a given date, in the format of 'YYYY-MM-DD'.
//
//     As a bonus, you can allow the user to keep going until they select 5 to exit the program.



// refactor this later to assign the options to a variable, pass in variable to prompt message with template literals
// console.log('1: Check Account Balance');
// console.log('2: Check Total Debits');
// console.log('3: Check Total Credits');
// console.log('4: Enter Date for all transactions on entered date');

let userInput = prompt('Enter a number option (1-4) to continue: \n 1: Check Account Balance \n 2: Check Total Debits \n 3: Check Total Credits \n 4: Enter Date for all transactions on entered date')



    const bankTransactions = [
    { id: 1, date: '2023-01-01', description: 'Deposit', amount: 1000.00, type: 'credit' },
    { id: 2, date: '2023-01-05', description: 'Grocery shopping', amount: -50.00, type: 'debit' },
    { id: 3, date: '2023-01-10', description: 'ATM withdrawal', amount: -100.00, type: 'debit' },
    { id: 4, date: '2023-01-15', description: 'Paycheck', amount: 2000.00, type: 'credit' },
    { id: 5, date: '2023-01-20', description: 'Utilities bill', amount: -150.00, type: 'debit' },
    { id: 6, date: '2023-01-25', description: 'Dinner out', amount: -30.00, type: 'debit' },
    { id: 7, date: '2023-02-01', description: 'Deposit', amount: 500.00, type: 'credit' },
    { id: 8, date: '2023-02-05', description: 'Gasoline', amount: -40.00, type: 'debit' },
    { id: 9, date: '2023-02-10', description: 'ATM withdrawal', amount: -80.00, type: 'debit' },
    { id: 10, date: '2023-02-15', description: 'Paycheck', amount: 2200.00, type: 'credit' },
    { id: 11, date: '2023-02-20', description: 'Rent payment', amount: -800.00, type: 'debit' },
    { id: 12, date: '2023-02-25', description: 'Shopping spree', amount: -120.00, type: 'debit' },
    { id: 13, date: '2023-03-01', description: 'Deposit', amount: 700.00, type: 'credit' },
    { id: 14, date: '2023-03-05', description: 'Medical expenses', amount: -75.00, type: 'debit' },
    { id: 15, date: '2023-03-10', description: 'ATM withdrawal', amount: -60.00, type: 'debit' },
    { id: 16, date: '2023-03-15', description: 'Paycheck', amount: 1800.00, type: 'credit' },
    { id: 17, date: '2023-03-20', description: 'Subscription renewal', amount: -10.00, type: 'debit' },
    { id: 18, date: '2023-03-25', description: 'Lunch with friends', amount: -25.00, type: 'debit' },
    { id: 19, date: '2023-04-01', description: 'Deposit', amount: 1200.00, type: 'credit' },
    { id: 20, date: '2023-04-05', description: 'Electronics purchase', amount: -200.00, type: 'debit' },
];

switch(userInput) {
    case '1' :
        let totalAmount = 0;
        bankTransactions.forEach(transaction => {
            totalAmount += transaction.amount;
        });
        console.log(`Your account balance is: $${totalAmount}`);
        break;
    case '2' :
        let totalDebits = 0;
        bankTransactions.forEach(transaction => {
            if(transaction.type === 'debit') {
                totalDebits += transaction.amount;
            }
        });
        console.log(`Your Debit balance is: $${totalDebits}`);
        break;
    case '3' :
        let totalCredits = 0;
        bankTransactions.forEach(transaction => {
            if(transaction.type === 'credit') {
                totalCredits += transaction.amount;
            }
        });
        console.log(`Your Credit balance is: $${totalCredits}`);
        break;
    case '4' :
        let userDateSearch = prompt('Enter a date to view transactions:');
        bankTransactions.forEach(transaction => {
            if(transaction.date === userDateSearch) {
                console.log(transaction);
            }
        });
        break;
}
