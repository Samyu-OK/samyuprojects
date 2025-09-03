
function bar() {
  document.getElementById('sidebar').classList.remove('active');
}

function toggleMenu() {
  const sidebar = document.getElementById('sidebar');
  sidebar.classList.toggle('active');
}


function boxup(){
  document.querySelector(".a").style.display="block";
  document.querySelector(".h1").style.display="block";
}

function cl(){
  document.querySelector(".a").style.display="none";
  document.querySelector(".h1").style.display="none";
}

function create(){
  document.querySelector(".a1").style.display="block";
  
}

function login(event) {
  event.preventDefault();

  let enteredEmail = document.getElementById("loginEmail").value.trim();
  let enteredPassword = document.getElementById("loginPassword").value.trim();

  let storedEmail = localStorage.getItem("userEmail");
  let storedPassword = localStorage.getItem("userPassword");

  if (!storedEmail || !storedPassword) {
    alert("Account does not exist! Please create one.");
    return;
  }

  if (enteredEmail === storedEmail && enteredPassword === storedPassword) {
    alert("Login successful!");
    window.location.href = "index.html";
  } else {
    alert("Password or email is incorrect!");
  }
}

function createAccount(event) {
  event.preventDefault();

  let pass1 = document.getElementById("password1_create").value.trim();
  let pass2 = document.getElementById("password2_create").value.trim();
  let email = document.getElementById("email").value.trim();

  if (pass1 !== pass2) {
    alert("Passwords do not match!");
    return false;
  }

  localStorage.setItem("userEmail", email);
  localStorage.setItem("userPassword", pass1);

  alert("Account created successfully!");
  document.querySelector(".a1").style.display="none";
  
}

function clr() {
  document.querySelector(".a1").style.display = "none";
}

function checkPasswords(event) {
  event.preventDefault();

  let pass1 = document.getElementById("password1").value.trim();
  let pass2 = document.getElementById("password2").value.trim();

  if (pass1 === pass2) {
    if (!localStorage.getItem("userEmail")) {
      alert("No account found. Please create one first.");
      return false;
    }
    localStorage.setItem("userPassword", pass1);
    alert("Password changed");
    window.location.href = "index.html";
    return true;
  } else {
    alert("Passwords do not match!");
    return false;
  }
}

function pass(){
  document.querySelector(".a3").style.display="block";
  document.querySelector(".head2").style.display="block";
}

function clrs(){
  document.querySelector(".a3").style.display="none";
  document.querySelector(".head2").style.display="none";
}

