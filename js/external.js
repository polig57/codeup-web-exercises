//Start
alert('Welcome to my Website!');
let userFavColor= prompt('What is your favorite color?');
alert(`Great, ${userFavColor} is my favorite color too!`);

// You have rented some movies for your kids: The little mermaid (for 3 days), Brother Bear (for 5 days, they love it), and Hercules (1 day, you don't know yet if they're going to like it). If price for a movie per day is $3, how much will you have to pay?
let dailyMovieRentalPrice = 3;

alert(`Each movie costs: $${dailyMovieRentalPrice}`)
let littleMermaidDaysRented = prompt('How many days would you like to rent The Little Mermaid?');
let brotherBearDaysRented = prompt('How many days would you like to rent Brother Bear?');
let herculesDaysRented = prompt('How many days would you like to rent Hercules?');
let totalDaysRented = parseInt(littleMermaidDaysRented) + parseInt(brotherBearDaysRented) + parseInt(herculesDaysRented);

let totalPrice = totalDaysRented * dailyMovieRentalPrice;
alert(`Your total will be: $${totalPrice} `)

// Suppose you're working as a contractor for 3 companies: Google, Amazon and Facebook, they pay you a different rate per hour. Google pays $400, Amazon $380, and Facebook $350. How much will you receive in payment for this week? You worked 10 hours for Facebook, 6 hours for Google and 4 hours for Amazon.

let googleHourlyRate = parseInt(prompt('What is your hourly rate for Google?'));
let googleHours = parseInt(prompt('How many hours did you work at Google?'));
let totalGoogleIncome = googleHourlyRate * googleHours;

let amazonHourlyRate = parseInt(prompt('What is your hourly rate for Amazon?'));
let amazonHours = parseInt(prompt('How many hours did you work at Amazon?'));
let totalAmazonIncome = amazonHourlyRate * amazonHours;


let facebookHourlyRate = parseInt(prompt('What is your hourly rate for Facebook?'));
let facebookHours = parseInt(prompt('How many hours did you work at Facebook?'));
let totalFacebookIncome = facebookHourlyRate * facebookHours;

let totalIncome = totalGoogleIncome +totalAmazonIncome + totalFacebookIncome;
alert(`You made $${totalIncome}!`)