const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
//const url = 'https://run.mocky.io/v3/b74a6dc4-31af-4ec5-8fa6-280f29e35901';
async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();
    //console.table(data.prophets);
    displayTable(data.prophets);
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


const displayTable = (prophets) => {
    const table = document.querySelector('table');

    prophets.forEach((prophet) => {
        let tr = document.createElement('tr');
        let td_name = document.createElement('td');
        let td_birthplace = document.createElement('td');
        let td_birthdate = document.createElement('td');

        td_name.textContent = `${prophet.name}`;
        td_birthdate.textContent = `${prophet.birthdate}`; 
        td_birthplace.textContent = `${prophet.birthplace}`;

        tr.appendChild(td_name);
        tr.appendChild(td_birthdate);
        tr.appendChild(td_birthplace);

        table.appendChild(tr);

    })
}
