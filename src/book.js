function createTitle(title) {
  return `The ${title}`;
}

function buildMainCharacter(name, age, pronouns) {
  return {name, age, pronouns};
}

function saveReview(review, reviews) {
  if (!reviews.includes(review)) {
    reviews.push(review);
  }
}

function calculatePageCount(title) {
  var pageCount = title.length * 20;
  return pageCount;
}

function writeBook(title, mainCharacter, genre) {
  return {title, mainCharacter, genre, pageCount: calculatePageCount(title)}
}

function editBook(book) {
  book.pageCount = book.pageCount * .75;
}

module.exports = {
  createTitle: createTitle,
  buildMainCharacter: buildMainCharacter,
  saveReview: saveReview,
  calculatePageCount: calculatePageCount,
  writeBook: writeBook,
  editBook: editBook
}
