const companies= [
    {name: "Company One", category: "Finance", start: 1981, end: 2004},
    {name: "Company Two", category: "Retail", start: 1992, end: 2008},
    {name: "Company Three", category: "Auto", start: 1999, end: 2007},
    {name: "Company Four", category: "Retail", start: 1989, end: 2010},
    {name: "Company Five", category: "Technology", start: 2009, end: 2014},
    {name: "Company Six", category: "Finance", start: 1987, end: 2010},
    {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
    {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
    {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
];
  
const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// foreach
// filter
// map 
// sort
// reduce

// for (let i = 0 ; i < companies.length; i++){
//     console.log(companies[i]);
// }

// companies.forEach(function(c){
//     console.log(c.name);
// });

// filter ----->

// let cand = [];
// for (let i = 0 ; i < ages.length; i++){
//     if (ages[i] >=21){
//         cand.push(ages[i]);
//     }
// }

// const cand = ages.filter(function(age){
//     if(age >= 21){
//         return true;
//     }
// });

// const cand = ages.filter(age => age >= 21 );

// console.log(cand);

// const retail = companies.filter(function(company){
//     if(company.category === "Retail"){
//         return true;
//     }
// });

// const retail = companies.filter(c => c.category === "Retail");

// console.log(retail);

// const ec = companies.filter(c => (c.start >= 1980 && c.start < 1990));

// console.log(ec);

// const lty = companies.filter(c => (c.end - c.start) >= 10);

// console.log(lty);

// map ----->

// const cn = companies.map(function(c){
//     return c.name;
// });

// const cn = companies.map(c => c.name); 

// console.log(cn);

// const agesq = ages.map(function(a){
//     return Math.sqrt(a);
// });

// console.log(agesq);

// const aged = ages.map(a => a * 2);

// console.log(aged);

// const agedsq = ages
//     .map(a => Math.sqrt(a))
//     .map( a => a *2);
// ;

// console.log(agedsq);

// sort ----->

// returns less than 0, sort a to an index lower than b (i.e. a comes first).
// returns 0, leave a and b unchanged with respect to each other, but sorted with respect to all different elements.
//  returns greater than 0, sort b to an index lower than a (i.e. b comes first).

// const sc = companies.sort(function(a ,b){
//     if(a.start > b.start){
//         return 1;
//     }else {
//         return -1;
//     }
// });

// const sc = companies.sort((a,b) => (a.start > b.start) ? 1 : -1);

// const sa = ages.sort((a,b) => a-b);

// console.log(sa);

// reduce ----->

// let agesu = 0;
// for(let i = 0 ; i <  ages.length;i++){
//     agesu += ages[i];
// }

// console.log(agesu);

// const agesu = ages.reduce(function(total,a){
//     return total + a;
// },0);

// const agesu = ages.reduce((total,a) => total + a,0);

// console.log(agesu);

// const toty = companies.reduce((tot,y)=>tot + (y.end-y.start),0);

// console.log(toty);

//Combine Method

const com = ages
    .map(age => age*2)
    .filter(age => age >= 40)
    .sort((a,b)=> a-b)
    .reduce((tot,age)=> tot + age,0);

console.log(com);