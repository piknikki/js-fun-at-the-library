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
  var bookPageCount = title.length * 20
  return bookPageCount;
}

function writeBook(title, mainCharacter, genre) {
  return {
    title,
    mainCharacter,
    pageCount: calculatePageCount(title),
    genre
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
