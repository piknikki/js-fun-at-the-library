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
    var response = ""

    if (this.library.shelves.fantasy[0] !== undefined && this.library.shelves.fantasy[0].title === searchTerm) {
      response = `Yes, we have ${searchTerm}`
      this.library.shelves.fantasy = [];
    } else if (this.library.shelves.fiction[0] !== undefined && this.library.shelves.fiction[0].title === searchTerm) {
      response = `Yes, we have ${searchTerm}`
      this.library.shelves.fiction = [];
    } else if (this.library.shelves.nonFiction[0] !== undefined && this.library.shelves.nonFiction[0].title === searchTerm) {
      response = `Yes, we have ${searchTerm}`
      this.library.shelves.nonFiction = [];
    } else {
      response = `Sorry, we do not have ${searchTerm}`
    }

    return response
}

  calculateLateFee(days) {
    return Math.ceil(days * 0.25)
  }
}

module.exports = Librarian;
