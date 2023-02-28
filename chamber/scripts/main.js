
const today = document.querySelector('#today');
const options = {
    weekday: "long",
    day: "2-digit",
    month: "long",
    year: "numeric"
};

today.textContent = `${new Date().toLocaleDateString("en-UK", options)}`;


const lastModified = document.querySelector('#lastModified');
lastModified.textContent = `Last Modification: ${document.lastModified}`


const date = new Date();
let year = date.getFullYear();



document.querySelector('#currentYear').innerHTML = `&copy;${year} Treasure Valley Chamber `



if (date.getDay() == 1 | date.getDay() == 2){
    const meetingAlert = document.createElement('p');
    meetingAlert.innerText = "🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m."
    const banner = document.querySelector('#banner');
    banner.appendChild(meetingAlert);
};


// when hamburger is hit

const hamburger = document.querySelector('.ham');

let clickCounter = 1;
hamburger.addEventListener('click', () => {

    clickCounter = clickCounter + 1

    if (clickCounter % 2 == 0 && !(document.querySelector('#navContainer').classList.contains('large'))) {
        document.querySelector('#navContainer').classList.toggle('on');
        const navDiv = document.querySelector('#navContainer');
        const navBar = document.createElement('nav');
        navDiv.appendChild(navBar);

        const a1 = document.createElement('a');
        a1.setAttribute("href", "index.html");
        a1.textContent = "Home";
        navBar.appendChild(a1);

        const a2 = document.createElement('a');
        a2.setAttribute("href", "discover.html");
        a2.textContent = "Discover";
        navBar.appendChild(a2);

        const a3 = document.createElement('a');
        a3.setAttribute("href", "directory.html");
        a3.textContent = "Directory";
        navBar.appendChild(a3);

        const a4 = document.createElement('a');
        a4.setAttribute("href", "join.html");
        a4.textContent = "Join";
        navBar.appendChild(a4);

        const a5 = document.createElement('a');
        a5.setAttribute("href", "#");
        a5.textContent = "Contact";
        navBar.appendChild(a5);

    }

    else {
        document.querySelector('nav').remove()
        document.querySelector('#navContainer').classList.toggle('on');
    }
});

function reportWindowSize() {
    if (window.innerWidth >= 956 && !(document.querySelector('#navContainer').classList.contains('on'))) {
        document.querySelector('#navContainer').classList.toggle('on');
        document.querySelector('#navContainer').classList.toggle('large');
        const navDiv = document.querySelector('#navContainer');
        const navBar = document.createElement('nav');
        navDiv.appendChild(navBar);

        const a1 = document.createElement('a');
        a1.setAttribute("href", "index.html");
        a1.textContent = "Home";
        navBar.appendChild(a1);

        const a2 = document.createElement('a');
        a2.setAttribute("href", "discover.html");
        a2.textContent = "Discover";
        navBar.appendChild(a2);

        const a3 = document.createElement('a');
        a3.setAttribute("href", "directory.html");
        a3.textContent = "Directory";
        navBar.appendChild(a3);

        const a4 = document.createElement('a');
        a4.setAttribute("href", "join.html");
        a4.textContent = "Join";
        navBar.appendChild(a4);

        const a5 = document.createElement('a');
        a5.setAttribute("href", "#");
        a5.textContent = "Contact";
        navBar.appendChild(a5);
    }
    else if (window.innerWidth < 956 && document.querySelector('#navContainer').classList.contains('on') && document.querySelector('#navContainer').classList.contains('large')) {
        document.querySelector('#navContainer').classList.toggle('on');
        document.querySelector('#navContainer').classList.toggle('large');
        document.querySelector('nav').remove()
    }
}

window.addEventListener('resize', reportWindowSize);

window.addEventListener('DOMContentLoaded', reportWindowSize);



