const posts = [
    {title : "Book1", body : "This is post one"},
    {title : "Book2", body : "This is post two"}
];

function getPost(){
    setTimeout(()=>{
        let output = "";
        posts.forEach((post,index)=>{
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    },1000);
}
function error(val){
    console.log(val);
}
function createPost(post){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            posts.push(post);
            const error = false;
            if(!error){
                resolve();
            }else{
                reject("Somethings went wrong");
            }
        },2000);
    });
}

// createPost({title : "Book3", body : "This is post three"}).then(getPost,error);
// createPost({title : "Book3", body : "This is post three"}).then(getPost).catch(error);

// Async / Await
// async function init(){
//     await  createPost({title : "Book3", body : "This is post three"});

//     getPost();
// }
// init();

// Async / Await / Fetch
async function fetchdata(){
    const res = await fetch('https://jsonplaceholder.typicode.com/users');

    const data = await res.json();
    console.log(data); 
}
fetchdata();

// Promise.all
// const p1 = Promise.resolve('Hello World');
// const p2 = 10;
// const p3 = new Promise((resolve,reject)=>setTimeout(resolve,2000,'Goodbye'));
// const p4 = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json());

// Promise.all([p1,p2,p3,p4]).then(values => console.log(values));