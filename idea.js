class Idea {
  constructor(title, body, isStarred, id) {
    this.id = id || Date.now();
    this.title = title;
    this.body = body;
    this.isStarred = isStarred || false;
    this.comments = [];
  }

  saveToStorage() {
    savedCards.push(currentCard);
    localStorage.setItem("ideas", JSON.stringify(savedCards));
  }

  deleteFromStorage(i) {
    var storage = window.localStorage;
    savedCards.splice(i, 1);
    storage.clear();
    localStorage.setItem("ideas", JSON.stringify(savedCards));
    updateCardDisplay();
  }

  updateIdea() {

  }

}
