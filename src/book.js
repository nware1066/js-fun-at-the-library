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

module.exports = {
  createTitle: createTitle,
  buildMainCharacter: buildMainCharacter,
  saveReview: saveReview,
  // calculatePageCount: calculatePageCount,
  // writeBook: writeBook,
  // editBook: editBook
}
