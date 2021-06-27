const personajes = ['GOKU','VEGETA','TRUNKS'];

const [,,p3] = personajes;

console.log(p3);

const retornaArreglo = () =>{
    return ['abc',123]
}

const [letras,numeros]  = retornaArreglo();
console.log(letras,numeros);

//Tarea
// el primer valo del arreglo se llamara nombre
// el segundo setNombre
const usseState = (valor) =>{
    return [valor,()=>{
        console.log("Hola mundo");
    }]
}

const [nombre,setNombre] = usseState('platano');



console.log(nombre);
setNombre();
