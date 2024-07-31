
const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");

function encriptar(stringEncriptado) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptado = stringEncriptado.toLowerCase()

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptado.includes(matrizCodigo[i][0])) {
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])

        }
    }
    return stringEncriptado
}

function btnEncriptar() {
    const textoEncrip = encriptar(textArea.value);
    mensaje.value = textoEncrip;
  
}

function desencriptar(stringDesencriptado) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptado = stringDesencriptado.toLowerCase()

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringDesencriptado.includes(matrizCodigo[i][1])) {
            stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])

        }
    }
    return stringDesencriptado
}


function btnDesencriptar() {
    const textoDesencrip = desencriptar(textArea.value);
    mensaje.value = textoDesencrip;
  
}

function btnlimpiar(){
   textArea.value = "  "; 

}

document.querySelector(".btn-encriptar").addEventListener("click", btnEncriptar);
document.querySelector(".btn-desencriptar").addEventListener("click", btnDesencriptar);