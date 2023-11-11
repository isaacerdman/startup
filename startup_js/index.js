// use for inserting new images and recipes ? 
// function insertChild(parentSelector, text) {
//     const newChild = document.createElement('div');
//     newChild.textContent = text;

//     const parentElement = document.querySelector(parentSelector);
//     parentElement.appendChild(newChild);
// }

// insertChild('#courses', 'new course');

// remove element
// function deleteElement(elementSelector) {
//     const el = document.querySelector(elementSelector);
//     el.parentElement.removeChild(el);
// }

// deleteElement('#courses div');

// when element clicked
// const submitDataEl = document.querySelector('#submitData');
// submitDataEl.addEventListener('click', function (event) {
//   console.log(event.type);
// });

function login() {
    const nameEl = document.querySelector("#name");
    localStorage.setItem("userName", nameEl.value);
    window.location.href = "cookbook.html";
}

class Cookbook {

    constructor() {
        const userNameEl = document.querySelector('.username');
        userNameEl.textContent = "User: " + this.getUserName();
    }

    getUserName() {
        return localStorage.getItem('userName') ?? 'unknown';
    }

}

const cookbook = new Cookbook();

// setInterval(() => {
//     const chatText = document.querySelector('#user-messages');
//     chatText.innerHTML =
//       `<div class="event"><span class="user-event">Eich</span> uploaded a new recipe</div>` + chatText.innerHTML;
//   }, 5000);
// Keep track of notifications
let notificationCount = 3;

// Function to add a new notification
function addNotification() {
  const chatText = document.querySelector('#user-messages');
  if (chatText) {
    const newNotification = `<div class="event"><span class="user-event">Eich</span> uploaded a new recipe</div>`;
    chatText.innerHTML = newNotification + chatText.innerHTML;
    
    // Increment notification count
    notificationCount++;

    // Check if the count exceeds 3, remove the oldest notification
    if (notificationCount > 3) {
        removeOldestNotification();
    }
  }
 
}

// Function to remove the oldest notification
function removeOldestNotification() {
  const chatText = document.querySelector('#user-messages');
  const notifications = chatText.querySelectorAll('.event');

  // Remove the oldest notification (last child)
  chatText.removeChild(notifications[notifications.length - 1]);

  // Decrement notification count
  notificationCount--;
}

// Set interval to add notifications every 5 seconds
setInterval(addNotification, 5000);

// Function to add an image to the grid
function addImage() {
    const gridContainer = document.getElementById('gridContainer');

    // Prompt the user for the image source
    const imageUrl = prompt('Enter the URL of the image:');

    // Check if the user provided a URL
    if (imageUrl) {
        // Prompt the user for the recipe name
        const recipeName = prompt('Enter the recipe name:');

        // Check if the user provided a recipe name
        if (recipeName) {
            // Create a new image div
            const newImageDiv = document.createElement('div');
            newImageDiv.className = 'image';

            // Create an image element
            const newImage = document.createElement('img');
            newImage.className = 'round';
            newImage.alt = recipeName; // Use the recipe name as the alt attribute
            newImage.src = imageUrl;

            // Set a max-width for the image using CSS
            newImage.style.maxWidth = '100%';

            // Attach a click event listener to the image
            newImageDiv.addEventListener('click', function () {
                // Navigate to recipe.html and pass the image URL and recipe name as parameters
                window.location.href = `recipe.html?imageUrl=${encodeURIComponent(imageUrl)}&recipeName=${encodeURIComponent(recipeName)}`;
            });

            // Append the image and recipe name elements to the image div
            newImageDiv.appendChild(newImage);

            // Append the new image div to the grid container
            gridContainer.appendChild(newImageDiv);

            // Store the added image information in localStorage
            saveImageInfo(imageUrl, recipeName);
        }
    }
}

// Function to store image information in localStorage
function saveImageInfo(imageUrl, recipeName) {
    // Retrieve existing images from localStorage or initialize an empty array
    const existingImages = JSON.parse(localStorage.getItem('recipeImages')) || [];

    // Add the new image information to the array
    existingImages.push({ imageUrl, recipeName });

    // Save the updated array back to localStorage
    localStorage.setItem('recipeImages', JSON.stringify(existingImages));
}

// Function to load saved images from localStorage
function loadSavedImages() {
    // Check if the current page is cookbook.html
    if (window.location.pathname.includes('cookbook.html')) {
        const existingImages = JSON.parse(localStorage.getItem('recipeImages')) || [];

        for (const { imageUrl, recipeName } of existingImages) {
            const newImageDiv = document.createElement('div');
            newImageDiv.className = 'image';

            const newImage = document.createElement('img');
            newImage.className = 'round';
            newImage.alt = recipeName;
            newImage.src = imageUrl;
            newImage.style.maxWidth = '100%';

            newImageDiv.addEventListener('click', function () {
                window.location.href = `recipe.html?imageUrl=${encodeURIComponent(imageUrl)}&recipeName=${encodeURIComponent(recipeName)}`;
            });

            newImageDiv.appendChild(newImage);

            const gridContainer = document.getElementById('gridContainer');
            gridContainer.appendChild(newImageDiv);
        }
    }
}

// Attach the addImage function to the button click event
const addRecipeButton = document.getElementById('addRecipeButton');
if (addRecipeButton) {
    addRecipeButton.addEventListener('click', addImage);
}

// Load saved images when the page loads
loadSavedImages();

// Function to get URL parameters
function getUrlParameter(name) {
    name = name.replace(/[[]/, '\\[').replace(/[\]]/, '\\]');
    const regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    const results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

// Get the recipe name and image URL from the URL parameters
const recipeName = getUrlParameter('recipeName');
const imageUrl = getUrlParameter('imageUrl');

// Check if the page is recipe.html before updating the content
if (recipeName && imageUrl && document.getElementById('recipeName') && document.getElementById('recipeImageContainer')) {
    // Set the recipe name in the input field
    document.getElementById('recipeName').value = recipeName;

    // Create an image element and set its attributes
    const recipeImage = document.createElement('img');
    recipeImage.className = 'round';
    recipeImage.alt = recipeName;
    recipeImage.src = imageUrl;
    recipeImage.style.width = '400px';
    // recipeImage.style.maxWidthwidth = '100%';

    // Append the image element to the recipeImageContainer
    document.getElementById('recipeImageContainer').appendChild(recipeImage);
}