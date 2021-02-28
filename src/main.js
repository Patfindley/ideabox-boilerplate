

function updateCardDisplay() {
  customCard.classList.remove("hidden");
  ideaGrid.innerHTML = "";
  var parsedCards = [];

  for (var i = 0; i < localStorage.length; i++) {
    var retrievedArray = localStorage.getItem("ideas");
    var parsedCards = JSON.parse(retrievedArray);
  }

  for (var i = 0; i < parsedCards.length; i++) {
    ideaGrid.innerHTML += `
      <div class="custom-card">
        <nav>
          <button class="favorite-button"></button>
          <button class="remove-button" id="removeButton"></button>
        </nav>
        <div class="card-body">
          <h2>${parsedCards[i].title}</h2>
          <p>${parsedCards[i].body} </p>
        </div>
        <footer>
          <button class="comment-button"></button>
          <label class="comment-label">Comment</label>
        </footer>
      </div>
    `
  }
}
