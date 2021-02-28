

function updateCardDisplay() {
  customCard.classList.remove("hidden");
  ideaGrid.innerHTML = "";
    // var retrievedArray = localStorage.getItem("ideas");
    // var customCards = JSON.parse(retrievedArray);
  for (var i = 0; i < customCards.length; i++) {
    ideaGrid.innerHTML += `
      <div class="custom-card">
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
      </div>
    `
  }
}
