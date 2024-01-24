console.log("Hola, TypeScript!");

// Invertir una cadena
function invertirCadena(string:string):string {
    let reverseString:string = '';
    for (let i = string.length - 1; i >= 0; i--) {
        reverseString += string[i];
    }
    return reverseString;
}
console.log(invertirCadena('Pato'));


// Cuantas veces se repite un caracter
function caracterRepetido(string:string):number {
    let text:string = 'agfudijnfihaiwjtyvbihwbciusygeuydgucygnuwygyfbqbqrwrtyuiolkjhgfdsqwaassdafagajanvcm';
    let repetido:number = 0;
    for (let i = 0; i < text.length; i++) {
        // if (string === text[i]) {
        //     repetido++;
        // }
        string === text[i]?repetido++:null // Operador ternario "condicion"?"si es true":"y si no"
    }
    return repetido;
}
console.log(caracterRepetido('a'));


// Contador de palabras
function contadorDePalabras(frase:string):number {
    let palabras:number = 1;
    for (let i = 0; i < frase.length; i++) {
        frase[i] === ' '?palabras++:null;
    }
    return palabras;
}
console.log(contadorDePalabras('Hola Amaru todo bien?'));


// Contar numeros
const contarNumeros = (string:string):number => { // Funcion flecha adentro de variable
    let numerosRepetidos:number = 0;
    for (let i = 0; i < string.length; i++) {
        if (Number(string[i]) % 2 === 0 || Number(string[i]) % 2 === 1) { // Number intenta convertir lo que se le pase en un numero
            numerosRepetidos++;
        }
    }
    return numerosRepetidos;
}
console.log(contarNumeros('taf987stfa556agdgq6784aa'));





type sexos = "M" | "F" | "LGQTB+"; // sirve para poner como varias opciones pero no es una variable es un "type"

interface Dni{ // una interface nos sirve para darle tipado a las propiedades de un obj, la primera letra debe ir en mayus
    nombre:string,
    edad:number, 
    direccion?:string, // el signo de pregunta es para que no sea obligatoria la propiedad a la hora de crear el obj
    sexo:sexos // y esto para que los giles pregunten XD
}

const qsy:Dni = {
    nombre:'Huari',
    edad:21,
    sexo:'M'
}

