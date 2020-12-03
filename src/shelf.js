function shelfBook(shelf, title) {
  if (shelf.length <= 3) {
    shelf.unshift(title);
  }
}

function unshelfBook(shelf, bookTitle) {
  for (let i = 0; i < shelf.length; i++) {
    if (shelf[i].title === bookTitle) {
      shelf.splice(i, 1);
    }
  }
}

function listTitles(shelf) {
  var bookTitles = [];
  for (let i = 0; i < shelf.length; i++) {
    bookTitles.push(shelf[i].title);
  }
  return bookTitles.join(', ')
}

function searchShelf(shelf, title) {
  for (let i = 0; i < shelf.length; i++) {
    var allTitles = []
    allTitles.push(shelf[i].title)
  }
  if (allTitles.includes(title)) {
    return true
  } else {
    return false
  }
}

module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf
};
