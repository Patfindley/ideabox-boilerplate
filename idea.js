// target variables

var titleInput = document.getElementById("titleInput");
var bodyInput = document.getElementById("bodyInput");
var inputFields = document.querySelectorAll(".user-input")

var saveButton = document.getElementById("saveButton");
var removeButton = document.getElementById("removeButton");

var customCard = document.querySelector(".custom-card");

var ideaGrid = document.querySelector(".idea-grid");
// global variables

var customCards = [];
var currentCard;



// event listeners

saveButton.addEventListener("click", function(event) {
  saveToStorage(event);
});

for(const inputField of inputFields) {
inputField.addEventListener("change", function() {
  disableSaveButton();
})
};

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
  titleInput.value = "";
  bodyInput.value = "";
}

function disableSaveButton() {

  if (titleInput.value != "" && bodyInput.value != "") {
    saveButton.disabled = false;
    saveButton.style.backgroundColor = "#363667";
    return;
  }
}

// Change css save button default to lighter -> Save OG colorful
//Add to css class
// Add color change to function
