
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
    if (checkShelf(shelf, title)) {
      library.shelves[genres[i]] = removeBook(library, genres[i], title);
      return giveFeedback(title, library, true);
    }
  }
  return giveFeedback(title, library, false);
}

function checkShelf(shelf, title) {
  for (var i = 0; i < shelf.length; i++) {
    if (shelf[i].title === title) {
      return true;
    }
  }
  return false;
}

function removeBook(library, genre, title) {
  return library.shelves[genre].filter(book => book.title !== title);
}

function giveFeedback(title, library, bool) {
  var found = `You have now checked out ${title} from the ${library.name}`;
  var notFound = `Sorry, there are currently no copies of ${title} available at the ${library.name}`;
  return bool ? found : notFound;
}



module.exports = {
  createLibrary: createLibrary,
  addBook: addBook,
  checkoutBook: checkoutBook,
  checkShelf: checkShelf
};
