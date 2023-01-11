const updatedDate = document.querySelector('footer p');

const date = new Date();
let year = date.getFullYear();

updatedDate.innerHTML = `&copy ${year} | Cameron M. Taylor | Last Updated: ${document.lastModified}`