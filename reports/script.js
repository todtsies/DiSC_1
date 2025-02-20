// Function to filter reports
function filterReports() {
    let input = document.getElementById("filter-input");
    let filter = input.value.toLowerCase();
    let table = document.getElementById("reports-list");
    let rows = table.getElementsByTagName("tr");

    for (let i = 0; i < rows.length; i++) {
        let cells = rows[i].getElementsByTagName("td");
        let rowMatch = false;

        for (let j = 0; j < cells.length; j++) {
            if (cells[j]) {
                let cellText = cells[j].textContent || cells[j].innerText;
                if (cellText.toLowerCase().includes(filter)) {
                    rowMatch = true;
                    break;
                }
            }
        }
        rows[i].style.display = rowMatch ? "" : "none";
    }
}

// Button Click Event
document.getElementById("create-report-btn").addEventListener("click", function() {
    window.location.href = "create-reports.html"; // Adjust this to the actual page
});

// Logout button functionality
document.getElementById("logout-btn").addEventListener("click", () => {
    localStorage.clear(); // Clear all stored data
    window.location.href = "../index.html";
  });

  document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll(".ellipsis-btn").forEach(button => {
        button.addEventListener("click", function(event) {
            // Close all dropdowns first
            document.querySelectorAll(".dropdown-content").forEach(dropdown => {
                if (dropdown !== this.nextElementSibling) {
                    dropdown.classList.remove("show");
                }
            });

            // Toggle only the clicked button's dropdown
            const dropdown = this.nextElementSibling;
            dropdown.classList.toggle("show");

            event.stopPropagation(); // Prevent immediate closing
        });
    });

    // Close dropdown if clicking outside
    document.addEventListener("click", function(event) {
        document.querySelectorAll(".dropdown-content").forEach(dropdown => {
            if (!dropdown.contains(event.target)) {
                dropdown.classList.remove("show");
            }
        });
    });
});