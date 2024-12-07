let pesoEnLibras = parseFloat(prompt('Ingresa tu peso en libras (separa decimales con ".")'));

function convertirEnKilos(peso) {
    return peso*0.453592;
}

console.log(convertirEnKilos(pesoEnLibras));