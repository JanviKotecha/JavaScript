console.log("hello");

let myBtn = document.getElementById("myBtn");
let content = document.getElementById("content");

function getData(){
    url = "https://jsonplaceholder.typicode.com/posts";
    fetch(url).then((response)=>{
        return response.json();
    }).then((data)=>{
        console.log(data);
    })
}
getData();