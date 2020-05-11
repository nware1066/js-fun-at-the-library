function shelfBook(book, scifiShelf) {
  if (scifiShelf.length < 3) {
    scifiShelf.unshift(book);
  };
}

function unshelfBook(title, shelf) {
  var indexOfTarget = shelf.findIndex(function(book) {
    return title === book.title;
  });
  shelf.splice(indexOfTarget, 1);
}

function listTitles(shelf) {
  return shelf.map(book => book.title).join(", ");
}

function searchShelf(shelf, title) {
  return shelf.some(book => book.title === title);
}

module.exports = {
  shelfBook: shelfBook,
  unshelfBook: unshelfBook,
  listTitles: listTitles,
  searchShelf: searchShelf
};
