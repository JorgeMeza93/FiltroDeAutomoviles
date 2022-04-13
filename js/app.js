//Variables
const resultados = document.querySelector("#resultado");
const marca = document.querySelector("#marca");
const maximo = document.querySelector("maximo");
const minimo = document.querySelector("#minimo");
const puertas = document.querySelector("#puertas");
const transmision = document.querySelector("#transmision");
const year = document.querySelector("#year");
const max = new Date().getFullYear();
const min = max - 10;

//Objeto de busqueda
const datosBusqueda = {
    marca:  "",
    year: "",
    maximo: "" ,
    minimo: "",
    puertas: "",
    transmision: "",
    color: ""
}

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

function mostrarAutos(){
    autos.forEach( auto =>{
        const {marca, modelo, year, precio, puertas, color, transmision} = auto
        const autoHTML = document.createElement("p");
        autoHTML.classList.add("efecto-auto");
        autoHTML.textContent = `${marca} - ${modelo} - ${year} - ${precio} - ${puertas} - ${color} - ${transmision} 

        `;
        resultados.appendChild(autoHTML);
    })
}
function llenarSelect(){
    for(let i = max;i>=min;i--){
        const option = document.createElement('option');
        option.value = i;
        option.innerText = i;
        year.appendChild(option);    
    }

}