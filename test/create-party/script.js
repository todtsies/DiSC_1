
document.getElementById("createPartyForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let party = {
        name: document.getElementById("partyName").value.trim(),
        type: document.getElementById("partyType").value,
        contact: document.getElementById("contactPerson").value.trim(),
        email: document.getElementById("email").value.trim(),
        phone: document.getElementById("phone").value.trim(),
        address: document.getElementById("address").value.trim()
    };

    if (!party.name || !party.type || !party.contact || !party.email || !party.phone || !party.address) {
        document.getElementById("message").textContent = "All fields are required!";
        document.getElementById("message").style.color = "red";
        return;
    }

    let parties = JSON.parse(localStorage.getItem("parties")) || [];
    let editIndex = localStorage.getItem("editIndex");

    if (editIndex !== null) {
        parties[editIndex] = party;
        localStorage.removeItem("editIndex");
        localStorage.removeItem("editParty");
    } else {
        parties.push(party);
    }

    localStorage.setItem("parties", JSON.stringify(parties));

    // Notify the party list page that data has changed
    localStorage.setItem("partyUpdate", Date.now());

    document.getElementById("message").textContent = "Party saved successfully!";
    document.getElementById("message").style.color = "green";

    document.getElementById("createPartyForm").reset();

    // Redirect to party list
    setTimeout(() => {
        window.location.href = "../search-party/parties.html";
    }, 500);
});