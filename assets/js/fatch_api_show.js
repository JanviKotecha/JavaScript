var urlst = window.location.href;
const url = new URL(urlst);

const id = url.searchParams.get('id');
console.log(id);

function viewData() {
  console.log('View Data function');
  console.log(id);
  var url = `https://jsonplaceholder.typicode.com/posts?userId=${id}`;

  fetch(url)
    .then((Response) => {
      return Response.json();
    })
    .then((data) => {
      console.log(data);

      var opt = document.getElementById('tbd');
      data.forEach(function (e) {
        opt.innerHTML += `<tr>
         
          <td>${e.id}</td>
          <td>${e.title}</td>
          <td>${e.body}</td>
          </tr>`;
      });
    });
}
viewData();
