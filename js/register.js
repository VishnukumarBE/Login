const regForm = document.getElementById("registerForm");
const regMessageBox = document.getElementById("regMessageBox");

regForm.addEventListener("submit", function (e) {
  e.preventDefault();
   
  const username = document.getElementById("username").value.trim();
  const email = document.getElementById("regEmail").value.trim();
  const password = document.getElementById("regPassword").value.trim();
  const confirmPassword = document.getElementById("confirmPassword").value.trim();
  //validating all the fields
  if (!username || !email || !password || !confirmPassword) {
    showRegMessage("All fields are required", "error");
  } else if (password.length < 6) {
    showRegMessage("Password must be at least 6 characters", "error");
  } else if (password !== confirmPassword) {
    showRegMessage("Passwords do not match", "error");
  } else {
    showRegMessage("Registration successful! Redirecting to login...", "success");

    // Simulate redirect after 2 seconds
    setTimeout(() => {
      window.location.href = "index.html"; 
    }, 2000);
  }
});

function showRegMessage(message, type) {
  regMessageBox.textContent = message;
  regMessageBox.className = `message ${type}`;
}