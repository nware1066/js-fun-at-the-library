
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

// takes in a string as a parameter
// returns a string as a value of name key in a library object



module.exports = {
  createLibrary: createLibrary,
  // addBook: addBook,
  // checkoutBook: checkoutBook
};
