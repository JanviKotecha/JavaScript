function getRecord() {
  url = 'https://jsonplaceholder.typicode.com/users';
  fetch(url)
    .then((Response) => {
      return Response.json();
    })
    .then((data) => {
      console.log(data);

      var opt = document.getElementById('tbd');
      data.forEach(function (e) {
        opt.innerHTML += `
        <div class="row">
          <div class="col-sm-12">
              <div class="card">
                <div class="card-body">
                  <p>Id : ${e.id}</p>
                  <p>Name :${e.name}</p>
                  <p>Usermae :${e.username}</p>
                  <p>Email : ${e.email}</p>
                  <p>Phone :${e.phone}</p>
                  <p>Website :${e.website}</p><hr>
                  <a href=fatch_api_view.html?id=${e.id} class='btn btn-primary'>Post
                  <a href=image_api.html?id=${e.id} class='btn btn-success'>Photos</a>
                  <hr><br>
                </div>
              </div>
            </div>`;
      });
    });
}
getRecord();
