const s1 = 'Hello';
console.log(s1.toUpperCase()); // HELLO
console.log(typeof s1); // string

const s2 = new String(s1);
console.log(typeof s2); // object

// Object Literal
const book1 = {
    title: 'Book One',
    author: 'John Doe',
    year: '2013',
    getSummary: function(){
        return `${this.title} was written by ${this.author} in ${this.year}.`;
    }
}

console.log(book1.title); // Book One
console.log(book1.getSummary()); // Book One was written by John Doe in 2013.

const book2 = {
    title: 'Book Two',
    author: 'Jane Doe',
    year: '2016',
    getSummary: function(){
        return `${this.title} was written by ${this.author} in ${this.year}.`;
    }
}

console.log(book2.getSummary()); // Book Two was written by Jane Doe in 2016.

// To get values and keys of object as arrays
console.log(Object.values(book1)); // ["Book One", "John Doe", "2013", ƒ]
console.log(Object.keys(book1)); // ["title", "author", "year", "getSummary"]

