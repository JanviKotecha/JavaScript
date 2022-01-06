const signUp = (e) => {
  let name = document.getElementById('t1').value;
  //id = document.getElementById('t').value;
  email = document.getElementById('t2').value;
  number = document.getElementById('t3').value;
  pwd = document.getElementById('t4').value;
  cpwd = document.getElementById('t5').value;

  let formData = getData();

  let exist =
    formData.length &&
    JSON.parse(localStorage.getItem('formData')).some(
      (data) =>
        data.name.toLowerCase() == name.toLowerCase() &&
        data.email.toLowerCase() == email.toLowerCase()
    );
  let id = formData.length;
  var filter =
    /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  var phoneno = /^\d{10}$/;

  if (name == '') {
    alert('Please enter your name');
  } else if (email == '') {
    alert('Please enter your user email id');
  } else if (!filter.test(email)) {
    alert('Invalid email');
  } else if (number == '') {
    alert('Please enter your Mobile number');
  } else if (!phoneno.test(number)) {
    alert('Invalid Mobile Number');
  } else if (pwd == '') {
    alert('Please enter Password');
  } else if (cpwd == '') {
    alert('Enter Confirm Password');
  } else if (pwd != cpwd) {
    alert('Password not Matched');
  } else if (!exist) {
    formData.push({ id, name, email, number, pwd, cpwd });
    // localStorage.setItem('formData', JSON.stringify(formData));
    setData(formData);
    document.querySelector('form').reset();
    alert('Account Created.\n\nPlease Sign In using the link below.');
    location.href = 'login.html';
  } else {
    alert('Ooopppssss... Duplicate found!!!\nYou have already signed up');
  }
  e.preventDefault();
};
