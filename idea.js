// global variables

// array to store user-submitted custom cards (acts as our Data Model)
var customCards = [];


// class constructor
//When a card is created, it's an instance of this class
//Title, Body, save -> Save creates the instance with inputs
class Idea {
  constructor(title, body) {
    this.id = Date.now();
    this.title = title;
    this.body = body;
    this.isStarred = false;
    this.comments = [];
  }
}

// functions

// invoked by Save button 'click' event, which calls class constructor using parameters
// parameters will carry in values of input boxes, also assigned via Save button 'click' event
// constructor returns instance, stores in currentCard variable, and pushes into customCards array (Data Model)
function saveToStorage(title, body) {
  var currentCard = new Idea(title, body);
  customCards.push(currentCard);
}