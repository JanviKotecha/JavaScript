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
        opt.innerHTML += `<tr>
            <td>${e.id}</td>
            <td>${e.name}</td>
            <td>${e.username}</td>
            <td>${e.email}</td>
            <td>${e.phone}</td>
            <td>${e.website}</td>
            
            <td><a href=fatch_api_view.html?id=${e.id}>Show</td>`;
      });
    });
}
getRecord();
