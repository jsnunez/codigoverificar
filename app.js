const verificar = function () {
    const operando1 = (document.getElementById("operando1").value);
  

// let resultado = 0;
// let n1=0;
// let n2=0;
// n1=operando1.length;
// n2=operando2.length;
// document.getElementById("resultado").innerHTML = "la palabra mas larga es: "+ n1;


let invertida="";
let multiplicar=0;
invertida=parseFloat(invertirCadena(operando1));


document.getElementById("resultado").innerHTML = invertida;

}
function invertirCadena(cad) {
    // Paso 1. Usa el método split() para devolver un nuevo arreglo
    var separarCadena = cad.split(""); // var separarCadena = "hola".split("");
    // ["h", "o", "l", "a"]
 
    // Paso 2. Usa el método reverse() para invertir el nuevo arreglo creado
    var invertirArreglo = separarCadena.reverse(); // var invertirArreglo = ["h", "o", "l", "a"].reverse();
    // ["a", "l", "o", "h"]
 
    // Paso 3. Usa el método join() para unir todos los elementos del arreglo en una cadena
    var unirArreglo = invertirArreglo.join(""); // var unirArreglo = ["a", "l", "o", "h"].join("");
    // "aloh"
    
    //Paso 4. Devolver la cadena invertida
    return unirArreglo; // "aloh"
}
function multiplicar(cad) {
    let suma=0;
    let x=0;
 
    return unirArreglo;
}