// var animals = [
//   'monkeys',
//   'lemurs',
//   'red pandas',
//   'zebras',
//   'pandas',
//   'otters',
//   'hippos'
// ];
//
// function nameAnimals() {
//   for (let i = 0; i < animals.length; i++) {
//     console.log(`Mommy, I want to see ${animals[i]}! Waaah!`)
//   }
// }
//
// // console.log(nameAnimals())
//
// var pets = [
//   {
//     name: 'Tilly',
//     type: 'cat',
//     favoriteTreat: 'cheese',
//     human: 'Leta'
//   },
//   {
//     name: 'Sodie',
//     type: 'dog',
//     favoriteTreat: 'milkbones',
//     human: 'Amy'
//   },
//   {
//     name: 'Pumpernickel',
//     type: 'cat',
//     favoriteTreat: 'kibble',
//     human: 'Eric'
//   }
// ];
//
// function logValuesByKey(arr, key) {
//   for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i][key])
//   }
// }
//
// // logValuesByKey(pets, 'type');
// // logValuesByKey(pets, 'name');
//
// function getPetNames(petArray) {
//   var paragraph = "";
//   var sentence = "";
//   for (let i = 0; i < petArray.length; i++) {
//     sentence = `${petArray[i].human} has a pet ${petArray[i].type} named ${petArray[i].name} who loves ${petArray[i].favoriteTreat}. `;
//
//     paragraph += sentence;
//   }
//   return paragraph
// }
//
// console.log(getPetNames(pets));





var library = {
  name: 'Aurora Public Library',
  shelves: {
    fiction: [],
    fantasy: [ { title: 'The Fifth Season', genre: 'fantasy' } ],
    nonFiction: []
  }
}
var arr = []
for (var genre in library.shelves) {
  arr.push(genre)
}

console.log(library);

function findTitle(searchTerm) {
  console.log(arr.length)
  for (g = 0; g < arr.length; g++) {
    var genre = arr[g]
    console.log(arr[g])
    if (library.shelves[genre][0] > 0 && library.shelves[genre][0].title === searchTerm) {
      library.shelves[genre] = [];
      return `Yes, we have ${searchTerm}`
    } else {
      return `Sorry, we do not have ${searchTerm}`
    }
  }
}

console.log(findTitle('The Fifth Season'));






// findBook(searchTerm) {
//   var genreArr = this.findGenre()
//   var response = "nope"
//
//   for (var i = 0; i < genreArr.length; i++) {
//     for (var g = 0; g < genreArr.length; g++) {
//       var genre = genreArr[g]
//       if (this.library.shelves[genre][0].title === searchTerm) {
//         this.library.shelves[genre] = [];
//         response = `Yes, we have ${searchTerm}`
//       } else {
//         response = `Sorry, we do not have ${searchTerm}`
//       }
//     }
//   }
//   return response
// }

// findBook(searchTerm) {
//   var genreArr = this.findGenre()
//   var response = ""
//
//   for (var i = 0; i < genreArr.length; i++) {
//     var genre = genreArr[i]
//     console.log(this.library.shelves[genre])
//     if (this.library.shelves[genre][0].title === searchTerm) {
//
//       response = `Yes, we have ${searchTerm}`
//       this.library.shelves[genre] = [];
//     } else {
//       response = `Sorry, we do not have ${searchTerm}`
//     }
//
//     return response
//   }
//
// }




// ***** Whitney's code block *****
// function checkoutBook(library, book, genre) {
//   console.log(library, book, genre);
//
//   if (!library.shelves[genre][0]) {
//     return `Sorry, there are currently no copies of ${book} available at the ${library.name}`
//   } else {
//     library.shelves[genre].splice(0,1)
//     return `You have now checked out ${book} from the ${library.name}`
//   }
//
// };





