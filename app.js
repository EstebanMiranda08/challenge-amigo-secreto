// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//CREAR ARREGLO
let amigos = [];

let cantAmigos = 5;
let listaAmigos = document.getElementById("listaAmigos");
let resultado = document.getElementById("resultado");

//FUNCION PARA AGREGAR AMIGOS
function agregarAmigo(){
    let nuevoAmigo = document.getElementById('amigo').value; 
    if(amigos.length === cantAmigos){
        alert("Haz superado la cantidad maxima de amigos permitida");
    }else{ 
        if(nuevoAmigo === ""){
            alert("Por favor ingresa un nombre");
        }
        amigos.push(nuevoAmigo);
        actualizarListaAmigo();
    }
    limpiarEntrada('amigo');
    return;
}

//FUNCION PARA ACTUALIZAR LISTA DE AMIGOS
function actualizarListaAmigo(){
    
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = "";

    for (let i = 0; i <amigos.length; i++){
        const elemento = amigos[i];
        let listaHTML = document.createElement("li");
        listaHTML.textContent = elemento;
        listaAmigos.appendChild(listaHTML);
    };
}

//FUNCION SORTEO DE AMIGOS
function sortearAmigo(){
    const random = Math.floor(Math.random()*amigos.length);
    const amigoSecreto = amigos[random];
    resultado.innerHTML = `<li>El amigo secreto es: ${amigoSecreto}</li>`;
    return;
}

// LIMPIAR CAMPO DE ENTRADA AMIGO
function limpiarEntrada(identificar){ 
    document.getElementById(identificar).value = ""; 
    document.getElementById(identificar).innerHTML = ""; 
    return;
}