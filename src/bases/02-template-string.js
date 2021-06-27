const nombre = "Bruce";
const apellido = "Banner";

// const nombreCompleto = nombre + ' ' + apellido;
const nombreCompleto = `${nombre} ${apellido}`;

console.log(nombreCompleto);

function getSaludo(nombre){
    return 'hola ' + nombre
}

console.log(`ESTE ES UN TEXTO: ${getSaludo(nombre)}`);