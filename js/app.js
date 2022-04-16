//Variables
const resultados = document.querySelector("#resultado");
const marca = document.querySelector("#marca");
const maximo = document.querySelector("#maximo");
const minimo = document.querySelector("#minimo");
const puertas = document.querySelector("#puertas");
const transmision = document.querySelector("#transmision");
const color = document.querySelector("#color");
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
    color: "",
}

document.addEventListener("DOMContentLoaded", ()=>{
    mostrarAutos(autos);
    llenarSelect();
});
marca.addEventListener("change", (e)=>{
    datosBusqueda.marca = e.target.value;
    filtrarAuto();
});
year.addEventListener("change", (e)=>{
    datosBusqueda.year = e.target.value;
    filtrarAuto();
});
maximo.addEventListener("change", (e)=>{
    datosBusqueda.maximo = e.target.value;
    filtrarAuto();  
});
minimo.addEventListener("change", (e)=>{
    datosBusqueda.minimo = e.target.value;
    filtrarAuto();
});
puertas.addEventListener("change", (e)=>{
    datosBusqueda.puertas = e.target.value;
    filtrarAuto();  
});
transmision.addEventListener("change", (e)=>{
    datosBusqueda.transmision = e.target.value;
    filtrarAuto();
});
color.addEventListener("change", (e)=>{
    datosBusqueda.color = e.target.value;
    filtrarAuto();
});

function mostrarAutos(arrayAutos){
    limpiarHTML();
    arrayAutos.forEach( auto =>{
        const {marca, modelo, year, precio, puertas, color, transmision} = auto
        const autoHTML = document.createElement("p");
        autoHTML.classList.add("efecto-auto");
        autoHTML.textContent = `${marca} - ${modelo} - ${year} - ${precio} - ${puertas} - ${color} - ${transmision} 

        `;
        resultados.appendChild(autoHTML);
    })
}
function limpiarHTML(){
    while(resultados.firstChild){
        resultados.removeChild(resultados.firstChild);
    }
}
function llenarSelect(){
    for(let i = max;i>=min;i--){
        const option = document.createElement('option');
        option.value = i;
        option.innerText = i;
        year.appendChild(option);    
    }

}
function filtrarAuto(){
    const resultado = autos.filter( filtrarMarca ).filter( filtrarYear ).filter( filtrarMinimo).filter( filtrarMaximo ).filter( filtrarPuertas).filter( filtrarTransmision ).filter( filtrarColor )
    console.log(resultado);
    mostrarAutos(resultado);
    mensajeFiltrado(resultado);
}
function filtrarMarca(auto){
    const {marca} = datosBusqueda;
    if(marca){
        return auto.marca === marca;
    }
    return auto;
}
function filtrarYear(auto){
    const {year} = datosBusqueda;
    if(year){
        return auto.year === parseInt(year);
    }
    return auto;
}
function filtrarMinimo(auto){
    const {minimo} = datosBusqueda;
    if(minimo){
        return auto.precio >= parseInt(minimo);
    }
    return auto;
}
function filtrarMaximo(auto){
    const {maximo} = datosBusqueda;
    if(maximo){
        return auto.precio <= parseInt(maximo);
    }
    return auto;
}
function filtrarPuertas(auto){
    const {puertas} = datosBusqueda;
    if(puertas){
        return auto.puertas === parseInt(puertas);
    }
    return auto
}
function filtrarTransmision(auto){
    const {transmision} = datosBusqueda;
    if(transmision){
        return auto.transmision === transmision;
    }
    return auto;
}
function filtrarColor(auto){
    const {color} = datosBusqueda;
    if(color){
        return auto.color === color;
    }
    return auto;
}
function mensajeFiltrado(arregloAutos){
    limpiarHTML();
    if(arregloAutos.length <1){
        console.log("Ninguna busqueda");
        const noResultado = document.createElement("div");
        noResultado.classList.add("alerta", "error");
        noResultado.textContent = "Ningun resultado coincide con su búsqueda";
        resultado.appendChild(noResultado);
    }
    else{
        mostrarAutos(arregloAutos); 
    }
}