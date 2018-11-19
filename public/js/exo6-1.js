let first = document.querySelector(".niv1 .first");
let second = document.querySelector(".niv1 .second");
let equal = document.querySelector(".niv1 button");
let result = 0;
let resultat = document.querySelector(".r-calc");

function calcul() {
    result = Number(first.value) + Number(second.value);
    resultat.innerText = result;
}

equal.addEventListener('click', calcul);