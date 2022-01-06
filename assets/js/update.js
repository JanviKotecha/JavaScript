function onEditPress() {
  var urlString = window.location.href;
  const url = new URL(urlString);
  const id = url.searchParams.get('id');
  console.log(localStorage.getItem('formData'));
  if (localStorage.getItem('formData')) {
    JSON.parse(localStorage.getItem('formData')).forEach((data) => {
      if (data.id == id) {
        document.getElementById('unm').value = data.name;
        document.getElementById('ueml').value = data.email;
        document.getElementById('umob').value = data.number;
      }
    });
  }
}
function edit() {
  var urlString = window.location.href;
  const url = new URL(urlString);
  const id = url.searchParams.get('id');
  //   console.log();
  let userData = JSON.parse(localStorage.getItem('formData'));
  userData = userData.map((data) => {
    if (data.id == id) {
      const obj = {
        name: document.getElementById('unm').value,
        email: document.getElementById('ueml').value,
        number: document.getElementById('umob').value,
      };
      Object.assign(data, obj);
    }
    return data;
  });
  console.log(userData);
  //localStorage.setItem('formData', JSON.stringify(userData));
  setData(userData);
  window.location = 'index.html';
}
function deleteData(id) {
  //let user_records = new Array();
  // user_records = getData();
  formData = JSON.parse(localStorage.getItem('formData')) || [];
  console.log(id);
  var getindex = formData.findIndex((v) => {
    return v.id == id;
  });
  formData.splice(getindex, 1);
  console.log(formData);
  localStorage.setItem('formData', JSON.stringify(formData));
  window.location.reload();
}
