function encriptar() {
    let frase= document.getElementById("textoEncriptado").value.toLowerCase();
    var textoEncriptado= frase.replace(/e/img, "enter");
    textoEncriptado= textoEncriptado.replace(/i/img, "imes");
    textoEncriptado= textoEncriptado.replace(/a/img, "ai");
    textoEncriptado= textoEncriptado.replace(/o/img, "ober");
    textoEncriptado= textoEncriptado.replace(/u/img, "ufat");

    document.getElementById("textoDesencriptado").innerHTML = textoEncriptado;
} 
function desencriptar() {
    let frase= document.getElementById("textoEncriptado").value.toLowerCase();
    var textoEncriptado= frase.replace(/enter/img, "e");
    textoEncriptado= textoEncriptado.replace(/imes/img, "i");
    textoEncriptado= textoEncriptado.replace(/ai/img, "a");
    textoEncriptado= textoEncriptado.replace(/ober/img, "o");
    textoEncriptado= textoEncriptado.replace(/ufat/img, "u");

    document.getElementById("textoDesencriptado").innerHTML = textoEncriptado;
} 
function copiar() {
    let contenido = document.querySelector("#textoDesencriptado");
    contenido.select();
    document.execCommand("copy");
}
function ocultar() {
    document.getElementById("imagenmuneco").style.display="none";
    document.getElementById("parrafo").style.display="none";
    document.getElementById("textoDesencriptado").style.display="block";
    document.getElementById("botonCopiar").style.display="block";
}