function Book(title,author,year){
    this.title = title;
    this.author= author;
    this.year = year;
}
Book.prototype.getSummary =function(){
    return `This ${this.title} is written by ${this.author} in ${this.year}`;
}

function Magazine(title,author,year,month){
    //inherit property
    Book.call(this,title,author,year);
    this.month = month;
}
//inherit prototype
Magazine.prototype = Object.create(Book.prototype);
const maga1= new Magazine('Book One','John Doe','2013','Jan');
//Use Magazie constructor
Magazine.prototype.constructor = Magazine;
console.log(maga1);