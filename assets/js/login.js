function signIn(e) {
  let email = document.getElementById('mail').value,
    pwd = document.getElementById('pwd').value;
  let formData = JSON.parse(localStorage.getItem('formData')) || [];
  let exist =
    formData.length &&
    JSON.parse(localStorage.getItem('formData')).some(
      (data) =>
        data.email.toLowerCase() == email && data.pwd.toLowerCase() == pwd
    );
  if (email == '') {
    alert('Please enter your user email id');
  } else if (pwd == '') {
    alert('Please enter Password');
  } else if (!exist) {
    alert('Incorrect login credentials');
  } else {
    //alert('login sucess... ');
    location.href = 'index.html';
  }
  e.preventDefault();
}
