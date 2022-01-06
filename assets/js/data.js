function dispData() {
  console.log(localStorage.getItem('formData'));
  if (localStorage.getItem('formData')) {
    var output = document.getElementById('tbody');
    output.innerHTML = '';
    JSON.parse(localStorage.getItem('formData')).forEach((data) => {
      output.innerHTML += `
                    <tr>
                        <td>${data.name}</td>
                        <td>${data.email}</td>
                        <td>${data.number}</td>
                        <td>${data.cpwd}</td>
                        <td><a href=update.html?id=${data.id}>Update</a></td>
                        <td><a onclick="deleteData(${data.id});">Delete</a></td>
                    </tr>
            `;
    });
  }
}
dispData();
function setData(formData) {
  localStorage.setItem('formData', JSON.stringify(formData));
}
function getData() {
  return JSON.parse(localStorage.getItem('formData')) || [];
}
