const currentYear = new Date().getFullYear();
document.getElementById("currentyear").innerHTML = currentYear;

const lastModified = document.lastModified; 
document.getElementById("lastModified").innerHTML = "Last Modified: " + lastModified;

document.addEventListener("DOMContentLoaded", function() {
    const temperature = 10; // Static temperature in Celsius
    const windSpeed = 5; // Static wind speed in km/h
    const windChillElement = document.querySelector(".weather p:nth-child(4)");

    function calculateWindChill(temp, wind) {
        return (13.12 + 0.6215 * temp - 11.37 * Math.pow(wind, 0.16) + 0.3965 * temp * Math.pow(wind, 0.16)).toFixed(1);
    }
    if (temperature <= 10 && windSpeed > 4.8) {
        windChillElement.textContent = `Wind Chill: ${calculateWindChill(temperature, windSpeed)} °C`;
    } else {
        windChillElement.textContent = "Wind Chill: N/A";
    }
});