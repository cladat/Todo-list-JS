let in1 = document.querySelector('input');
let name = document.querySelector('h2 span');

let btn = document.querySelector('.btn1');

function welcome() {
    name.innerText = in1.value;
    in1.value = " ";
}

btn.addEventListener('click', welcome);