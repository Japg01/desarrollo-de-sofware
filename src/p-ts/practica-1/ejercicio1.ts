//Práctica básica de Typescript y lógica de programación.

//Crea una función que reciba un array de números y devuelva un nuevo array donde cada número:

// Sea reemplazado por "par" si es un número par.
// Sea reemplazado por "impar" si es un número impar.

function pares(numeros: number[]): string[] {
    //Tipo funcional
    return numeros.map(num => (num % 2 === 0 ? "par" : "impar"));
}

let valor: number[] = [1,2,3,4,5];
console.log(pares(valor));