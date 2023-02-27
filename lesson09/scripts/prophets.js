const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';

async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();
    //console.table(data.prophets);
    displayProphets(data.prophets);
}
  
getProphetData();



const displayProphets = (prophets) => {
    const cards = document.querySelector('div.cards');

    prophets.forEach((prophet) => {
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let dob = document.createElement('p');
        let pob = document.createElement('p');
        let picture = document.createElement('img');

        h2.textContent = `${prophet.name} ${prophet.lastname}`;
        picture.setAttribute('src', `${prophet.imageurl}`);
        picture.setAttribute('alt', `Portait of ${prophet.name} ${prophet.lastname} - ${prophet.order} Latter-day President` );
        picture.setAttribute('loading', 'lazy');
        dob.textContent = `Date of Birth: ${prophet.birthdate}`;
        pob.textContent = `Place of Birth: ${prophet.birthplace}`;

        card.appendChild(h2);
        card.appendChild(dob);
        card.appendChild(pob);
        card.appendChild(picture);
        

        cards.appendChild(card);

    })
}

