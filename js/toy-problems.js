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

// let userInput = prompt('Enter a number option (1-4) to continue: \n 1: Check Account Balance \n 2: Check Total Debits \n 3: Check Total Credits \n 4: Enter Date for all transactions on entered date')



//     const bankTransactions = [
//     { id: 1, date: '2023-01-01', description: 'Deposit', amount: 1000.00, type: 'credit' },
//     { id: 2, date: '2023-01-05', description: 'Grocery shopping', amount: -50.00, type: 'debit' },
//     { id: 3, date: '2023-01-10', description: 'ATM withdrawal', amount: -100.00, type: 'debit' },
//     { id: 4, date: '2023-01-15', description: 'Paycheck', amount: 2000.00, type: 'credit' },
//     { id: 5, date: '2023-01-20', description: 'Utilities bill', amount: -150.00, type: 'debit' },
//     { id: 6, date: '2023-01-25', description: 'Dinner out', amount: -30.00, type: 'debit' },
//     { id: 7, date: '2023-02-01', description: 'Deposit', amount: 500.00, type: 'credit' },
//     { id: 8, date: '2023-02-05', description: 'Gasoline', amount: -40.00, type: 'debit' },
//     { id: 9, date: '2023-02-10', description: 'ATM withdrawal', amount: -80.00, type: 'debit' },
//     { id: 10, date: '2023-02-15', description: 'Paycheck', amount: 2200.00, type: 'credit' },
//     { id: 11, date: '2023-02-20', description: 'Rent payment', amount: -800.00, type: 'debit' },
//     { id: 12, date: '2023-02-25', description: 'Shopping spree', amount: -120.00, type: 'debit' },
//     { id: 13, date: '2023-03-01', description: 'Deposit', amount: 700.00, type: 'credit' },
//     { id: 14, date: '2023-03-05', description: 'Medical expenses', amount: -75.00, type: 'debit' },
//     { id: 15, date: '2023-03-10', description: 'ATM withdrawal', amount: -60.00, type: 'debit' },
//     { id: 16, date: '2023-03-15', description: 'Paycheck', amount: 1800.00, type: 'credit' },
//     { id: 17, date: '2023-03-20', description: 'Subscription renewal', amount: -10.00, type: 'debit' },
//     { id: 18, date: '2023-03-25', description: 'Lunch with friends', amount: -25.00, type: 'debit' },
//     { id: 19, date: '2023-04-01', description: 'Deposit', amount: 1200.00, type: 'credit' },
//     { id: 20, date: '2023-04-05', description: 'Electronics purchase', amount: -200.00, type: 'debit' },
// ];

// switch(userInput) {
//     case '1' :
//         let totalAmount = 0;
//         bankTransactions.forEach(transaction => {
//             totalAmount += transaction.amount;
//         });
//         console.log(`Your account balance is: $${totalAmount}`);
//         break;
//     case '2' :
//         let totalDebits = 0;
//         bankTransactions.forEach(transaction => {
//             if(transaction.type === 'debit') {
//                 totalDebits += transaction.amount;
//             }
//         });
//         console.log(`Your Debit balance is: $${totalDebits}`);
//         break;
//     case '3' :
//         let totalCredits = 0;
//         bankTransactions.forEach(transaction => {
//             if(transaction.type === 'credit') {
//                 totalCredits += transaction.amount;
//             }
//         });
//         console.log(`Your Credit balance is: $${totalCredits}`);
//         break;
//     case '4' :
//         let userDateSearch = prompt('Enter a date to view transactions in the format of \'YYYY-MM-DD\':');
//         bankTransactions.forEach(transaction => {
//             if(transaction.date === userDateSearch) {
//                 console.log(transaction);
//             }
//         });
//         break;
// }

// ----------------- Cheese Finder App --------------------------------

//Create an application that allows a user to find cheeses by filtering by type and searching by name or by country.
//
// -- Application Flow
//
// The application should flow in the following way
//
//   1. Greet users to the application in an alert.
//   2. The user should then be asked in a prompt to enter whether they want to search by cheese name or country of origin. Invalid input should cause the program to alert "invalid input" and halt further execution.
//   3. The user should be prompted to enter the search string.
//   4. Display to the user a list of cheeses that both are of the entered type and that start with the entered search string for either the cheese name or the country of origin, depending on what the user selected.
//
// As an optional bonus, allow the user to specify the cheese type (hard/soft/semi-hard/all) before searching by either country of origin or cheese name.
//
// -- Output Formatting
//
// The application should format the output of given cheeses in this format:
//
// "NAME_OF_CHEESE_1 from COUNTRY_OF_ORIGIN_1 (TYPE_1)\nNAME_OF_CHEESE_2 from COUNTRY_OF_ORIGIN_2 (TYPE_2)\n..."
//
//
// Notice the new line character at the end of each cheese, formatting each cheese on it's own line in an alert, like so:
//
//   NAME_OF_CHEESE_1 from COUNTRY_OF_ORIGIN_1 (TYPE_1)
//   NAME_OF_CHEESE_2 from COUNTRY_OF_ORIGIN_2 (TYPE_2)
//   NAME_OF_CHEESE_3 from COUNTRY_OF_ORIGIN_3 (TYPE_3)
//   etc.

