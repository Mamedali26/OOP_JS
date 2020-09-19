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

// Magazine Constructor
function Magazine (title, author, year, month){
    Book.call(this, title, author, year);
    this.month = month;
}

// Inherit Prototype
Magazine.prototype = Object.create(Book.prototype);

// Instansiate Magazine Object
const mag1 = new Magazine('Mag One', 'John Doe', '2018', 'Jan');

// Use Magazine Constructor
Magazine.prototype.constructor = Magazine;

console.log(mag1); // Magazine {title: "Mag One", author: "John Doe", year: "2018", month: "Jan"}

console.log(mag1.getSummary()); // Mag One was written by John Doe in 2018
