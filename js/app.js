//Variables
const resultados = document.querySelector("#resultado");
const year = document.querySelector("#year");
const max = new Date().getFullYear();
const min = max - 10;


document.addEventListener("DOMContentLoaded", ()=>{
    mostrarAutos();
    llenarSelect();
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