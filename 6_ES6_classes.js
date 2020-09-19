class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }

    getSummary(){
        return `${this.title} was written by ${this.author} in ${this.year}.`
    }

    getAge(){
        const years = new Date().getFullYear() - this.year;
        return `${this.title} is ${years} years old.`;
    }

    revise(newYear){
        this.year = newYear;
        this.revised = true;
        return `${newYear} is a new year of publishing ${this.title}.`
    }

    static topBookStore(){
        return 'Barnes & Noble';
    }
}

// Instantiate an Object
const book1 = new Book('Book One', 'John Doe', '2013');

console.log(book1); // Book {title: "Book One", author: "John Doe", year: "2013"}

console.log(book1.getSummary()); // Book One was written by John Doe in 2013.
console.log(book1.getAge()); // Book One is 7 years old.
console.log(book1.revise(2018)); // 2018 is a new year of publishing Book One.

console.log(Book.topBookStore()); // Barnes & Noble
