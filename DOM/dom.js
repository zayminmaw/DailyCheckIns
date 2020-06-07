// console.dir(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// document.titlec=123;
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[0]);
// console.log(document.forms);
// console.log(document.links);

//Get Element By id

// console.log(document.getElementById('header-title'))
// var ht = document.getElementById('header-title');
// var mh = document.getElementById('main-header');
// console.log(ht);
// ht.textContent="Hello";
// ht.innerText="Good";
// console.log(ht.textContent);
// console.log(ht.innerText);
// ht.innerHTML="<h3>Hello</h3>";

// mh.style.borderBottom="solid 3px black";

//GetElementsByClassname

// var item = document.getElementsByClassName('list-group-item');
// console.log(item);
// console.log(item[1]);
// item[1].textContent="Hello2";
// item[1].style.fontWeight="bold";
// item[1].style.backgroundColor = "yellow";

//Gives Error
//item.style.backgroundColor="#f4f4f4";

// for (let i = 0;i< item.length;i++){
//     item[i].style.backgroundColor = "yellow";
// }

// var li = document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);
// li[1].textContent="Hello2";
// li[1].style.fontWeight="bold";
// li[2].style.backgroundColor = "yellow";

// for (let i = 0;i< item.length;i++){
//     item[i].style.backgroundColor = "#f4f4f4";
// }


//QuserySelector
// var header = document.querySelector('#main-header');
// header.style.borderBottom= "solid 4px #ccc";

// var input = document.querySelector('input');
// input.value = "Hello World";

// var submit = document.querySelector('input[type="submit"]');
// submit.value = "Send";

// var item = document.querySelector('.list-group-item');
// item.style.color = 'red';

// var li = document.querySelector('.list-group-item:last-child');
// li.style.color = "blue";

// var si = document.querySelector('.list-group-item:nth-child(2)');
// si.style.color = "coral";

//QuerySelectorAll

// var title= document.querySelectorAll('.title');

// console.log(title);
// title[0].textContent="Hello";

// var odd= document.querySelectorAll('li:nth-child(odd)');
// var even = document.querySelectorAll('li:nth-child(even)');
// for (let i = 0; i < odd.length;i++){
//     odd[i].style.backgroundColor = 'yellow';
//     even[i].style.backgroundColor= '#ccc';
// }

//Traversing the DOM
// var il = document.querySelector('#items');
//parentNode
// console.log(il.parentNode);
// il.parentNode.style.backgroundColor = '#f4f4f4';
// console.log(il.parentNode.parentNode.parentNode);

//parentElement
// console.log(il.parentElement);
// il.parentElement.style.backgroundColor = '#f4f4f4';
// console.log(il.parentElement.parentElement.parentElement);

//childNodes
// console.log(il.childNodes);

// firstChild
// console.log(il.children);
// console.log(il.children[1]);
// il.children[1].style.backgroundColor = 'yellow';
// console.log(il.firstChild);
// firstElementChild
// console.log(il.firstElementChild);
// il.firstElementChild.textContent="Hello 1";

//LastChild
// console.log(il.lastChild);
//firstElementChild
// console.log(il.lastElementChild);
// il.lastElementChild.textContent="Hello 1";

//Nextsibling
// console.log(il.nextSibling);
//NextElementSibling
// console.log(il.nextElementSibling);

//previousSibling
// console.log(il.previousSibling);
//previousElementSibling
// console.log(il.previousElementSibling); 

//createElement
//create a div

// var newdiv = document.createElement('div');

//add class

// newdiv.className="helllo";

//add id

// newdiv.id = "hello1";

//add attr

// newdiv.setAttribute('title','Hello Div');

//create text node

// var newdivt = document.createTextNode('Hello World');

//add to div

// newdiv.appendChild(newdivt);

// var c = document.querySelector('header .container');
// var h1 = document.querySelector('header h1');

// c.insertBefore(newdiv,h1);


// Event
// var button = document.getElementById('button').addEventListener('click',buttonClick)

// function buttonClick(e){
    // document.getElementById('header-title').textContent = "Changed";
    // document.querySelector('#main').style.backgroundColor = "#f4f4f4";

    // console.log(e.target);
    // console.log(e.target.id);
    // console.log(e.target.classname);
    // console.log(e.target.classList);
    // var output = document.getElementById("output");
    // output.innerHTML = '<h3>'+e.target.id+'</h3>';
    // console.log(e.type);
    
    // console.log(e.clientX);
    // console.log(e.clientY);

    // console.log(e.offsetX);
    // console.log(e.offsetY);

    // console.log(e.altKey);
    // console.log(e.ctrlKey);
    // console.log(e.shiftKey);
// }
// var button = document.getElementById('button');
// var box = document.getElementById('box');
// button.addEventListener('dblclick',runEvent);
// button.addEventListener('mousedown',runEvent);
// button.addEventListener('mouseup',runEvent);
// box.addEventListener("mouseenter",runEvent);
// box.addEventListener("mouseleave",runEvent);
// box.addEventListener("mouseover",runEvent); //inner content
// box.addEventListener("mouseout",runEvent);
// box.addEventListener("mousemove",runEvent);

// var ip = document.querySelector('input[type="text"]');
// var form = document.querySelector('form');
// var select = document.querySelector('select');
// ip.addEventListener('keydown',runEvent);
// ip.addEventListener('keyup',runEvent);
// ip.addEventListener('keypress',runEvent);
// ip.addEventListener('focus',runEvent);
// ip.addEventListener('blur',runEvent);
// ip.addEventListener('cut',runEvent);
// ip.addEventListener('paste',runEvent);
// ip.addEventListener('input',runEvent);
// select.addEventListener('change',runEvent);
// form.addEventListener('submit',runEvent);
// function runEvent(e){
//     e.preventDefault();
//     console.log("Event Type : "+e.type);
    // document.body.style.display="none";
    // document.body.style.backgroundColor="rgb("+e.offsetX+","+e.offsetY+",40)";

// }