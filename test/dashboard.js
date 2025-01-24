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

var ctx = document.getElementById('barChart').getContext('2d');
var barChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Inbound EDI', 'Outbound EDI', 'Inbound XML', 'Outbound XML', 'Inbound API', 'Outbound API'],
        datasets: [{
            label: 'Number of Files',
            data: [1200, 1900, 800, 500, 700, 600],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        plugins: {
            tooltip: {
                callbacks: {
                    label: function (context) {
                        return 'Votes: ' + context.raw;
                    }
                }
            }
        },
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

var ctx = document.getElementById('donutChart').getContext('2d');
var donutChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        datasets: [{
            data: [2, 4, 3],
            backgroundColor: ['rgba(54, 162, 235, 1)', 'rgba(255, 159, 64, 1)', 'rgba(75, 192, 192, 1)']
        }],
        labels: ['Invalid PO', 'Routing Error', 'Duplicate Trans.'],
    },
    options: {
        responsive: true
    }
});