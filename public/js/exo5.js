let btnimg = document.querySelector('.bsara');
let sara = document.querySelector('img');
let images = document.querySelector('.images');
let compteur = 0;

function add() {
    compteur++;

    if (compteur == 1) {
        sara.classList.remove("d-none");
    } else {
        let cln = sara.cloneNode(true);
        images.append(cln);
    }
}

btnimg.addEventListener('click', add);