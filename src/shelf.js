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

module.exports = {
  shelfBook: shelfBook,
  unshelfBook: unshelfBook,
  // listTitles: listTitles,
  // searchShelf: searchShelf
};
