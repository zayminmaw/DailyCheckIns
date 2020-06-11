class Book {
    constructor(title,author,year){
        this.title = title ;
        this.author = author;
        this.year = year;
    }
    getSummary(){
        return `This ${this.title} is written by ${this.author} in ${this.year}`;
    }
    getAge(){
        const years = new Date().getFullYear() - this.year;
        return `${this.title} is ${years} years old.`;
    }
    revise(newYear){
        this.year = newYear;
        this.changed = true;
    }
    // Static
    // static topBookStore(){
    //     return 'Barnes & Noble';
    // }
}
class Magazine extends Book{
    constructor(title,author,year,month){
        super(title,author,year);
        this.month = month;
    }
}

// const book1 = new Book('Book One','John Doe','2013');
// console.log(book1);
// book1.revise("2014");
// console.log(book1);
// Have to call the class name not object
// console.log(Book.topBookStore());

const mag1 = new Magazine('Book One','John Doe','2016','Jan');
console.log(mag1.getSummary());
