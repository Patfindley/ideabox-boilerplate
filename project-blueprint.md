## IdeaBox Group

#### Project Resources
- **Specs**: https://frontend.turing.io/projects/module-1/ideabox-group.html
- **GitHub repo**: https://github.com/EllieAzaveda/ideabox-boilerplate
- **GitHub page**: 

#### Overview
Every developer has more ideas than time. As David Allen likes to say “the human brain is for creating ideas, not remembering them.” In this project, we’ll be building an application that records and archives our ideas (good and bad alike).

Throughout the project, one of our focuses will be on providing a fluid and responsive client-side interface. To this end, we’ll rely on JavaScript to implement snappy filtering in the browser, and localStorage to persist our wonderful ideas between sessions.

#### Learning Goals
Gain an understanding of how to write clean HTML and CSS to match a provided comp
Understand how to implement client-side data persistence using localStorage and JSON
Understand what it looks like to have a separate data model (using a class) and DOM model
Incorporate & iterate over arrays in order to filter what is being displayed
Craft code with clean style, using small functions that show trends toward DRYness and SRP
Day One Deliverables
Complete a DTR.
One person should fork the boilerplate repository. Add all team members and your Project Manager as collaborators.
Deploy your application to GitHub Pages.
In a Slack DM to your assigned instructor, drop the repo link, DTR and GitHub pages link.

---

#### Day One Deliverables
- [ √ ] Complete a DTR.
- [ √ ] One person should fork the boilerplate repository. Add all team members and your Project Manager as collaborators.
- [ √ ] Deploy your application to GitHub Pages.
- [ √ ] In a Slack DM to your assigned instructor, drop the repo link, DTR and GitHub pages link.


### Progression

PSEUDO:

- [  ] 

Iteration 4 - Local Storage & Filtering
As a user,

When I create one idea successfully, then refresh the page,
The idea card is still in the idea list
As a user,

When I create two cards successfully, delete one, then refresh the page,
One idea card is still in the idea list (the one I did not delete)
As a user,

When I favorite an idea card, then refresh the page,
That idea card is still in the “favorite” state with the filled in star icon
As a user,

When I click “Show Starred Ideas”
I see only card that are favorited
As a user,

When I click “Show Starred Ideas”
I see the text on that button has changed to “Show All Ideas”
As a user,

When I click “Show Starred Ideas”
Then I click what is now “Show All Ideas”
I see all ideas, favorited or not
As a user,

When I type a letter or phrase into the search bar, the cards should start filtering (no click needed)
I now only see the cards that include the letter/phrase in the title or body
As a user,

When I backspace and delete something from the search bar, so that it’s empty
I see all cards since no search criteria is being provided