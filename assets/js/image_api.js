var urlst = window.location.href;
const url = new URL(urlst);

const id = url.searchParams.get('id');
console.log(id);

function viewPhoto() {
  console.log('phptos');
  console.log(id);
  var url = `https://jsonplaceholder.typicode.com/photos?albumId=${id}`;

  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);

      var opt = document.getElementById('div13');
      data.forEach(function (e) {
        opt.innerHTML += `
        <div class="col-sm-3">
              <div class="card">
                <div class="card-body">
                  <p><b>Title</b> : ${e.title}</p>
                  <p><b>Image</b>: <img src=${e.url} style="width:20%"></img></p>
                  <a href="${e.thumbnailUrl}" class="btn btn-primary">Show Thumb</a>
                </div>
              </div>`;
      });
    });
}
viewPhoto();
