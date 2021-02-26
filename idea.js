// target variables

var titleInput = document.getElementById("titleInput");
var bodyInput = document.getElementById("bodyInput");
var titleInputField = document.querySelector(".title-input");
var bodyInputField = document.querySelector(".body-input");

var saveButton = document.getElementById("saveButton");
var removeButton = document.getElementById("removeButton");

var customCard = document.querySelector(".custom-card");

var ideaGrid = document.querySelector(".idea-grid");
// global variables

var customCards = [];
var currentCard;

// event listeners

saveButton.addEventListener('click', function(event) {
  saveToStorage(event);
});

ideaGrid.addEventListener("click", function(event) {
  deleteFromStorage(event);
});

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

function saveToStorage(event) {
  event.preventDefault();
  currentCard = new Idea(titleInput.value, bodyInput.value);
  customCards.push(currentCard);
  updateMiniCard();
  clearInput();
}

// function to splice out card element from customCards array

function deleteFromStorage(e) {
  if (e.target.classList.contains("remove-button")) {
    var index = e.target.closest("div").id;
    customCards.splice(index, 1);
    updateMiniCard();
  }
};

// function to clear input fields

function clearInput() {
  titleInputField.innerText = "";
  bodyInputField.innerText = "";
}
