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

    for (let i = 0; i <= 3; i++) {
      for (let g = 0; g < genreArr.length; g++) {
        var genre = genreArr[g]
        if (this.library.shelves[genre][0].title === searchTerm) {
          this.library.shelves[genre] = [];
          return `Yes, we have ${searchTerm}`
        } else {
          return `Sorry, we do not have ${searchTerm}`
        }
      }
    }



  }

  calculateLateFee(days) {
    return Math.ceil(days * 0.25)
  }

}

module.exports = Librarian;
