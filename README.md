# FiltroDeAutomoviles
Proyecto web de filtrado de automóviles por año y marca utilizando JavasCRIPT


Filtrado de Autos
Comenzamos con declarar las variables y los oyentes que utilizaremos.
const resultados = document.querySelector("#resultado");
const marca = document.querySelector("#marca");
const maximo = document.querySelector("#maximo");
const minimo = document.querySelector("#minimo");
const puertas = document.querySelector("#puertas");
const transmision = document.querySelector("#transmision");
const year = document.querySelector("#year");
const max = new Date().getFullYear();
const min = max - 10;

Oyente 
document.addEventListener("DOMContentLoaded", ()=>{
    mostrarAutos();     <——— Llama a la función mostrarAutos() que mostrará en pantalla todos los autos disponibles de la base de datos
    llenarSelect();     <——— Llena el select del año y para hacerlo dinámico toma como referencia el año actual
});


Declaramos la función mostrarAuto
function mostrarAutos(){
    autos.forEach( auto =>{                         <— Itera sobre todos los autos   
        const {marca, modelo, year, precio, puertas, color, transmision} = auto.      <——— Hacemos destructuración  del objeto auto al que estamos iterando desde el arreglo autos  
        const autoHTML = document.createElement("p");                         <——— Crea un parrafo
        autoHTML.classList.add("efecto-auto");               <—— agrega clase especial al parrafo nuevo recién creado
        autoHTML.textContent = `${marca} - ${modelo} - ${year} - ${precio} - ${puertas} - ${color} - ${transmision}    <——— El contenido del parrafo serán las variables extraídos del objeto auto

        `;
        resultados.appendChild(autoHTML);      <——— Añadimos el parrafo al html
    })
}


Creamos la función llenarSelect 
function llenarSelect(){.    
    for(let i = max;i>=min;i--){                    <——Tomamos el año actual como referencia a través de la variable max y comenzamos del año actual hacia atrás 10 años
        const option = document.createElement('option');  <—crea el objeto option para el select
        option.value = i;   
        option.innerText = i;                             
        year.appendChild(option);    <— lo añade al select
    }

}


Creamos un objeto de búsqueda
Este objeto contendrá los datos que se escogen en los select.
const datosBusqueda = {
    marca:  "",
    year: "",
    maximo: "" ,
    minimo: "",
    puertas: "",
    transmision: "",
    color: ""
}

Ahora ponemos a la escucha los select para que cuando detecten un cambio almacenen el cambio en el select
document.addEventListener("DOMContentLoaded", ()=>{
    mostrarAutos();
    llenarSelect();
});
marca.addEventListener("change", (e)=>{
    datosBusqueda.marca = e.target.value;
    filtrarAuto();
});
maximo.addEventListener("change", (e)=>{
    datosBusqueda.maximo = e.target.value;
});
minimo.addEventListener("change", (e)=>{
    datosBusqueda.minimo = e.target.value;
});
puertas.addEventListener("change", (e)=>{
    datosBusqueda.puertas = e.target.value;
});
transmision.addEventListener("change", (e)=>{
    datosBusqueda.transmision = e.target.value;
});
color.addEventListener("change", (e)=>{
    datosBusqueda.color = e.target.value;
});

