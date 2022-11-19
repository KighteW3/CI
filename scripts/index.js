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
    document.querySelector('.projects-box-text-paimeman').innerHTML = 'Un sencillo minijuego escrito en JavaScript que trata sobre comparar "poderes" con otros compañeros, está ambientado en el famoso anime/manga Dragon Ball.'
    document.querySelector('.projects-box-text-chess').innerHTML = 'Un trabajo de instituto que voluntariamente hice en formato web, se trata de los sucesos importantes ocurridos en la guerra fría acerca del ajedrez.';
    document.querySelector('.projects-box-text-multisearch').innerHTML = 'Esta página web es más un motor de busqueda más que otra cosa, aunque es algo diferente al resto ya que usa motores de busqueda de terceros de forma aleatoria para incrementar la privacidad.';
    document.querySelector('.projects-box-text-wordmeaning').innerHTML = 'Esta página es un diccionario online para angoparlantes e hispanoablantes, cualquier palabra que no comprendas, tipéala en WORDMEANING y te redireccionará a un diccionario online oficial.';
    for (i=0; i<document.querySelectorAll('.project-box-link').length; i++) {
        document.querySelectorAll('.project-box-link')[i].innerHTML = 'Visitar';
    }
    document.querySelector('.contact-content-text-h2').innerHTML = 'Contáctame';
    document.querySelector('.contact-content-text-p').innerHTML = 'Complete los siguientes cuadros para enviar el mail satisfactoriamente';
    document.getElementById('contact-content-form-name').placeholder = 'Nombre...';
    document.getElementById('contact-content-form-surname').placeholder = 'Apellido...';
    document.getElementById('contact-content-form-messange').placeholder = 'Escriba aquí su mensaje...';
    document.getElementById('social-text-content-p-1').innerHTML = 'En caso de sujerencia o recomendación de proyectos, tanto como para contacto o cualquier otro motivo por el cual se requiera una interacción conmigo; rellenar el formulario del apartado de contacto y enviar el email.';
    document.getElementById('social-text-content-p-2').innerHTML = `Esta página es de código abierto y no alberga ningún cookie o dato de sitio más allá de las configuraciones de tu navegador y las API's de terceros utilizadas.`;
    document.getElementById('social-text-content-p-3').innerHTML = 'En caso de problemas a la hora de rellenar el formulario y/o enviar el email; puedes enviar un correo email de forma estándar mediante cualquier cliente a esta dirección: kighte143@gmail.com .  Eso sí, poniendo el nombre completo y motivo de contacto.';
}

if (navigator.language == 'es-ES') {
    languageChanger();
}

document.getElementById('body').style.height = '100%';
document.getElementById('body').style.overflowY = 'hidden';

/*function getRandomNumber(min, max) {
    let randomize = Math.random() * (max - min) + min;
    return Math.round(randomize);
}*/

function turnLoadingScreenOff() {
    setTimeout(()=> {
        document.getElementById('loading-container').style.display = 'none';
        document.getElementById('body').style.height = 'initial';
        document.getElementById('body').style.overflowY = 'initial';
        document.getElementById('loading').style.animation = 'none';
    }, 1000)
}


let navBar = document.getElementById("nav");
let navBarContentContainer = document.querySelectorAll(".nav-content-container")

let whoamiTitle = document.querySelector(".whoami-title");
let whoamiText = document.querySelector(".whoami-text");

let projectsBox = document.querySelectorAll('.projects-box');

let contactContentTextH2 = document.querySelector('.contact-content-text-h2');
let contactContentTextP = document.querySelector('.contact-content-text-p');
let contactContentFormContainer = document.querySelector('.contact-content-form-inputs');

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
            projectsBox[i].style.animation = 'projectsBox 1s forwards';
        }
    }
    let contactContentTextH2Rect = contactContentTextH2.getBoundingClientRect();
    if (contactContentTextH2Rect.bottom < window.innerHeight - 150) {
        contactContentTextH2.style.animation = 'projectsBox 1s forwards';
    }
    let contactContentTextPRect = contactContentTextP.getBoundingClientRect();
    if (contactContentTextPRect.bottom < window.innerHeight - 150) {
        contactContentTextP.style.animation = 'projectsBox 1s forwards';
    }
    let contactContentFormContainerRect = contactContentFormContainer.getBoundingClientRect();
    if (contactContentFormContainerRect.bottom < window.innerHeight - 0) {
        contactContentFormContainer.style.animation = 'projectsBox 1s forwards';
    }
})

function formSubmitWidth() {
    let element = document.getElementById('contact-content-form-submit');
    let height = document.getElementById('contact-content-form-submit').offsetHeight;
    element.style.width = `${height}px`;
}

formSubmitWidth();

let contactSubmit = document.getElementById('contact-content-form-submit');


let nameForm = document.getElementById('contact-content-form-name');
let surnameForm = document.getElementById('contact-content-form-surname');
let messangeForm = document.getElementById('contact-content-form-messange');

contactSubmit.addEventListener('click', (e)=> {
    e.preventDefault;
    error = formValidate();
    if (error[0]) {
        for (i=1; i<4; i++){
            if (error[1] === i) {
                error[2].placeholder = `${error[3]}`;
                error[2].value = '';
            }
        }
    } else {
        let location = window.location.hostname;
        let link = 'mailto:kighte143@gmail.com?&subject=Grettings%20from%20 ' + ` ${location}` + '&body=Name: ' + `${nameForm.value}, ` + 'Surname: ' + `${surnameForm.value}, ` + 'Content: ' + `${messangeForm.value}`;
        window.open(link);
    }
});

function formValidate() {
    error = [];
    if (nameForm.value.length <= 2 || nameForm.value.length >= 15) {
        error[0] = true;
        error[1] = 1;
        error[2] = nameForm;
        error[3] = 'Invalid name';
        return error;
    } else if (surnameForm.value.length <= 2 || surnameForm.value.length >= 15) {
        error[0] = true;
        error[1] = 2;
        error[2] = surnameForm;
        error[3] = 'Invalid surname';
        return error;
    } else if (messangeForm.value.length < 10 || messangeForm.value.length > 500) {
        error[0] = true;
        error[1] = 3;
        error[2] = messangeForm;
        if (messangeForm.value.length < 10) {
            error[3] = 'Not enough characters...';
        } else if (messangeForm.value.length > 500) {
            error[3] = 'So many characters...';
        }
        return error;
    } else {
        error[0] = false;
        return error;
    }
}

/*let links = document.querySelectorAll('.social-content-links');

for (i=0; i<links.length; i++) {
    links[i].addEventListener('mouseover', ()=>{
        socialMediaButtonOver();
    });
}

function socialMediaButtonOver() {
    let linksImg = document.querySelectorAll('.social-content-links-img');
    for (i=0; i<linksImg.length; i++) {
        x = i;
        linksImg[x].style.animaiton = 'socialMediaButtonOut 1s forwards'
    }
}*/