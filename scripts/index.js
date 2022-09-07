const languageChanger = ()=> {
    document.getElementById("loading").innerHTML = 'Cargando...';
    document.querySelectorAll(".nav-links")[0].innerHTML = 'Inicio';
    document.querySelectorAll(".nav-links")[1].innerHTML = 'Contenido';
    document.querySelectorAll(".nav-links")[2].innerHTML = 'Contacto';
    document.querySelector(".introduction-title-link-button").innerHTML = 'Más info';
    document.querySelector(".whoami-title").innerHTML = '¿Quién soy?';
    document.querySelector(".whoami-text").innerHTML = 'Mi nombre es Emanuel Asandei, tengo 18 años y soy un desarrollador web front-end. Suelo dedicarle mucho tiempo a estudiar y practicar con las tecnologías relacionadas al campo y por eso mejoro con creces cada día, hasta la fecha manejo los tres pilares del desarrollo web, es decir; HTML, CSS y JavaScript.';
    document.querySelector('.projects-title').innerHTML = 'Mis proyectos';
    document.querySelector('.projects-box-text-paimeman').innerHTML = 'Una página hecha para promocionar un excelente cómic escrito por un buen amigo, la trama va de dos chicos superhéroes.';
    document.querySelector('.projects-box-text-chess').innerHTML = 'Un trabajo de instituto que voluntariamente hice en formato web, se trata de los sucesos importantes ocurridos en la guerra fría acerca del ajedrez.';
    document.querySelector('.projects-box-text-multisearch').innerHTML = 'Esta página web es más un motor de busqueda más que otra cosa, aunque es algo diferente al resto ya que usa motores de busqueda de terceros de forma aleatoria para incrementar la privacidad.';
    document.querySelector('.projects-box-text-wordmeaning').innerHTML = 'Esta página es un diccionario online para angoparlantes e hispanoablantes, cualquier palabra que no comprendas, tipéala en WORDMEANING y te redireccionará a un diccionario online oficial.';
    for (i=0; i<document.querySelectorAll('.project-box-link').length; i++) {
        document.querySelectorAll('.project-box-link')[i].innerHTML = 'Visitar';
    }
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

OperativeSystem = navigator.userAgent;

if (OperativeSystem.indexOf('Linux') | OperativeSystem.indexOf('Windows NT 10.0')) {
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
    }, 10000)
}

if (screen.height < 600) {
    document.querySelector('.introduction-container').style.height = '100vh';
}

window.addEventListener('offline', ()=> {
    introductionIframe = document.querySelector('.introduction-iframe');
    introductionIframe.innerHTML = ' ';
    introductionIframe.style.background = '#000';
})


let navBar = document.getElementById("nav");
let navBarContentContainer = document.querySelectorAll(".nav-content-container")

let whoamiTitle = document.querySelector(".whoami-title");
let whoamiText = document.querySelector(".whoami-text");

let projectsBox = document.querySelectorAll('.projects-box');

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
    for (i=0; i<projectsBox.length; i++) {
        if (projectsBox[i].getBoundingClientRect().bottom < window.innerHeight + 150) {
            projectsBox[i].style.animation = 'projectsBox 1s forwards'
        }
    }
})

function formSubmitWidth() {
    let element = document.getElementById('contact-content-form-submit');
    let height = document.getElementById('contact-content-form-submit').offsetHeight;
    element.style.width = `${height}px`;
}

formSubmitWidth();

let contactSubmit = document.getElementById('contact-content-form-submit');

contactSubmit.addEventListener('click', (e)=> {
    e.preventDefault;
    let name = document.getElementById('contact-content-form-name').value;
    let surname = document.getElementById('contact-content-form-surname').value;
    let messange = document.getElementById('contact-content-form-messange').value;
    let location = window.location.hostname;
    let link = 'mailto:kighte143@gmail.com?&subject=Grettings%20from%20' + `${location}` + '&body=Name: ' + `${name}, ` + 'Surname: ' + `${surname}, ` + 'Content: ' + `${messange}`;
    window.open(link);
})