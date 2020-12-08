function shelfBook(title, shelf) {
  if (shelf.length < 3) {
    shelf.unshift(title);
  }
}

function unshelfBook(title, shelf) {
  for (var i = 0; i < shelf.length; i++) {
    if (shelf[i].title === title) {
      shelf.splice(i, 1);
    }
  }
}

function listTitles(shelf) {
  var bookTitles = [];
  for (var i = 0; i < shelf.length; i++) {
    bookTitles.push(shelf[i].title);
  }
  return bookTitles.join(', ');
}

function searchShelf(shelf, title) {
  for (var i = 0; i < shelf.length; i++) {
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
