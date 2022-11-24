// Efeito máquina de escrever
const tituloAreaInicial = document.querySelector("h2");
const titulo = document.querySelector("h3");
const span = document.querySelector("span");
const a = document.querySelector("p");

function efeitoEscrever(el) {
    const textoNoArray = el.innerHTML.split("");
    el.innerHTML = '';
    if (el == a) {
        setTimeout(() => {
            textoNoArray.forEach((letra, index) => {
                setTimeout(() => el.innerHTML += letra, 15 * index);
            });
        }, 3000);
    }
    else if (el == span) {
        setTimeout(() => {
            textoNoArray.forEach((letra, index) => {
                setTimeout(() => el.innerHTML += letra, 40 * index);
            });
        }, 1500);
    }
    else {
        textoNoArray.forEach((letra, index) => {
            setTimeout(() => el.innerHTML += letra, 60 * index);
        });
    }

}

efeitoEscrever(titulo);
efeitoEscrever(span);
efeitoEscrever(a);