const cheeses = [
    {
        "name": "Cheddar",
        "type": "hard",
        "country_of_origin": "United Kingdom"
    },
    {
        "name": "Brie",
        "type": "soft",
        "country_of_origin": "France"
    },
    {
        "name": "Gouda",
        "type": "semi-hard",
        "country_of_origin": "Netherlands"
    },
    {
        "name": "Parmesan",
        "type": "hard",
        "country_of_origin": "Italy"
    },
    {
        "name": "Roquefort",
        "type": "blue",
        "country_of_origin": "France"
    },
    {
        "name": "Camembert",
        "type": "soft",
        "country_of_origin": "France"
    },
    {
        "name": "Manchego",
        "type": "semi-hard",
        "country_of_origin": "Spain"
    },
    {
        "name": "Gruyère",
        "type": "hard",
        "country_of_origin": "Switzerland"
    },
    {
        "name": "Provolone",
        "type": "semi-hard",
        "country_of_origin": "Italy"
    },
    {
        "name": "Mozzarella",
        "type": "soft",
        "country_of_origin": "Italy"
    },
    {
        "name": "Monterey Jack",
        "type": "semi-hard",
        "country_of_origin": "United States"
    },
    {
        "name": "Feta",
        "type": "soft",
        "country_of_origin": "Greece"
    },
    {
        "name": "Edam",
        "type": "semi-hard",
        "country_of_origin": "Netherlands"
    },
    {
        "name": "Colby",
        "type": "semi-hard",
        "country_of_origin": "United States"
    },
    {
        "name": "Gorgonzola",
        "type": "blue",
        "country_of_origin": "Italy"
    },
    {
        "name": "Havarti",
        "type": "semi-soft",
        "country_of_origin": "Denmark"
    },
    {
        "name": "Swiss",
        "type": "hard",
        "country_of_origin": "Switzerland"
    },
    {
        "name": "Pepper Jack",
        "type": "semi-soft",
        "country_of_origin": "United States"
    },
    {
        "name": "Stilton",
        "type": "blue",
        "country_of_origin": "United Kingdom"
    },
    {
        "name": "Asiago",
        "type": "semi-hard",
        "country_of_origin": "Italy"
    },
    {
        "name": "Cambozola",
        "type": "blue",
        "country_of_origin": "Germany"
    },
    {
        "name": "Fontina",
        "type": "semi-soft",
        "country_of_origin": "Italy"
    },
    {
        "name": "Limburger",
        "type": "semi-soft",
        "country_of_origin": "Germany"
    },
    {
        "name": "Jarlsberg",
        "type": "semi-hard",
        "country_of_origin": "Norway"
    },
    {
        "name": "Danish Blue",
        "type": "blue",
        "country_of_origin": "Denmark"
    },
    {
        "name": "Munster",
        "type": "semi-soft",
        "country_of_origin": "France"
    },
    {
        "name": "Blue Castello",
        "type": "blue",
        "country_of_origin": "Denmark"
    },
    {
        "name": "Brick",
        "type": "semi-soft",
        "country_of_origin": "United States"
    },
    {
        "name": "Ricotta",
        "type": "soft",
        "country_of_origin": "Italy"
    },
    {
        "name": "Queso Fresco",
        "type": "soft",
        "country_of_origin": "Mexico"
    },
    {
        "name": "Cotija",
        "type": "hard",
        "country_of_origin": "Mexico"
    },
    {
        "name": "Wensleydale",
        "type": "hard",
        "country_of_origin": "United Kingdom"
    },
    {
        "name": "Emmental",
        "type": "hard",
        "country_of_origin": "Switzerland"
    },
    {
        "name": "Double Gloucester",
        "type": "hard",
        "country_of_origin": "United Kingdom"
    },
    {
        "name": "Cabrales",
        "type": "blue",
        "country_of_origin": "Spain"
    },
    {
        "name": "Pecorino Romano",
        "type": "hard",
        "country_of_origin": "Italy"
    },
    {
        "name": "Red Leicester",
        "type": "hard",
        "country_of_origin": "United Kingdom"
    },
    {
        "name": "Caerphilly",
        "type": "semi-hard",
        "country_of_origin": "United Kingdom"
    },
    {
        "name": "Wensleydale with Cranberries",
        "type": "hard",
        "country_of_origin": "United Kingdom"
    },
    {
        "name": "Stichelton",
        "type": "blue",
        "country_of_origin": "United Kingdom"
    },
    {
        "name": "Halloumi",
        "type": "semi-soft",
        "country_of_origin": "Cyprus"
    },
    {
        "name": "Sbrinz",
        "type": "hard",
        "country_of_origin": "Switzerland"
    },
    {
        "name": "Manouri",
        "type": "soft",
        "country_of_origin": "Greece"
    },
    {
        "name": "Taleggio",
        "type": "semi-soft",
        "country_of_origin": "Italy"
    },
    {
        "name": "Cashel Blue",
        "type": "blue",
        "country_of_origin": "Ireland"
    }
];


alert('Hello, welcome to cheese finder app!');

let userSelection = prompt(`Enter 1 to find Cheese by Name\nEnter 2 to find Cheese by Country of Origin`)

switch(userSelection) {
    case '1' :
        let userCheeseSearch = prompt(`Enter the name of the cheese you want to find:`);
        cheeses.forEach(cheese => {
            if(cheese.name.includes(userCheeseSearch)) {
                alert(`${cheese.name} from ${cheese.country_of_origin} (${cheese.type})`);
            }
        })
        break;
    case '2' :
        let userOriginSearch = prompt(`Enter a Country to search Cheeses`);
        let returnAlert = [];
        cheeses.forEach(cheese => {
            if(cheese.country_of_origin.includes(userOriginSearch)) {
               returnAlert.push(cheese.name, ' ',cheese.country_of_origin, ' ', cheese.type, '\n');
            }
        })
        alert(returnAlert.join(''));
        break;
    default:
        alert('Invalid Input');
}
