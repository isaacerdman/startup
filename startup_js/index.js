const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 8080;

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.use(express.static(__dirname));

class Cookbook {
    constructor() {
        const userName = this.getUserName();
        console.log(`User: ${userName}`);
    }

    getUserName() {
        return process.env.USER_NAME || 'unknown';
    }
}

const cookbook = new Cookbook();

let notificationCount = 3;

function addNotification() {
    // Add notification logic (unchanged)
    console.log('Notification added.');
}

function removeOldestNotification() {
    // Remove oldest notification logic (unchanged)
    console.log('Oldest notification removed.');
}

setInterval(addNotification, 5000);

function addImage(imageUrl, recipeName) {
    // Add image logic (unchanged)
    console.log(`Added image: ${recipeName} - ${imageUrl}`);
    saveImageInfo(imageUrl, recipeName);
}

function saveImageInfo(imageUrl, recipeName) {
    const existingImages = loadSavedImages();
    existingImages.push({ imageUrl, recipeName });
    fs.writeFileSync('recipeImages.json', JSON.stringify(existingImages));
}

function loadSavedImages() {
    if (fs.existsSync('recipeImages.json')) {
        const fileContent = fs.readFileSync('recipeImages.json', 'utf8');
        return JSON.parse(fileContent) || [];
    }
    return [];
}

// Load saved images when the script runs
const existingImages = loadSavedImages();
existingImages.forEach(({ imageUrl, recipeName }) => {
    addImage(imageUrl, recipeName);
});

// Function to get URL parameters
function getUrlParameter(name) {
    // Get URL parameter logic (unchanged)
}

// Get the recipe name and image URL from the command line arguments
const recipeName = process.argv[2];
const imageUrl = process.argv[3];

if (recipeName && imageUrl) {
    addImage(imageUrl, recipeName);
}

app.listen(port, () => {
    console.log(`Web service listening on port ${port}`);
});
