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

function login() {
    const nameEl = document.querySelector("#name");
    localStorage.setItem("userName", nameEl.value);
    window.location.href = "play.html";
}