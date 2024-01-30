// ? What is a function?

// !A function is a block of code that performs a specific task and can be reused whenever needed. Functions are the basic building blocks of javascript.

// !A function is initialized with the function keyword, followed by a name, followed by parentheses()

function juicer(fruit = "Apple") {
  //   console.log("Juicer starting");
  //   console.log("Your " + fruit + " juice is getting ready");
  //   console.log("Complete!");
  return fruit + " juice";
}

// juicer();
juicer("Pineapple");
// juicer();
// juicer();

// a way to pass values, arguments, inputs, make it more dynamic

// *let's create a function that will print out a message to the console.

// pass a parameter to the function

// Default parameters

// What is scope in Javascript?
// Scope refers to a piece of data that could be accessed globally or locally

// global variable
// let num1 = 35;
// let num2 = 40;

function sum() {
  // local variable/scope
  let num1 = 10;
  let num2 = 40;
  return num1 + num2;
}

// console.log(num1 + num2);

let total = sum();

// const book = {
//   title: "Harry Potter",
//   author: "JK Rowling",
//   pages: 500,
//   description:
//     "Harry Potter is a series of seven fantasy novels written by British author J. K. Rowling. The novels chronicle the lives of a young wizard, Harry Potter, and his friends Hermione Granger and Ron Weasley, all of whom are students at Hogwarts School of Witchcraft and Wizardry.",
//   year_published: 1997,
//   number_of_books: 7,
// };

// ! student exercise: create a function that takes a book object as an argument and prints out "The book <book title> was written by <author> in <year published>. It has <number of books> books in the series. <description>. The book has <pages> pages."

// function printBookDetail(book)

// - create a function
// - pass a parameter => an object
// - return => "The book <object title> was written by <author> in <year published>. It has <number of books> books in the series. <description>. The book has <pages> pages."

function printBookDetail(book) {
  return `The book ${book.title} was written by ${book.author} in ${book.year_published}. It has ${book.number_of_books} books in the series. ${book.description}. The book has ${book.pages} pages.`;
}

/* 
! student exercise:
? create a function that takes a string and returns the number of characters in that string

? create a function that takes 2 string and returns the longer string 

? create a function that takes 2 string and joins them together with a space in between and returns the new string

? create a function that takes an array of numbers and returns the largest number in the array
*/

// countChar("This is the string") -> 18

function countChar(str) {
  return str.length;
}
// findLongerString("skbjdfkdjs", "dakhjbfkdjaf") => "dakhjbfkdjaf"

function findLongerString(str1, str2) {
  if (str1.length > str2.length) {
    return str1;
  } else if (str2.length > str1.length) {
    return str2;
  } else {
    return false;
  }
}

// joinString("Hello", "World") => "Hello World"
function joinString(str1, str2) {
  return str1 + " " + str2;
}

// findMax([12, 4, 6, 1, 90, 32]) => 90

function findMax(arr) {
  let largeNum = 0;

  for (let num of arr) {
    // debugger;
    if (num > largeNum) {
      largeNum = num;
      //   debugger;
    }
  }

  return largeNum;
}

// ! function scope
// * variables declared inside a function are only accessible inside that function - Local Scope
// * variables declared outside of a function are accessible anywhere in the file - Global Scope

// ! first class functions - functions as variables
// * functions can be assigned to variables - function expressions

// example:

function greet(name) {
  console.log("Hello world " + name);
}

function morningGreeting(name) {
  console.log("Good morning " + name);
}

function afternoonGreeting(name) {
  console.log("Good Afternoon " + name);
}

let greeting = greet;

// * functions can be passed as arguments to other functions - callback functions

// example:

function myFunc(name, callback) {
  let date = new Date();
  console.log(date);
  callback(name);
}

// * functions can be returned from other functions

// example:
// function greeting() {
//   return function () {
//     console.log("Hello World!");
//   };
// }

// ! student exercise: callback functions
// ? create a function `calculate` that takes two numbers and a function as argument and then executes the function on the two numbers passed in.

function sum(num1, num2) {
  return num1 + num2;
}

function product(num1, num2) {
  return num1 * num2;
}

function difference(num1, num2) {
  return num1 - num2;
}

function calculate(num1, num2, callback) {
  return callback(num1, num2);
}

// calculate(100, 20, product); // => 2000
calculate(150, 23, difference); // => 127

// ! arrow functions
// * arrow functions are a shorter syntax for writing function expressions
// example:

// 1. an arrow function could be declared as a variable

// 2. does not have the function keyword, but it takes the ()

// 3. it has an arrow

// let drink = () => {
//   console.log("It's 5 o'clock");
//   console.log("Have a drink");
// };

// function drink(name) {
// return "Have a " + name;

// }

// * rules:

// * if the function has a single parameter, the parentheses are optional
// example:

let drink = (name) => {
  return "Have a " + name;
};

// * if the function has a single expression, the curly braces are optional
// example:

// * if the function has a single expression, the return keyword is optional
// example:

// Callback functions example: array.map(), array.filter(), array.forEach()

// ! write your own map, filter, forEach functions

// myMap function -> takes an array and a callback function as arguments and returns a new array with the result of the callback function on each element of the array
// example: myMap([1, 2, 3], (num) => num * 2) -> [2, 4, 6]

// myFilter function -> takes an array and a callback function as arguments and returns a new array with the elements that return true when passed into the callback function
// example: myFilter([1, 2, 3], (num) => num > 2) -> [3]

// myForEach function -> takes an array and a callback function as arguments and returns undefined. It executes the callback function on each element of the array
// example: myForEach([1, 2, 3], (num) => console.log(num)) -> 1, 2, 3
