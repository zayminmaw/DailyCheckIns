// Almost everythings is object
// datatypes are primitives 
// Can create strings(datatype)as object 

// const s1 = 'hello';
// console.log(typeof s1);

// const s2 = new String('Hello');
// console.log(typeof s2);

// console.log(window);
// window.alert(1);
// console.log(navigator.appVersion);

//Object Literal
const book1 = {
    title : 'Book One',
    author : 'John Doe',
    year : '2013',
    getSummary : function(){
        return `This ${this.title} is written by ${this.author} in ${this.year}`;
    }
};
const book2 = {
    title : 'Book Two',
    author : 'Jane Doe',
    year : '2016',
    getSummary : function(){
        return `This ${this.title} is written by ${this.author} in ${this.year}`;
    }
};

//console.log(book1.getSummary());
// console.log(Object.values(book1));
// console.log(Object.keys(book2));
