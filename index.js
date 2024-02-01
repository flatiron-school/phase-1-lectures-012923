console.log("Hello World");

// * DOM-events

// ? What is dom events?
// * DOM events are actions that occur as a result of a user action or browser state change.
// Examples of DOM events:
// A mouse click -> click
// Hovering over an element -> mouseover
// Pressing the enter key -> keypress
// A page loading -> load
// A form being submitted -> submit

// What is an event listener?
// An event listener is a procedure or function in a computer program that waits for an event to occur.
// ! addEventListener() method attaches an event handler to the specified element

let button = document.getElementById("count-button");

let h1 = document.querySelector("#count");
// h1.textContent = "15";
let count = 0;

let handleClick = () => {
  //   alert("You clicked this button");
  //   console.log("button clicked");
  count++;
  console.log(count);

  h1.textContent = count;
};

button.addEventListener("click", handleClick);

let div = document.querySelector(".container");
let reset = document.createElement("button");
reset.textContent = "Reset counter";

div.append(reset);

reset.addEventListener("click", () => {
  count = 0;
  h1.textContent = count;
});

// let handleMouseEnter = () => {
//   div.style.backgroundColor = "blue";
// };

// let handleMouseLeave = () => {
//   div.style.backgroundColor = "#444";
// };

// div.addEventListener("mouseenter", handleMouseEnter);

// div.addEventListener("mouseleave", handleMouseLeave);

// ? Syntax
// element.addEventListener(event, function);
// addEventListener takes two arguments: the event and the function that will be called when the event fires(callback function). Basically, it's saying "Hey, when this event happens, do this thing."

// Example

// ! Exercise
// create three buttons with the text "Red", "Green", "Blue". When you click on the button, the background color of the page should change to the color of the button.

let red = document.getElementById("red");
let blue = document.getElementById("blue");
let green = document.getElementById("green");

let body = document.getElementsByTagName("body")[0];

let handleRed = (e) => {
  console.log(e.target);
  body.style.backgroundColor = "red";
};

let handleBlue = () => {
  body.style.backgroundColor = "blue";
};

let handleGreen = () => {
  body.style.backgroundColor = "green";
};

red.addEventListener("click", handleRed);
blue.addEventListener("click", handleBlue);
green.addEventListener("click", handleGreen);

// ! Exercise

// use the form to create a to-do item. When you submit the form, the to-do item should be added as an 'li' to the ul with the id "todo-list". Each 'li' should have a delete button. When you click on the delete button, the 'li' should be removed from the list.

let form = document.querySelector("form");

let ul = document.querySelector("#todo-list");

let handleSubmit = (event) => {
  event.preventDefault();
  console.log(event.target.input.value);
  console.log("The form is submitted");

  let li = document.createElement("li");
  li.textContent = event.target.input.value;

  ul.append(li);
};

form.addEventListener("submit", handleSubmit);
