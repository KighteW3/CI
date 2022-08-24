const languageChanger = ()=> {
    document.getElementById("loading").innerHTML = 'Cargando...';
    document.querySelectorAll(".nav-links")[0].innerHTML = 'Inicio';
    document.querySelectorAll(".nav-links")[1].innerHTML = 'Contenido';
    document.querySelectorAll(".nav-links")[2].innerHTML = 'Contacto';
    document.querySelector(".introduction-title-link-button").innerHTML = 'Más info';
    document.querySelector(".whoami-title").innerHTML = '¿Quién soy?';
    document.querySelector(".whoami-text").innerHTML = 'Mi nombre es Emanuel Asandei, tengo 18 años y soy un desarrollador web front-end. Suelo dedicarle mucho tiempo a estudiar y practicar con las tecnologías relacionadas al campo y por eso mejoro con creces cada día, hasta la fecha manejo los tres pilares del desarrollo web, es decir; HTML, CSS y JavaScript.';
}

if (navigator.language == 'es-ES') {
    languageChanger();
}


document.getElementById('body').style.height = '100%';
document.getElementById('body').style.overflowY = 'hidden';

function getRandomNumber(min, max) {
    let randomize = Math.random() * (max - min) + min;
    return Math.round(randomize);
}

if (getRandomNumber(0,2) < 2) {
    setTimeout(()=> {
        document.getElementById('loading-container').style.display = 'none';
        document.getElementById('body').style.height = 'initial';
        document.getElementById('body').style.overflowY = 'initial';
        document.getElementById('loading').style.animation = 'none';
    }, 2000)
} else {
    setTimeout(()=> {
        document.getElementById('loading-container').style.display = 'none';
        document.getElementById('body').style.height = 'initial';
        document.getElementById('body').style.overflowY = 'initial';
        document.getElementById('loading').style.animation = 'none';
    }, 5000)
}


let navBar = document.getElementById("nav");
let navBarContentContainer = document.querySelectorAll(".nav-content-container")
let whoamiTitle = document.querySelector(".whoami-title");
let whoamiText = document.querySelector(".whoami-text");

document.addEventListener("scroll", ()=>{
    const scrollY = window.scrollY;
    if (scrollY !== 0) {
        navBar.style.background = "#0003";
        navBar.style.animation = "navBarMinimize 1s forwards";
    }else {
        navBar.style.background = "none";
        navBar.style.animation = "navBarMaximisize 1s forwards";
    }
    let whoamiTitleRect = whoamiTitle.getBoundingClientRect();
    let revealPoint1 = 0;
    console.log(window.innerHeight - revealPoint1);
    if (whoamiTitleRect.bottom < window.innerHeight - revealPoint1) {
        whoamiTitle.style.animation = 'whoamiTitleAppear 0.8s forwards';
    }
    let revealPoint2 = 0;
    let whoamiTextRect = whoamiText.getBoundingClientRect();
    if (whoamiTextRect.bottom < window.innerHeight - revealPoint2) {
        whoamiText.style.animation = 'whoamiTextAppear 1s forwards';
    }
})