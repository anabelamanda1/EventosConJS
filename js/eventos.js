const subtitle = document.getElementById("subTitleJS");
const subtitle2 = document.getElementById("subTitleJS2");
/*
    ESPERA DE LA
    RESPUESTA DEL API
*/
setTimeout(function(){
    subtitle.textContent = "Lista de Platos de Comida";
    setTimeout(function(){
        subtitle2.textContent = "Y mis preferencias";
    }, 1000);
}, 1000);

//arrays de las listas de comida

const listaComidas = [
    {
        "plato": "Ceviche",
        "favorito": true
    },
    {
        "nombre": "Chancho al palo",
        "favorito": true
    },
    {
        "nombre": "Olluquito",
        "favorito": false
    },
    {
        "nombre": "Quinua",
        "favorito": false
    },
    {
        "nombre": "Caldo de gallina",
        "favorito": true
    },
    {
        "nombre": "Crema de haba",
        "favorito": false
    },
    {
        "nombre": "Sopa de mote",
        "favorito": true
    },
    {
        "nombre": "Ajiaco",
        "favorito": false
    },
    {
        "nombre": "Sudado de pescado",
        "favorito": false
    },
    {
        "nombre": "Estofado",
        "favorito": false
    }
];


const comidasElement = document.getElementById("listaComidas");
let contenido = "";
listaComidas.forEach(function(comida) {    
    let claseicon = "rico";
    if (comida.favorito) {
        claseicon = "rico";
    } else {
        claseicon = "no-rico";
    }
    const template = `
        <div class="comida">
            <div class="icon icon-${claseicon}"></div>
            <div class="data">
                <h4>${comida.nombre}</h4>
            </div>
        </div>
    `;
    contenido = contenido + template;
});

comidasElement.innerHTML = contenido;