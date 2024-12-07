let anoNacimientoUsuario = parseInt(prompt('En que año naciste?'));

function calcularEdadActual (anoNacimiento) {
    edadActual = 2024 - anoNacimiento;
    if(edadActual>1) {
        console.log('Tienes ' + edadActual + ' años');
     } else {
        console.log('Tienes ' + edadActual + ' año');
     }
};

calcularEdadActual(anoNacimientoUsuario);