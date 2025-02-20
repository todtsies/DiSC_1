document.addEventListener("DOMContentLoaded", function() {
    let editIndex = localStorage.getItem("editIndex");
    let parties = JSON.parse(localStorage.getItem("parties")) || [];

    if (editIndex === null || !parties[editIndex]) {
        alert("No party selected for editing.");
        window.location.href = "../search-party/parties.html";
        return;
    }

    let party = parties[editIndex];

    // Populate the form with existing party data
    document.getElementById("partyName").value = party.name;
    document.getElementById("partyType").value = party.type;
    document.getElementById("contactPerson").value = party.contact;
    document.getElementById("email").value = party.email;
    document.getElementById("phone").value = party.phone;
    document.getElementById("address").value = party.address;

    // Handle form submission
    document.getElementById("editPartyForm").addEventListener("submit", function(event) {
        event.preventDefault();

        // Update party data
        parties[editIndex] = {
            name: document.getElementById("partyName").value.trim(),
            type: document.getElementById("partyType").value,
            contact: document.getElementById("contactPerson").value.trim(),
            email: document.getElementById("email").value.trim(),
            phone: document.getElementById("phone").value.trim(),
            address: document.getElementById("address").value.trim()
        };

        // Save changes
        localStorage.setItem("parties", JSON.stringify(parties));
        localStorage.removeItem("editIndex");

        document.getElementById("message").textContent = "Party updated successfully!";
        document.getElementById("message").style.color = "green";

        // Redirect back to party list after a short delay
        setTimeout(() => {
            window.location.href = "../search-party/parties.html";
        }, 1000);
    });
});