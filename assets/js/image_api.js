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
        <div class="row">
          <div class="col-md-3">
              <div class="card">
                  <center><img src="${e.url}" style="width:120px;hight:120px"></center>
                  <h5>${e.title}<h5>
                  <a href="${e.thumbnailUrl}" class="btn btn-primary">ShowThumb</a>
              </div>
            </div>
          </div>`;
      });
    });
}
viewPhoto();
