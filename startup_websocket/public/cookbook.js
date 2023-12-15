// Event messages
const RecipeAddedEvent = 'recipeAdded';

class Cookbook {
    socket;

    constructor() {
        // Initialize score from localStorage or set to 0 if not present
        this.score = parseInt(localStorage.getItem('score')) || 0;

        configureWebSocket();
    }

    getUserName() {
        return localStorage.getItem('userName') ?? 'unknown';
    }

    // Function to increase the score by one and update localStorage
    increaseScore() {
        this.score++;
        localStorage.setItem('score', this.score.toString());
    }

    configureWebSocket() {
        const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
        this.socket = new WebSocket(`${protocol}://${window.location.host}/ws`);
        this.socket.onopen = (event) => {
          this.displayMsg('system', 'cookbook', 'connected');
        };
        this.socket.onclose = (event) => {
          this.displayMsg('system', 'cookbook', 'disconnected');
        };
        this.socket.onmessage = async (event) => {
          const msg = JSON.parse(await event.data.text());
          this.displayMsg(msg.from, `add a new recipe #${msg.value.score}`);
        };
    }

    displayMsg(cls, from, msg) {
        const chatText = document.querySelector('#player-messages');
        chatText.innerHTML =
            `<div class="event"><span class="${cls}-event">${from}</span> ${msg}</div>` + chatText.innerHTML;
    }

    broadcastEvent(from, type, value) {
        const event = {
            from: from,
            type: type,
            value: value,
        };
        this.socket.send(JSON.stringify(event));
    }
}

const cookbook = new Cookbook();

// // setInterval(() => {
// //     const chatText = document.querySelector('#user-messages');
// //     chatText.innerHTML =
// //       `<div class="event"><span class="user-event">Eich</span> uploaded a new recipe</div>` + chatText.innerHTML;
// //   }, 5000);
// // Keep track of notifications
// let notificationCount = 3;

// // Function to add a new notification
// function addNotification() {
//   const chatText = document.querySelector('#user-messages');
//   if (chatText) {
//     const newNotification = `<div class="event"><span class="user-event">Eich</span> uploaded a new recipe</div>`;
//     chatText.innerHTML = newNotification + chatText.innerHTML;
    
//     // Increment notification count
//     notificationCount++;

//     // Check if the count exceeds 3, remove the oldest notification
//     if (notificationCount > 3) {
//         removeOldestNotification();
//     }
//   }
 
// }

// // Function to remove the oldest notification
// function removeOldestNotification() {
//   const chatText = document.querySelector('#user-messages');
//   const notifications = chatText.querySelectorAll('.event');

//   // Remove the oldest notification (last child)
//   chatText.removeChild(notifications[notifications.length - 1]);

//   // Decrement notification count
//   notificationCount--;
// }

// // Set interval to add notifications every 5 seconds
// setInterval(addNotification, 5000);

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

            cookbook.increaseScore();


            broadcastEvent(this.getPlayerName(), RecipeAddedEvent, {});
        }
    }
}

// Functionality for peer communication using WebSocket



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