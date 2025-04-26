const date = new Date();
const year = date.getFullYear();
const monthNames = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
const month = monthNames[date.getMonth()];
const day = date.getDate();
const dateElement = document.getElementById("date");
dateElement.textContent = `${month} ${day}, ${year}`;

