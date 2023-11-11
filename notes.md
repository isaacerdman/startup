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


### HTML deliverable

 - **HTML pages** - Three HTML pages that represent the ability to login, view cookbook/friend activity, and view one recipe at a time
 - **Links** - The home page and recipe page link to each other. Login from home takes user to cookbook page. The image for pizza on the cookbook page also links to the recipe page
 - **Text** - Text input can be given to search for a particular recipe in either the cookbook or the recipe page
 - **Images** - Images added for temporary recipe displays under recipe page
 - **Login** - Input box and submit button for login
 - **Database** - The recipes will be saved for the profile, representing data pulled from database.
 - **WebSocket** - View activity of friends in app as they add and modify recipes.


### JavaScript deliverable

 - **Login** - Login allowed and takes user directly to next page. Local storage used to temporarily store and display current user
 - **Database Data** - Login info will be saved here. Upload image to be displayed in cookbook, will be saved for user.
 - **WebSocket** - Notifications for when a user uploads a new recipe.
 - **Interaction Logic** - Clicking on a recipe in cookbook will take you to the recipe page with single focus. Login works.