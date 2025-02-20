document.addEventListener("DOMContentLoaded", function() {
    let tableBody = document.getElementById("partyTableBody");

    function loadParties() {
        let parties = JSON.parse(localStorage.getItem("parties")) || [];
        displayParties(parties);
    }

    function displayParties(parties) {
        tableBody.innerHTML = ""; // Clear previous results

        if (parties.length === 0) {
            tableBody.innerHTML = "<tr><td colspan='7' style='text-align:center;'>No parties found</td></tr>";
        } else {
            parties.forEach((party, index) => {
                let row = tableBody.insertRow();
                row.innerHTML = `
                    <td>${party.name}</td>
                    <td>${party.type}</td>
                    <td>${party.contact}</td>
                    <td>${party.email}</td>
                    <td>${party.phone}</td>
                    <td>${party.address}</td>
                    <td>
                        <button class="edit-btn" onclick="editParty(${index})">Edit</button>
                        <button class="delete-btn" onclick="deleteParty(${index})">Delete</button>
                    </td>
                `;
            });
        }
    }

    // Delete Party Function
    window.deleteParty = function(index) {
        if (confirm("Are you sure you want to delete this party?")) {
            let parties = JSON.parse(localStorage.getItem("parties")) || [];
            parties.splice(index, 1);
            localStorage.setItem("parties", JSON.stringify(parties));
            loadParties();
        }
    };

    // Edit Party Function
    window.editParty = function(index) {
        let parties = JSON.parse(localStorage.getItem("parties")) || [];
        let party = parties[index];

        localStorage.setItem("editIndex", index);
        localStorage.setItem("editParty", JSON.stringify(party));

        window.location.href = "../edit-party/edit_party.html";
    };

    // Search and Filter Function
    window.filterParties = function() {
        let searchQuery = document.getElementById("searchInput").value.toLowerCase();
        let parties = JSON.parse(localStorage.getItem("parties")) || [];

        let filteredParties = parties.filter(party =>
            party.name.toLowerCase().includes(searchQuery) ||
            party.type.toLowerCase().includes(searchQuery) ||
            party.contact.toLowerCase().includes(searchQuery) ||
            party.email.toLowerCase().includes(searchQuery)
        );

        displayParties(filteredParties);
    };

    // Listen for storage updates
    window.addEventListener("storage", function(event) {
        if (event.key === "partyUpdate") {
            loadParties();
        }
    });

    loadParties();
});