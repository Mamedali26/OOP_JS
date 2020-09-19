// Constructor
function Book (title, author, year){
    this.title = title;
    this.author = author;
    this.year = year;
}

// getSummary
Book.prototype.getSummary = function(){
    return `${this.title} was written by ${this.author} in ${this.year}.`;
}

// getAge
Book.prototype.getAge = function (){
    const years = new Date().getFullYear() - this.year;
    return `${years} years have passed since ${this.title} was written by ${this.author}.`;
}

// Revise / Change Year
Book.prototype.revise = function(newYear){
    this.year = newYear;
    this.revised = true;
}

// Instantiate an Object
const book1 = new Book('Book One', 'John Doe', '2013');
const book2 = new Book('Book Two', 'Jane Doe', '2016');

console.log(book1.getSummary()); // Book One was written by John Doe in 2013.

console.log(book1.getAge()); // 7 years have passed since Book One was written by John Doe.
console.log(book2.getAge()); // 4 years have passed since Book Two was written by Jane Doe.

book2.revise('2018')
console.log(book2.getAge()); // 2 years have passed since Book Two was written by Jane Doe.
console.log(book2); // Book {title: "Book Two", author: "Jane Doe", year: "2018", revised: true}
