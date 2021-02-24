class Idea {
  constructor(title, body, comments) {
    this.id = Date.now();
    this.title = title;
    this.body = body;
    this.comments = comments;
  }

  //When a card is created, it's an instance of this class
  //Title, Body, save -> Save creates the instance with inputs

  saveToStorage() {
    //customCards array w/card objects -> Push input to array

  }


}
customCards = [];

customIdea.innerHTML += `
  <div class="customCard">
    <nav>
      <button class="star-button"></button>
      <button class="delete-button"></button>
    </nav>
    <body>
      <h2>${customCards[i].name}</h2>
      <img src=${customCards[i].img} />
    </body>
    <footer>
      <button class="comment-button"></button>
    </footer>
  </div>
`
