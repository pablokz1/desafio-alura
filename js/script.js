let inputEncriptar = document.querySelector(".entrada");
    buttonEncriptar = document.querySelector(".botao-crip");
    buttonDesencriptar = document.querySelector(".botao-descrip");
    buttonCopiar = document.querySelector(".botao-copiar");
    inputResultado = document.querySelector(".resultado");

function encriptar () {
    let mensagem = inputEncriptar.value;
    let chave1 = mensagem.replaceAll("e", "enter");
        chave2 = chave1.replaceAll("i", "imes");
        chave3 = chave2.replaceAll("a", "ai");
        chave4 = chave3.replaceAll("u", "ufat");
        chave5 = chave4.replaceAll("o", "ober");

    inputResultado.value = chave5;

}

function desencriptar () {
    let mensagem = inputEncriptar.value;
    let chave1 = mensagem.replaceAll("enter", "e");
        chave2 = chave1.replaceAll("imes", "i");
        chave3 = chave2.replaceAll("ai", "a");
        chave4 = chave3.replaceAll("ufat", "u");
        chave5 = chave4.replaceAll("ober", "o");

    inputResultado.value = chave5;
}

function copiarTexto(){
    var resultado = inputResultado.value;
    navigator.clipboard.writeText(resultado);
}

buttonEncriptar.onclick = encriptar;
buttonDesencriptar.onclick = desencriptar;
buttonCopiar.onclick = copiarTexto;