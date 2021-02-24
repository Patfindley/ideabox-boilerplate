## IdeaBox Group

#### Project Resources
- **Specs**: https://frontend.turing.io/projects/module-1/ideabox-group.html
- **GitHub repo**: https://github.com/EllieAzaveda/ideabox-boilerplate
- **GitHub page**: 

#### Overview
Every developer has more ideas than time. As David Allen likes to say “the human brain is for creating ideas, not remembering them.” In this project, we’ll be building an application that records and archives our ideas (good and bad alike).

Throughout the project, one of our focuses will be on providing a fluid and responsive client-side interface. To this end, we’ll rely on JavaScript to implement snappy filtering in the browser, and localStorage to persist our wonderful ideas between sessions.

#### Learning Goals
Gain an understanding of how to write clean HTML and CSS to match a provided comp
Understand how to implement client-side data persistence using localStorage and JSON
Understand what it looks like to have a separate data model (using a class) and DOM model
Incorporate & iterate over arrays in order to filter what is being displayed
Craft code with clean style, using small functions that show trends toward DRYness and SRP
Day One Deliverables
Complete a DTR.
One person should fork the boilerplate repository. Add all team members and your Project Manager as collaborators.
Deploy your application to GitHub Pages.
In a Slack DM to your assigned instructor, drop the repo link, DTR and GitHub pages link.

---

#### Day One Deliverables
- [ √ ] Complete a DTR.
- [ √ ] One person should fork the boilerplate repository. Add all team members and your Project Manager as collaborators.
- [ √ ] Deploy your application to GitHub Pages.
- [ √ ] In a Slack DM to your assigned instructor, drop the repo link, DTR and GitHub pages link.


### Progression

#### Iteration 0 - Desktop Layout
##### TARGET: 9pm on Mon 2.22

* Plan to write the HTML and CSS so that your application matches this comp. Based on what you are building, you can anticipate that the Idea “cards” will not always be there on page load, but for now, they should.

* Use the same text on your cards that is used in the spec so you can ensure your spacing/sizing is accurate.


##### HTML
- [ √ ] Add form element to include input boxes and button
- [ √ ] Add section element to contain idea box grid
- [  ] Add aside element to contain left-hand side bar
###### Form Element
- [ √ ] Add 'title-input' and 'body-input' elements with respective labels
- [ √ ] Add 'save-button' button
- [ √ ] Add 'search-ideas' section element
- [ √ ] Add 'search-button' button and 'search-input' input
###### Card Display Element
- [ √ ] Add 'card-display' element to contain grid of idea boxes
- [ √ ] Add 'idea-box' element to populate grid
- [ √ ] Add 'upper-box' nav to contain 'favorite' and 'remove' buttons
- [ √ ] Add 'favorite' and 'remove' buttons
- [ √ ] Add 'lower-box' footer to contain 'comment' button and 'comment' input *
- [ √ ] Add 'card-body' div with h3 'title' and <p> body element
###### Aside Element
- [ √ ] Add h2 'element for "IdeaBox" title
- [ √ ] Add <div> container for "Filter Starred Ideas" and button
- [ √ ] Add "Show Starred Ideas" button element and "Filter Starred Ideas" label element

* Should we use a dropdown menu for the comment input element?

CSS

##### Form Element
- [ √ ] Add 'form-style' class with background-color and sizing using flex-direction: column and align-content: center
- [ √ ] Add 'rectangle' class with rectangle box sizing
- [ √ ] Add 'title-box' class with coloration
- [ √ ] Add 'body-box' class with border and sizing
- [ √ ] Add 'save-button' class with coloration
- [ √ ] Add 'search-ideas' class with style and sizing
- [ √ ] Add 'search-button' class with style and sizing
- [ √ ] Add 'idea-title-box' class (with Flexbox) for style throughout idea box grid

##### Body Element
- [  ] Add 'idea-box' class with unique font-weight, color, background-color, order
- [  ] Add 'upper-box' class with unique background-color
- [  ] Add 'lower-box class with unique color and background-color, and layout
- [  ] Add 'favorite', 'remove', and 'comment' classes, each with unique symbol, coloration

##### Aside Element
- [  ] Add styling for 'aside' element with unique background-color and sizing
- [  ] Add 'upper-aside-box' class with unique color and sizing
- [  ] Add 'lower-aside-box' class with unique color, top and bottom border, and sizing
- [  ] Add "starred-ideas-button' class with unique color, background-color, and sizing

---

#### Iteration 1 and beyond
##### TARGET: 9pm on Tues 2.23

We strongly recommend that you complete Iteration 0 before moving on to the next iterations!

##### Architecture
For this project, we’ll be increasingly thinking about the “data model” and “DOM model” as separate entities. We’ll be using:

* JSON and localStorage to persist data on page reload.
* JavaScript to manage client-side interactions.
Your entire application will consist of one HTML page or template. You will have two JavaScript files, for now:

* An idea.js file that contains an Idea class.
* Idea methods must include, but are not limited to:
  - constructor
  - saveToStorage (should only have one job which is to save the instance to storage)
  - deleteFromStorage
  - updateIdea (should be able to update the idea’s title, body, or starred state)
  - A main.js file that contains all DOM related JavaScript.
  - Note The idea.js file must be the first script in your HTML so that your main.js file has access to your Idea class.

##### Data Model
An idea has an id, title, body, and star.
The id should be a unique identifier. (Note: generating a random number does not guarantee it will be unique)
title and body are strings.
star is a boolean.
Each idea should be created as an object instance of the Idea class. Once an idea object is created, all that data can be used to update the DOM. That object should also be added to a list of all the ideas your application currently has. This should probably be a global variable in your main.js.

JS
- [ √ ] Create class constructor function, which includes all relevant class properties
- [ √ ] Create a customCards array to contain new class instances (pushed in via saveToStorage)
- [ √ ] Create saveToStorage function, which will save a given class instance to customCards
- [  ] Create deleteFromStorage function to iterate through customCards and splice out element by specific index
- [  ] Create updateIdea function to access specific customCards index and update property values
    * Either pass in new property values via parameters or by storing input values in global variables
- [  ] Connect idea.js to main.js DOM file


--- 

#### Iteration 2 - Adding Ideas
As a user,

When I click “Save”,
If I entered information in both the “Title” and “Body” input fields,
I should see a new idea card with the provided title and body appear in the idea list
As a user,

When I click “Save”,
If I entered information in both the “Title” and “Body” input fields,
I should see the “Title” and “Body” input fields clear out
As a user,

When I look at the “Save” button,
When either the “Title” or “Body” inputs are empty,
I should notice that the “Save” button is disabled because it is a lighter color and the cursor is not a pointer when I hover over it
As a user,

When I click “Save”,
And a new card is successfully created,
I should not see the page reload