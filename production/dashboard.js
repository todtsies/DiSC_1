document.addEventListener("DOMContentLoaded", () => {
    const hamburgerMenu = document.getElementById("hamburger-menu");
    const sidebar = document.getElementById("sidebar");
  
    if (!hamburgerMenu) {
      console.error("Hamburger menu button not found.");
    }
    if (!sidebar) {
      console.error("Sidebar not found.");
    }
  
    // Log clicks to verify the event listener
    hamburgerMenu.addEventListener("click", () => {
      console.log("Hamburger button clicked");
      sidebar.classList.toggle("hidden");
      console.log("Sidebar class toggled");
    });
  });
  
    // Toggle dark mode
    document.addEventListener("DOMContentLoaded", () => {
        // Ensure the button exists
        const toggleThemeButton = document.getElementById("toggle-theme");
      
        // Check if the button was found before adding event listeners
        if (toggleThemeButton) {
          toggleThemeButton.addEventListener("click", () => {
            document.body.classList.toggle("dark-mode");
      
            // Update the button text
            toggleThemeButton.textContent = document.body.classList.contains("dark-mode")
              ? "Switch to Light Mode"
              : "Switch to Dark Mode";
          });
        } else {
          console.error("Toggle theme button not found in the DOM.");
        }
      });

      // Logout button functionality
      document.getElementById("logout-btn").addEventListener("click", () => {
        localStorage.clear(); // Clear all stored data
        window.location.href = "../index.html";
      });
    
      document.addEventListener("DOMContentLoaded", () => {
        // Fetch the user's role (Example: role is stored in localStorage)
        const userRole = parseInt(localStorage.getItem("userRole")); // Example: Role is saved as a number
      
        // Get the container for the Switch Environment button
        const switchEnvironmentContainer = document.getElementById("switch-environment-container");
      
        // Show the button only for users with role #1 or role #2
        if (userRole === 1 || userRole === 2) {
          switchEnvironmentContainer.style.display = "block";
      
          // Add click event to redirect to the environment.html page
          const switchEnvironmentButton = document.getElementById("switch-environment");
          switchEnvironmentButton.addEventListener("click", () => {
            window.location.href = "../environment/environment.html";
          });
        }
      });























// document.addEventListener("DOMContentLoaded", () => {
    // Toggle Dark Mode
//     const darkModeToggle = document.getElementById("dark-mode-toggle");
//     darkModeToggle.addEventListener("click", () => {
//       document.body.classList.toggle("dark-mode");
//     });
  
//     // Export Report
//     const exportReportBtn = document.getElementById("export-report");
//     exportReportBtn.addEventListener("click", () => {
//       alert("Report Exported!");
//       // Add logic to generate and download reports
//     });
  
//     // Manage Customers/Vendors
//     const manageCustomersBtn = document.getElementById("manage-customers-btn");
//     manageCustomersBtn.addEventListener("click", () => {
//       window.location.href = "customer-list.html"; // Redirect to customer management
//     });
  
//     // Logout Functionality
//     const logoutBtn = document.getElementById("logout-btn");
//     logoutBtn.addEventListener("click", () => {
//       localStorage.clear();
//       alert("You have been logged out.");
//       window.location.href = "login.html";
//     });
  
//     // Chart.js Example
//     const ctx = document.getElementById("transaction-chart").getContext("2d");
//     new Chart(ctx, {
//       type: "line",
//       data: {
//         labels: ["Jan", "Feb", "Mar", "Apr"],
//         datasets: [{
//           label: "Transactions",
//           data: [150, 200, 180, 220],
//           borderColor: "blue",
//           tension: 0.3,
//           fill: false,
//         }]
//       }
//     });
//   });