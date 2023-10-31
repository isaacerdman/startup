# Notes for cs260 Fall 2023

## Setup

### Using Github

**add**/**commit**/**push**, this is the order for adding changes up to github, although most of this is handeled easily by VS Code instead.

### Simon CSS

**main.css**: Changed padding around header elements, increased footer size slightly, centered footer text vertically.

**play.css**: Changed colors, borders and spacing of game and notifications. Messed around with the shadow feature to see what it would look like with color and settled on white. Made the notifications less opaque.

**about.css**: Changed border width and roundness for image and quote field. Spaced out elements more, and changed some font sizing, bold, and the pre-author character. Centered author name.


### JavaScript

#### DOM
```
// use for inserting new images and recipes ? 
function insertChild(parentSelector, text) {
    const newChild = document.createElement('div');
    newChild.textContent = text;

    const parentElement = document.querySelector(parentSelector);
    parentElement.appendChild(newChild);
}

insertChild('#courses', 'new course');

// remove element
function deleteElement(elementSelector) {
    const el = document.querySelector(elementSelector);
    el.parentElement.removeChild(el);
}

deleteElement('#courses div');

// when element clicked
const submitDataEl = document.querySelector('#submitData');
submitDataEl.addEventListener('click', function (event) {
  console.log(event.type);
});
```
**Popular Event Listeners**
    - Clipboard (cut, copied, pasted)
    - Focus (an element gets focused)
    - Keyboard (keys are pressed)
    - Mouse (click events)
    - Text selection (when text is selected)

#### Local Storage

**Functions of localStorage** (some)
    - setItem(name, value) - Sets a named itme's value into local storage
    - getItem(name) - Gets a named item's value from local storage
    - removeItem(name) - Removes a named item from local storage
    - clear() - Clears all items in local storage
Local storage values much be `string`, `number`, or `boolean`. Objects and arrays must be converted to JSON with `JSON.stringify()`, and retrieved with `JSON.parse()`.

**about.css**: Changed border width and roundness for image and quote field. Spaced out elements more, and changed some font sizing, bold, and the pre-author character. Centered author name.

#### Simon JS

**login.js**: Added key event listener to allow the user to press enter to login
