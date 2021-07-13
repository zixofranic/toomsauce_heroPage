let menu= document.getElementById("mainNav");

function toggleMenu() {
    menu.classList.toggle("open");
}
let x = document.getElementById("hambrgrBtn");
x.onclick = toggleMenu;
