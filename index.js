document.getElementById("dob").addEventListener("change", function () {
  const dob = new Date(this.value);
  const today = new Date();
  let age = today.getFullYear() - dob.getFullYear();
  const monthDiff = today.getMonth() - dob.getMonth();
  
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
    age--;
  }

  if (age < 18 || age > 55) {
    alert("Age must be between 18 and 55.");
    this.value = ""; // Clear the invalid input
  }
});

document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault();
  
  const formData = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    password: document.getElementById("password").value,
    dob: document.getElementById("dob").value,
    acceptedTerms: document.getElementById("terms").checked
  };

  localStorage.setItem("formData", JSON.stringify(formData));
  alert("Data saved!");

  loadTableData();
});

function loadTableData() {
  const storedData = JSON.parse(localStorage.getItem("formData"));

  if (storedData) {
    const tableBody = document.getElementById("table-body");
    const row = `<tr>
                  <td>${storedData.name}</td>
                  <td>${storedData.email}</td>
                  <td>${storedData.password}</td>
                  <td>${storedData.dob}</td>
                  <td>${storedData.acceptedTerms}</td>
                </tr>`;
    tableBody.innerHTML = row;
  }
}

// Load the data on page load
window.onload = function () {
  loadTableData();
};
