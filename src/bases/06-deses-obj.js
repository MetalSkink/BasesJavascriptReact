// Desestructuracion
// Assignacion desestructurante

const persona = {
    nombre: 'Steve',
    edad: 95,
    clave: 'Captain america'
}

// const {nombre:nombre2,edad,clave} = persona;

// console.log(nombre2);
// console.log(edad);
// console.log(clave);

const usseContext = ({clave,nombre, edad, rango = 'Jefe maestro'}) =>{
    //console.log(nombre,edad,rango);
    return {
        nombreClave: clave,
        years: edad,
        latlng: {
            lat: 12.56569,
            lng: 45.87979
        }
    }
}

const {nombreClave,years,latlng:{lat,lng}} = usseContext(persona);

console.log(nombreClave,years);
console.log(lat);
console.log(lng);