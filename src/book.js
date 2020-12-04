function createTitle(title) {
  return 'The ' + title;
}

function buildMainCharacter(name, age, pronouns) {
  return {
    name,
    age,
    pronouns
  }
}

function saveReview(headline, reviews) {
  if (!reviews.includes(headline)) {
    reviews.push(headline);
  }
}

function calculatePageCount(title) {
  var bookPageCount = 0;
  bookPageCount = bookPageCount + (title.length * 20)
  return bookPageCount;
}

function writeBook(bookTitle, bookCharacter, genre) {
  return {
    title: bookTitle,
    mainCharacter: bookCharacter,
    pageCount: calculatePageCount(bookTitle),
    genre: genre
  }
}

function editBook(ghoulBook) {
  ghoulBook.pageCount = ghoulBook.pageCount * 0.75
  return ghoulBook.pageCount
}

module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}
