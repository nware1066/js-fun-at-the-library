function createTitle(title) {
  return `The ${title}`;
}

function buildMainCharacter(name, age, pronouns) {
  return {name, age, pronouns};
}

module.exports = {
  createTitle: createTitle,
  buildMainCharacter: buildMainCharacter,
  // saveReview: saveReview,
  // calculatePageCount: calculatePageCount,
  // writeBook: writeBook,
  // editBook: editBook
}
