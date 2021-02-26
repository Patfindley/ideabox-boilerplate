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

saveButton.disabled = true;


// event listeners

saveButton.addEventListener("click", function(event) {
  saveToStorage(event);
});

for(const inputField of inputFields) {
inputField.addEventListener("input", function() {
  enableSaveButton();
})};


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

// Input shit that we may not need

function validateTitleInput() {
  if (titleInput.value.length <= 25) {
    enableSaveButton();
  } else {
    alert("Title must be 25 characters or less");
  }
}

function validateBodyInput() {
  if (bodyInput.value.length <= 50) {
    enableSaveButton();
  } else {
    alert("Body must be 50 characters or less");
  }
}

// function to disable/enable Save Button

function enableSaveButton(title1, body1) {
  for(var i = 0; i < inputFields.length; i++) {
    if (inputFields[i].value === "") {
      saveButton.disabled = true;
    } else {
      saveButton.disabled = false;
      saveButton.style.backgroundColor = "#363667";
    }
  }
}
