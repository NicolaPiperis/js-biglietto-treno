// Declare the global variables
let numberKm, userAge, basePrice, finalPrice, message;


// The program will ask the user for the number of kilometers he wants to travel
numberKm = parseInt(prompt("how many kilometers will you travel?"));
console.log("The kilometers you will do, will be: " + numberKm );

// The program will ask for the user's age
userAge = parseInt(prompt("How old are you?"));
console.log("User is : " + userAge + "years old");


// The ticket price is defined on the basis of km (€0.21 per km)
basePrice = (numberKm * 0.21)
console.log("The base price is :" + basePrice + "€");


if (userAge < 18) {// A 20% discount is applied for minors
    finalPrice = basePrice - (basePrice * 20 / 100) ;
}
// A 40% discount is applied for over 65s.
else if ( userAge > 65) {
    finalPrice = basePrice - (basePrice * 40 / 100);
} 
else {// Based on this information, he will calculate the total price of the trip
    finalPrice = basePrice;
}
console.log("The final price is " + finalPrice + "€");

finalPrice = finalPrice.toFixed(2);

// message
message = `The sum to be paid based on the rate applied considering the various discounts based on age will be ${finalPrice} €`;

// Output
document.getElementById("rate").innerHTML = message;
  