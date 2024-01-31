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

// ! Creating Elements
// * document.createElement()
// * element.appendChild() -> append a single child to a parent node
// * element.append() -> append multiple child to a parent node

// ! Adding Classes and IDs
// * element.className
// * element.id

// ! Changing Attributes
// * textContent
// * innerText
// * innerHTML
// * value
// * src

// ! Changing Styles
// * backgroundColor
// * color
// * fontSize

// ? DOM Excercise
// * Create an array of color names
// * Create an unordered list and add list items for each color in the array and append to the DOM (use foreach)
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
