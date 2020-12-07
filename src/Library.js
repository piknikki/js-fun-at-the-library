function createLibrary(library) {
  return {
    name: library,
    shelves: {
      fantasy: [],
      fiction: [],
      nonFiction: []
    }
  }
}

function addBook(library, book) {
  var genre = book.genre
  return library.shelves[genre].push(book)
}

function checkoutBook(library, title, genre) {
  if (library.shelves[genre].length === 0)  {
    return `Sorry, there are currently no copies of ${title} available at the ${library.name}`
  } else if (library.shelves[genre][0].title === title) {
    library.shelves[genre] = []
    return `You have now checked out ${title} from the ${library.name}`
  }
}

module.exports = {
  createLibrary,
  addBook,
  checkoutBook
};
