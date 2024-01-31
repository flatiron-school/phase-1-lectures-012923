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

// ? Syntax
// element.addEventListener(event, function);
// addEventListener takes two arguments: the event and the function that will be called when the event fires(callback function). Basically, it's saying "Hey, when this event happens, do this thing."

// Example

// ! Exercise
// create three buttons with the text "Red", "Green", "Blue". When you click on the button, the background color of the page should change to the color of the button.

// ! Exercise

// use the form to create a to-do item. When you submit the form, the to-do item should be added as an 'li' to the ul with the id "todo-list". Each 'li' should have a delete button. When you click on the delete button, the 'li' should be removed from the list.
