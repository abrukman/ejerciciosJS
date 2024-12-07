let matriculaAlumno = prompt('Ingrese la matricula o DNI');
let calificacionesAlumno = [];

for (let i = 0; i < 5; i++) {
    let nota = parseInt(prompt(`Ingrese la nota del examen ` + (i + 1)));
    calificacionesAlumno.push(nota);
};

console.log(calificacionesAlumno);

function datosAlumno (mat, notas) {
    let suma = 0;
    for (nota of notas) {
        suma += nota;
    };

    let promedio = suma/notas.length;
    let isAprobado;

    if (promedio >= 7) {
        isAprobado = 'aprobado';
    } else {
        isAprobado = 'no aprobado';
    };

    console.log('matricula : ' + mat + ', promedio: ' + promedio + ', ' + isAprobado);
};

datosAlumno(matriculaAlumno, calificacionesAlumno);
