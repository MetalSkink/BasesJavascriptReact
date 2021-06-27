import  getHeroesById from './bases/08-imp-exp';

// const promesa = new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         //Tarea
//         //importar get heroe by id
//         const heroe = getHeroesById(5);
//         resolve(heroe);
//         //reject('NO sse encontro el heroe')
//     }, 2000);
// });

// promesa.then((heroe)=>{
//     console.log('hero',heroe);
// })
// .catch(err => console.warn(err));

const getHeroeByIdAsync = (id) =>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            const heroe = getHeroesById(id);
            if (heroe){
                resolve(heroe);
            }else{
                reject('No sse encontro el heroe')
            }
        }, 2000);
    });

}


// getHeroeByIdAsync(5)
//     .then(heroe =>{console.log(heroe);})
//     .catch(err => console.warn(err));

getHeroeByIdAsync(5)
    .then(console.log)
    .catch(console.warn);