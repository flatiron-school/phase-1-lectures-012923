console.log("Hello World!");

// DOM manipulation
// ! What is the DOM?
// * Document Object Model
// * Structured representation of an HTML document
// * The DOM is used to connect webpages to scripts like JavaScript
// * For each HTML element, there is an object in the DOM that we can access and interact with
// * DOM is a tree of nodes/elements created by the browser. Each nodes is a child of another node and so on.
// https://www.w3schools.com/js/pic_htmltree.gif

// ! DOM Selectors
// * Single element selectors: getElementById, querySelector
// * Multiple element selectors: getElementsByClassName, getElementsByTagName, querySelectorAll

let title = document.querySelector(".title");
console.log(title);

title.textContent = "Google";

// ! Changing Attributes
// * textContent -> change text
// * innerText
// * innerHTML -> changes the html
// * value -> input, textarea
// * src -> image source

// ! Changing Styles
// * backgroundColor
let html = document.querySelector("html");

html.style.backgroundColor = "Green";

let body = document.querySelector("body");
body.style.backgroundColor = "Grey";

body.style.color = "White";

// body.style.border = "10px";
// body.style.borderColor = "Black";
// body.style.borderStyle = "solid";

// * color
// * fontSize

// ! Creating Elements
// * document.createElement()

let myh1 = document.createElement("h1");
myh1.textContent = "Hello world";

myh1.id = "hello-world";

body.append(myh1);
// * element.appendChild() -> append a single child to a parent node
// * element.append() -> append multiple child to a parent node

// ! Adding Classes and IDs
// * element.className
// * element.id

// ? DOM Excercise
// * Create an array of color names
let colors = ["purple", "brown", "indigo", "blue", "orange", "cat"];

// * Create an unordered list and add list items for each color in the array and append to the DOM (use foreach)
// create an ul => unordered list
let ul = document.createElement("ul");

// li => append to ul

// append the ul to the body

for (let color of colors) {
  console.log(color);
  let li = document.createElement("li");
  ul.append(li);
  li.textContent = color;
  li.style.color = color;
}

body.append(ul);
// * The color of the text for each list item should be the color of the array item

// ! Student excercise

let art = {
  name: "Mona Lisa",
  artist: "Leonardo da Vinci",
  year: 1503,
  description:
    "The Mona Lisa is a half-length portrait painting by the Italian artist Leonardo da Vinci. It is considered an archetypal masterpiece of the Italian Renaissance, and has been described as the best known, the most visited, the most written about, the most sung about, the most parodied work of art in the world.",
  image:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Mona_Lisa.jpg/1200px-Mona_Lisa.jpg",
  worth: 1000000000,
};

// * must be done in JavaScript:
// * inside the div with classname "art-container", display the information about the art piece from the object above. Render them in the order of: image(img), name(h1), artist(h2), year(h3), description(p), worth(h4)
