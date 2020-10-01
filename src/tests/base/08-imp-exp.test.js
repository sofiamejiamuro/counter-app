import { getHeroeById, getHeroesByOwner } from '../../base/08-imp-exp';
import heroes from '../../data/heroes';

describe('Pruebas en funciones find and filter', () => {
  // Find
  // considerar , un id que no existe, un heroe qu eno existe, un id correcto y heroe
  test('Debe retornar un heroe si heroe y id correcto ', () => {
    const id = 1; 
    const heroe = getHeroeById( id );  

    //console.log(heroe);
    const heroeData = heroes.find( h => h.id === id );

    expect( heroe ).toEqual( heroeData );

  });
  test('Debe retornar un undefined si heroe no existe  ', () => {
    const id = 10; 
    const heroe = getHeroeById( id );  

    expect( heroe ).toBe( undefined );
    
  });

  // Filter 
  test('Debe retornar un arreglo con los héroes de DC ', () => {
    
    const owner = 'DC';
    const heroeFun = getHeroesByOwner('DC');
    console.log(heroeFun);

    const heroesArr = heroes.filter((h) => h.owner === owner);
    console.log(heroesArr);
    
    expect( heroeFun ).toEqual(heroesArr);

  })

  test('Debe retornar un arreglo con los héroes de Marvel', () => {

    const owner = 'Marvel';
    const heroeFun = getHeroesByOwner('Marvel');

    const heroesArr = heroes.filter((h) => h.owner === owner);
   
    expect( heroeFun.length ).toBe( heroesArr.length );

  })

  
})
