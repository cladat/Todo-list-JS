let place = document.querySelector('.place');
let number = document.querySelector('.number');
let small1 = document.querySelector('.smallsquare1');
let small2 = document.querySelector('.smallsquare2');
let big = document.querySelector('.bigsquare');
let left = document.querySelector('.left');
let right = document.querySelector('.right');
let compteur = 0;

function move() {
    small1.classList.toggle("d-none");
    small2.classList.toggle("d-none");
    compteur++;
    number.innerText = ("Nombre de click " + compteur);

}

place.addEventListener('click', move);