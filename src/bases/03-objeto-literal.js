const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion:{
        ciudad: 'New York',
        zip: 5565653,
        lat: 14.123464,
        long: 78.55223
    }
};

// console.table(persona);

const persona2 = {...persona};
persona2.nombre='Peter';

console.log(persona);
console.log(persona2);