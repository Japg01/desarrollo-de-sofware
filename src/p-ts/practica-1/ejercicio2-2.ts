//Práctica básica de Typescript y lógica de programación.

//Crea una función que reciba un número entero n y devuelva un array con los primeros n números primos.

function isPrimes(valor: number): boolean{
    for(let i = 2; i<valor; i++){
        if (valor%i==0){
            return false;
        }
    }
    return true;
}

function getPrimes(n: number): number[] {
    const primes: number[] = [];
    let candidate: number = 2; 
    while (primes.length < n) {
        if (isPrimes(candidate)) { 
            primes.push(candidate);
        }
        candidate++;
    }

    return primes;
}

const valu = 4;
const values: number[] = getPrimes(valu);
console.log(values); 
