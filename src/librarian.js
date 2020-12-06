class Librarian {
  constructor(name, library) {
    this.name = name,
    this.library = library
  }

  greetPatron(patron, timeOfDay) {
    if (timeOfDay) {
      return `Good morning, ${patron}!`
    } else {
      return `Hello, ${patron}!`
    }
  }

  findGenre() {
    var genreArray = []
    for (var genre in this.library.shelves) {
      genreArray.push(genre)
    }
    return genreArray
  }

  findBook(searchTerm) {
    var genreArr = this.findGenre()
    var response = "nope"

    for (var i = 0; i < genreArr.length; i++) {
      var genre = genreArr[i]

      if (this.library.shelves[genre] === [] || this.library.shelves[genre][0].title !== searchTerm) {
        response = `Sorry, we do not have ${searchTerm}`
      } else if (this.library.shelves[genre][0].title === searchTerm) {
        response = `Yes, we have ${searchTerm}`
        this.library.shelves[genre] = [];
      }
      return response
    }

}

  calculateLateFee(days) {
    return Math.ceil(days * 0.25)
  }

}

module.exports = Librarian;
