function shelfBook(book, scifiShelf) {
  if (scifiShelf.length < 3) {
    scifiShelf.unshift(book);
  };
}

// iterate over titles in shelf array
// see if title of book in array matches title of book being passed
// if title matches, remove title

function unshelfBook(title, shelf) {
  var indexOfTarget = shelf.findIndex(function(book) {
    return title === book.title;
  });
  shelf.splice(indexOfTarget, 1);
}

// loop through the input to find the title value of the book object
// return a string of the title values
// assign the string to a variable

function listTitles(shelf) {
  var titleList = "";
  for (var i = 0; i < shelf.length; i++) {
    if (i === 0) {
      titleList += shelf[i].title;
    } else {
      titleList += ", " + shelf[i].title;
    }
  }
  return titleList;
}

function searchShelf(shelf, title) {
  for (var i = 0; i < shelf.length; i++) {
    if (shelf[i].title === title) {
      return true;
    }
  }
  return false;
}

module.exports = {
  shelfBook: shelfBook,
  unshelfBook: unshelfBook,
  listTitles: listTitles,
  searchShelf: searchShelf
};
