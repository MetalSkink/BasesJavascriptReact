// import heroes, {owners} from '../data/heroes'
import heroes from '../data/heroes'

// console.log(owners);

const getHeroeById = (id) => heroes.find(heroe => heroe.id === id  );

// console.log(getHeroeById(5));

//filter
const getHeroesByOwner = ( owner ) => heroes.filter(heroes => heroes.owner === owner);
// console.log(getHeroesByOwner('Marvel'));

export{
    getHeroeById as default,
    getHeroesByOwner
}