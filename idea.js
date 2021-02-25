// target variables

var titleInput = document.getElementById("titleInput");
var bodyInput = document.getElementById("bodyInput");

var saveButton = document.getElementById("saveButton");
var removeButton = document.getElementById("removeButton");

var customCard = document.querySelector(".custom-card");

var ideaGrid = document.querySelector(".idea-grid");
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
  updateMiniCard();
}

// function to splice out card element from customCards array

ideaGrid.addEventListener("click", function(event) {
  // add listener to 'click' event of "this" remove button's parent element
  // assign that element's value to removalCard variable
  // var removalCard;
  // using that removalCard's id, iterate through customCards array and use conditional to match with array index with same id value
  if (event.target.className === "remove-button") {
    for (var i = 0; i < customCards.length; i++) {
      // console.log(event.currentTarget.id);
      console.log(event);
    //   if (customCards[i].id === event.currentTarget.id) {
    //     console.log(customCards[i],e);
    //     customCards.splice(i, 1);
    //   }
    // }
    }
  }
  // run addToCardDisplay to update DOM and refresh page
  updateMiniCard;
});


// var parent = document.querySelector('.parent');

// parent.addEventListener('click', function (event) {
//   if (event.target.className === 'click-me') {
//     // do your action on your 'button' or whatever it is you're listening for
//   }
// });
// If(event.target.className === “remove - button”) { OUR FOR LOOP }