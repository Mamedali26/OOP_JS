class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }

    getSummary(){
        return `${this.title} was written by ${this.author} in ${this.year}.`
    }
}

// Magazine Subclass
class Magazine extends Book {
    constructor (title, author, year, month){
        super(title, author, year);
        this.month = month;
    }
}

// Instantiate Magazine
const mag1 = new Magazine('Mag One', 'John Doe', '2018', 'Jan');

console.log(mag1); // Magazine {title: "Mag One", author: "John Doe", year: "2018", month: "Jan"}

console.log(mag1.getSummary()); // Mag One was written by John Doe in 2018.
