
document.getElementById("login-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    // Predefined valid credentials with roles
    const users = {
      Daniel: { password: "12345", role: 1 }, // Access all environments
      Julie: { password: "54321", role: 3 }, // Auto-load production
      Emily: { password: "67890", role: 2 }, // Access Test and Production
      Stephanie: { password: "56789", role: 2 }, // Access Test and Production
    };

    // Check credentials
    if (users[username] && users[username].password === password) {
      // Store the username and role in localStorage
      localStorage.setItem("loggedInUser", username);
      localStorage.setItem("userRole", users[username].role);

      // Redirect based on role
      const role = users[username].role;
      if (role === 1) {
        window.location.href = "./environment/environment.html"; // Access all environments
      } else if (role === 2) {
        window.location.href = "./environment/environment.html"; // Restricted to Test and Production
      } else if (role === 3) {
        window.location.href = "./production/production.html"; // Auto-load Production
      }
    } else {
      // Show error message
      const errorMessage = document.getElementById("error-message");
      errorMessage.style.display = "block";
      errorMessage.textContent = "Invalid username or password.";
    }
  });