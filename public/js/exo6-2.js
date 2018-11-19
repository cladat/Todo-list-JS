(() => {

    let un = document.querySelector(".one");
    let deux = document.querySelector(".two");
    let trois = document.querySelector(".three");
    let quatre = document.querySelector(".four");
    let cinq = document.querySelector(".five");
    let six = document.querySelector(".six");
    let sept = document.querySelector(".seven");
    let huit = document.querySelector(".height");
    let neuf = document.querySelector(".nine");
    let zero = document.querySelector(".zero");

    let reset = document.querySelector(".erase");
    let plus = document.querySelector(".plus");
    let moins = document.querySelector(".minus");
    let fois = document.querySelector(".multiply");
    let div = document.querySelector(".divide");
    let egal = document.querySelector(".equal");

    let inp = document.querySelector(".niv2 input");
    let result = document.querySelector(".niv2 .row .col-4 .calculatrice .result");

    let premier = 0;
    let deuxieme = 0;
    let operator = "";


    un.addEventListener('click', () => {
        inp.value += 1;
    });
    deux.addEventListener('click', () => {
        inp.value += 2;
    });
    trois.addEventListener('click', () => {
        inp.value += 3;
    });
    quatre.addEventListener('click', () => {
        inp.value += 4;
    });
    cinq.addEventListener('click', () => {
        inp.value += 5;
    });
    six.addEventListener('click', () => {
        inp.value += 6;
    });
    sept.addEventListener('click', () => {
        inp.value += 7;
    });
    huit.addEventListener('click', () => {
        inp.value += 8;
    });
    neuf.addEventListener('click', () => {
        inp.value += 9;
    });
    zero.addEventListener('click', () => {
        inp.value += 0;
    });

    plus.addEventListener('click', () => {
        if (premier == 0) {
            premier = Number(inp.value);
            result.innerText += premier.toString() + "+ ";
        } else {
            deuxieme = Number(inp.value);
        }
        inp.value = "";
        operator = "+";
    });
    moins.addEventListener('click', () => {
        if (premier == 0) {
            premier = Number(inp.value);
            result.innerText += premier.toString() + "- ";
        } else {
            deuxieme = Number(inp.value);
        }
        inp.value = "";
        operator = "-";
    });
    fois.addEventListener('click', () => {
        if (premier == 0) {
            premier = Number(inp.value);
            result.innerText += premier.toString() + "* ";
        } else {
            deuxieme = Number(inp.value);
        }
        inp.value = "";
        operator = "*";
    });
    div.addEventListener('click', () => {
        if (premier == 0) {
            premier = Number(inp.value);
            result.innerText += premier.toString() + "/ ";
        } else {
            deuxieme = Number(inp.value);
        }
        inp.value = "";
        operator = "/";
    });

    egal.addEventListener('click', () => {
        switch (operator) {
            case "+":
                deuxieme = Number(inp.value);
                result.innerText += deuxieme.toString() + " = " + (premier + deuxieme);
                inp.value = "";
                break;
            case "-":
                deuxieme = Number(inp.value);
                result.innerText += deuxieme.toString() + " = " + (premier - deuxieme);
                inp.value = "";
                break;
            case "*":
                deuxieme = Number(inp.value);
                result.innerText += deuxieme.toString() + " = " + (premier * deuxieme);
                inp.value = "";
                break;
            case "/":
                deuxieme = Number(inp.value);
                result.innerText += deuxieme.toString() + " = " + (premier / deuxieme);
                inp.value = "";
                break;
        }
    });

    reset.addEventListener('click', () => {
        premier = 0;
        deuxieme = 0;
        operator = "";
        inp.value = "";
        result.innerText = "";
    });
})();