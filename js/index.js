const loginForm = document.getElementById("loginForm");
    const messageBox = document.getElementById("messageBox");

    loginForm.addEventListener("submit", function (e) {
      e.preventDefault(); // Prevent form from submitting

      const email = document.getElementById("email").value.trim();
      const password = document.getElementById("password").value.trim();

      // Dummy credentials for demonstration
      const validEmail = "user@example.com";
      const validPassword = "123456";

      if (email === "" || password === "") {
        showMessage("Please fill in all fields", "error");
      } else if (email === validEmail && password === validPassword) {
        showMessage("Login successful!", "success");
      } else {
        showMessage("Invalid email or password", "error");
      }
    });

    function showMessage(message, type) {
      messageBox.textContent = message;
      messageBox.className = `message ${type}`;
    }