// target variables

var titleInput = document.getElementById('titleInput');
var bodyInput = document.getElementById('bodyInput');

var saveButton = document.getElementById('saveButton');
var removeButton = document.getElementById('removeButton');

// global variables

var customCards = [];
var currentCard;

// event listeners

saveButton.addEventListener('click', saveToStorage);

// class constructor

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

function saveToStorage() {
  event.preventDefault();
  currentCard = new Idea(titleInput.value, bodyInput.value);
  customCards.push(currentCard);

  // updateCardDisplay;

  console.log(currentCard);
}

// function to splice out card element from customCards array

function deleteFromStorage() {
  // add listener to 'click' event of "this" remove button's parent element
  // assign that element's value to removalCard variable
  var removalCard;
  // using that removalCard's id, iterate through customCards array and use conditional to match with array index with same id value
  for (var i = 0; i < customCards.length; i++) {
    if (customCards[i].id === removalCard.id) {
      // splice out element
      customCards.splice(i, 1);
    }
  }
  // run addToCardDisplay to update DOM and refresh page
  updateCardDisplay;
}
