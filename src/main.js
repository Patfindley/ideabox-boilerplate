// target variables
var titleInput = document.getElementById("titleInput");
var bodyInput = document.getElementById("bodyInput");
var inputFields = document.querySelectorAll(".user-input")
var saveButton = document.getElementById("saveButton");
var removeButton = document.getElementById("removeButton");
var favoriteButton = document.getElementById("favoriteButton");
var customCard = document.querySelector(".custom-card");
var ideaGrid = document.querySelector(".idea-grid");

// global variables
var savedCards = [];
var parsedCards = [];
var currentCard;
saveButton.disabled = true;

// event listeners
saveButton.addEventListener("click", function (event) {
  saveToArray(event);
});
for (const inputField of inputFields) {
  inputField.addEventListener("input", function () {
    enableSaveButton();
  })
};
ideaGrid.addEventListener("click", function (event) {
  removeCard(event);
  addFavorite(event);
});

//window.addEventListener("DOMContentLoaded", parseIdeas);

// functions
function saveToArray() {
  event.preventDefault();
  currentCard = new Idea(titleInput.value, bodyInput.value);
  currentCard.saveToStorage()
  updateCardDisplay();
  clearInput();
  disableSaveButton()
}

function removeCard(e) {
  if (e.target.classList.contains("remove-button")) {
    var cardId = parseInt(e.target.closest("div").id);
    for (var i = 0; i < savedCards.length; i++) {
      if (savedCards[i].id === cardId) {
        savedCards[i].deleteFromStorage(i);
      }
    }
  }
}

// function to clear input fields
function clearInput() {
  titleInput.value = "";
  bodyInput.value = "";
}

function enableSaveButton() {
  if (titleInput.value === "" && bodyInput.value === "") {
    saveButton.disabled = true;
    return;
  }
  if (bodyInput.value === "") {
    saveButton.disabled = true;
    return;
  }
  else {
    saveButton.disabled = false;
    saveButton.style.backgroundColor = "#363667";
    saveButton.style.cursor = "auto";
  }
}

function disableSaveButton() {
  saveButton.style.backgroundColor = "#E7E7FF";
  saveButton.disabled = true;
  saveButton.style.cursor = "not-allowed";
}

function addFavorite(e) {
  if (e.target.classList.contains("favorite-button")) {
    e.target.classList.toggle("filled-star");
    this.isStarred = true;
  }
}

function updateCardDisplay() {
  customCard.classList.remove("hidden");
  ideaGrid.innerHTML = "";
  // var retrievedArray = localStorage.getItem("ideas");
  // var customCards = JSON.parse(retrievedArray);
  for (var i = 0; i < savedCards.length; i++) {
    ideaGrid.innerHTML += `
      <div class="custom-card" id="${savedCards[i].id}">
        <nav>
          <button class="favorite-button"></button>
          <button class="remove-button" id="removeButton"></button>
        </nav>
        <div class="card-body">
          <h2>${savedCards[i].title}</h2>
          <p>${savedCards[i].body} </p>
        </div>
        <footer>
          <button class="comment-button"></button>
          <label class="comment-label">Comment</label>
        </footer>
      </div>
    `
  }
}

// function parseIdeas() {
//   var retrievedArray = localStorage.getItem("ideas");
//   parsedCards = JSON.parse(retrievedArray);
//   for (var i = 0; i < parsedCards.length; i++) {
//     ideaGrid.innerHTML += `
//       <div class="custom-card">
//         <nav>
//           <button class="favorite-button"></button>
//           <button class="remove-button" id="removeButton"></button>
//         </nav>
//         <div class="card-body">
//           <h2>${parsedCards[i].title}</h2>
//           <p>${parsedCards[i].body} </p>
//         </div>
//         <footer>
//           <button class="comment-button"></button>
//           <label class="comment-label">Comment</label>
//         </footer>
//       </div>
//     `
//   }
// }

// Input shit that we may not need
//**********COME BACK TO MEEEEEE************
// function validateTitleInput() {
//   if (titleInput.value.length <= 25) {
//     enableSaveButton();
//   } else {
//     alert("Title must be 25 characters or less");
//   }
// }
//
// function validateBodyInput() {
//   if (bodyInput.value.length <= 50) {
//     enableSaveButton();
//   } else {
//     alert("Body must be 50 characters or less");
//   }
// }

// function to disable/enable Save Button

// function saveToStorage() {
//   var stringCards =[];
//   stringCards.push(JSON.stringify(savedCards));
//   localStorage.setItem("ideas", stringCards);
// }
// function to splice out card element from customCards array
// function deleteFromStorage(e) {
//   var storage = window.localStorage
//   if (e.target.classList.contains("remove-button")) {
//     var index = e.target.closest("div").id;
//     customCards.splice(index, 1);
//     storage.clear();
//     saveToStorage();
//     updateCardDisplay();
//   }
// };
