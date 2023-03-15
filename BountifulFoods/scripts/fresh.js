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


// -------------------------------------------------------------

const fruitsURL = "https://andejuli.github.io/wdd230/fruit.json";

function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}



let fruit1 = randomIntFromInterval(0, 39);
let fruit2 = randomIntFromInterval(0, 39);
let fruit3 = randomIntFromInterval(0, 39);
let allFruits = [];


const getFruits = async () => {
    const response = await fetch(fruitsURL);
    const data = await response.json();
    
    



    document.querySelector('#fruit1 span').textContent = data[fruit1].name;
    document.querySelector('#fruit2 span').textContent = data[fruit2].name;
    document.querySelector('#fruit3 span').textContent = data[fruit3].name;

    document.querySelector('#fruit1 input').value = data[fruit1].name;
    document.querySelector('#fruit2 input').value = data[fruit2].name;
    document.querySelector('#fruit3 input').value = data[fruit3].name;
    allFruits.push([
        data[fruit1].name,
        data[fruit1].nutritions.carbohydrates,
        data[fruit1].nutritions.protein,
        data[fruit1].nutritions.fat,
        data[fruit1].nutritions.sugar,
        data[fruit1].nutritions.calories
    ]);
    allFruits.push([
        data[fruit2].name,
        data[fruit2].nutritions.carbohydrates,
        data[fruit2].nutritions.protein,
        data[fruit2].nutritions.fat,
        data[fruit2].nutritions.sugar,
        data[fruit2].nutritions.calories
    ]);
    allFruits.push([
        data[fruit3].name,
        data[fruit3].nutritions.carbohydrates,
        data[fruit3].nutritions.protein,
        data[fruit3].nutritions.fat,
        data[fruit3].nutritions.sugar,
        data[fruit3].nutritions.calories
    ]);
    
    
};
getFruits();




// --------------------------------------------------------------------
let drinks;
if (!localStorage.getItem('drinks')) {
    drinks = 0;
} else {
    drinks = localStorage.getItem('drinks');
}

const drinkAlias = document.querySelector('#drinkAlias span');
const fnameOut = document.querySelector('#fnameOut span');
const emailOut = document.querySelector('#emailOut span');
const phoneOut = document.querySelector('#phoneOut span');
const fruitsOut = document.querySelector('#fruitsOut span');
const specialInsOut = document.querySelector('#specialInsOut span');
const carbs = document.querySelector('#carbs span');
const protein = document.querySelector('#protein span');
const fats = document.querySelector('#fat span');
const sugars = document.querySelector('#sugar span');
const calories = document.querySelector('#calories span');
const orderDate = document.querySelector('#orderDate span');





function details(event) {
    event.preventDefault();
    drinks++;
    localStorage.setItem('drinks', drinks);
    if (!document.querySelector('#fullForm').classList.contains('collapsed')) {
        document.querySelector('#fullForm').classList.toggle('collapsed')
    };
    if (document.querySelector('#outputForm').classList.contains('collapsed')) {
        document.querySelector('#outputForm').classList.toggle('collapsed')
    };


    drinkAlias.textContent = event.target.elements.dname.value;
    fnameOut.textContent = event.target.elements.fname.value;
    emailOut.textContent = event.target.elements.email.value;
    phoneOut.textContent = event.target.elements.phone.value;
    specialInsOut.textContent = event.target.elements.instructions.value;
    orderDate.textContent = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;


    let totalCarb =0;
    let totalPro =0;
    let totalFat=0;
    let totalSugar=0;
    let totalCalorie=0;

    let allCheckBoxes = document.getElementsByName('box');
    let allFilledBoxes = [];
    for (let checkbox of allCheckBoxes) {
        if (checkbox.checked) {
            allFilledBoxes = allFilledBoxes.concat(' ' + checkbox.value);
            for (let singleFruit of allFruits) {
                
                if (checkbox.value == singleFruit[0]) {
                    
                    totalCarb+=singleFruit[1];
                    totalPro+=singleFruit[2];
                    totalFat+=singleFruit[3];
                    totalSugar+=singleFruit[4];
                    totalCalorie+=singleFruit[5];
                }
            }

        }
    }

    fruitsOut.textContent = allFilledBoxes;
    carbs.textContent = totalCarb.toFixed(2);
    protein.textContent = totalPro.toFixed(2);
    fats.textContent = totalFat.toFixed(2);
    sugars.textContent = totalSugar.toFixed(2);
    calories.textContent = totalCalorie.toFixed(2);
    
}


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