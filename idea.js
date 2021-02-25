// target variables

var titleInput = document.getElementById("titleInput");
var bodyInput = document.getElementById("bodyInput");

var saveButton = document.getElementById("saveButton");
var removeButton = document.getElementById("removeButton");

var customCard = document.querySelector(".custom-card");

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

  console.log(currentCard);
}

// function to splice out card element from customCards array

// removeButton.addEventListener("click", deleteFromStorage(event) {
//   // add listener to 'click' event of "this" remove button's parent element
//   // assign that element's value to removalCard variable
//   // var removalCard;
//   // using that removalCard's id, iterate through customCards array and use conditional to match with array index with same id value
//   // for (var i = 0; i < customCards.length; i++) {
//     if (event.target.id === this.id) {
//       customCards.splice(i, 1);
//     }
//   }
//   // run addToCardDisplay to update DOM and refresh page
//   updateCardDisplay;
// }

function updateMiniCard() {
  customCard.classList.toggle("hidden");
  customCard.innerHTML = "";

  for(var i = 0; i < customCards.length; i++) {
    customCard.innerHTML += `
    <nav>
      <button class="favorite-button"></button>
      <button class="remove-button" id="removeButton"></button>
    </nav>
    <div class="card-body">
      <h2>${customCards[i].title}</h2>
      <p>${customCards[i].body} </p>
   </div>
      <footer>
        <button class="comment-button"></button>
        <label class="comment-label">Comment</label>
      </footer>
  `
  }
}
