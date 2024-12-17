//Práctica básica de Typescript y lógica de programación.

// Crea una función que reciba un número entero positivo y determine si es primo.
// Un número primo es aquel que solo es divisible por 1 y por sí mismo.

function isPrime(valor: number): boolean{
    for(let i = 2; i<valor; i++){
        if (valor%i==0){
            return false;
        }
    }
    return true;
}

let value = 37;

if(isPrime(value)==true){
    console.log('Es primo.');
} else {
    console.log('No es primo.');
}