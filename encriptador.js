var alfabeto = ["a", "e", "i", "o", "u"];
var alfabetoSustituto = ["ai", "enter", "imes", "ober", "ufat"];

var arregloDesCifrado;
var frase;
var textoTextArea2;
//var frase = " felicidades por enfrentar este desafio y haberlo concluido con exito! ";
// var frase = 0023;
var fraseSinEspacios, arregloFraseLimpia;
/************************************************************************************ */
window.onload = function () {
    document.getElementById("textarea-frase").focus();

}
/************************************************************************************* */


function botonCopiar() {

    textoTextArea2 = document.getElementById("textarea-img-none").value;
    document.getElementById("textarea-frase").value = textoTextArea2;
    document.getElementById("textarea-img-none").value = "";
    document.getElementById("textarea-frase").focus();
    alert('Texto copiado con exito!');
    return textoTextArea2;
}


function EncriptarCadena(frase) {
    //con ayuda de expresiones regulares buscamos las vocales dentro de la frase introducida
    let a = /a/gi;
    let e = /e/gi;
    let i = /i/gi;
    let o = /o/gi;
    let u = /u/gi;

    frase = document.getElementById("textarea-frase").value;
    document.getElementById("textarea-img-none").focus();

   
    const CADENA_VALIDA = /^[a-z\s\.\,\!]+$/;
    if (!frase.match(CADENA_VALIDA)) {
                document.getElementById("textarea-frase").focus();
                document.getElementById("textarea-frase").value = '';
                frase = "";
                alert('Recuerda que no se permiten mayúsculas, acentos o números, intentalo de nuevo');

            }

    if (typeof frase === 'string')//validamos que la frase introducida ses especificamente de tipo string
    {

        fraseLimpia = frase//.toLowerCase();//Covierto toda la cadena a minúsculas
        arregloFraseLimpia = fraseLimpia.split("");


        for (let indice = 0; indice < arregloFraseLimpia.length; indice++) {

            if (arregloFraseLimpia[indice] === 'a') {
                arregloFraseLimpia[indice] = arregloFraseLimpia[indice].replace(a, 'ai');
            }
            else if (arregloFraseLimpia[indice] === 'e') {
                arregloFraseLimpia[indice] = arregloFraseLimpia[indice].replace(e, 'enter');
            }
            else if (arregloFraseLimpia[indice] === 'i') {
                arregloFraseLimpia[indice] = arregloFraseLimpia[indice].replace(i, 'imes');
            }
            else if (arregloFraseLimpia[indice] === 'o') {
                arregloFraseLimpia[indice] = arregloFraseLimpia[indice].replace(o, 'ober');
            }
            else if (arregloFraseLimpia[indice] === 'u') {
                arregloFraseLimpia[indice] = arregloFraseLimpia[indice].replace(u, 'ufat');
            }

        }

        document.getElementById("textarea-img-none").value = arregloFraseLimpia.join('');

        document.getElementById("textarea-frase").value = "";

        console.log(arregloFraseLimpia);

        let copiar = document.getElementById('boton-copiar');
        copiar.style.display = 'block';

        let parrafo1 = document.getElementById('text-abajo-one');
        parrafo1.style.display = 'none';

        let parrafo2 = document.getElementById('text-abajo-two');
        parrafo2.style.display = 'none';

        let muneco = document.getElementById('muñeco');
        muneco.style.display = 'none';


        console.log('boton-copiar', copiar);



        return arregloFraseLimpia.join('');

    } else {
        alert("Error no es una cadena de caracteres");
        throw TypeError('El argumento no es cadena de caracteres');
    }

}
try {
    console.log(EncriptarCadena(frase));


} catch (e) {
    console.log(`Error: ${e.message}`);

}


function desEncriptar(arregloEncriptado) {
    //  alert('arreglo encriptado ' +arregloFraseLimpia.join(''));

    let A = /ai/g;
    let E = /enter/g;
    let I = /imes/g;
    let O = /ober/g;
    let U = /ufat/g;
    arregloEncriptado = arregloFraseLimpia;

    for (let zindice = 0; zindice < arregloEncriptado.length; zindice++) {
        arregloDesCifrado = arregloEncriptado;
        if (arregloEncriptado[zindice] === 'ai') {
            arregloEncriptado[zindice] = arregloEncriptado[zindice].replace(A, 'a');
        }
        else if (arregloEncriptado[zindice] === 'enter') {
            arregloEncriptado[zindice] = arregloEncriptado[zindice].replace(E, 'e');
        }
        else if (arregloEncriptado[zindice] === 'imes') {
            arregloEncriptado[zindice] = arregloEncriptado[zindice].replace(I, 'i');
        }

        else if (arregloEncriptado[zindice] === 'ober') {
            arregloEncriptado[zindice] = arregloEncriptado[zindice].replace(O, 'o');
        }

        else if (arregloEncriptado[zindice] === 'ufat') {
            arregloEncriptado[zindice] = arregloEncriptado[zindice].replace(U, 'u');
        }

    }

    document.getElementById("textarea-frase").value = "";
    document.getElementById("textarea-img-none").focus();
    document.getElementById("textarea-img-none").value = arregloDesCifrado.join('');


    return arregloDesCifrado.join('');

}


try {
    console.log(desEncriptar(arregloFraseLimpia));

} catch (e) {
    console.log(`Error: ${e.message}`);
}
