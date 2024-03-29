const navIcon = document.querySelector('#navDiv');
const navSection = document.querySelector('.navSection');
const navIconClose = document.querySelector('.navSection .fa-times');
const body = document.querySelector('body');

navIcon.addEventListener("click", () => {
    navSection.classList.toggle('open');
    body.classList.toggle('openNav'); 
});

navIconClose.addEventListener("click", () => {  
    navSection.classList.toggle('open');
    body.classList.toggle('openNav');
});

// ---------------------------------------------------------
const today = document.querySelector('#today');
const date = new Date();
const options = {
    weekday: "long",
    day: "2-digit",
    month: "long",
    year: "numeric"
};

today.textContent = `${date.toLocaleDateString("en-UK", options)}`;
const lastModified = document.querySelector('#lastModified');
lastModified.textContent = `Last Modified: ${document.lastModified}`
let year = date.getFullYear();
document.querySelector('#currentYear').innerHTML = `&copy;${year}`


// lazy loading


//This is to select all of the images on the screen
let images = document.querySelectorAll("[data-src]");


// This is to emphize the lazy loading process
const imgOptions = {
    threshold: 0
    // rootMargin: "0px 0px -100px 0px"
};


// this function is what swaps the data-src with the actual src
function preloadImage(img){
    const src = img.getAttribute('data-src');
    if (!src){
        return;
    }

    img.src = src;
};



// Creating the new intersectionObserver -- entries are all of the pictures and entry is an
// individual thing. After we have observed the image we are going to stop observing it. We also
// pass the iamge options here to allow us to eph the change.
const imgObserver = new IntersectionObserver((entries, imgObserver) => {
    entries.forEach( entry => {
        if (!entry.isIntersecting){
            return;
        }else{
            preloadImage(entry.target);
            imgObserver.unobserve(entry.target);
        }
    })
}, imgOptions);





// Setting each image to be observed
images.forEach(image => {
    imgObserver.observe(image);
});
