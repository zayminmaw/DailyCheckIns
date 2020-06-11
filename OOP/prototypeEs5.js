function Book(title,author,year){
    this.title = title;
    this.author= author;
    this.year = year;
}

Book.prototype.getSummary =function(){
    return `This ${this.title} is written by ${this.author} in ${this.year}`;
}
Book.prototype.getAge = function(){
    const years = new Date().getFullYear() - this.year;
    console.log(years);
    return `${this.title} is ${years} years old.`;
}
//Revise
Book.prototype.revise = function(newYear){
    this.year = newYear;
    this.changed = true;
}
const book1 = new Book('Book One','John Doe','2013');
const book2 = new Book('Book Two','Jane Doe','2016');

console.log(book1);
book1.revise('2016');
console.log(book1);