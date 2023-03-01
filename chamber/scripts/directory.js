const url = "https://run.mocky.io/v3/d6e80a1b-d9d9-440f-bba3-001c2056092d";

const cardsIcon = document.querySelector('.cardsIcon');
const tableIcon = document.querySelector('.tableIcon');
const cardDiv = document.querySelector('div.c');
const tableDiv = document.querySelector('div.t');

async function directoryData() {
    const response = await fetch(url);
    const data = await response.json();
    displayBusinessCards(data.businesses);
    displayBusinessTable(data.businesses);

}
  


const displayBusinessCards = (businesses) => {
    

    businesses.forEach((business) => {
        let card = document.createElement('section');
        let div = document.createElement('div');
        let address = document.createElement('p');
        let phone = document.createElement('p');
        let website = document.createElement('a');
        let picture = document.createElement('img');

        
        picture.setAttribute('src', `${business.image}`);
        picture.setAttribute('alt', `logo for ${business.name}`);
        picture.setAttribute('loading', 'lazy');
        address.textContent = `${business.address}`;
        phone.textContent = `${business.phone}`;
        website.textContent = `${business.website}`;
        website.setAttribute('href', `${business.website}`)
        
        div.appendChild(address);
        div.appendChild(phone);
        div.appendChild(website);


        card.appendChild(picture);
        card.appendChild(div);
        

        cardDiv.appendChild(card);

    })
}


const displayBusinessTable = (businesses) => {
    businesses.forEach((business) => {
        const section = document.createElement('section');
        

        const p1 = document.createElement('p');
        const p2= document.createElement('p');
        const p3 = document.createElement('p');
        const p4 = document.createElement('p');
        

        p1.textContent = `${business.name}`;
        p2.textContent = `${business.address}`;
        p3.textContent = `${business.phone}`;
        p4.textContent = `${business.website}`;

        section.appendChild(p1);
        section.appendChild(p2);
        section.appendChild(p3);
        section.appendChild(p4);
        tableDiv.appendChild(section);


    })
}

directoryData();

cardsIcon.addEventListener("click", () => {
    if (!cardDiv.classList.contains('cards')){
        tableDiv.classList.toggle('hide');
        cardDiv.classList.toggle('hide');
        tableDiv.classList.toggle('table');
        cardDiv.classList.toggle('cards');
    }
    
});

tableIcon.addEventListener("click", () => {
    if (!tableDiv.classList.contains('table')){
        cardDiv.classList.toggle('hide');
        tableDiv.classList.toggle('hide');
        cardDiv.classList.toggle('cards');
        tableDiv.classList.toggle('table');
    }
});



