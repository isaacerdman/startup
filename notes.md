# Notes for cs260 Fall 2023

## Setup

### Using Github

**add**/**commit**/**push**, this is the order for adding changes up to github, although most of this is handeled easily by VS Code instead.

### HTML deliverable

 - **HTML pages** - Three HTML pages that represent the ability to login, view cookbook/friend activity, and view one recipe at a time
 - **Links** - The home page and recipe page link to each other. Login from home takes user to cookbook page. The image for pizza on the cookbook page also links to the recipe page
 - **Text** - Text input can be given to search for a particular recipe in either the cookbook or the recipe page
 - **Images** - Images added for temporary recipe displays under recipe page
 - **Login** - Input box and submit button for login
 - **Database** - The recipes will be saved for the profile, representing data pulled from database.
 - **WebSocket** - View activity of friends in app as they add and modify recipes.

### CSS deliverable

#### Simon CSS

**main.css**: Changed padding around header elements, increased footer size slightly, centered footer text vertically.

**play.css**: Changed colors, borders and spacing of game and notifications. Messed around with the shadow feature to see what it would look like with color and settled on white. Made the notifications less opaque.

**about.css**: Changed border width and roundness for image and quote field. Spaced out elements more, and changed some font sizing, bold, and the pre-author character. Centered author name.

#### Startup CSS

 - **Header**, **Footer**, and **Main content** - Formatted to the header and footer are proper sizes. Header and footer disappear when screen is short. The main content is fixed to a minimum size so the footer remains at the bottom of the screen even with minimal content in main.
 - **Navigation Elements** - Turned into more of a button style with changing appearance depending on hover by user. 4 pages (one added for inbox since last assignment). Link to recipe page from pizza image on cookbook page. Link to inbox page from "send recipe" button on recipe page. And "Snapfeed" in upper left header links back to home.
 - **Responsive Window Resizing** - Already mentioned some in first bullet point, but images on cookbook page with remain same size and move down to create more rows and less columns when too thin. Navigation buttons in menu get a bottom margin in portrait mode so they don't overlap when screen in thin. Displayed username by "Snapfeed" in header moves underneath "Snapfeed" when screen is narrow.
 - **Application Elements** - Used borders, background and cohesive colorschemes to provide appealing structure visually. Attempted to keep main content minimal when possible.
 - **Application Text Content** - Consistent fonts, only used special fonts when necessary (see "Welcome" on home page) since they tend to be more distracting.
 - **Application Images** - Images on Cookbook page and recipe page have border and background set to allow for padding and proper framing. Tried the "nth child" color alternating but ended up thinking it was too busy and reverted to consistent colors.
