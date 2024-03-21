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

const comidas = [
    {
        "nombre": "Ceviche",
        "favorito": true,
        "calificacion":"* * * * *"
    },
    {
        "nombre": "Chancho al palo",
        "favorito": true,
        "calificacion":"* * * *"
    },
    {
        "nombre": "Olluquito",
        "favorito": false,
        "calificacion":"*"
    },
    {
        "nombre": "Quinua",
        "favorito": false,
        "calificacion":"*"
    },
    {
        "nombre": "Caldo de gallina",
        "favorito": true,
        "calificacion":"* * *"
    },
    {
        "nombre": "Crema de haba",
        "favorito": false,
        "calificacion":"*"
    },
    {
        "nombre": "Sopa de mote",
        "favorito": true,
        "calificacion":"* * * *"
    },
    {
        "nombre": "Ajiaco",
        "favorito": false,
        "calificacion":"*"
    },
    {
        "nombre": "Sudado de pescado",
        "favorito": false,
        "calificacion":"*"
    },
    {
        "nombre": "Estofado",
        "favorito": false,
        "calificacion":"*"
    }
];

function añadirComidas(){
    const comidasElement = document.getElementById("Platos");
    let contenido = "";
    comidas.forEach(function(comida) {    
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
            <div class="califi">
                ${comida.calificacion}
            </div>
        </div>
    `;
    contenido = contenido + template;
});

comidasElement.innerHTML = contenido;
}

añadirComidas();

const boton = document.getElementById("sendComida");
/* addEventListener para agregar un evento */
/* CLICK */

boton.addEventListener("click", function(){
    //alert("ESTAS INGRESANDO UNA NUEVA COMIDA");
    const nombre = document.getElementById("nombreComida").value;
    const calificacion = document.getElementById("califica").value;
    const favorito = document.getElementById("isFavorito").value;    
    let isComidaFavorita = true;

    if (isFavorito == "NO") {
        isComidaFavorita = false;
    }

    const newComida = new Object();
    newComida.nombre = nombre;
    newComida.calificacion= calificacion;    
    newComida.favorito = isComidaFavorita
    //push para agregar al array
    comidas.push(newComida);
    alert("Has agregado una nueva comida");
    //repetir la funcion
    añadirComidas();
});