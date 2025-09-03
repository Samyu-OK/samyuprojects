function bar() {
  document.getElementById('sidebar').classList.remove('active');
}

function toggleMenu() {
  const sidebar = document.getElementById('sidebar');
  sidebar.classList.toggle('active');
}

document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".contact-form");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const fullName = form.querySelector('input[type="text"]').value.trim();
    const email = form.querySelector('input[type="email"]').value.trim();
    const service = form.querySelector("select").value;
    const message = form.querySelector("textarea").value.trim();


    if (!fullName) {
      alert("Please enter your full name.");
      return;
    }

    if (!email) {
      alert("Please enter a valid email address.");
      return;
    }

    if (service === "Select a service") {
      alert("Please select a service.");
      return;
    }

    if (!message) {
      alert("Please enter your message.");
      return;
    }


    alert("✅ Thank you! Your message has been sent successfully.");
    form.reset();
  });
});
