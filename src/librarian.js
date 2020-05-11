var checkShelf = require('../src/library.js').checkShelf;

class Librarian {
  constructor(name, library) {
    this.name = name;
    this.library = library;
  }

  greetPatron(patronName, morning) {
    if (morning === true) {
      return `Good morning, ${patronName}!`;
    } else {
      return `Hello, ${patronName}!`;
    }
  }

  findBook(title) {
    var shelf = this.library.shelves.fantasy;
    if (checkShelf(shelf, title) === true) {
      this.library.shelves.fantasy = this.library.shelves["fantasy"].filter(book => book.title !== title);
      return `Yes, we have ${title}`;
    } else {
      return `Sorry, we do not have ${title}`;
    }
  }

  calculateLateFee(daysLate) {
    var fee = daysLate * .25;
    return Math.ceil(fee);
  }

}

module.exports = Librarian;
