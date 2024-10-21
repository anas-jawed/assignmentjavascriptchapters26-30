// 1. Write a program that takes a positive integer from user &
// display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number


// let user = prompt("Enter only positive number");

// if(user >= 0){
//     console.log(user);
//     console.log(Math.floor(user));
//     console.log(Math.round(user));
//     console.log(Math.ceil(user));

// }else{
//     alert("please enter positive value");
// }


// 2. Write a program that takes a negative floating point
// number from user & display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number


// let user  = prompt("Enter negative value");

// if(user <= 0){
//      console.log(user);
//      console.log(Math.floor(user));
//      console.log(Math.round(user));
//      console.log(Math.ceil(user));

// } else{
//     alert("Enter only negative value");
// }

// 3. Write a program that displays the absolute value of a 
// number.
// E.g. absolute value of -4 is 4 & absolute value of 5 is 5


// let user = -4;
// let user1 = 5;
// console.log(Math.abs(user));
// console.log(Math.abs(user1));

// 4. Write a program that simulates a dice using random() 
// method of JS Math class. Display the value of dice in your 
// browser.:


// let dice = Math.floor(Math.random()*6) + 1;
// console.log(dice);


// 5. Write a program that simulates a coin toss using random()
// method of JS Math class. Display the value of coin in your
// browser


// let heads = Math.floor(Math.random() * 2) +1;
// console.log(`2 become a head value ${heads}`);
// let tails = Math.floor(Math.random() * 2) +1;
// console.log(`1 become a tail value ${tails}`);


// 6. Write a program that shows a random number between 1 
// and 100 in your browser.


// let random = Math.floor(Math.random() * 100) + 1;

// console.log(`random number between 1 and 100: ${random}`);


// Write a program that asks the user about his weight. Parse 
// the user input and display his weight in your browser. 
// Possible user inputs can be:
// a. 50
// b. 50kgs
// c. 50.2kgs
// d. 50.2kilograms


// let weight = prompt("Enter Your weight");
// weight = parseFloat(weight);
// console.log(`The weight of user is ${weight} kilograms`);


// 8. Write a program that stores a random secret number from 
// 1 to 10 in a variable. Ask the user to input a number 
// between 1 and 10. If the user input equals the secret 
// number, congratulate the user.


// let random = 6;
// let guess = prompt(Math.floor(Math.random() * 10) + 1);
// if(random == guess){
//     console.log("Congragulations");
// }else{
//     console.log("try again");
// }