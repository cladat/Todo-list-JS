let newtask = document.querySelector('.panel7 .main .title input'); // définir l'input dans lequel on va écrire les tâches

let ok = document.querySelector('.panel7 .main .title button'); // définir le bouton OK qui envoie la tâche

let list = document.querySelector('.panel7 .main .tasks'); // définir la liste qui va englober toutes les tâches

let newList = []; // on définit l'ensemble des tâches en tant que tableau (pour pouvoir naviguer dedans à l'aide d'une boucle)

let donebtn = document.querySelector(".done-tag");
let todobtn = document.querySelector(".todo-tag");
let allbtn = document.querySelector(".all");

let filterSelected = "all";

donebtn.addEventListener('click', () => {
    filterDone();
    filterSelected = "done";
});
allbtn.addEventListener('click', () => {
    filterAll();
    filterSelected = "all";
});
todobtn.addEventListener('click', () => {
    filterTodo();
    filterSelected = "todo";
});


function addTask(msg) { // fonction qui va ajouter une tâche avec le paramètre "message"

    let pattern = "<div class=\"row border border-secondary rounded bg-light align-items-center\"><div class=\"col-9\"><span class=\"texte\">";
    // première partie de la tâche: la row générale et le début de la col du texte

    let pattern2 = "</span> <span class=\"editing\"><input type=\"text\" class=\"modifier\"><button class=\"bg-success valider\">OK</button></span> </div><div class=\"col d-flex justify-content-end\"><button class=\"done border-0 bg-light\"><i class=\"fas fa-check fa-lg\"></i></button><button class=\"edit border-0 bg-light\"><i class=\"fas fa-edit fa-lg\"></i></button><button class=\"del border-0 bg-light\"><i class=\"fas fa-times fa-lg\"></i></button></div></div>";
    // dernière partie de la t$ache: la col qui contient les boutons

    list.innerHTML += pattern + msg + pattern2;
    // on ajoute l'html qui va contenir la row et le message inséré (voir plus bas)

    newtask.value = "";
    // nouvelle value à l'input = l'input se vide après qu'on ai ajouté une tâche

    calcBtn();


};


ok.addEventListener('click', () => {
    if (newtask.value != "") {
        addTask(newtask.value);

        switch (filterSelected) {
            case "all":
                filterAll();
                break;
            case "done":
                filterDone();
                break;
            case "todo":
                filterTodo();
                break;
        }
    }
});
newtask.addEventListener('keypress', (e) => {
    if (newtask.value != "") {
        if (e.keyCode == 13) {
            addTask(newtask.value);
            switch (filterSelected) {
                case "all":
                    filterAll();
                    break;
                case "done":
                    filterDone();
                    break;
                case "todo":
                    filterTodo();
                    break;
            }
        }
    }
});

function filterDone() {
    for (let i = 0; i < newList.length; i++) {
        if (newList[i].classList.contains('bg-light')) {
            newList[i].classList.add('d-none');
        } else {
            newList[i].classList.remove('d-none');
        }
    }
}

function filterTodo() {
    for (let i = 0; i < newList.length; i++) {
        if (newList[i].classList.contains('bg-success')) {
            newList[i].classList.add('d-none');
        } else {
            newList[i].classList.remove('d-none');
        }
    }
}

function filterAll() {
    for (let i = 0; i < newList.length; i++) {
        newList[i].classList.remove('d-none');
    }
};


function calcBtn() {
    newList = document.querySelectorAll('.panel7 .main .tasks .row');


    for (let i = 0; i < newList.length; i++) {
        newList[i].querySelector('.del').addEventListener('click', () => {
            list.removeChild(newList[i]);
            // newList = document.querySelectorAll('.panel7 .main .tasks .row'); => bug

        })
    };

    for (let i = 0; i < newList.length; i++) {
        newList[i].querySelector('.done').addEventListener('click', () => {
            newList[i].classList.toggle('bg-light');
            newList[i].classList.toggle('bg-success');
            switch (filterSelected) {
                case "all":
                    filterAll();
                    break;
                case "done":
                    filterDone();
                    break;
                case "todo":
                    filterTodo();
                    break;
            }
        })
    };


    for (let i = 0; i < newList.length; i++) {
        newList[i].querySelector('.edit').addEventListener('click', () => {
            let modifier = newList[i].querySelector('.modifier');


            newList[i].classList.toggle('edit');
            modifier.value = newList[i].querySelector('.texte').textContent;


            newList[i].querySelector('.valider').addEventListener('click', () => {
                newList[i].querySelector('.texte').innerText = modifier.value;
                newList[i].classList.remove('edit');
            });
        })
    };
}