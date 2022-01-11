let Postarray = [];
let PostData = [];
let startIndex = 0;
let endIndex = 10;

function getPhoto() {
  fetch(`https://jsonplaceholder.typicode.com/photos`)
    .then((response) => response.json())
    .then((json) => {
      Postarray = json;
      // console.log(json);
      onscrol();
    });
}
function card() {
  const row = document.getElementById('pagi');
  PostData.forEach((e) => {
    row.innerHTML += `<div class="col-sm-3">
      <div class="card">
        <div class="card-body">
          <p><b>Title</b> : ${e.title}</p>
          <p><b>Image</b>: <img src=${e.url} style="width:20%"></img></p>
          <a href="${e.thumbnailUrl}" class="btn btn-primary">Show Thumb</a>
        </div>
      </div>
    </div>`;
  });
}
function onscrol() {
  for (let i = startIndex; i < endIndex; i++) {
    PostData.push(Postarray[i]);
    console.log(PostData);
  }
  startIndex += 10;
  endIndex += 10;
  card();
}
function bottomReached() {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    onscrol();
  }
}
document.addEventListener('scroll', bottomReached);
document.addEventListener('DOMContentLoaded', getPhoto);
