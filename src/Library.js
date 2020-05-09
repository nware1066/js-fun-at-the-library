
function createLibrary(name) {
  return {
    name: name,
    shelves: {
      fantasy: [],
      fiction: [],
      nonFiction: []
    }
  };
}

function addBook(library, book) {
  library.shelves[book.genre].push(book);
}

function checkoutBook(library, title) {
  var genres = Object.keys(library.shelves);
  for (var i = 0; i < genres.length; i++) {
    var shelf = library.shelves[genres[i]];
    for (var j = 0; j < shelf.length; j++) {
      if (shelf[j].title === title) {
        shelf.splice(j, 1);
        return `You have now checked out ${title} from the ${library.name}`;
      }
    }
  }
  return `Sorry, there are currently no copies of ${title} available at the ${library.name}`;
}


module.exports = {
  createLibrary: createLibrary,
  addBook: addBook,
  checkoutBook: checkoutBook
};
