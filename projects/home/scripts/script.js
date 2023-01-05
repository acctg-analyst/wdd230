const updatedDate = document.querySelector('#updatedDate');

const date = new Date();
let day = date.getDate();
let month = date.getMonth()+1;
let year = date.getFullYear();
let hours = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();

let currentDate = `Last Updated: ${month}/${day}/${year} ${hours}:${minutes}:${seconds}`;

updatedDate.textContent = currentDate;