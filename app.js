// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//Crear Arreglo
let amigos = [];
let cantAmigos = 5;

let listaAmigos = document.getElementById("listaAmigos");
let resultado = document.getElementById("resultado");

//FUNCION PARA AGREGAR AMIGOS
function agregarAmigo(){
    //OBTENER TEXTO
    let nuevoAmigo = document.getElementById('amigo').value; 
    if(amigos.length === cantAmigos){
        alert("Haz superado la cantidad maxima de amigos permitida");
    }else{ //VALIDAR ENTRADA DE TEXTO
        if(nuevoAmigo === ""){
            alert("Por favor ingresa un nombre");
        }
    }
    limpiarEntrada('amigo');
    
    // ACTUALIZA E INSERTA LOS NUEVOS AMIGOS
    amigos.push(nuevoAmigo);
    actualizarAmigo();
    return;
}
//-------------------------------------------------------------------------------

// LIMPIAR CAMPO DE ENTRADA
function limpiarEntrada(identificar){ 
    document.getElementById(identificar).value = ""; 
    document.getElementById(identificar).innerHTML = ""; 
}

//FUNCION PARA ACTUALIZAR LISTA DE AMIGOS
function actualizarAmigo(){
    
    let listaAmigos = document.getElementById('listaAmigos');
    //LIMPIAR LA LISTA
    listaAmigos.innerHTML = "";

    for (let i = 0; i <amigos.length; i++){
        const elemento = amigos[i];
        let listaHTML = document.createElement("li");
        listaHTML.textContent = elemento;
        listaAmigos.appendChild(listaHTML);
    };
}

//--------------------------------------------------------
//FUNCION SORTEO AMIGOS
function sortearAmigo(){
    const random = Math.floor(Math.random()*amigos.length);
    const amigoSecreto = amigos[random];
    resultado.innerHTML = `<li>El amigo secreto sorteado es: ${amigoSecreto}</li>`;
    limpiarEntrada();
    return;
}
