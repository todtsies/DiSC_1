document.getElementById("logout-btn").addEventListener("click", () => {
    localStorage.clear(); // Clear all stored data
    window.location.href = "../index.html";
});

 var ctx = document.getElementById('barChart').getContext('2d');
 var barChart = new Chart(ctx, {
     type: 'bar',
     data: {
         labels: ['EDI', 'API', 'XML', 'Errors'],
        datasets: [
            {
                label: 'Inbound',
             data: [550, 600, 421, 88],
             backgroundColor: [
                 'rgba(255, 99, 132, 0.2)',
                 'rgba(54, 162, 235, 0.2)',
                 'rgba(209, 91, 236, 0.2)',
                 'rgba(75, 192, 192, 0.2)'
             ],
             borderColor: [
                 'rgba(255, 99, 132, 1)',
                 'rgba(54, 162, 235, 1)',
                 'rgba(21, 2, 26, 0.2)',
                 'rgb(8, 138, 6)'
             ],
             borderWidth: 1
            }, {
             label: 'Outbound',
             data: [500, 320, 400, 30],
             backgroundColor: [
                 'rgb(181, 1, 40)',
                 'rgb(2, 78, 129)',
                 'rgb(130, 7, 144)',
                 'rgb(75, 192, 83)'
             ],
             borderColor: [
                 'rgb(181, 1, 40)',
                 'rgb(2, 78, 129)',
                 'rgb(55, 4, 61)',
                 'rgb(75, 192, 83)'
             ],
             borderWidth: 1
            }
         ]
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

        
        function toggleDropdown() {
            document.getElementById("dropdown").classList.toggle("show");
        }
        
        function selectOption(element) {
            let selectedOptions = document.getElementById("selectedOptions");
            let inputBox = document.getElementById("inputBox");
            let optionText = element.innerText;
        
            // Check if already selected
            let existingOptions = document.querySelectorAll(".selected-option");
            for (let opt of existingOptions) {
                if (opt.textContent.includes(optionText)) return;
            }
        
            // Create a new tag for the selected option
            let tag = document.createElement("div");
            tag.classList.add("selected-option");
            tag.innerHTML = `${optionText} <span onclick="removeOption(this)">✖</span>`;
        
            selectedOptions.insertBefore(tag, inputBox);
        
            // Close the dropdown after selecting an option
            document.getElementById("dropdown").classList.remove("show");
        }
        
        function removeOption(element) {
            element.parentElement.remove();
        }
        
        function filterOptions() {
            let searchValue = document.getElementById("searchBox").value.toLowerCase();
            let options = document.querySelectorAll(".dropdown ul li");
        
            options.forEach((option) => {
                let text = option.innerText.toLowerCase();
                option.style.display = text.includes(searchValue) ? "block" : "none";
            });
        }
        
        // Close dropdown when clicking outside
        document.addEventListener("click", function(event) {
            let dropdown = document.getElementById("dropdown");
            let multiSelect = document.querySelector(".multi-select");
        
            if (!multiSelect.contains(event.target)) {
                dropdown.classList.remove("show");
            }
        });
        
        // Prevent event bubbling when clicking inside the dropdown
        document.getElementById("dropdown").addEventListener("click", function(event) {
            event.stopPropagation();
        });
        
        // Search Function
        function searchParties() {
            let selectedTags = document.querySelectorAll(".selected-option");
            let selectedValues = [];
        
            selectedTags.forEach(tag => {
                selectedValues.push(tag.textContent.replace("✖", "").trim());
            });
        
            let thirdParty = document.getElementById("thirdParty").value;
            let partyID = document.getElementById("partyID").value.trim();
        
            let searchParams = {
                partyNames: selectedValues,
                thirdParty: thirdParty,
                partyID: partyID
            };

        
            console.log("Search Parameters:", searchParams);
            
        }

        
        function searchOrder() {
            let selectedType = document.querySelector('input[name="orderType"]:checked');
            let orderNumber = document.getElementById("orderNumber").value.trim();
        
            if (!selectedType) {
                alert("Please select PO Number or Trilogie Order Number.");
                return;
            }
        
            if (orderNumber === "") {
                alert("Please enter the order number.");
                return;
            }
        
        
        }