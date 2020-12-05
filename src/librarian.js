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

  findBook(searchTerm) {
    if (this.library.shelves.fantasy[0].title === searchTerm) {
      this.library.shelves.fantasy = [];
      return `Yes, we have ${searchTerm}`
    } else {
      return `Sorry, we do not have ${searchTerm}`
    }
  }

  calculateLateFee(days) {
    return Math.ceil(days * 0.25)
  }

}

module.exports = Librarian;
