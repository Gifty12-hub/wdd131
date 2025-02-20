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


// Welcome Message with Local Storage
const welcomeMessage = document.createElement("p");
const container = document.querySelector(".container");
let lastVisit = localStorage.getItem("lastVisit");
let currentTime = new Date().getTime();

if (lastVisit) {
    let timeDiff = Math.floor((currentTime - lastVisit) / (1000 * 60 * 60 * 24));
    welcomeMessage.textContent = timeDiff === 0 ? 
        "Welcome back! You visited us today." : 
        `Welcome back! It's been ${timeDiff} days since your last visit.`;
} else {
    welcomeMessage.textContent = "Welcome to Girls in STEM Ghana! We are glad to have you here.";
}
container.insertBefore(welcomeMessage, container.firstChild);
localStorage.setItem("lastVisit", currentTime);

// Interactive Resource Cards - Hover Effect
const resourceFigures = document.querySelectorAll(".resources figure");

resourceFigures.forEach(figure => {
    figure.addEventListener("mouseover", () => {
        figure.style.transform = "scale(1.1)";
        figure.style.transition = "0.3s";
    });
    figure.addEventListener("mouseout", () => {
        figure.style.transform = "scale(1)";
    });
});
