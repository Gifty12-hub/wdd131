const currentYear = new Date().getFullYear();
document.getElementById("currentyear").innerHTML = currentYear;

const lastModified = document.lastModified; 
document.getElementById("lastModified").innerHTML = "Last Modified: " + lastModified;

const mainnav = document.querySelector('.navbar');
const hambuttom = document.querySelector('#menu');

hambuttom.addEventListener('click', () => {
  mainnav.classList.toggle('open');
  hambuttom.classList.toggle('open');
});

const products = [
    {
      id: "fc-1888",
      name: "critical thinking",
      averagerating: 4.5
    },
    {
      id: "fc-2050",
      name: "microsoft suite",
      averagerating: 4.7
    },
    {
      id: "fs-1987",
      name: "python programming",
      averagerating: 3.5
    },
    {
      id: "ac-2000",
      name: "google workspace",
      averagerating: 3.9
    },
    {
      id: "jj-1969",
      name: "creativity",
      averagerating: 5.0
    }
  ];
    
  // Function to populate the product dropdown dynamically

function populateProductDropdown() {
    const productSelect = document.getElementById('product');

    // Create an option for each product in the products array
    products.forEach(product => {
        const option = document.createElement('option');
        option.value = product.id; 
        option.textContent = product.name;  
        productSelect.appendChild(option);
    });
}

// Populate the dropdown when the page loads
window.onload = populateProductDropdown;