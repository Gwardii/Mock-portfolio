function showAlert(projectName) {
  alert(`You selected the project: ${projectName}`);
}

document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("name").value;
  document.getElementById("formResponse").textContent = `Thanks for reaching out, ${name}! I'll get back to you soon.`;
});
