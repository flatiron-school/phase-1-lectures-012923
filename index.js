// Deliverables

// JavaScript Fundamentals and Data Structures Workshop

// Workshop Introduction:
// In this workshop, we'll cover JavaScript fundamentals and data structures to help you build a strong foundation.
// Let's get started!

// Variables and Data Types
// ? What is a variable and data types?
// ! A variable is a container for storing data values. You can think of variables as little containers for information that live in a computer's memory. Information stored in variables can be updated or changed.

// ? How many data types are there in JavaScript?
// premitive data types - built in/native data types in js
// string - "abc", '123', "hello world"
// number - 1 , 2.4 - (integer, floats, big integer)
// boolean - true / false, 1/0
// undefined - doesn't have a value
// null - empty value

// rules for declaring variables:
// it has to be one word
// camelcase - phoneNumber
// it cant start with a number
// should always be self decribing

// 1. Declare a variable 'age' and assign your age to it.
let age = 39;

// age = 100;
// console.log(age);

// 2. Declare a constant 'name' and assign your name to it.
const name = "Chett";
console.log(name);

// 3. Declare a variable 'isStudent' and assign a boolean value to it.
let isStudent = false;

// 4. Declare a variable 'score' and assign a numeric value to it.
let score = 2.4;

// 5. Declare an array 'fruits' and add a few different fruit names to it.
// a container that holds a list of values or data
//[1, "abc", true]

let fruits = ["apple", "banana", "grape", "watermelon", "strawberry"];

// Console Output

// 7. Use 'console.log' to display a welcome message to the console.
console.log("Hello world!");
// Math Operations
// addition, substraction, multiplication, division, abs, exponennts, remainder
// +, -, *, /, %, **

// 8. Perform addition and multiplication operations on two numbers and store the results in variables.

// Strings

// 9. Create a string variable 'greeting'
let greeting = "Welcome!";
// 10. Use string interpolation to create a message by combining 'greeting' and 'name'.
let newGreeting = `${greeting} ${name} to flatiron school`;
// Conditional Statements
// combination of if else ->

// 11. Write an 'if' statement to check if your age is greater than or equal to 18.
// if (age < 18) {
//   console.log("You are too young");
// } else if (age >= 18 && age <= 30) {
//   console.log("You are an adult");
// } else {
//   console.log("You are too old");
// }

// 12. Use 'if-else' to display different messages based on isStudent value.
// a. If isStudent is true, display 'Welcome to Flatiron!'
// b. If isStudent is false, display 'Welcome!'

if (isStudent) {
  console.log("Welcome to Flatiron!");
} else {
  console.log("Welcome!");
}

// Switch Statements

// shorthand of if else
isStudent ? console.log("Welcome to flatiron") : console.log("welcome");
// Use a switch statement to display different messages based on the value of 'score'.

// Ternary Operator

// Use a ternary operator to display different messages based on the value of 'score'.

// Loops
// a continious execution of a block of code until it ends based on the end value or when it meets the condition

// 13. Use a 'for' loop to print numbers from 1 to 5.
// for (let i = 0; i <= 5; i++) {
//   console.log(i);
// }

// 14. Use a 'while' loop to print numbers from 1 to 5.

// let i = 0;
// while (i < 5) {
//   //   console.log(i++);
//   i += 1;
//   console.log(i);
// }

// Arrays

// ? What is an array?

// 15. Declare an array 'colors' with a few color names.
//             0        1       2       3        4
let colors = ["red", "blue", "green", "pink", "yellow"];
// Loop through the 'colors' array and print each color to the console.

// for (let i = 0; i < colors.length; i++) {
//   console.log(colors[i]);
// }
// Loop through the 'colors' array and print the index of each color to the console.

// ! difference between 'for', 'for...of', and 'for...in' loops

// for...of

for (let color of colors) {
  console.log(color);
}
// for (let index in colors) {
//   console.log(index + " = " + colors[index]);
// }

// 16. Add a new color to the 'colors' array.
colors.push("indigo");

// 17. Access the first and last color in the array.


// access the color at a specific index.

// find the index of a color.

// check if a color exists in the 'colors' array.
// remove the last color from the 'colors' array.
// remove the first color from the 'colors' array.

// Objects

// ? What is an object?

// 18. Declare an object 'book' with properties 'title', 'author', 'year', 'description', and 'rating'.

// 19. Access the 'title' property of the 'book' object.
// 20. Update the 'title' property of the 'book' object.

// 21. Add a new property 'genre' to the 'book' object.
// 22. Remove the 'rating' property from the 'book' object.

// 23. Loop through the 'book' object and print each property to the console.

// Console Output the following: {book title} by {book author} was published in {book year}. {book description}. It has a rating of {book rating}. The genre is {book genre}.
