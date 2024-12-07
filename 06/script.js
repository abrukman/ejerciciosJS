let pesoUsuario = parseFloat(prompt('Ingrese su peso (separar decimales con ".")'));
let alturaUsuario = parseFloat(prompt('Ingrese su altura (separar decimales con ".")'));

function calcularIMC (peso, altura) {
    imc = peso / (altura ** 2);
    document.write('Tu IMC es: ' + imc);
};

calcularIMC(pesoUsuario, alturaUsuario);
