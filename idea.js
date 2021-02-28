class Idea {
  constructor(title, body, isStarred) {
    this.id = Date.now();
    this.title = title;
    this.body = body;
    this.isStarred = isStarred || false;
    this.comments = [];
  }

  saveToStorage() {
    savedCards.push(currentCard);
    localStorage.setItem("ideas", JSON.stringify(savedCards));
  }

  deleteFromStorage(index) {
    savedCards.splice(index, 1);
    var storage = window.localStorage;
    storage.clear();
    localStorage.setItem("ideas", JSON.stringify(savedCards));
    updateCardDisplay();
  }

  updateIdea() {
  }
  
}


// for (var i = 0; i < localStorage.ideas.length; i++) {
//   var current = JSON.parseInt(localStorage.ideas(i).id);
//   if (cardId === current) {
//     localStorage.removeItem("ideas", current);
//   }
// }
// }
