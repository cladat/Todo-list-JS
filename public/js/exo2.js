let tabs = document.querySelectorAll('.menu .row .col-3 a');
let panels = document.querySelectorAll('.container .panels > div');

for (let i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener('click', () => {
        event.preventDefault();
        for (let j = 0; j < tabs.length; j++) {
            tabs[j].parentElement.classList.remove("active");
            panels[j].classList.remove("visible");
        }
        tabs[i].parentElement.classList.add("active");
        panels[i].classList.add("visible");
    })
}