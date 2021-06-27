const saludar = function(nombre){
    return `Hola, ${nombre}`;
}

const saludarFlecha = (nombre)=>{
    return `Hola, ${nombre}`;
}

//SOLO APLICA SI SOLO TIENE UN RETURN
const saludarFlechaCorta = (nombre)=> `Hola, ${nombre}`;

//saludar= 30;
console.log(saludarFlechaCorta('picollo'));
console.log(saludarFlecha('Vegeta'));
console.log(saludar('GOKU'));

const getUser = () => ({
    uid: '23123231',
    username: 'mataratas27'
});

const user = getUser();
console.log(user);

//Tarea

const getUsuarioActivo =(nombre)=>({
        uid: 'ABVD567',
        username: nombre   
});

const usuarioActivo = getUsuarioActivo('Ares');
console.log( usuarioActivo);