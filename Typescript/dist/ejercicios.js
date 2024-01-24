"use strict";
console.log("Hola, TypeScript!");
// Invertir una cadena
function invertirCadena(string) {
    let reverseString = '';
    for (let i = string.length - 1; i >= 0; i--) {
        reverseString += string[i];
    }
    return reverseString;
}
console.log(invertirCadena('Pato'));
// Cuantas veces se repite un caracter
function caracterRepetido(string) {
    let text = 'agfudijnfihaiwjbdftyvbihwbciusygeuydgucygnuwygyfbqbqrwrtyuiolkjhgfdsqwaassdafagajanvcm';
    let repetido = 0;
    for (let i = 0; i < text.length; i++) {
        // if (string === text[i]) {
        //     repetido++;
        // }
        string === text[i] ? repetido++ : null; // Operador ternario "condicion"?"si es true":"y si no"
    }
    return repetido;
}
console.log(caracterRepetido('a'));
// Contador de palabras
function contadorDePalabras(frase) {
    let palabras = 1;
    for (let i = 0; i < frase.length; i++) {
        frase[i] === ' ' ? palabras++ : null;
    }
    return palabras;
}
console.log(contadorDePalabras('Hola Amaru todo bien?'));
// Contar numeros
const contarNumeros = (string) => {
    let numerosRepetidos = 0;
    for (let i = 0; i < string.length; i++) {
        if (Number(string[i]) % 2 === 0 || Number(string[i]) % 2 === 1) { // Number intenta convertir lo que se le pase en un numero
            numerosRepetidos++;
        }
    }
    return numerosRepetidos;
};
console.log(contarNumeros('taf987stfa556agdgq6784aa'));
const qsy = {
    nombre: 'Huari',
    edad: 21,
    sexo: 'M'
};
