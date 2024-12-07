let numeros = [];

let numero1 = numeros.push(parseInt(prompt('Ingrese un numero')));
let numero2 = numeros.push(parseInt(prompt('Ingrese otro numero')));
let numero3 = numeros.push(parseInt(prompt('Ingrese otro numero')));

console.log(numeros)

function encontrarAlMayor (arr) {
    if (arr[0] > arr[1] & arr[0] > arr[2]) {
        console.log(arr[0] + ' es el mayor');
    } else if (arr[1] > arr[0] & arr[1] > arr[2]) {
        console.log(arr[1] + ' es el mayor');
    } else if (arr[2] > arr[0] & arr[2] > arr[1]) {
        console.log(arr[2] + ' es el mayor');
    } else {
        console.log('no hay un solo numero que sea mayor que los otros dos')
    };
};

encontrarAlMayor(numeros);


