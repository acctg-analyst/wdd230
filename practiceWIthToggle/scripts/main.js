const button = document.querySelector(".btn");

function show() {
    button.classList.toggle("newstyle");
}

button.addEventListener("click", show);

//Hamburger Button JS

const mainnav = document.querySelector(".navigation");
const hambutton = document.querySelector(".ham");

hambutton.addEventListener("click", () => {
    mainnav.classList.toggle("responsive");
});
