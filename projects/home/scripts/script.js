const updatedDate = document.querySelector('#updatedDate');

const date = new Date();
let year = date.getFullYear();


let currentDate = `Last Updated: ${document.lastModified}`
updatedDate.textContent = currentDate;

document.querySelector('#currentYear').innerHTML = `&copy ${year} .:|:. Cameron M. Taylor .:|:. Idaho`